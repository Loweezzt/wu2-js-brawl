const playerName = "Loweezzt"
let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

console.log(rollDice())

const playerHpElement = document.querySelector("#player-hp")
const enemyHpElement = document.querySelector("#enemy-hp")

function gameRound() {
    if (playerHp <= 0) {
        console.log("Du är död! Spelet är slut.")
    } else if (enemyHp <= 0) {
        console.log("Fienden är död! Du vinner!")
    }
    let playerRoll = rollDice()
    let enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
        const damage = playerRoll - enemyRoll
        console.log(`Du slår fienden för ${damage}!`)
        enemyHp -= damage
    } else if (enemyRoll > playerRoll) {
        const damage = enemyRoll - playerRoll
        console.log(`Nedrans, du blir träffad för ${damage}!`)
        playerHp -= damage
    } else {
        console.log("Snyggt parerat, inget händer!")
    }
    playerHpElement.textContent = playerHp
    enemyHpElement.textContent = enemyHp
}
const playButton = document.querySelector("#play-button")
playButton.addEventListener("click", gameRound)

