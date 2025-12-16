const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    const lines = input.split("\r\n");
    let cur = 50;
    let count = 0;
    lines.forEach(line => {
        const direction = line.split("")[0];
        const dist = parseInt(line.substring(1));
        if(direction == "R") cur+=dist;
        else cur-=dist;
        while(cur > 99 || cur < 0){
            if(cur > 99){
                cur-=100;
            }
            else{
                cur+=100;
            }
        }
        if(cur == 0) count++;
    });
    return count;
}


function part2(){
    const lines = input.split("\r\n");
    let cur = 50;
    let count = 0;
    lines.forEach(line => {
        const direction = line.split("")[0];
        const dist = parseInt(line.substring(1));
        if(direction == "R"){
            cur+=dist;
            while(cur > 99){
                count++;
                cur-=100;
            }
        }
        else{
            if(cur == 0) count--;
            cur-=dist;
            while(cur < 0){
                count++;
                cur+=100;
            }
            if (cur == 0) count++;  
        }  
    });
    return count;
}