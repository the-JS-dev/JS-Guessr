var answer = parseInt(Math.random() * 100);
var numAttempts = 0;
var guessElement = document.getElementById('gc');
guessElement.addEventListener('click', guess);

console.log(answer);
var answerISCorrect = false;

function guess() {
    var rawField = document.getElementById("guess");
    var naturalField = parseInt(rawField.value);
    if (answerISCorrect === false) {
        if (naturalField >= 100) {
            window.alert("The number can only be between 1 and 100!");
        } else {
            if (naturalField === answer) {
                numAttempts += 1;
                document.getElementById("aC").innerHTML = numAttempts;
                window.alert("Congratulations! You guessed the number! Reload the page to play again...");
                answerISCorrect = true;
            } else {
                if (naturalField >= answer) {
                    numAttempts += 1;
                    document.getElementById("aC").innerHTML = numAttempts;
                    window.alert("The number is too high... try again!");
                } else {
                    if (naturalField <= answer) {
                        numAttempts += 1;
                        document.getElementById("aC").innerHTML = numAttempts;
                        window.alert("The number is too low... try again!");
                    } else {
                        window.alert("That isn't a number... try again!");
                    }
                }
            }
        }
    }
}
