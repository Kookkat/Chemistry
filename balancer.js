//give it inputs it will give outputs and balanced equaltion
const prompt = require("prompt-sync")();
const periodic = require("./Gas/periodic.json").elements;

let reactant1 = prompt("Enter the first reactant: ");
let reactant2 = prompt("Enter the second reactant: ");
let reactant1Split = reactant1.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
let reactant2Split = reactant2.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
