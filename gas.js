//Simple pv=nrt equation
//Pressure*Volume=# of Moles*constant*temp
//usally in atm*L=mol*0.08206L*atm/(mol*k) or 0.08206 l atm mol^-1 K^-1
//should be easy, just math, but also add conversions
//ex mmHg--->atm
const prompt = require("prompt-sync")();
const r=0.08206;
var volume;
var pressure;
var moles;
var temp;
var answer;

var missing = prompt("What factor is missing?(ex. V, P, Mol, K)");
if(missing == 'V'){
    p();
    mol();
    t();
    answer=(r*temp*moles)/pressure;
}else{
    if(missing == 'P'){
        v();
        mol();
        t();
        answer=(r*temp*moles)/volume;
    }else{
        if(missing =='Mol'){
            p();
            v();
            t();
            answer=(pressure*volume)/(temp*r);
        }else{
            p();
            v();
            mol();
            answer=(pressure*volume)/(moles*r);
        }
    }
}
console.log(answer);
function v(){
    volume=prompt("Whats the volume?");
}
function p(){
    pressure=prompt("Whats the pressure?");
}
function mol(){
    moles=prompt("How many moles?");
}
function t(){
    temp=prompt("Whats the temp?");
}