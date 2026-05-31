

// console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const random = Math.random();

    if (random < 1/3){
        return "ROCK";
    }
    else if (random < ((1/3)*2)){
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }

}

function getHumanChoice(){
    const guess = prompt("Please enter your guess ?","rock, paper or scissors");
    return guess; 
}

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toUpperCase();
    let roundWinner = "noOne";
    switch (humanSelection) {
        case "ROCK":
            switch (computerSelection){
                case "ROCK":
                    roundWinner = "Draw";
                    break;
                
                case "PAPER":
                    roundWinner = "Computer";
                    computerScore++;
                    break;
                
                case "SCISSORS":
                    roundWinner = "You"
                    humanScore++;
                    break;
            }
        break;
            
        case "PAPER":
            switch (computerSelection){
                case "ROCK":
                    roundWinner = "You";
                    humanScore++;
                    break;
                
                case "PAPER":
                    roundWinner = "Draw";
                    break;
                
                case "SCISSORS":
                    roundWinner = "Computer"
                    computerScore++;
                    break;
            }
        break;

        case "SCISSORS":
            switch (computerSelection){
                case "ROCK":
                    roundWinner = "Computer";
                    computerScore++;
                    break;
                
                case "PAPER":
                    roundWinner = "You";
                    humanScore++;
                    break;
                
                case "SCISSORS":
                    roundWinner = "Draw"
                    break;
            }
        break;
    }

    console.log("You choose (" + humanSelection + ") and the computer choose (" + computerSelection + ") the roundWinner is: " + roundWinner)

}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }
    let finalWinner = "noOne";
    if (humanScore == computerScore){
        finalWinner = "Draw";
    }
    else{
        finalWinner = humanScore < computerScore ? "The computer" : "You";
    }

    console.log("Your score: " + humanScore + "/5");
    console.log("The computer score: " + computerScore + "/5");
    console.log("The final winner is: " + finalWinner);

}


playGame();

// console.log(getComputerChoice() + ' ' +  getHumanChoice());
