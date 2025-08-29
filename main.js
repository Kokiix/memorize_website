memStringNode = document.getElementById("memorize_string")
inputGuess = document.getElementById("guess")

memStringNode.textContent = '' + Math.floor(Math.random() * (10000 - 1111) + 1111);
updateMemorizeString();

async function submitAnswer() {
    if (inputGuess.value === memStringNode.textContent) {
        inputGuess.value = ''
        await updateMemorizeString();
    } else {
        document.getElementById("game_form").style.display = "none";
        memStringNode.style.display = "grid";
        document.getElementById("lose_screen").style.display = "grid";
        document.getElementById("lose_screen").textContent += memStringNode.textContent.length
    }
}

async function updateMemorizeString() {
    memStringNode.textContent += Math.floor(Math.random() * 10);
    memStringNode.style.display = "grid";
    document.getElementById("game_form").style.display = "none";
    await new Promise(r => setTimeout(r, 3000));
    memStringNode.style.display = "none";
    document.getElementById("game_form").style.display = "grid";
}