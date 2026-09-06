// 1. player 1 human choses 
// 2. player 2 ai choses randomly
// 3. choices are compared
// 4. winner gets a point
// 5. checks for point limit
// 6. game continues or ends


let getRandomInt = (max) => Math.floor(Math.random() * max);

function computerChoice() {
    let choice = getRandomInt(3);
    
    switch (choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
        return "Scissors";
        break;
    }
}

function compareChoices(player, computer) {
    let p1 = player;
    let p2 = computer;

    if (p1 === p2) return "Draw!";

    if (p1 === "Rock" && p2 === "Scissors" ||
        p1 === "Paper" && p2 === "Rock" ||
        p1 === "Scissors" && p2 === "Paper" ) {
            return "You Win!";
    } else { return "You Lose!"}
}

function playRound() {
    let p1 = prompt("Rock Paper or Scissors?");
    let p2 = computerChoice();
    
    console.log(`You choose: ${p1}`);
    console.log(`Opponent choose: ${p2}`);

    result = compareChoices(p1, p2);

    console.log("\n" + result + "\n\n\n");

    return result;
}

function playGame() {
    let roundNum = parseInt(prompt("To how many point do You want to play?"));

    let p1 = 0;
    let p2 = 0;

    while (p1 < roundNum && p2 < roundNum) {
        let result = playRound();

        if (result === "You Win!") {
            p1++;
        } else if (result === "You Lose!") {
            p2++;
        }
    }

    if (p1 === roundNum) console.log(`You won the Game!\n\nYour Score: ${p1}\nOpponent's Score: ${p2}`);
    if (p2 === roundNum) console.log(`You lost the Game!\n\nYour Score: ${p1}\nOpponent's Score: ${p2}`); 
}

// playGame();