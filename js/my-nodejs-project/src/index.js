import munkres from "munkres";
import * as fs from "fs";
import computeMunkres from "./munkres2.js";

// munkres2 from "./munkres2.js";


//var simulatedAnnealing = require('../');
//var munkres = require('munkres');


//    chai = require('chai');

function getEnergy(v) {
    return Math.abs(v * v - 16);
}

function newState(x) {
    return x + (Math.random() - 0.5);
}

// linear temperature decreasing
function getTemp(prevTemperature) {
    return prevTemperature - 0.001;
}

/*
describe("Simulated Annealing at x^2 = 16", function () {

    var initialState = Math.random() * 16;
    var result = simulatedAnnealing({
        initialState: initialState,
        tempMax: 15,
        tempMin: 0.001,
        newState: newState,
        getTemp: getTemp,
        getEnergy: getEnergy,
    });

    it(`Find solution of x^2 = 16`, function () {
        chai.expect(Math.abs(result * result - 16) < 0.1 ).to.equal(true);
    });
});

*/



function loadInputDataFromFile(filename) {
    let pilots = []

    let array_ = fs.readFileSync(filename, 'utf-8').split(/\r?\n/).forEach(function (line, index) {

        if (index != 0) {
            if (line.trim() != "") {    // raison inconnue, le parser renvoie une ligne vide à la fin
                let s = "-" + line + "-";
                console.log(s);
                let first_column = true;
                let pilot = { wishes: [] };

                line.split('\t').forEach(function (item, index) {
                    switch (index) {
                        case 0:
                            first_column = false;
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



function buildAttributionData(pilots) {

    let solvingMatrix = [];
    const devices = new Map();

    let weight = 0;
    let weightIncrement = Math.pow(pilots.length, pilots.length);

    pilots.sort((a, b) => a.points - b.points);

    pilots.forEach(function (pilot) {
        let wishes = [];
        pilot.wishes.forEach(function (biplace) {
            let biplace_id = devices.get(biplace);
            if (biplace_id === undefined) {
                biplace_id = devices.size;
                devices.set(biplace, biplace_id);
            }
            wishes[biplace_id] = weight;
            weight += weightIncrement;
        });
        weightIncrement = weightIncrement / pilots.length;
        solvingMatrix.push(wishes);
    });

    console.log("device size :" + devices.size);

    for (let i = 0; i < pilots.length; i++) {
        for (let j = 0; j < Math.max(devices.size, pilots.length); j++) {   // On carrétise la matrice si le nombre de pilotes et supérieur au nombre de biplaces
            if (solvingMatrix[i][j] === undefined) {                        // On affecte un poids plus élevé aux biplaces non souhaités
                solvingMatrix[i][j] = weight;
                //      weight++;
            }
        }
    }

    for (let i = pilots.length; i < Math.max(devices.size, pilots.length); i++) { // On ajoute des lignes fictives pour finir la carrétisation de la matrice si le nombre de biplaces est supérieur au nombre de pilotes
        solvingMatrix.push([]);
        for (let j = 0; j < Math.max(devices.size, pilots.length); j++) {
            solvingMatrix[i][j] = weight;
        }
    }
    console.log("SolvingMatrix : ")
    console.log(solvingMatrix);

    let result = { biplaceIds: [], pilots: [], solvingMatrix: solvingMatrix };

    devices.forEach(function (value, key) {
        result.biplaceIds[value] = key;
    });

    pilots.forEach(function (value) {
        result.pilots.push(value);
    });
    console.log("Biplace Ids : ")
    console.log(result.biplaceIds);
    console.log("Pilots : ")
    console.log(result.pilots);

    return result;
}


function compute2(matrix) {
    return computeMunkres(matrix);
}


function compute(matrix) {
    const result = munkres(matrix);
    return result;
}


function buildResults(computeresult, pilots, biplaceIds) {
    let result = [];
    computeresult.forEach(function (item) {
        if (item[1] > biplaceIds.length)
            result.push([pilots[item[0]].name, undefined]);
        else
            result.push([pilots[item[0]].name, biplaceIds[item[1]]]);
    });
    return result;
}

function finalResultToStr(finalResults) {
    let result = "";
    finalResults.forEach(function (item) {
        result += "[" + item[0] + " -> " + item[1] + "]\n";
    });

    return result;
}

function solvingMatrixToStr(solvingMatrix) {
    let result = "";
    solvingMatrix.forEach(function (item) {
        result += "[";
        item.forEach(function (item2) {
            result += item2.toString() + ", ";
        });
        result += "]\n"
    });

    return result;
}


function run(filename) {
    const pilots = loadInputDataFromFile(filename);
    const attributionData = buildAttributionData(pilots);
    const computeresult = compute2(attributionData.solvingMatrix);
    const finalResults = buildResults(computeresult, attributionData.pilots, attributionData.biplaceIds)

    console.log('solvingMatrix:');
    console.log(solvingMatrixToStr(attributionData.solvingMatrix));

    console.log('Assignment:', finalResults);
    console.log(finalResultToStr(finalResults));
}



run('../../tests/test8.txt');

