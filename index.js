let computerNumber
let userNumbers = []
let guesses = 0
let maxattempts = 10
let limitNumber = 100

function newGame() {
    window.location.reload();
}

function init() {
        computerNumber = Math.floor(Math.random() * 100 + 1);
        console.log(computerNumber);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value);
    const textInput = document.getElementById("textInput");
    const attempts = document.getElementById("attempts");
    const guessesElement = document.getElementById("guesses");

    if (userNumber >= 1 && userNumber <= 100) {
        userNumbers.push(userNumber);
        guessesElement.innerHTML = userNumbers.join(", ");
        guesses++;
        attempts.innerHTML = userNumbers.length; 

        if (userNumber < computerNumber) {
            textInput.innerHTML = "Valor abaixo!";
        } else if (userNumber > computerNumber) {
            textInput.innerHTML = "Valor acima!";
        } else {
            textInput.innerHTML = "Parabéns! Você acertou!";
            document.getElementById("inputBox").disabled = true;
        }
    } else if (userNumber > limitNumber) {
        textInput.innerHTML = "Digite um número entre 1 e 100!";
    } else if (inputBox.value === "") {
        textInput.innerHTML = "Digite um número!";
    }

    if (guesses >= maxattempts && userNumber !== computerNumber) {
        textInput.innerHTML = "Suas tentativas acabaram! Seu numero era " + computerNumber;
        document.getElementById("inputBox").disabled = true;
    }
}
