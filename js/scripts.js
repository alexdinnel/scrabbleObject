var LetterValue = function(word){
  var onePointLetter = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1];
  var twoPointLetter = ['D', 'G', 2];  
  var threePointLetter = ['B', 'C', 'M', 'P', 3];
  var fourPointLetter = ['F', 'H', 'V', 'W', 'Y', 4];
  var fivePointLetter = ['K', 5];
  var eightPointLetter = ['J', 'K', 8];
  var tenPointLetter = ['Q', 'Z', 10];
  var letterArray = [onePointLetter, twoPointLetter, threePointLetter, fourPointLetter, fivePointLetter, eightPointLetter, tenPointLetter];

    for(var i  = 0; i < letterArray.length; i++){
      for(var x  = 0; x < letterArray[i].length-1; x++){
        if (word === letterArray[i][x]) {
          return letterArray[i][letterArray[i].length-1]; 
        }
      };
    };
};

var Scrabble = function(word){
  word = word.toString().toUpperCase();
  var userArray = word.split(""); 
  var totalPoints = 0;
  var points = 0;

  userArray.forEach(function(letters){
     points = LetterValue(letters);
     totalPoints += points;
  });

  if (totalPoints % 1 != 0){
    return "Invalid Entry";
  } else {
  return totalPoints;
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

