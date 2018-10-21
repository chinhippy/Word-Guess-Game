//declare variables: 1. Array GPK names 2. win 3. guesses-left 4. guessed letters array
//5. userGuess

var gpkArr = [
    "adam bomb",
    "trim jim",
    "brutal bridget",
    "jon pond",
    "dizzy dave",
    "termi nate",
    "quick lee"
  ];
  
  var winNum = 0;
  var guessLeft = 12;  
  var userGuessArr = []; //Already guessed letters
  var computerChoiceDashes = [];
  var computerChoiceContainer = [];
  
   
  //Global scope for computer choice to avoid any frequent changes with every key pressed
  var computerChoice = gpkArr[Math.floor(Math.random() * gpkArr.length)];
  //gpkArr will be chosen, by the computer
  console.log(computerChoice);
  
  for (i = 0; i < computerChoice.length; i++) {
    computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));
  
    var displayDashes = computerChoiceDashes.join(" ");
  
    computerChoiceContainer.push(computerChoice[i]);
  
    var displayLetters = computerChoiceContainer.join(" ");
  }
  
  //Displaying the underscores (initally coded with dashes, for some reason)
  document.getElementById("word-guess").textContent = displayDashes;
  $("word-guess").textContent = displayDashes;

  //replaceAt code extracted from stack overflow
  String.prototype.replaceAt = function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
  };
  
  var imgElement = document.getElementById("gpk-image");
  // var imgElement = $("#gpk-image");
  //function for showing images using a suggestion from stack overflow - not quite getting this to function.
  function show_image(src, width, height, style, alt) {
    var img = document.createElement("garbimage");
    // var img = $("<garbimage>"); 
    img.src = src;
    img.width = width;
    img.height = height;
    img.style = style;
    img.alt = alt;
  
    // This will add image to the <div> tag
    document.getElementById("garbimage").appendChild(img)
    // $("garbimage").append("gpk-image");
    console.log(img);
  }
  
  //Create a button TryAgain
  var button = document.getElementById("tryAgain");
  // var button = $("#tryAgain");
  button.style.display = "none";
  button.onclick = tryAgain;
  
  //tryAgain function is to generate a new word that is different from the previous computerChoice
  function tryAgain() {
    userGuessArr = [];
  
    //remove a chosen computerChoice index from the array
    var rmIndex = gpkArr.indexOf(computerChoice);
    gpkArr.splice(rmIndex, 1);
    console.log(gpkArr);
  
    // //Remove Image
    // if (computerChoice === "adam bomb") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // } else if (computerChoice === "trim jim") {
    //   imgElement.parentNode.removeChild(imgElement);
       
    // } else if (computerChoice === "brutal bridget") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // } else if (computerChoice === "jon pond") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // } else if (computerChoice === "dizzy dave") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // } else if (computerChoice === "termi nate") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // } else if (computerChoice === "quick lee") {
    //   imgElement.parentNode.removeChild(imgElement);
  
    // }
    show_image();
  
    //Randomly generate a new computerChoice
    computerChoice = gpkArr[Math.floor(Math.random() * gpkArr.length)];
    console.log(computerChoice);
  
    computerChoiceDashes = [];
    computerChoiceContainer = [];
  
    for (i = 0; i < computerChoice.length; i++) {
      computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));
  
      displayDashes = computerChoiceDashes.join(" ");
    }
  
    for (i = 0; i < computerChoice.length; i++) {
      computerChoiceContainer.push(computerChoice[i]);
  
      displayLetters = computerChoiceContainer.join(" ");
    }
  
    document.getElementById("word-guess").textContent = displayDashes;
  
    //hide the button & image
    button.style.display = "none";
  }
  
  //Create a button playAgain
  var buttonRestart = document.getElementById("restartAgain");
  buttonRestart.style.display = "none";
  buttonRestart.onclick = restartAgain;
  
  function restartAgain() {
    location.reload();
  }
  
  // Onkey Function
  document.onkeyup = function(event) {
  //the user clicks on a random key
    var userGuess = event.key;
      console.log(userGuess);
  
    //using includes method to compare and return false to stop the keyon function working
  
    if (userGuessArr.includes(userGuess)) {
      return false;
    }
  
    if (userGuess !== computerChoice.includes(userGuess)) {
      guessLeft -= 1;
      userGuessArr.push(userGuess);
  
      if (guessLeft === 0) {
        guessLeft = 12;
        userGuessArr = [];
  
        if (displayLetters === "a d a m b o m b") {
          show_image("assets/images/adamBomb.jpg", 376, 410, "display: block;", "Adam Bomb");
          console.log("adam bomb");      

        } else if (displayLetters === "t r i m j i m") {
          show_image("assets/images/trimJim.jpeg", 376, 410, "display: block;", "Trim Jim");          
 
          } else if (displayLetters === "b r u t a l b r i d g e t") {
          show_image("assets/images/brutalBridget.jpg", 376, 410, "display: block;", "Brutal Bridget");
          
        } else if (displayLetters === "j o n p o n d") {
          show_image("assets/images/jonPond.jpg", 376, 410, "display: block;", "Jon Pond" );
          
        } else if (displayLetters === "d i z z y d a v e") {
          show_image("assets/images/dizzyDave.png", 376, 410, "display: block;", "Dizzy Dave");
          
        } else if (displayLetters === "t e r m i n a t e") {
          show_image("assets/images/termiNate.jpg", 376, 410, "display: block;", "Termi Nate");
          
        } else if (displayLetters === "q u i c k l e e") {
          show_image("assets/images/quickLee.jpg", 376, 410, "display: block;", "Quick Lee"
          );          
        }
      }
  
      //reloads the page after 12 guesses are used up
      //computerChoice will be refreshed too with another new word
  
      //Problem: Display the final answer even user cannot guess out the letter
  
      //make button visible
      button.style.display = "block";
      buttonRestart.style.display = "block";
    }
  
    if (computerChoice.includes(userGuess)) {
      //includes() will return true or false
  
      console.log("it matches!");
  
      //displayDashes being replaced by the correct userGuess
      for (var i = 0; i < displayLetters.length; i++) {
        if (userGuess === displayLetters[i]) {
          console.log(i);
  
          var char = displayLetters.charAt(i);
  
          displayDashes = displayDashes.replaceAt(i, char);
  
          document.getElementById("word-guess").textContent = displayDashes;
        }
      }
  
      //when the displaydashes are filled up with displayLetters, the winNum will go up by 1;
      //page will reload again
  
      if (displayDashes === displayLetters) {
        winNum += 1;
        guessLeft = 12;
  
        userGuessArr = [];
  
        //make button visible
        button.style.display = "block";
        buttonRestart.style.display = "block";
      }
  
      if (displayDashes === "a d a m b o m b") {
        show_image("assets/images/adamBomb.jpg", 376, 410, "display: block;", "Adam Bomb");

      } else if (displayDashes === "t r i m j i m") {
        show_image("assets/images/trimJim.jpg", 376, 510, "display: block;", "Trim Jim"); 

      } else if (displayDashes === "b r u t a l b r i d g e t") {
        show_image("assets/images/brutalBridget.jpg", 376, 410, "display: block;", "Brutal Bridget"); 

      } else if (displayDashes === "j o n p o n d") {
        show_image("assets/images/jonPond.jpg", 376, 580, "display: block;", "Jon Pond");

      } else if (displayDashes === "d i z z y d a v e") {
        show_image("assets/images/dizzyDave.png", 376, 510, "display: block;", "Dizzy Dave");  

      } else if (displayDashes === "t e r m i n a t e") {
        show_image("assets/images/termiNate.jpg", 376, 450, "display: block;", "Termi Nate"); 

      } else if (displayDashes === "q u i c k l e e") {
        show_image("assets/images/quickLee.jpg", 376, 510, "display: block;", "Quick Lee");        
      }
    } else {
      console.log("no match");
    }
  
    //display all userGuess into html
  
    document.getElementById("letters-already-guess").textContent = userGuessArr.join(", ");
  
    //Display guessLeft to html
  
    document.getElementById("guess-left").textContent = guessLeft;
  
    //Display Wins-number to html
    document.getElementById("win-num").textContent = winNum;
  };