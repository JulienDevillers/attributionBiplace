import * as fs from "fs";
import munkres from "munkres";
import computeMunkres from "./munkres2.js";

interface Pilot {
    name?: string;
    points: number;
    wishes: string[];
}

interface AttributionData {
    tandemIds: (string | undefined)[];
    pilots: Pilot[];
    solvingMatrix: number[][];
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

/*
 * Based on a Pilot array, build all data that will be used to do the processing
 * algotithm and to build an understandable solution from the result of the previously
 * mentionned algorithm.
 * @param the array of Pilot
 * @return the data from optimization and solution building
 */
function buildAttributionData(pilots: Pilot[]): AttributionData {
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
    const maxDim:number = Math.max(allTandems.size, pilots.length);
    const incompatibleWeight:number = weight;

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

    const result: AttributionData = {
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

interface AssignmentResult {
    pilot: string;
    tandemName: string | undefined;
}

/*
 * Build final result based of munkers matrix and attributionData
 * @param The result matrix
 * @param The attribution data
 * @result real life assignement
 */
function buildResults(
    resultMatrix: number[][],
    attributionData: AttributionData
): AssignmentResult[] {
    const result: AssignmentResult[] = [];

    resultMatrix.forEach((item: number[]) => {
        let assignmentResult: AssignmentResult = {
            pilot: attributionData.pilots[item[0]].name || "",
            tandemName: undefined
        };
        if (item[1] <= attributionData.tandemIds.length) {
            assignmentResult.tandemName = attributionData.tandemIds[item[1]];
        }
        result.push(assignmentResult);
    });

    return result;
}

function finalResultToStr(finalResults: AssignmentResult[]): string {
    let result:string = "";

    finalResults.forEach((item: AssignmentResult) => {
        result += "[" + item.pilot + " -> " + item.tandemName + "]\n";
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

function solutionCost(resultMatrix: number[][],): number {
    return 0;
}

/*
 * Attribute tandem to pilots
 * @param Pilots and their wishes, tandem list is built from pilots wishes. 
 */
function attritubeTandemToPilots(pilots: Pilot[]): AssignmentResult[] {
    const attributionData: AttributionData = buildAttributionData(pilots);
    const resultMatrix: number[][] = compute1(attributionData.solvingMatrix);
    const finalResults: AssignmentResult[] = buildResults(resultMatrix, attributionData);

    console.log("solvingMatrix:");
    console.log(solvingMatrixToStr(attributionData.solvingMatrix));

    console.log("Assignment:", finalResults);
    console.log(finalResultToStr(finalResults));

    return finalResults;
}

function attributeTandemToPilotsFromTestFile(filename: string): void {
    const pilots: Pilot[] = loadPilotArayFromFile(filename);
    attritubeTandemToPilots(pilots);
}

attributeTandemToPilotsFromTestFile("../../tests/test7.txt");
