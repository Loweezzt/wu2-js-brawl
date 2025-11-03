
const PlayerName = "Lowe"
let playerHp = 100
let enemyHp = 100
Math.random()
Math.floor(Math.random(1))
Math.ceil(Math.random(6))


function rollDice() {
    return Math.ceil(Math.random() * 6)
}

console.log(rollDice())

let playerRoll = rollDice()
let enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
dmg = playerRoll - enemyRoll
    } else if (enemyRoll > playerRoll) {

    } else {
        console.log("Snyggt parerat.")
    }