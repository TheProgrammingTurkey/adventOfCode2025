const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    let ingredients = input.split("\r\n\r\n")[1].split("\r\n");
    let freshRanges = input.split("\r\n\r\n")[0].split("\r\n");
    numFresh = 0;
    ingredients.forEach(ingredient => {
        let fresh = false;
        freshRanges.forEach(range => {
            let min = parseInt(range.split("-")[0]);
            let max = parseInt(range.split("-")[1]);
            if(ingredient <= max && ingredient >= min){
                fresh = true;
            }
        });
        if(fresh) numFresh++;
    });
    return numFresh;
}


function part2(){
    let ranges = input.split("\r\n\r\n")[0].split("\r\n");
    let freshRanges = [[]];
    freshRanges.pop();
    ranges.forEach(range => {
        freshRanges.push(range.split("-"));
    });
    freshRanges.sort((a,b) => a[0] - b[0]);
    let min = parseInt(freshRanges[0][0]);
    let max = parseInt(freshRanges[0][1]);
    for(let i = 1; i < freshRanges.length; i++){
        if(parseInt(freshRanges[i][1]) < max) continue;
        const curMin = parseInt(freshRanges[i][0]);
        const curMax = parseInt(freshRanges[i][1]);
        if(curMin > max){
            min+=curMin-max-1;
        }
        max=curMax;
    }
    return max-min+1;
}