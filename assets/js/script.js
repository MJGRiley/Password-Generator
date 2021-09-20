// Assignment Code 
var generateBtn = document.querySelector("#generate");

//the function to generating the password
function generatePassword() {
  // Logs when the button is clicked
  console.log("Button Pushed!");
  // asks the user how many characters they would like in the generated password
  var howMany = window.prompt("How many characters?","Between 8 - 128 only");
  // Tells the user to try again if they click cancel
  if (!howMany) {return "You have to choose a number\nTry Again"}
  // Try again if they enter any non-number
  if (!Number(howMany)) {return "Non-number values aren't allowed\nTry Again"}
  // Turns string input into a number
  howMany = parseInt(howMany);
  // if numbers are outside the correct range Try again
  if (howMany < 8 || howMany > 128) {
    console.log(typeof(howMany) + howMany);
    return "Either too big or too small\nTry Again";
  }
  //Logs length of password requested
  console.log("Requested " + howMany + " character password.")

  function createSelection() {
    //kept variables for this section in this object
    var chars = {
      inc: [window.confirm("Include numbers?\n1234567890"),
      window.confirm("Include uppercase letters?\nABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      window.confirm("Include lowercase?\nabcdefghijklmnopqrstuvwxyz"),
      window.confirm("Include special characters?\n~!?@#$%^&*/-+<>|_."),],
      //the arrays are in the same order that the user is asked to reduce confusion in the following for loop
      0: [0,1,2,3,4,5,6,7,8,9],
      1: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      2: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      3: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"],
      selected: [],
    }
    //Try again if user selected as password with no types of characters
    if (!chars.inc[0] && !chars.inc [1] &&! chars.inc[2] &&! chars.inc[3]) {
      alert("Zero types of characters included");
      return "You have to include at least 1 character type\nTry again!";
    }
    for (i=0;i<4;i++) {
      console.log(i + " " + chars.inc[i])
      if (chars.inc[i]) { 
        chars.selected = chars.selected.concat(chars[i])
      }
    }
    console.log("From these characters:" + chars.selected)
    return chars.selected;
  }
  var selection =  createSelection();//calls createSelection and puts it in selection
  var results = []; //gets the array ready to be used
  //generates a password based on contents of selection and howMany characters the user wants and outputs results
  for (i=0; i < howMany; i++) {
    //pseudo-randomly chooses all characters from selection
    results = results.concat(selection[Math.floor(Math.random() * selection.length)]);
  }
  console.log(results.length + " character password generated" )
  return results.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
