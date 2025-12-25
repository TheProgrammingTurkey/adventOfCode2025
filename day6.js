const { table } = require('console');
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    let lines = input.split("\r\n");
    let mathTable = [[]];
    mathTable.pop();
    lines.forEach(line => {
        line = line.split(" ");
        mathTable.push(line.filter(item => item.length > 0));
    });
    let grandTotal = 0;
    for(let col = 0; col < mathTable[0].length; col++){
        let total = parseInt(mathTable[0][col]);
        for(let row = 1; row < mathTable.length-1; row++){
            if(mathTable[mathTable.length-1][col] == "+") total+=parseInt(mathTable[row][col]);
            else total*=parseInt(mathTable[row][col]);
        }
        grandTotal+=total;
    }
    return grandTotal;
}


function part2(){
    let lines = input.split("\r\n");
    let mathTable = [[]];
    mathTable.pop();
    for(let i = 0; i < lines.length-1; i++){
        let line = [];
        for(let j = 0; j < lines[i].length-1; j++){
            if(lines[i][j] == " " && lines[lines.length-1][j+1] == " ") line.push("-");
            else line.push(lines[i][j]);
        }
        if(lines[i][lines[i].length-1] == " ") line.push("-");
        else line.push(lines[i][lines[i].length-1]);
        mathTable.push(line);
    }
    mathTable.push(lines[lines.length-1].split(""));
    let grandTotal = 0;
    let total = 1;
    let sign = mathTable[mathTable.length-1][0];
    for(let col = 0; col < mathTable[0].length; col++){
        let num = "";
        if(mathTable[0][col] == " "){
            if(sign == "+") total--;
            grandTotal+=total;
            total = 1;
            sign = mathTable[mathTable.length-1][col+1];
            continue;
        }
        for(let row = 0; row < mathTable.length-1; row++){
            if(mathTable[row][col] != "-") num+=mathTable[row][col];
        }
        if(sign == "+") total+=parseInt(num);
        else total*=parseInt(num);
    }
    if(sign == "+") total--;
    grandTotal+=total;
    return grandTotal;
}