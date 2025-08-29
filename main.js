memStringNode = document.getElementById("memorize_string")
inputGuess = document.getElementById("guess")

dailyRNG = new Math.seedrandom(new Date().toDateString());
memStringNode.textContent = '' + Math.floor(dailyRNG() * 10000);
updateMemorizeString();

function submitAnswer() {
    inputGuess.value = ''
    if (inputGuess.value === memStringNode.textContent) {
        updateMemorizeString();
    } else {
        document.getElementById("game_form").style.display = "none";
        memStringNode.style.display = "grid";
        document.getElementById("lose_screen").style.display = "grid";
        document.getElementById("lose_screen").textContent += memStringNode.textContent.length
    }
}

async function updateMemorizeString() {
    memStringNode.textContent += Math.floor(dailyRNG() * 10);
    memStringNode.style.display = "grid";
    document.getElementById("game_form").style.display = "none";
    await new Promise(r => setTimeout(r, 3000));
    memStringNode.style.display = "none";
    document.getElementById("game_form").style.display = "grid";
    inputGuess.focus();
}