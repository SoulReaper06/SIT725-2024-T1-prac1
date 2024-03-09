function changeText(){
    var textsArray= [1,2,3,4,5,6,7,8,9,10]
    var number= getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    // document.getElementById("heading").innerHTML= textsArray[number];
    return textsArray[number]
    }
let randomNum = changeText()
function guesser() {
    var guess = document.getElementById("inputGuess");
    var guessNum = guess.value;
    if (randomNum > guessNum){
        alert("Guess higher")
    }
    else if (randomNum < guessNum){
        alert("Guess lower")
    }
    else {
        alert("Correct ! Now click the reset button to start a new game.")
    }
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }

