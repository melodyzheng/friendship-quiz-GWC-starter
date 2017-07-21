// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty


//adds user-submitted answer to answerList
function submitAnswer() {
  var answer = document.getElementById("answerInput").value;
  var lowercaseAnswer = answer.toLowerCase(); // changes all letters in answerInput to be lowercase
  console.log(lowercaseAnswer);
  answerList.push(lowercaseAnswer);
  console.log(answerList);

}

//checks if user-submitted guess is in answerList
function checkGuess() {
  var guess = document.getElementById("guessInput").value;
  var lowercaseGuess = guess.toLowerCase(); // changes all letters in guessInput to be lowercase
  console.log(lowercaseGuess);
  for(i=0;i<answerList.length;i++){
      if (lowercaseGuess == answerList[i]){
        alert("You have guessed correctly!");
        return;
      }
  }
  alert("Try again!");
}

