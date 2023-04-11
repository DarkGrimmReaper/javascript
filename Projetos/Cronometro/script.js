const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const milesimos = document.querySelector("#milesimos")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

function startTimer() {
    
    interval = setInterval(() => {
        if(!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutos.textContent = minutes;
            segundos.textContent = seconds;
            milesimos.textContent = miliseconds;
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    minutos.textContent = "00";
    segundos.textContent = "00";
    milesimos.textContent = "000";

    startBtn.style.display = "block"
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}