let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const resultsDiv = document.querySelector("#results");

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3)  // 0, 1, or 2
    if(choiceNumber == 0){
        return "rock";
    }
    else if(choiceNumber == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    resultsDiv.textContent = ("You chose " + humanChoice 
        + " and the computer chose " + computerChoice);
        
    if(humanChoice == computerChoice){
        resultsDiv.textContent += "\nYou tie! Chose the same as the cpu player.";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        resultsDiv.textContent += "\nYou lose! Paper beats rock.";
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        resultsDiv.textContent += "\nYou win! Rock beats scissors.";
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        resultsDiv.textContent += "\nYou lose! Scissors beats paper.";
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        resultsDiv.textContent += "\nYou win! Paper beats rock.";
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        resultsDiv.textContent += "\nYou lose! Rock beats scissors.";
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        resultsDiv.textContent += "\nYou win! Scissors beats paper.";
        humanScore++;
    }

    resultsDiv.textContent += "\n-- current scores --";
    resultsDiv.textContent += "\nPlayer Score:" + humanScore;
    resultsDiv.textContent += "\nComputer Score:" + computerScore;

    if (humanScore == 5 || computerScore == 5){
        resultsDiv.textContent += humanScore == 5 ? 
            "\nGame over, you win!" : "\nGame over, cpu wins!";
        
    }
}


rockButton.addEventListener("click", () => {
    playRound(rockButton.textContent, getComputerChoice())
});

paperButton.addEventListener("click", () => {
    playRound(paperButton.textContent, getComputerChoice())
});

scissorsButton.addEventListener("click", () => {
    playRound(scissorsButton.textContent, getComputerChoice())
});