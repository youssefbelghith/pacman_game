let board;
const rowCount =21;
const columnCount = 19;
const titlesize=32;
const boardWidth= columnCount*titlesize;
const boardHeight= rowCount*titlesize;
let context;

window.onload =function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context = board.getcontext("2d");
}