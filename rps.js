let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3)  // 0, 1, 2
    if(choiceNumber == 0){
        return "rock";
    }
    else if(choiceNumber == 1){
        return "paper";
    }
    else{
        // choiceNumber = 2
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == computerChoice){
        console.log("You tie! Chose the same as the cpu player.");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats paper.");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }

}

function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("-- final scores --");
    console.log("Player Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
}

playGame();