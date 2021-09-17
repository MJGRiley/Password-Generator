// Assignment Code (Global variables)
var generateBtn = document.querySelector("#generate");
var results = [];

//starts generating the password
function generatePassword() {
  // tells us the button functions
  console.log("Button Pushed!");
  // asks the user how many characters they would like in the generated password
  var howMany = window.prompt("How many characters?\nBetween 8- 128 only");
  //Turns string input into a number
  howMany = parseInt(howMany);
  //console.log(howMany)
  // if the user enters a number outside the correct range or a string, it prompts for a correct number
  if (howMany < 7 || howMany > 129) {
    console.log(typeof(howMany) + howMany);
      howMany = window.prompt("Only numbers between 8 - 128 can be used")
  }
  // if the user enters a non number it prompts for another
  if (typeof(howMany) != "number") {
      console.log(howMany);
      howMany = window.prompt("Only numbers 8- 128");     
  } 

  //creating variable outside createSelection function for correct scope
  var selected = [];
  function createSelection() {
    var chars = {
      inc: [window.confirm("Include numbers?\n1234567890"),
      window.confirm("Include uppercase letters?\nABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      window.confirm("Include lowercase?\nabcdefghijklmnopqrstuvwxyz"),
      window.confirm("Include special characters?\n~!?@#$%^&*/-+<>|_."),],
      numb: [0,1,2,3,4,5,6,7,8,9],
      upp: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      low: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      spec: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"],
    }
    if (!chars.inc[0] && !chars.inc [1] &&! chars.inc[2] &&! chars.inc[3]) {
      alert("Zero types of characters included");
      return "Try again!";
    }

    for (i=0;i<4;i++) {
      if (chars.inc[i]) {selected.concat(chars.numb);
      console.log(chars[i]);
      console.log(selected);
      }
    }
    
  }
  createSelection();
  for (i=0; i < howMany; i++) {
      results = results.concat(selected[Math.floor(Math.random() * selected.length)]);
      console.log("for loop!");
      console.log(results);
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
