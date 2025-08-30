memStringNode = document.getElementById("memorize_string")
inputGuess = document.getElementById("guess")
gameForm = document.getElementById("game_form");
dailyRNG = new Math.seedrandom(new Date().toDateString());

const Mode = {
    DAILY: "daily",
    RANDOM: "random"
};
mode = Mode.DAILY;

selDaily();

function selDaily() {
    mode = Mode.DAILY;
    document.getElementById("dailyButton").classList.add("is-primary");
    document.getElementById("randomButton").classList.remove("is-primary");
    inputGuess.setAttribute("placeholder", "Type the number (You can skip ahead if you know it)");
    resetGame();
}

function selRandom() {
    mode = Mode.RANDOM;
    document.getElementById("dailyButton").classList.remove("is-primary");
    document.getElementById("randomButton").classList.add("is-primary");
    inputGuess.setAttribute("placeholder", "Type the number");
    resetGame();
}

function random() {
    if (mode == Mode.DAILY) {return Math.abs(dailyRNG.int32());}
    return Math.floor(Math.random() * 100000);
}

function resetGame() {
    document.getElementById("lose_screen").style.display = "none";
    dailyRNG = new Math.seedrandom(new Date().toDateString());
    gameForm.reset();
    inputGuess.value = 'x'.repeat(4);

    score = 5
    memString = '' + random();
    memStringNode.textContent = memString.slice(0, score);
    updateMemorizeString();
    gameForm.reset();
}

function submitAnswer() {
    while (inputGuess.value.length >= memString.length) {
        memString += random();
    }

    document.getElementById("hero-body").classList.add("level");
    
    if (memString.slice(0, Math.max(inputGuess.value.length, score)) === inputGuess.value) {
        updateMemorizeString();
    } else {
        gameForm.style.display = "none";
        memStringNode.style.display = "grid";
        document.getElementById("lose_screen").style.display = "grid";
        document.getElementById("lose_screen").textContent = "SCORE: " + score;
    }

    inputGuess.value = ''
}

async function updateMemorizeString() {
    score = inputGuess.value.length + 1;
    memStringNode.textContent = memString.slice(0, score);
    memStringNode.style.display = "grid";
    gameForm.style.display = "none";

    await new Promise(r => setTimeout(r, 3000));
    memStringNode.style.display = "none";
    document.getElementById("hero-body").classList.remove("level");
    gameForm.style.display = "grid";
    inputGuess.focus();
}