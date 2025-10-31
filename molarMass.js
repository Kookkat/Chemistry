const prompt = require("prompt-sync")();
const periodic = require("./periodic.json").elements;

var mass = [];
var compound = prompt("Give me compound");
var compoundSplit = compound.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
console.log(compoundSplit);
if (compoundSplit[0].match(/[A-z]*/) && compoundSplit[1].match(/[A-z*]/)) {
  compoundSplit.unshift("1");
}
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
console.log(realMass);