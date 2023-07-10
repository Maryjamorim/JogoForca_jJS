const words = ["senac", "aluno", "professor"];

let word = "";
let hiddenWord = [];
let errors = 0;
let maxErrors = 6;
let guesses = [];

function chooseRandomWord() {
    word = words[(Math.floor(Math.random() * words.length)].toLowerCase();
    hiddenWord = Array(word.length).fill("_");
}

function displayWord() {
    document.getElementById("word").textContent = hiddenWord.join(" ");
}

function displayGuesses() {
    document.getElementById("guesses").textContent = guesses.join(",");
}

function displayErrors() {
    document.getElementById("errors").textContent = '${errors} / ${maxErrors}';
}

function updateHangmanImage() {
    const hangmanImage =document.getElementById("hangman-image");
    hangmanImage.src = 'img/hangman_${errors}.png';
    hangmanImage.alt = 'Boneco na forca - Erro ${errors}';
}

function checkGuess(input) {
    const guess = input.toLowerCase();

    if(guess.length === 1) {
        if(word.includes(guess)) {
            for(let i = 0; i < word.length; i++) {
                if(word[i] === guess) {
                    hiddenWord[i] = guess;
                }
            }

            if (!hiddenWord.includes("_")) {
                alert("Parabéns, você venceu!");
                resetGame();
            }

        } else {
            errors++;
            if(errors === maxErrors) {
                alert("Você perdeu! A palavra era: " + word);
                resetGame();
            }
        }

    } else {
        if (guess === word) {
            alert("Parabéns, você venceu!");
            resetGame();
    } else {
        errors++;
        if(errors ===maxErrors) {
            alert("Você perdeu! A palavra era: " + word);
            resetGame();
        }
    }
}

guesses.push(guess);
displayWord();
displayGuesses();
displayErrors();
updateHangmanImage();

} 

function resetGame() {
    chooseRandomWord();
    errors = 0;
    guesses = [];
    displayWord();
    displayGuesses();
    displayErrors();
    updateHangmanImage();
    document.getElementById("input").value = "";
}

document.getElementById("submit-button").addEventListener("click", function() {
    const input = document.getElementById("input").value.trim();
    if(input) {
        checkGuess(input);
        document.getElementById("input").value = "";
    }

});

chooseRandomWord();
displayWord();
displayGuesses();
displayErrors();
updateHangmanImage();


