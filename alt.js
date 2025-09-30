const prompt = require('prompt-sync')();
const periodic = require('./periodic.json').elements;

const compound = prompt("Give me compound");


function pareprocess(subcomponent){
    let firstparenthesis = subcomponent.indexOf('(');
    if(!firstparenthesis) return [subcomponent];
    const restof = subcomponent.substring(firstparenthesis)
    const nextparenthesis = restof.indexOf('(')
    if(!nextparenthesis){
        const lastparenthesis = subcomponent.lastIndexOf(')')
        return [subcomponent.substring(0,firstparenthesis),[restof.substring(1,restof.indexOf(')'))],subcomponent.substring(lastparenthesis+1)]
    }
    let depth = 1;
    while (depth > 0){
        
    }
}
const processed = pareprocess(compound)
console.log(processed)