// click, playerchange, checkWInner, reset, draw, 
// css themes - colorChange





var cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("click", clicked));

var player = "x";
var winStroke1 = document.getElementById("winStroke1");
var winStroke2 = document.getElementById("winStroke2");

function clicked() {
    var o = document.createElement("div");
    var span1o = document.createElement("span");
    // var span2o = document.createElement("span");
    o.id = "o";
    o.className = "o";
    span1o.id = "outerCircle";
    // span2o.id = "innerCircle";
    o.appendChild(span1o);
    // o.appendChild(span2o);

    var x = document.createElement("div");
    var span1x = document.createElement("span");
    var span2x = document.createElement("span");
    x.id = "x";
    x.className = "x";
    span1x.id = "stroke1";
    span2x.id = "stroke2";
    x.appendChild(span1x);
    x.appendChild(span2x);
    // this.style.removeAttribute("onclick");

    // this.removeEventListener("click", clicked);
    let index = this.getAttribute("index");
    winStroke1.style.display = "inline";
    winStroke2.style.display = "inline";

    movesCount++;

    if (player == "o") {
        this.appendChild(o);
        m[index] = "o";
    }
    else {
        this.appendChild(x);
        m[index] = "x";
    }
    checkWInner();
    changePlayer();
    this.style.pointerEvents = "none";

}
var test = document.getElementById("test");
var winMsg = document.getElementById("winMsg");

var m = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

var movesCount = 0;


// var rawWin = (m[0] == m[1] && m[1] == m[2]) || (m[3] == m[4] && m[4] == m[5]) || (m[6] == m[7] && m[7] == m[8]);
// var colWin = (m[0] == m[3] && m[3] == m[6]) || (m[1] == m[4] && m[4] == m[7]) || (m[2] == m[5] && m[5] == m[8]);
// var digWin = (m[0] == m[4] && m[4] == m[8]) || (m[2] == m[4] && m[4] == m[6]);

//! console.log(winner);

var measures = [
    [-115, 0, 115], [-45, 45]
]



function checkWInner() {
    var rawWin = (m[0] == m[1] && m[1] == m[2]) || (m[3] == m[4] && m[4] == m[5]) || (m[6] == m[7] && m[7] == m[8]);
    var colWin = (m[0] == m[3] && m[3] == m[6]) || (m[1] == m[4] && m[4] == m[7]) || (m[2] == m[5] && m[5] == m[8]);
    var digWin = (m[0] == m[4] && m[4] == m[8]) || (m[2] == m[4] && m[4] == m[6]);
    var winner = rawWin || colWin || digWin;

    if ((rawWin && colWin) || (rawWin && digWin) || (colWin && digWin)) {
        winMsg.innerHTML = `player ${player} wins with double strokes`;
    }
    else if (rawWin || colWin || digWin) {
        winMsg.innerHTML = `player ${player} wins`;
    }
    else if (!(rawWin && colWin && digWin) && movesCount == 9) {
        winMsg.innerHTML = "draw!";
    }

    if (winner) {
        m = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
        cells.forEach((cell) => cell.style.pointerEvents = "none");
    }
}

function changePlayer() {
    (player == "x") ? player = "o" : player = "x";
}

// test('changePlayer throws error with non-string argument', () => {
//   expect(() => changePlayer(123)).toThrow('Invalid argument: player must be a string');
// });

function clearOut() {
    // player = "x";
    movesCount = 0;
    winMsg.innerHTML = "";
    // rawWin = false;
    // colWin = false;
    // digWin = false;
    var O = document.querySelectorAll(".o");
    var X = document.querySelectorAll(".x");
    O.forEach((el) => el.remove());
    X.forEach((el) => el.remove());
    cells.forEach((cell) => cell.style.pointerEvents = "auto");
    winStroke1.style.display = "none";
    winStroke2.style.display = "none";
    winStroke1.style.rotate = "0deg";
    winStroke2.style.rotate = "0deg";
    winStroke1.style.height = "0%";
    winStroke2.style.height = "0%";
    winStroke1.style.translate = "0 0";
    winStroke2.style.translate = "0 0";
    m = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
}



