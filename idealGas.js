const prompt = require("prompt-sync")();
const r = 0.08206;
const periodic = require("./Gas/periodic.json").elements;
let p, v, mol, t;

let info = prompt("What information do you have?");
let givins = info.split(" ").filter(Boolean);
console.log(givins);
for (let i = 0; i < givins.length; i++) {
  if (["atm", "torr", "mmHg"].includes(givins[i])) {
    if (givins[i] == "atm") {
      p = givins[i - 1];
    } else if (givins[i] == "mmHg" || givins[i] == "torr") {
      p = givins[i - 1] / 760;
    }
  } else if (["mol", "g"].includes(givins[i])) {
    if (givins[i] == "mol") {
      mol = givins[i - 1];
    } else if (givins[i] == "g") {
      mol = givins[i - 1] / molarMass();
    }
  } else if (["L", "mL"].includes(givins[i])) {
    if (givins[i] == "L") {
      v = givins[i - 1];
    } else {
      v = givins[i - 1] * 1000;
    }
  } else if (["k", "C"].includes(givins[i])) {
    if (givins[i] == "k") {
      t = givins[i - 1];
    } else {
      t = givins[i - 1] + 273;
    }
  }
}
if (!p) {
  console.log((mol * r * t) / v + " atm");
} else if (!v) {
  console.log((mol * r * t) / p + " L");
} else if (!mol) {
  console.log((p * v) / (r * t) + " mol");
} else if (!t) {
  console.log((p * v) / (r * mol) + " k");
}

function molarMass() {
  let mass = [];
  let compound = prompt("Whats the Molecular Formula of the Gas?");
  let compoundSplit = compound
    .split(/([A-Z][a-z]{0,2})/)
    .map((bit) => bit.trim())
    .filter(Boolean);
  if (compoundSplit[0].match(/[A-z]*/) && compoundSplit[1].match(/[A-z*]/)) {
    compoundSplit.unshift("1");
  }
  for (let i = 0; compoundSplit.length - 1 >= i; i++) {
    if (compoundSplit[i].match(/([A-Z][a-z]{0,2})/)) {
      const matchedamu = periodic.find(
        (element) => element.symbol == compoundSplit[i]
      )?.atomic_mass;
      mass.push(matchedamu);
    } else {
      let numOf = Number(compoundSplit[i]);
      mass.push(numOf);
    }
  }
  let realMass = 0;
  if (mass.length / 2 !== Math.floor(mass.length / 2)) mass.push(1);
  for (i = 0; i < mass.length; i += 2) {
    realMass += mass[i] * mass[i + 1];
  }
  return realMass;
}