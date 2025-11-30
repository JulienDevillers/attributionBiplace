import munkres from "munkres";
import { getActiveResourcesInfo } from "node:process";

export interface Pilot {
    name: string;
    points: number;
    wishes: string[];
}

interface AssignmentData {
    tandemIds: (string | undefined)[];
    pilots: Pilot[];
    solvingMatrix: bigint[][];
    incompatibleWeight: bigint;
}

export interface Assignment {
    pilotName: string;
    tandemName: string | undefined;
}

export interface AssignmentResult {
    assignments: Assignment[];
    assignmentData: AssignmentData;
}

let incompatibleWeight: bigint = BigInt(0)

/*
 * Based on a Pilot array, build all data that will be used to do the processing
 * algorithm and to build an understandable solution from the result of the previously
 * mentionned algorithm.
 * @param the array of Pilot
 * @return the data from optimization and solution building
 */
function buildAssignmentData(pilots: Pilot[]): AssignmentData {
    const solvingMatrix: bigint[][] = [];
    const allTandems = new Map<string, number>();

    let weightIncrement: bigint = BigInt(1);
    let increments: bigint[] = [];

    // sort pilots so higher-point pilots get priority (descending)
    pilots.sort((a, b) => a.points - b.points);

    //--- compute optimization weights and tandem list.
    pilots.slice().reverse().forEach((pilot: Pilot) => {
        increments.unshift(weightIncrement);
        weightIncrement = weightIncrement
            * BigInt(pilot.wishes.length) * BigInt(pilot.wishes.length + 1) / BigInt(2)  // somme des incréments de la ligne ( somme de 1x + 2x + 3x...)
            + BigInt(1);
    });

    console.log("increments: %O", increments);

    let i = 0;
    let previous_acculumated_line: bigint = BigInt(0);
    let sum: bigint = BigInt(0);
    let weight: bigint = BigInt(0);

    pilots.forEach((pilot: Pilot) => {
        const wishes: bigint[] = [];

        pilot.wishes.forEach((tandemName: string) => {
//todo voir si c'est la bonne façon de coder ça....
            let tandemIndex = allTandems.get(tandemName);
            if (tandemIndex === undefined) {
                tandemIndex = allTandems.size;
                allTandems.set(tandemName, tandemIndex);
            }

            wishes[tandemIndex] = weight + previous_acculumated_line;
            sum += wishes[tandemIndex];
            weight += increments[i];
        });
        previous_acculumated_line += weight;
        i++;
        weight++;
        solvingMatrix.push(wishes);
    });
    incompatibleWeight = sum + BigInt(2);  // plutôt que prendre la somme, prendre la sum des max par ligne ?

    console.log("device size : " + allTandems.size);
    console.log("incompatibleWeight : " + incompatibleWeight);

    //--- square the matrix part 1: assign weigths for incompatible assignations.
    const maxDim: number = Math.max(allTandems.size, pilots.length);

    for (let i = 0; i < pilots.length; i++) {
        for (let j = 0; j < maxDim; j++) {
            if (solvingMatrix[i][j] === undefined) {
                solvingMatrix[i][j] = incompatibleWeight;
            }
        }
    }
// Ajout d'un coût pour les unassigned
  /*   for (let i = 0; i < pilots.length; i++) {
        for (let j = 0; j < maxDim; j++) {
            solvingMatrix[i][maxDim]=incompatibleWeight-BigInt(1);
            
        }
    }
*/
    console.log("SolvingMatrix : ");
    console.log(solvingMatrix);

    const result: AssignmentData = {
        tandemIds: [],
        pilots: [],
        solvingMatrix: solvingMatrix,
        incompatibleWeight: incompatibleWeight-BigInt(1),
    };

    allTandems.forEach((index: number, tandemName: string) => {
        result.tandemIds[index] = tandemName;
    });

    pilots.forEach((value: Pilot) => {
        result.pilots.push(value);
    });

    console.log("Tandem Ids : %O", result.tandemIds);
    console.log("Pilots :");
    console.log(result.pilots);

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

    assignmentData.pilots.forEach(pilot => {
         let assignmentResult: Assignment = {
                pilotName: pilot.name,
                tandemName: undefined
            };
    result.push(assignmentResult);
           
    });


    resultMatrix.forEach((item: number[]) => {
            // Est-ce que le tandem est dans la liste?
            if (assignmentData.pilots[item[0]].wishes.find((wish) => {
                return wish === assignmentData.tandemIds[item[1]];
            })) {
     //       if (item[1] !== assignmentData.solvingMatrix[0].length-1) {
       //         assignmentResult.tandemName = assignmentData.tandemIds[item[1]];
         //   }
            result.at(item[0])!.tandemName= assignmentData.tandemIds[item[1]];
        }
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

function solvingMatrixToStr(solvingMatrix: bigint[][]): string {
    let result: string = "";

    solvingMatrix.forEach((item: bigint[]) => {
        result += "[";
        item.forEach((item2: bigint) => {
            result += item2.toString() + ", ";
        });
        result += "]\n";
    });

    return result;
}

/*
 * Evaluate the cost of a solution. Used to evaluate a custom solution and compare with the one
 * generated by the assign algorithm
 * @param the solution
 * @return the cost
 */
export function solutionCost(assignmentResult: AssignmentResult): bigint {
    let result: bigint = 0n;

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
        } //else result +=incompatibleWeight;  
        // Warning ne rend que les coûts d'affection, sans les coûts de non affectation
        //    assignment.pilotName llklk
    });
    return result;
}

/*
 * Assign tandem to pilots
 * @param Pilots and their wishes, tandem list is built from pilots wishes. 
 */
export function assignTandemToPilots(pilots: Pilot[]): AssignmentResult {

    const assignmentData: AssignmentData = buildAssignmentData(pilots);
    const resultMatrix: number[][] = munkres(assignmentData.solvingMatrix);
    console.log("resultMatrix")
    console.log(resultMatrix)
    const assignments: Assignment[] = buildResults(resultMatrix, assignmentData);

    let result: AssignmentResult = {
        assignmentData: assignmentData,
        assignments: assignments
    };
    console.log("solvingMatrix:");
    console.log(solvingMatrixToStr(assignmentData.solvingMatrix));

    console.log("Assignments:", assignments);
    console.log(finalResultToStr(assignments));
    return result;
}



