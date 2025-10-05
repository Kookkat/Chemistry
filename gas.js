const prompt = require("prompt-sync")();
const r=0.08206;

var missing = prompt("What factor is missing?(ex. V, P, Mol, K)");
if(missing == 'V'){
    answer=(r*t()*mol())/p();
}else{
    if(missing == 'P'){
        answer=(r*t()*mol())/v();
    }else{
        if(missing =='Mol'){
            answer=(p()*v())/(t()*r);
        }else{
            answer=(p()*v())/(mol()*r);
        }
    }
}
console.log(answer);
function v(){
    return prompt("Whats the volume?");
}
function p(){
    return prompt("Whats the pressure?");
}
function mol(){
    return prompt("How many moles?");
}
function t(){
    return prompt("Whats the temp?");
}