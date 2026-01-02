const { table } = require('console');
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
function part1(){
    let lines = input.split("\r\n");
    let maxArea = 0;
    for(let i = 0; i < lines.length-1; i++){
        const x1 = lines[i].split(",")[0];
        const y1 = lines[i].split(",")[1];
        for(let j = 1; j < lines.length; j++){
            const x2 = lines[j].split(",")[0];
            const y2 = lines[j].split(",")[1];
            let area = (Math.abs(y2-y1)+1)*(Math.abs(x2-x1)+1);
            if(area > maxArea) maxArea = area;
        }
    }
    return maxArea;
}