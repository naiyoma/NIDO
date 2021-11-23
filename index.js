const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-contenct!';
container.appendChild(content);

// rock paper scissors
const toLowerCase = v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()

const answer = prompt(
    "Do you want to play Yes or No"
)
if (answer && ['YES', 'Y'].includes(answer.toUpperCase())) {
    let board = ['ROCK', 'PAPER', 'SCISSORS']
    let answer = prompt('Rock, Paper, or Scissors?')

    if (board.includes(answer.toUpperCase())) {
        let them = board[Math.floor(Math.random() * 3)]
        let you = answer.toUpperCase()

        if (them === you) {
            console.log('draw', you, them)
            alert(`Draw, they choose ${toLowerCase(them)} too!`)
        } else {
            if (
                (you === "SCISSORS" && them === "PAPER") ||
                (you === "PAPER" && them === "ROCK") ||
                (you === "ROCK" && them === "SCISSORS")
            ) {
                console.log("you win", you, them)
                alert(`you win they choose ${toLowerCase(them)}`)
            } else {
                console.log('you lose', you, them)
                alert(`you lose, they choose ${toLowerCase}!`)
            }
        }
    }
}

const cars = ["cool", "heelp"]
console.log(cars[0])
    //define and create your array