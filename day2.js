const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    const ranges = input.split(",");
    sum = 0;
    ranges.forEach(range => {
        const firstID = parseInt(range.split("-")[0]);
        const lastID = parseInt(range.split("-")[1]);
        for(let i = firstID; i <= lastID; i++){
            id = i.toString();
            if(id.length % 2 == 0){
                if(id.substring(0, id.length/2) == id.substring(id.length/2, id.length)) sum+=parseInt(id);
            }
        }
    });
    return sum;
}


function part2(){
    const ranges = input.split(",");
    sum = 0;
    ranges.forEach(range => {
        const firstID = parseInt(range.split("-")[0]);
        const lastID = parseInt(range.split("-")[1]);
        for(let i = firstID; i <= lastID; i++){
            id = i.toString();
            factors = findFactors(parseInt(id.length));
            goodNumber = false;
            factors.forEach(factor => {
                if(!goodNumber){
                    goodSequence = true;
                    sequence = id.substring(0, factor);
                    curSequence = sequence
                    for(j = factor; j <= id.length-factor; j+=factor){
                        if(j+factor > id.length) break;
                        if(id.substring(j, j+factor) != sequence){
                            goodSequence = false;
                            break;
                        }
                        curSequence+=sequence;
                    }
                    if(goodSequence){
                        sum+=parseInt(curSequence);
                        goodNumber = true;
                    }
                }
            });
        }
    });
    return sum;
}

function findFactors(num){
    factors = [];
    for(i = 1; i < num; i++){
        if(num%i == 0) factors.push(i);
    }
    return factors;
}