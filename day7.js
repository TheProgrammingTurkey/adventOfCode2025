const { table } = require('console');
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf8');
console.log("Part 1: "+ part1());
console.log("Part 2: "+ part2());
function part1(){
    let lines = input.split("\r\n");
    let startPos = lines[0].indexOf("S");
    return followPart1(0, startPos, [], lines)-1;
}


function part2(){
    let lines = input.split("\r\n");
    let startPos = lines[0].indexOf("S");
    let multipliers = Array(lines.length).fill().map(() => Array(lines[0].length).fill(0));
    multipliers[1][startPos] = 1;
    for(let i = 1; i < lines.length-1; i++){
        for(let j = 0; j < lines[i].length; j++){
            if(multipliers[i][j] == 0){
                continue;
            }
            else if(lines[i][j] != "^"){
                multipliers[i+1][j] += multipliers[i][j];
            }
            else{
                multipliers[i+1][j+1]+=multipliers[i][j];
                multipliers[i+1][j-1]+=multipliers[i][j];
            }
        }
    }
    let count = 0;
    for(let i = 0; i < multipliers[multipliers.length-1].length; i++){
        count+=multipliers[multipliers.length-1][i];
    }
    return count;
}

function followPart1(r, c, splits, board){
    if(r == board.length-1 || splits.indexOf(r+" "+c) != -1){
        return 1;
    }
    if(board[r][c] != "^"){
        return followPart1(r+1, c, splits, board);
    }
    splits.push(r+" "+c);
    return followPart1(r+1, c+1, splits, board) + followPart1(r+1, c-1, splits, board);
}