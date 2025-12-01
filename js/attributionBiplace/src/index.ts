import * as fs from "fs";
import {
    assignTandemToPilots,
    solutionCost,
    Pilot,
    AssignmentResult,
    Assignment
} from './tandemAssign.js';

import munkres from "munkres";



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
                    const pilot: Pilot = { name: "", wishes: [], points: 0 };

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


function assignTandemToPilotsFromTestFile(filename: string): AssignmentResult {
    const pilots: Pilot[] = loadPilotArayFromFile(filename);
    return assignTandemToPilots(pilots);
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

function testRectangleMunkres() {
    let mat: number[][] = [
        [0, 1],
        [0, 1],
        [0, 1],
    ];
    let m = munkres(mat);
    console.log("munkres 3 pilotes 2 biplaces ");
    console.log(m);

   mat = [
        [0, 1, 2],
        [0, 1, 2],
    ];
     m = munkres(mat);
    console.log("munkres 3 pilotes 3 biplaces ");
    console.log(m);
}



//testRectangleMunkres();

const filename: string = "../../tests/testJPDS.txt";
const assignmentResult: AssignmentResult = assignTandemToPilotsFromTestFile(filename);
const computedSolutionCost = solutionCost(assignmentResult);
console.log("Computed solution cost: " + computedSolutionCost);

const bestSolutionFilename: string = filename.split('.').slice(0, -1).join('.') + "b.txt";

if (fs.existsSync(bestSolutionFilename)) {
    applySolutionFileToAssignmentResult(bestSolutionFilename, assignmentResult);
    const bestSolutionCost = solutionCost(assignmentResult);
    console.log("Best solution cost: " + bestSolutionCost);
    console.log("Delta solution cost ( <0 => computed is better ): " + (computedSolutionCost - bestSolutionCost));
}
