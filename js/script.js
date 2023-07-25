// Seleção de elementos e variaveis

const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#start-btn")
const pauseBtn = document.querySelector("#pause-btn")
const continueBtn = document.querySelector("#continue-btn")
const resetBtn = document.querySelector("#reset-btn")

let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

// eventos

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
continueBtn.addEventListener("click", continueTimer)
resetBtn.addEventListener("click", resetTimer)


// Funções

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused){
            miliseconds += 10

            if(miliseconds === 1000){
                seconds++
                miliseconds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatMiliseconds(miliseconds)
        }

    }, 10)


    startBtn.classList.toggle("none")
    pauseBtn.classList.toggle("none")
}

function pauseTimer() {
    isPaused = true
    pauseBtn.classList.toggle("none")
    continueBtn.classList.toggle("none")
}

function continueTimer() {
    isPaused = false

    continueBtn.classList.toggle("none")
    pauseBtn.classList.toggle("none")
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    miliseconds = 0
    isPaused = false

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"

    startBtn.classList.remove("none")
    pauseBtn.classList.add("none")
    continueBtn.classList.add("none")
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}