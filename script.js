let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(hguess, cguess, secret){
      if(Math.abs(hguess - secret) <= Math.abs(cguess - secret)){
        return true;
    } else if(Math.abs(hguess - secret) >= Math.abs(cguess - secret)){
        return false;
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore ++;
    } else if(winner === 'computer'){
        computerScore ++;
    }
}

function advanceRound(){
    return currentRoundNumber ++;
}

