memStringNode = document.getElementById("memorize_string")
memStringNode.textContent = '';
updateMemorizeString();

function submitAnswer() {
    if (document.getElementById("guess").value === memStringNode.textContent) {
        document.getElementById("guess").value = ''
        updateMemorizeString();
    }
}

async function updateMemorizeString() {
    memStringNode.textContent += Math.floor(Math.random() * 10);
    memStringNode.style.display = "grid";
    await new Promise(r => setTimeout(r, 2000));
    memStringNode.style.display = "none";
}