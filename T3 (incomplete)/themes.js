
var board = document.getElementById("board");
var container = document.getElementById("container");
var stroke1 = document.getElementById("stroke1");
var stroke2 = document.getElementById("stroke2");
var innerCircle = document.getElementById("innerCircle");
var outerCircle = document.getElementById("outerCircle");
// var Xs = document.querySelectorAll(".x");
// var Os = document.querySelectorAll(".o");

function intoTheDark() {
    cells.forEach(cell => {
        cell.style.boxShadow = "inset 0 0 15px 10px #000";
        cell.style.background = "none";
        cell.style.animation = "none";
        cell.style.filter = "opacity(100%)";

        cell.style.borderRadius = "0px"
        cell.style.backgroundColor = "silver";
    });
    board.style.backgroundColor = "#479aa1";
    board.style.background = "none";
    //! stroke1.style.backgroundColor = "red";
    // Xs.forEach(x => {
    //     x.style.backgroundColor = "red";
    // });
}

function evilSpirits() {
    cells.forEach(cell => {
        cell.style.animation = "spirit 3s linear 0s infinite";
        cell.style.borderRadius = "0px";
        cell.style.filter = "opacity(100%)";

        cell.style.boxShadow = "0px 0px 2px rgb(0, 0, 0), 1px -1px 12px rgb(21, 55, 58), 1px 1px 12px rgb(55, 87, 0)";
        cell.style.background = "radial-gradient(black,rgb(53, 53, 53))";
    });
    board.style.backgroundColor = "#000";
    board.style.background = "#000";
    // container.style.backgroundColor = "#000";
    // container.style.border = "10px solid #000";
}

function blackOut() {
    board.style.background = "none";
    board.style.backgroundColor = "black";
    cells.forEach(cell => {
        cell.style.boxShadow = "none";
        cell.style.background = "none";
        cell.style.animation = "none";
        cell.style.backgroundColor = "lightgrey";
        cell.style.filter = "opacity(100%)";

    });
}

function outlined() {
    board.style.background = "none";
    board.style.backgroundColor = "white";
    // board.style.border = "3px solid black";
    cells.forEach(cell => {
        cell.style.boxShadow = "0 0 0px 2px rgb(13, 14, 14)"
        cell.style.background = "none";
        cell.style.animation = "none";
        cell.style.filter = "opacity(100%)";

        cell.style.backgroundColor = "white";
    });
}

function theVoid() {
    board.style.backgroundColor = "transparent";
    board.style.background = "none";
    cells.forEach(cell => {
        cell.style.boxShadow = "none"
        cell.style.background = "none";
        cell.style.border = "none";
        cell.style.animation = "none";
        cell.style.filter = "opacity(100%)";

        cell.style.backgroundColor = "transparent";
    });

}

function lunarEclipse() {
    // board.style.background = "radial-gradient(black, white)";
    board.style.background = "none";
    board.style.overflow = "unset";
    // board.style.borderRadius = "50%";
    // board.style.backgroundColor = "#C2B280";
    cells.forEach(cell => {
        cell.style.boxShadow = "0 0 40px 5px #3B1E47"
        cell.style.background = "transparent";
        cell.style.border = "none";
        cell.style.borderRadius = "50px";
        cell.style.animation = "none";
        cell.style.backgroundColor = "#0C0C0C";
        cell.style.filter = "opacity(100%)";

    });
}
function nightBlindness() {
    cells.forEach(cell => {
        //? cell.style.boxShadow = "0 0 40px 5px #3B1E47"
        //? cell.style.background = "transparent";
        //? cell.style.border = "none";
        //? cell.style.borderRadius = "50px";
        //? cell.style.animation = "none";
        //? cell.style.backgroundColor = "#0C0C0C";
        cell.style.filter = "opacity(10%)";
    });
    //? board.style.background = "none";
    //? board.style.overflow = "unset";
    //? board.style.borderRadius = "0px";
    //? board.style.backgroundColor = "transparent";

}
// var text = "askfjlshadii" + outerCircle;