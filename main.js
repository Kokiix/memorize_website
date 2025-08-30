memStringNode = document.getElementById("memorize_string")
inputGuess = document.getElementById("guess")
gameForm = document.getElementById("game_form");

gameForm.reset();
inputGuess.value = 'x'.repeat(4);

dailyRNG = new Math.seedrandom(new Date().toDateString());

score = 5
memString = '' + Math.abs(dailyRNG.int32());
memStringNode.textContent = memString.slice(0, score);
updateMemorizeString();
gameForm.reset();

function submitAnswer() {
    if (inputGuess.value.length >= memStringNode.textContent.length) {
        memString += Math.abs(dailyRNG.int32());
    }

    document.getElementById("hero-body").classList.add("level");
    console.log("Internal string to memorize " + memString);
    console.log("Input string " + inputGuess.value);
    
    if (memString.startsWith(inputGuess.value)) {
        updateMemorizeString();
    } else {
        gameForm.style.display = "none";
        memStringNode.style.display = "grid";
        document.getElementById("lose_screen").style.display = "grid";
        document.getElementById("lose_screen").textContent += " " + score;
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