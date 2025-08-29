memStringNode = document.getElementById("memorize_string")
memStringNode.textContent = '';
updateMemorizeString();

function submitAnswer() {
    if (document.getElementById("guess").value === memStringNode.textContent) {
        document.getElementById("guess").value = ''
        updateMemorizeString();
    } else {
        document.getElementById("game_form").style.display = "none";
        document.getElementById("lose_screen").style.display = "grid";
        document.getElementById("lose_screen").textContent += memStringNode.textContent.length
    }
}

async function updateMemorizeString() {
    memStringNode.textContent += Math.floor(Math.random() * 10);
    memStringNode.style.display = "grid";
    await new Promise(r => setTimeout(r, 2000));
    if (rapidGuess == storedRapid) {memStringNode.style.display = "none";}
}