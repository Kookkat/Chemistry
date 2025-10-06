const prompt = require("prompt-sync")();
const r=0.08206;
const periodic = require("./periodic.json").elements;

var missing = prompt("What factor is missing?(ex. V, P, Mol, K)");
if(missing == 'V'){
    answer = (r*t()*mol())/p()+' L';
}else{
    if(missing == 'P'){
        answer = (r*t()*mol())/v()+' atm';
    }else{
        if(missing =='Mol'){
            answer = (p()*v())/(t()*r)+' mol';
        }else{
            answer = (p()*v())/(mol()*r)+' k';
        }
    }
}
console.log(answer);

function v(){
    return volume = prompt("Whats the volume?");
}
function p(){
    var pressure = prompt("Whats the pressure?");
    var pressureType = pressure.split(' ').filter(Boolean);

    if (pressureType[1]=='torr'||'mmHg'){
        pressureType[0]=pressureType[0]/760;
    }
    return (pressureType[0]);
}
function mol(){
    var moleType = prompt("Do you have the Amount of Moles, or the Mass?");
    if(moleType == 'Mass'){
        var gasMass = prompt('What is the mass of the Gas');
        return (gasMass/molarMass());
    }else{
        return prompt('How many Moles?');
    }
}
function t(){
    var temp = prompt("Whats the temp?");
    var tempType = temp.split(' ').filter(Boolean);
    if (tempType[1]=='C'){
        tempType[0]=tempType[0]+273;
    }
    return (tempType[0]);
}
function molarMass(){
    var mass = [];
    var compound = prompt ('Whats the Molecular Formula of the Gas?');
    var compoundSplit = compound.split(/([A-Z][a-z]{0,2})/).map(bit => bit.trim()).filter(Boolean);
    if (compoundSplit[0].match(/[A-z]*/)&&compoundSplit[1].match(/[A-z*]/)){
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
    var realMass=0;
    if(mass.length/2 !== Math.floor(mass.length/2))mass.push(1);
    for (i=0; i < mass.length ;i+=2 ){
        realMass += mass[i]*mass[i+1];
    }
    return(realMass);
}