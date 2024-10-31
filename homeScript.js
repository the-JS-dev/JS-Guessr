var answer = parseInt(Math.random() * 100);
var enteredNumbers = [];
var numAttempts = 0;
var guessElement = document.getElementById('gc');
var distance = 0;
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
                enteredNumbers.push(naturalField);
                document.getElementById("aC").innerHTML = numAttempts;
                document.getElementById("eN").innerHTML = enteredNumbers;
                window.alert("Congratulations! You guessed the number in "+numAttempts+" attempts! Click 'OK' to play again...");
                answerISCorrect = true;
                location.reload();
            } else {
                if (naturalField >= answer) {
                    numAttempts += 1;
                    enteredNumbers.push(naturalField);
                    document.getElementById("aC").innerHTML = numAttempts;
                    document.getElementById("eN").innerHTML = enteredNumbers;
                    window.alert("Your guess is higher than the number... try again!");
                } else {
                    if (naturalField <= answer) {
                        numAttempts += 1;
                        enteredNumbers.push(naturalField);
                        document.getElementById("aC").innerHTML = numAttempts;
                        document.getElementById("eN").innerHTML = enteredNumbers;
                        window.alert("Your guess is lower than the number... try again!");
                    } else {
                        if (naturalField == '') {window.alert('Please enter a valid input! No letters, or null values~');}   
                    }
                }
            }
        }
    }
}
