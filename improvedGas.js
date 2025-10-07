const prompt = require("prompt-sync")();
const r = 0.08206;
const periodic = require("./periodic.json").elements;

var p;
var v;
var mol;
var t;

var info = prompt('What information do you have?');
var givins = info.split(' ').filter(Boolean);
console.log(givins);
for (i = 0; i <= givins.length - 1; i++) {
    if (['atm', 'torr', 'mmHg'].includes(givins[i])) {
        if (givins[i] == 'atm') {
            p = givins[i - 1];
        } else if (givins[i] == 'mmHg' || givins[i] == 'torr') {
            p = givins[i - 1] / 760;
        } else {
            throw new Error(`Input unrecognized!`)
        }
    } else if (['mol', 'g'].includes(givins[i])) {
        if (givins[i] == 'mol') {
            mol = givins[i - 1];
        } else if (givins[i] == 'g') {
            mol = givins[i - 1] / molarMass();
        } else {
            throw new Error(`Input unrecognized!`)
        }
    } else if (['L', 'mL'].includes(givins[i])) {
        if (givins[i] == 'L') {
            v = givins[i - 1];
        } else {
            v = givins[i - 1] * 1000;
        }
    } else if (['k', 'C']) {
        if (givins[i] == 'k') {
            t = givins[i - 1];
        } else {
            t = givins[i - 1] + 273;
        }
    }
}

function molarMass() {
    var mass = [];
    var compound = prompt('Whats the Molecular Formula of the Gas?');
    var compoundSplit = compound.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
    if (compoundSplit[0].match(/[A-z]*/) && compoundSplit[1].match(/[A-z*]/)) {
        compoundSplit.unshift('1');
    }
    console.log(compoundSplit);
    for (let i = 0; compoundSplit.length - 1 >= i; i++) {
        if (compoundSplit[i].match(/([A-Z][a-z]{0,2})/)) {
            const matchedamu = periodic.find(
                (element) => element.symbol == compoundSplit[i]
            )?.atomic_mass;
            console.log(matchedamu)
            mass.push(matchedamu);
        } else {
            var numOf = Number(compoundSplit[i]);
            mass.push(numOf);
        }
    }
    var realMass = 0;
    if (mass.length / 2 !== Math.floor(mass.length / 2)) mass.push(1);
    for (i = 0; i < mass.length; i += 2) {
        realMass += mass[i] * mass[i + 1];
    }
    return (realMass);
}
console.log(mol);
console.log(givins);
console.log(p);