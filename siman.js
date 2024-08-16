let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
        demo();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level -${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    demo();

}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over !please try agin<br>your score is${level}<br>`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reSet()
    }
}
function btnPress() {

    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reSet() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
function heaDing() {
    h2.innerText = 'Game Over! please try again';
    h2.innerText = `your score is${level}`;
}

h1 = document.querySelector("h1");






function colorChange(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);

}

async function demo () {
    
    await colorChange("red", 1000, () => {
     colorChange("blue", 1000, () => {
            colorChange("yellow", 1000, () => {

            });
        });
    });
}