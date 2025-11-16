import * as fs from "fs";
import munkres from "munkres";
import computeMunkres from "./munkres2.js";

interface Pilot {
    name?: string;
    points: number;
    wishes: string[];
}

interface AssignmentData {
    tandemIds: (string | undefined)[];
    pilots: Pilot[];
    solvingMatrix: number[][];
}

interface Assignment {
    pilotName: string;
    tandemName: string | undefined;
}

interface AssignmentResult {
    assignments: Assignment[];
    assignmentData: AssignmentData;
}

/*
 * load test data from a file and it in a Pilot array
 * @param The path of the file
 * @return The pilot list
 */
function loadPilotArayFromFile(filename: string): Pilot[] {
    const pilots: Pilot[] = [];

    fs.readFileSync(filename, "utf-8")
        .split(/\r?\n/)
        .forEach((line: string, index: number) => {
            if (index !== 0) {
                if (line.trim() !== "") {
                    const s = "-" + line + "-";
                    console.log(s);
                    const pilot: Pilot = { wishes: [], points: 0 };

                    line.split("\t").forEach((item: string, idx: number) => {
                        switch (idx) {
                            case 0:
                                pilot.name = item;
                                break;
                            case 1:
                                pilot.points = parseInt(item);
                                break;
                            default:
                                pilot.wishes.push(item);
                                break;
                        }
                    });

                    console.log(pilot);
                    pilots.push(pilot);
                }
            }
        });

    return pilots;
}

function applySolutionFileToAssignmentResult(filename: string, assignementResult: AssignmentResult): void {

    fs.readFileSync(filename, "utf-8")
        .split(/\r?\n/)
        .forEach((line: string, index: number) => {
            if (index !== 0) {
                if (line.trim() !== "") {
                    const fields: string[] = line.split("\t");
                    const pilotNamem: string = fields[0];
                    const tandemName: string = fields[1];

                    let assignment: Assignment | undefined = assignementResult.assignments.find(function (assignement: Assignment) {
                        return assignement.pilotName === pilotNamem;
                    });
                    if (tandemName !== "") {
                        assignment!.tandemName = tandemName;
                    } else {
                        assignment!.tandemName = undefined;
                    }
                }
            }
        });
}

/*
 * Based on a Pilot array, build all data that will be used to do the processing
 * algotithm and to build an understandable solution from the result of the previously
 * mentionned algorithm.
 * @param the array of Pilot
 * @return the data from optimization and solution building
 */
function buildAssignmentData(pilots: Pilot[]): AssignmentData {
    const solvingMatrix: number[][] = [];
    const allTandems = new Map<string, number>();

    let weight: number = 0;
    let weightIncrement: number = Math.pow(pilots.length, pilots.length);

    pilots.sort((a, b) => a.points - b.points);

    //--- compute optimization weights and tandem list.
    pilots.forEach((pilot: Pilot) => {
        const wishes: number[] = [];

        pilot.wishes.forEach((tandemName: string) => {

            let tandemIndex = allTandems.get(tandemName);
            if (tandemIndex === undefined) {
                tandemIndex = allTandems.size;
                allTandems.set(tandemName, tandemIndex);
            }

            wishes[tandemIndex] = weight;
            weight += weightIncrement;
        });

        weightIncrement = weightIncrement / pilots.length;
        solvingMatrix.push(wishes);
    });

    console.log("device size :" + allTandems.size);

    //--- square the matrix part 1: assign weigths for incompatible assignations.
    const maxDim: number = Math.max(allTandems.size, pilots.length);
    const incompatibleWeight: number = weight;

    for (let i = 0; i < pilots.length; i++) {
        for (let j = 0; j < maxDim; j++) {
            if (solvingMatrix[i][j] === undefined) {
                solvingMatrix[i][j] = incompatibleWeight;
            }
        }
    }

    //--- square the matrix part 2: add fake pilots that will receive unused tandem.
    for (let i = pilots.length; i < maxDim; i++) {
        solvingMatrix.push([]);
        for (let j = 0; j < maxDim; j++) {
            solvingMatrix[i][j] = incompatibleWeight;
        }
    }

    console.log("SolvingMatrix : ");
    console.log(solvingMatrix);

    const result: AssignmentData = {
        tandemIds: [],
        pilots: [],
        solvingMatrix: solvingMatrix,
    };

    allTandems.forEach((index: number, tandemName: string) => {
        result.tandemIds[index] = tandemName;
    });

    pilots.forEach((value: Pilot) => {
        result.pilots.push(value);
    });

    console.log("Tandem Ids : ");
    console.log(result.tandemIds);
    console.log("Pilots : ");
    console.log(result.pilots);

    return result;
}

