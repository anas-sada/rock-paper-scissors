

console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.random();

    if (random < 1/3){
        return "rock";
    }
    else if (random < ((1/3)*2)){
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice(){
    let guess = prompt("Please enter your guess ?","rock, paper or scissors");
    return guess; 
}



console.log(getComputerChoice() + ' ' +  getHumanChoice());
