//give it inputs it will give outputs and balanced equaltion
const prompt = require("prompt-sync")();
const periodic = require("./periodic.json").elements;

let reactant1Split = reactantSplitter(prompt("Enter the first reactant: "));
let reactant2Split = reactantSplitter(prompt("Enter the second reactant: "));
let reactant1Groups = groups(reactant1Split);
let reactant2Groups = groups(reactant2Split);
let reactant1Charges = charge(reactant1Groups, reactant1Split);
let reactant2Charges = charge(reactant2Groups, reactant2Split);
let product1split = [];
let product2split = [];
if (reactant1Charges[0] == reactant2Charges[0]){
    product1split.push(reactant1Split[0]);
    product2split.push(reactant2Split[0]);
    product1split.push(reactant2Split[1]);
    product2split.push(reactant1Split[1]);
}

console.log(reactant1Groups);
console.log(reactant2Groups);
console.log(reactant1Split);
console.log(reactant2Split);
console.log(reactant1Charges);
console.log(reactant2Charges);
console.log(product1split);
console.log(product2split);

function reactantSplitter(reactant) {
  let splitReactant = reactant
    .split(/([A-Z][a-z]{0,2})/)
    .map((bit) => bit.trim())
    .filter(Boolean);
  return splitReactant;
}

function groups(reactant) {
  let reactantGroups = [];
  for (let i = 0; i < reactant.length; i++) {
    if (reactant[i].match(/([A-Z][a-z]{0,2})/)) {
      const matchedGroup = periodic.find(
        (element) => element.symbol == reactant[i]
      )?.group;
      reactantGroups.push(matchedGroup);
    }
  }
  return reactantGroups;
}

function charge(groups, variable) {
  let charges = [];
  for (let i = 0; i < groups.length; i++) {
    if ([1, 2, 3].includes(groups[i])) {
      charges.push(groups[i]);
    } else if ([15, 16, 17].includes(groups[i])) {
      charges.push(groups[i] - 18);
    } else {
      charges.push(variable[i]);
    }
    // if ([-1, -2, -3].includes(charge[0])){
    //     charges.unshift(charges[0] = Math.abs(charges[0]));
    // }
  }
  return charges;
}
