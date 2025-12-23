const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    const lines = input.split("\r\n");
    let voltage = 0;
    lines.forEach(line => {
        let bank = line.split("");
        let first = 0;
        for(battery in bank){
            if(bank[parseInt(battery)] > bank[first] && parseInt(battery) != bank.length-1){
                first = parseInt(battery);
            }
        }
        let sec = first+1;
        for(let i = sec; i < bank.length; i++){
            if(bank[i] > bank[sec]){
                sec = i;
            }
        }
        voltage+=parseInt(bank[first]+bank[sec]);
    });
    return voltage;
}


function part2(){
    const lines = input.split("\r\n");
    let voltage = 0;
    lines.forEach(line => {
        let bank = line.split("");
        let curVoltage = [ "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
        for(let i = 0; i < bank.length; i++){
            if(bank.length-i < 12){
                curVoltage = setValues(curVoltage, bank[i], 12-(bank.length-i));
            }
            else{
                curVoltage = setValues(curVoltage, bank[i], 0);
            }
        }
        voltage+=parseInt(combineVoltage(curVoltage));
    });
    return voltage;
}

function setValues(curValues, newValue, start){
    let replaced = false
    for(let i = start; i < curValues.length; i++){
        if(replaced){
            curValues[i] = 0;
        }
        else if(newValue > curValues[i]){
            curValues[i] = newValue;
            replaced = true;
        }
    }
    return curValues;
}

function combineVoltage(array){
    total = 0;
    array.forEach(num => {
        total+=num;
    });
    return total;
}