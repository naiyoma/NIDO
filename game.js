let choice = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * 3);
let computer = choice[random];

let computerSelection = function computerPlay() {
    return computer;
}
console.log(computerSelection)
