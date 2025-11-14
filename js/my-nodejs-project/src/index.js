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

    let result = { biplaceIds: [], solvingMatrix: solvingMatrix };

    devices.forEach(function (value, key) {
        result.biplaceIds[value] = key;
    });

    // renvoyer les pilotes dans l'ordre du calcul

    console.log("Biplace Ids : ")
    console.log(result.biplaceIds);

    return result;
}


function run(filename) {
    pilots = loadInputDataFromFile(filename);
    attributionData = buildAttributionData(pilots);

    const computeMunkres = require('./munkres');
    const { Munkres } = computeMunkres;
    const munkres = new Munkres();
    const result2 = munkres.compute(attributionData.solvingMatrix);

    console.log('Assignment:', result2);


}






run('../tests/test1.txt');



let possibles = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
]
/*
let solution = []
 
    var initialState = Math.random() * 16;
    var result = simulatedAnnealing({
        initialState: initialState,
        tempMax: 15,
        tempMin: 0.001,
        newState: newState,
        getTemp: getTemp,
        getEnergy: getEnergy,
    });
*/


const computeMunkres = require('./munkres');

// Option 1: Use the static helper function
/*const costMatrix = [
  [11,12,13, 999, 999, 999],
  [21,999,999,999,999,999],
  [999,21,22,999,999,999],
  [31,32,999,33,999,999],
  [31,32,999,33, 999,999],
  [999,999,999,43, 999,999],
 
];
*/
/*
A	1	I	J	K
B	2	I
C	2 	J	K
E	3	I	J	L
F	3	I	J	M
D	4	K
*/
/*
const costMatrix = [
    [11, 999, 999, 999, 999, 999],
    [21, 999, 999, 999, 999, 999],
    [999, 21, 22, 999, 999, 999],
    [31, 32, 999, 33, 999, 999],
    [31, 32, 999, 33, 999, 999],
    [999, 999, 999, 43, 999, 999],
];
*/
/*
A	1	I
B	2	I
C	2 	J	K
E	3	I	J	L
F	3	I	J	M
D	4	K
*/

/*const costMatrix = [
    [11, 12, 13, 14, 15, 16, 17, 18, 19],
    [21, 22, 23, 24, 25, 26, 27, 28, 29],
    [31, 32, 33, 34, 35, 36, 37, 38, 39],
    [41, 42, 43, 44, 45, 46, 47, 48, 49],
    [51, 52, 53, 54, 55, 56, 57, 58, 59],
    [61, 62, 63, 64, 65, 66, 67, 68, 69],
    [71, 72, 73, 74, 75, 76, 77, 78, 79],
    [81, 82, 83, 84, 85, 86, 87, 88, 89],
    [91,92, 93, 94, 95, 96, 97, 98, 99],
    ];
*/

var costMatrix = [
    [11, 12, 13, 14, 999],
    [121, 122, 123, 124, 999],
    [231, 232, 233, 234, 999],
    [341, 342, 343, 344, 999],
    [999, 999, 999, 999, 9999]
];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        costMatrix[j][i] = i * (5 - j) + j * 100;
    }
}

var s = costMatrix.map(function (ind) {
    return ['[', ind.join(','), ']'].join('');
}).join('\r\n');
console.log(s);
const result = computeMunkres(costMatrix);

console.log('Assignment:', result);

s = result.map(function (ind) {
    return ['[', ind.join(','), ']'].join('');
}).join(', ');

console.log('Assignment:', s);


// Option 2: Use the Munkres class directly
const { Munkres } = computeMunkres;
const munkres = new Munkres();
const result2 = munkres.compute(costMatrix);
//console.log('Assignment (class):', result2);