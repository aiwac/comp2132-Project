
const popup            = document.getElementById('popup');
const closePopup       = document.getElementById('close-pop-up');
const gameOver         = document.getElementById('game-over');

const newGame          = document.getElementById('new-game');
const rollDice         = document.getElementById('roll-dice');
const diceImg          = document.getElementById('dice-img');

const p1Score          = document.getElementById('p1-score')
const p1Total          = document.getElementById('p1-total')

const p2Score          = document.getElementById('p2-score')
const p2Total          = document.getElementById('p2-total')

let p1ScoreThisRound = 0;
let p1TotalScore = 0;

let p2ScoreThisRound = 0;
let p2TotalScore = 0;

let p1Dice1;
let p1Dice2;
let p2Dice1;
let p2Dice2;

let round = 0;


class Player{
    constructor(name){
        this.name = name;
    }

    firstDice(value){
        return document.getElementById(`${this.name}-first-dice`).src=`images/dice_${value}.png`;               
    }

    secondDice(value){
        return document.getElementById(`${this.name}-second-dice`).src=`images/dice_${value}.png`;  
    }

    
}

let you = new Player("p1");
let opponent = new Player("p2")

popup.style.opacity = "0";

closePopup.addEventListener("click", function(){
    popup.style.transition = "0.5s";
    popup.style.opacity = "0"; 
});


newGame.addEventListener('click', function(){
    round = 0;
    p1ScoreThisRound = 0;
    p1TotalScore = 0;
    p2ScoreThisRound = 0;
    p2TotalScore = 0;

    p1Score.innerHTML = `<p>0</p>`;
    p1Total.innerHTML = `<p>0</p>`;
    p2Score.innerHTML = `<p>0</p>`;
    p2Total.innerHTML = `<p>0</p>`;

    you.firstDice(1);
    you.secondDice(1);
    opponent.firstDice(1);
    opponent.secondDice(1);

});

rollDice.addEventListener('click', function(){
    round += 1;

    if (round <= 3){
        let p1Dice1 = (Math.floor(Math.random() * 6) + 1);
        let p1Dice2 = (Math.floor(Math.random() * 6) + 1);
        let p2Dice1 = (Math.floor(Math.random() * 6) + 1);
        let p2Dice2 = (Math.floor(Math.random() * 6) + 1);
    
    
        you.firstDice(p1Dice1);
        you.secondDice(p1Dice2);
        opponent.firstDice(p2Dice1);
        opponent.secondDice(p2Dice2);
    
        if (p1Dice1 == 1 || p1Dice2 == 1){
            p1ScoreThisRound = 0;
    
        } else if (p1Dice1 === p1Dice2){
            p1ScoreThisRound = ((p1Dice1 + p1Dice2) * 2);
    
        } else {
            p1ScoreThisRound = p1Dice1 + p1Dice2;
        }

        p1TotalScore += p1ScoreThisRound;
        p1Score.innerHTML = `<p>${p1ScoreThisRound}</p>`;
        p1Total.innerHTML = `<p>${p1TotalScore}</p>`;
    
        if (p2Dice1 == 1 || p2Dice2 == 1){
            p2ScoreThisRound = 0;
    
        } else if (p2Dice1 === p2Dice2){
            p2ScoreThisRound = ((p2Dice1 + p2Dice2) * 2);
    
        } else {
            p2ScoreThisRound = p2Dice1 + p2Dice2;
        }
        p2TotalScore += p2ScoreThisRound;
        p2Score.innerHTML = `<p>${p2ScoreThisRound}</p>`;
        p2Total.innerHTML = `<p>${p2TotalScore}</p>`;

    } 
    
    if(round == 3){
        if (p1TotalScore == p2TotalScore){
            gameOver.innerHTML = `<p>Its a tie!</p>`;

        } else if(p1TotalScore > p2TotalScore){
            gameOver.innerHTML = `<p>Congratulations, you won!!!</p>`;

        } else {
            gameOver.innerHTML = `<p>Sorry, you lost.</p>`;
        }

        fadeIn();

    }

});

document.getElementById("p2-first-dice").src=`images/dice_2.png`;

function fadeIn(){
    popup.style.transition = "3s";
    popup.style.opacity = "1";
}