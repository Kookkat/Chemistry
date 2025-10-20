//attempt at finding charges and giving oxidation & reduced elements.
//Some laws include
/*
    Oxygen is always 2-, unless in peroxide (H2O2, Na2O2)
    Hydrogen is always 1+, unless in a compound with metal, then 1-
    Diatomic elements (H,O,Cl,Br,I,F) have a neutral charge of O
    Polyatomic ions dont get split, if NaNO3, the NO3 would have a charge of 1- meaning that Na is 1+
    If oxidized always contains reduced
    Natural state Ions have no charge, neutral
    Flurine always has a charge of -1 in a compound,
    In compounds, the elements of groups 1 and 2 as well as aluminum 
        have oxidation numbers of +1, +2, and +3 respectively.
*/

const prompt = require("prompt-sync")();
const periodic = require("./periodic.json").elements;

var compound = prompt("Give me compound");
var compoundSplit = compound.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
console.log(compoundSplit);