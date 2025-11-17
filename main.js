let playerHp = 40
let enemyHp = 40
class Player {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}
const enemy = new Player("Goblin", 40)
let round

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

console.log(rollDice())

const playButton = document.querySelector("#play-button")
const stopButton = document.querySelector("#stop-button")
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
let start = 0

function gameLoop(timestamp) {
    start = timestamp - start;
    console.log(timestamp, start)
    if (start / 1000 > 1) {
        gameRound()
        start = 0
    }
    round = window.requestAnimationFrame(gameLoop)
}

function stop() {
    console.log("stop")
    window.cancelAnimationFrame(round)
}
playButton.addEventListener("click", gameLoop)
stopButton.addEventListener("click", stop)


