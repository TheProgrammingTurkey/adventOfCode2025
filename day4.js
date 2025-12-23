const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    let lines = input.split("\r\n");
    let rolls = [[]];
    lines.forEach(line => {
        rolls.push(line.split(""));
    });
    accessible = 0;
    for(let row = 0; row < rolls.length; row++){
        for(let col = 0; col < rolls[row].length; col++){
            adjacent = rolls[row][col] == "@" ? checkAdjacent(rolls, row, col) : 4;
            if(adjacent < 4 ) accessible++;
        }
    }
    return accessible;
}


function part2(){
    let lines = input.split("\r\n");
    let rolls = [[]];
    lines.forEach(line => {
        rolls.push(line.split(""));
    });
    accessible = 0;
    old = -1;
    while(old != accessible){
        old = accessible;
        for(let row = 0; row < rolls.length; row++){
            for(let col = 0; col < rolls[row].length; col++){
                adjacent = rolls[row][col] == "@" ? checkAdjacent(rolls, row, col) : 4;
                if(adjacent < 4 ){
                    accessible++;
                    rolls[row][col] = ".";
                }
            }
        }
    }
    return accessible;
}

function checkAdjacent(rows, r, c){
    adjacent = 0;
    if(r > 0){
        if(rows[r-1][c] == "@") adjacent++;
        if(c > 0){
            if(rows[r-1][c-1] == "@") adjacent++;
        }
        if(c < rows[r-1].length-1){
            if(rows[r-1][c+1] == "@") adjacent++;
        }
    }
    if(r < rows.length-1){
        if(rows[r+1][c] == "@") adjacent++;
        if(c > 0){
            if(rows[r+1][c-1] == "@") adjacent++;
        }
        if(c < rows[r+1].length-1){
            if(rows[r+1][c+1] == "@") adjacent++;
        }
    }
    if(c > 0){
        if(rows[r][c-1] == "@") adjacent++;
    }
    if(c < rows[r].length-1){
        if(rows[r][c+1] == "@") adjacent++;
    }
    return adjacent;
}