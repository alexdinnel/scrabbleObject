var LetterValue = function(letters){
  var letterPoints = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10};
  return letterPoints[letters];
};

var wordSum = function(word){
  word = word.toString().toUpperCase();
  var finalPoints = 0;
  var pointOfLetter = 0;
  for(var i = 0; i < word.length; i++){
    pointOfLetter = LetterValue(word.charAt(i));
    finalPoints += pointOfLetter; 
  };
  if(finalPoints % 1 != 0){
    return "Not a valid input";
  } else {
    return finalPoints;
  }
};

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    var userWord = $('input#wordInput').val();
    var finalPoints = Scrabble(userWord);

    $(".finalResult").text("Your word is worth: " + finalPoints + " points!");
    $("#finalResult").show();
    this.reset();
    event.preventDefault();
  });
});