/*
 * Implementation Nr2 of munkres algorithm
 */
function compute2(matrix: number[][]): number[][] {
    return computeMunkres(matrix);
}

/*
 * Implementation Nr1 of munkres algorithm
 */
function compute1(matrix: number[][]): number[][] {
    const result = munkres(matrix);
    return result;
}

/*
 * Build final result based of munkers matrix and assignmentData
 * @param The result matrix
 * @param The assignmentData data
 * @result real life assignement
 */
function buildResults(
    resultMatrix: number[][],
    assignmentData: AssignmentData
): Assignment[] {
    const result: Assignment[] = [];

    resultMatrix.forEach((item: number[]) => {
        let assignmentResult: Assignment = {
            pilotName: assignmentData.pilots[item[0]].name || "",
            tandemName: undefined
        };
        if (item[1] <= assignmentData.tandemIds.length) {
            assignmentResult.tandemName = assignmentData.tandemIds[item[1]];
        }
        result.push(assignmentResult);
    });

    return result;
}

function finalResultToStr(finalResults: Assignment[]): string {
    let result: string = "";

    finalResults.forEach((item: Assignment) => {
        result += "[" + item.pilotName + " -> " + item.tandemName + "]\n";
    });

    return result;
}

function solvingMatrixToStr(solvingMatrix: number[][]): string {
    let result: string = "";

    solvingMatrix.forEach((item: number[]) => {
        result += "[";
        item.forEach((item2: number) => {
            result += item2.toString() + ", ";
        });
        result += "]\n";
    });

    return result;
}

function solutionCost(assignmentResult: AssignmentResult): number {
    let result: number = 0;

    const assignmentData: AssignmentData = assignmentResult.assignmentData;

    assignmentResult.assignments.forEach(function (assignment: Assignment) {
        let pilotIndex: number = 0;
        assignmentResult.assignmentData.pilots.forEach(function (pilot: Pilot, index: number) {
            if (pilot.name === assignment.pilotName)
                pilotIndex = index;
        });
        let tandemIndex: number = assignmentData.tandemIds.indexOf(assignment.tandemName);
        if (tandemIndex !== -1) {
            result += assignmentData.solvingMatrix[pilotIndex][tandemIndex];
        } // Warning ne rend que les coûts d'affection, sans les coûts de non affectation
        //    assignment.pilotName llklk
    });
    return result;
}

/*
 * Assign tandem to pilots
 * @param Pilots and their wishes, tandem list is built from pilots wishes. 
 */
function assignTandemToPilots(pilots: Pilot[]): AssignmentResult {
    const assignmentData: AssignmentData = buildAssignmentData(pilots);
    const resultMatrix: number[][] = compute1(assignmentData.solvingMatrix);
    const assignments: Assignment[] = buildResults(resultMatrix, assignmentData);

    let result: AssignmentResult = {
        assignmentData: assignmentData,
        assignments: assignments
    };
    console.log("solvingMatrix:");
    console.log(solvingMatrixToStr(assignmentData.solvingMatrix));

    console.log("Assignment:", assignments);
    console.log(finalResultToStr(assignments));
    return result;
}

function assignTandemToPilotsFromTestFile(filename: string): AssignmentResult {
    const pilots: Pilot[] = loadPilotArayFromFile(filename);
    return assignTandemToPilots(pilots);
}


const filename: string = "../../tests/test8.txt";
const assignmentResult: AssignmentResult = assignTandemToPilotsFromTestFile(filename);
const computedSolutionCost = solutionCost(assignmentResult);
console.log("Computed solution cost: " + computedSolutionCost);

const bestSolutionFilename: string = filename.split('.').slice(0, -1).join('.') + "b.txt";

if (fs.existsSync(bestSolutionFilename)) {
    applySolutionFileToAssignmentResult(bestSolutionFilename, assignmentResult);
    const bestSolutionCost = solutionCost(assignmentResult);
    console.log("Best solution cost: " + bestSolutionCost);
    console.log("Delta solution cost ( <0 => computed is better ): " + (bestSolutionCost - computedSolutionCost));
}
