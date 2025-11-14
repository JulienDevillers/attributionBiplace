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

    array_ = require('fs').readFileSync(filename, 'utf-8').split(/\r?\n/).forEach(function (line, index) {

        if (index != 0) {
            if (line.trim() != "") {    // raison inconnuie, le parser renvoie une ligne vide à la fin
                console.log("-" + line + "-");
                first_column = true;
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
    devices = new Map();

    weight = 1;

    pilots.sort((a, b) => a.points - b.points);

    pilots.forEach(function (pilot) {
        let wishes = [];
        pilot.wishes.forEach(function (biplace) {
            biplace_id = devices.get(biplace);
            if (biplace_id === undefined) {
                biplace_id = devices.size;
                devices.set(biplace, biplace_id);
            }
            wishes[biplace_id] = weight;
            weight++;
        });
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


function compute(matrix) {
    const computeMunkres = require('./munkres');
    const { Munkres } = computeMunkres;
    const munkres = new Munkres();
    return munkres.compute(matrix);
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


function run(filename) {
    pilots = loadInputDataFromFile(filename);
    attributionData = buildAttributionData(pilots);
    computeresult = compute(attributionData.solvingMatrix);
    finalResults = buildResults(computeresult, attributionData.pilots, attributionData.biplaceIds)

    console.log('Assignment:', finalResults);
    finalResults.forEach(function (item) {
        console.log("[" + item[0] + " -> " + item[1] + "]")
    });
}



run('../tests/test1.txt');

