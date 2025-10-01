const prompt = require("prompt-sync")();
const periodic = require("./periodic.json").elements;
String.prototype.count = function (char) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) {
      count++;
    }
  }
  return count;
};
const compound = prompt("Give me compound");

function pareprocess(subcomponent) {
  if (typeof subcomponent !== "string") {
    return [];
  }
  if (subcomponent.count("(") !== subcomponent.count(")"))
    throw new Error(`Uneven string!`);
  const interpreterarr = [];
  subcomponent
    .split(/([A-Z][a-z]{0,2}|\)|\()/)
    .filter(Boolean)
    .map((component, index, host) => {
      if (component.match(/([A-Z][a-z]{0,2})/)) {
        return periodic.find((e) => e.symbol == component)?.atomic_mass;
      } else {
        return component;
      }
    })
    .forEach((element, index, host) => {
      if (index == host.length - 1) {
        //last element
        if (typeof element == "number") {
          interpreterarr.push(element);
          interpreterarr.push("1");
        } else {
          interpreterarr.push(element);
        }
      } else {
        if (typeof element == "number" && typeof host[index + 1] == "number") {
          interpreterarr.push(element);
        } else if (
          typeof element == "number" &&
          typeof host[index + 1] == "string" &&
          isFinite(parseInt(host[index + 1]))
        ) {
          interpreterarr.push(element * parseInt(host[index + 1]));
        } else if (
          !(
            index > 0 &&
            typeof element == "string" &&
            typeof host[index - 1] == "number"
          )
        ) {
          interpreterarr.push(element);
        }else{
          interpreterarr.push(element)
        }
      }
    });
  let calcarr = [];
  interpreterarr.forEach((element, index, host) => {
    if (typeof element == "number") {
      if (index == 1) {
        let idx = index;
        while (typeof host[idx] == "number") {
          idx++;
        }
        const elements = host.slice(index, idx);
        const sum = elements.reduce((acc, ele) => acc + ele, 0);
        calcarr.push(sum);
      } else {
        if (typeof host[index - 1] != "number") {
          let idx = index;
          while (typeof host[idx] == "number") {
            idx++;
          }
          const elements = host.slice(index, idx);
          const sum = elements.reduce((acc, ele) => acc + ele, 0);
          calcarr.push(sum);
        }
      }
    } else {
      calcarr.push(element);
    }
  });
  return calcarr;
}
const processed = pareprocess(compound);
console.log(processed)
