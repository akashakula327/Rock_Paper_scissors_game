let gameArray = ["Rock", "Paper", "Scissor"];
let gameResult = document.getElementById("gameResult");
let computerOption;
let myOption;
let yourChoosen = document.getElementById("yourChoosen");
let computerChoosen = document.getElementById("computerChoosen");

function rock() {
    let myOption = "Rock";
    checkResult(myOption);

}

function paper() {
    let myOption = "Paper";
    checkResult(myOption);

}

function scissor() {
    let myOption = "Scissor";
    checkResult(myOption);

}

function checkResult(myOption) {
    if ((myOption === "Rock" && computerOption === "Scissor") || (myOption === "Paper" && computerOption === "Rock") || (myOption === "Scissor" && computerOption === "Paper")) {
        gameResult.textContent = "Win";
        gameResult.classList.add("win");
        gameResult.classList.remove("lose");
        gameResult.classList.remove("draw");

        yourChoosen.textContent = "Your option : " + myOption;
        computerChoosen.textContent = "Computer option :" + computerOption;
    } else if (myOption === computerOption) {
        gameResult.textContent = "Draw";
        gameResult.classList.add("draw");
        gameResult.classList.remove("win");
        gameResult.classList.remove("lose");
        yourChoosen.textContent = "Your option : " + myOption;
        computerChoosen.textContent = "Computer option :" + computerOption;
    } else {
        gameResult.textContent = "Lose";
        gameResult.classList.add("lose");
        gameResult.classList.remove("win");
        gameResult.classList.remove("draw");
        yourChoosen.textContent = "Your option : " + myOption;
        computerChoosen.textContent = "Computer option :" + computerOption;
    }
}

function reset() {
    let randomNumber = Math.ceil(Math.random() * 3) - 1;
    computerOption = gameArray[randomNumber];
    myOption = "";
    gameResult.textContent = "Result";
    gameResult.classList.remove("win");
    gameResult.classList.remove("lose");
    gameResult.classList.remove("draw");
    yourChoosen.textContent = "Your option :";
    computerChoosen.textContent = "Computer option :";

}
reset();