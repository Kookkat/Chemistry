//give it inputs it will give outputs and balanced equaltion
const prompt = require("prompt-sync")();
const periodic = require("./periodic.json").elements;

let reactant1 = prompt("Enter the first reactant: ");
let reactant2 = prompt("Enter the second reactant: ");
let reactant1Split = reactant1
  .split(/([A-Z][a-z]{0,2})/)
  .map((bit) => bit.trim())
  .filter(Boolean);
let reactant2Split = reactant2
  .split(/([A-Z][a-z]{0,2})/)
  .map((bit) => bit.trim())
  .filter(Boolean);
let reactant1Groups = [];
let reactant2Groups = [];
for (let i = 0; i < reactant1Split.length; i++) {
  if (reactant1Split[i].match(/([A-Z][a-z]{0,2})/)) {
    const matchedGroup = periodic.find(
      (element) => element.symbol == reactant1Split[i]
    )?.group;
    reactant1Groups.push(matchedGroup);
  }
}
for (let i = 0; i < reactant2Split.length; i++) {
  if (reactant2Split[i].match(/[A-Z][a-z]{0,2}/)) {
    const matchedGroup = periodic.find(
      (element) => element.symbol == reactant2Split[i]
    )?.group;
    reactant2Groups.push(matchedGroup);
  }
}
let reactant1Charges = charge(reactant1Groups, reactant1Split);
let reactant2Charges = charge(reactant2Groups, reactant2Split);

console.log(reactant1Groups);
console.log(reactant2Groups);
console.log(reactant1Split);
console.log(reactant2Split);
console.log(reactant1Charges);
console.log(reactant2Charges);

function charge(groups, variable) {
    let charges = [];
    for (let i = 0; i < groups.length; i++) {
        if ([1, 2, 3].includes(groups[i])) {
            charges.push(groups[i]);
    }else if ([15, 16, 17].includes(groups[i])){
        charges.push(groups[i] - 18);
    }else{
        charges.push(variable[i]);
    }
    // if ([-1, -2, -3].includes(charge[0])){
    //     charges.unshift(charges[0] = Math.abs(charges[0]));
    // }
    }
    return charges;
}
