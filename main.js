const playerName = "Loweezzt"
let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

console.log(rollDice())

const playButton = document.querySelector("#play-button")
const playerHpElement = document.querySelector("#player-hp")
const enemyHpElement = document.querySelector("#enemy-hp")
const combatLogElement = document.querySelector("#combat-log")

function log(msg) {
    const li = document.createElement("li")
    li.textContent = msg
    combatLogElement.appendChild(li)
    if (combatLogElement.children.length > 10) {
        combatLogElement.removeChild(combatLogElement.firstChild)
    }
}

function gameRound() {
    if (playerHp <= 0) {
        log("Du är död! Spelet är slut.")

    } else if (enemyHp <= 0) {
        log("Fienden är död! Du vinner!")
    }
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
        const damage = playerRoll - enemyRoll
        log(`Du slår fienden för ${damage}!`)
        enemyHp -= damage
    } else if (enemyRoll > playerRoll) {
        const damage = enemyRoll - playerRoll
        log(`Nedrans, du blir träffad för ${damage}!`)
        playerHp -= damage
    } else {
        log("Snyggt parerat, inget händer!")
    }

    playerHpElement.textContent = playerHp
    enemyHpElement.textContent = enemyHp
}
playButton.addEventListener("click", gameRound)

