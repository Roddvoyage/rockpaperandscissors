const rockButton = document.getElementById('weaponImg-rock');
const paperButton = document.getElementById('weaponImg-paper');
const scissorsButton = document.getElementById('weaponImg-scissors');
const scissorsTitleButton = document.getElementById('scissorsTitle');
const rockTitleButton = document.getElementById('rockTitle');
const paperTitleButton = document.getElementById('paperTitle');
const Player = document.getElementById('Player');
const UPC = document.getElementById('UPCS');

const whowon = document.getElementById('whowon');
const bothplays = document.getElementById('bothplays')

let playerSelection = '';
let UPCSelection

let MeScore = 0
let ComputerScore = 0

function Rock2() {
    rockButton.src = 'rock2.png';
    rockTitleButton.style.color = '#b0589d';
}

function Rock1() {
    rockButton.src = 'rock1.png';
    rockTitleButton.style.color = 'white';
}

function Rock3() {
    rockButton.src = 'rock3.png';
    rockTitleButton.style.color = '#312a6f';
    playRock();
}


function Paper2() {
    paperButton.src = 'paper2.png';
    paperTitleButton.style.color = '#5abcaa';
}

function Paper1() {
    paperButton.src = 'paper1.png';
    paperTitleButton.style.color = 'white';
}

function Paper3() {
    paperButton.src = 'paper3.png';
    paperTitleButton.style.color = '#312a6f';
    playPaper();
}




function Scissors2() {
    scissorsButton.src = 'scissors2.png';
    scissorsTitleButton.style.color = '#3572b8';
}

function Scissors1() {
    scissorsButton.src = 'scissors1.png';
    scissorsTitleButton.style.color = 'white';
}

function Scissors3() {
    scissorsButton.src = 'scissors3.png';
    scissorsTitleButton.style.color = '#312a6f';
    playScissors();
}






function playRock(){
    playerSelection = 'rock'
    UPCSelection = Math.floor(Math.random() * 3);

    if(UPCSelection === 0) {
       console.log('draw');
       bothplays.innerHTML = 'you chose rock and upc chose rock';
       whowon.innerHTML = 'its a draw.'
    } else if (UPCSelection === 2) {
        MeScore++;
        Player.textContent = MeScore;
        bothplays.innerHTML = 'you chose rock and upc chose paper';
        whowon.innerHTML = 'you won!'
    } else if (UPCSelection === 1) {
        ComputerScore++;
        UPC.textContent = ComputerScore;
        bothplays.innerHTML = 'you chose rock and upc chose scissors';
        whowon.innerHTML = 'upc won...'
    } 
}

function playPaper(){
    playerSelection = 'paper'
    UPCSelection = Math.floor(Math.random() * 3);

    if(UPCSelection === 1) {
       console.log('draw');
       bothplays.innerHTML = 'you chose paper and upc chose paper';
       whowon.innerHTML = 'its a draw.'
    } else if (UPCSelection === 0) {
        MeScore++;
        Player.textContent = MeScore;
        bothplays.innerHTML = 'you chose paper and upc chose rock';
        whowon.innerHTML = 'you won!'
    } else if (UPCSelection === 2) {
        ComputerScore++;
        UPC.textContent = ComputerScore;
        bothplays.innerHTML = 'you chose paper and upc chose scissors';
        whowon.innerHTML = 'upc won...'
    } 
}

function playScissors(){
    playerSelection = 'rock'
    UPCSelection = Math.floor(Math.random() * 3);

    if(UPCSelection === 2) {
       console.log('draw');
       bothplays.innerHTML = 'you chose scissors and upc chose scissors';
       whowon.innerHTML = 'its a draw.'
    } else if (UPCSelection === 1) {
        MeScore++;
        Player.textContent = MeScore;
        bothplays.innerHTML = 'you chose scissors and upc chose paper';
        whowon.innerHTML = 'you won!'
    } else if (UPCSelection === 0) {
        ComputerScore++;
        UPC.textContent = ComputerScore;
        bothplays.innerHTML = 'you chose scissors and upc chose rock';
        whowon.innerHTML = 'upc won...'
    } 
}




/*

if(playerSelection === 'rock' && UPCSelection === 'rock') {
    PlayerScore += '1';
    playerSelection = '';
    UPCSelection = '';
    
} else if (playerSelection === 'rock' && UPCSelection === 'scissors') {
    PlayerScore += 1;
    playerSelection = '';
    UPCSelection = '';
} else if (playerSelection === 'rock' && UPCSelection === 'paper') {
    UPCScore += 1;
    playerSelection = '';
    UPCSelection = '';
} 

if(playerSelection === 'paper' && UPCSelection === 'paper') {
    PlayerScore += 1;
} else if (playerSelection === 'paper' && UPCSelection === 'rock') {
    PlayerScore += 1;
} else if (playerSelection === 'paper' && UPCSelection === 'scissors') {
    UPCScore += 1;
} 

if(playerSelection === 'scissors' && UPCSelection === 'scissors') {
    PlayerScore += 1;
} else if (playerSelection === 'scissors' && UPCSelection === 'paper') {
    PlayerScore += 1;
} else if (playerSelection === 'scissors' && UPCSelection === 'rock') {
    UPCScore += 1;
} 

*/
