// Assignment code here 
var characterLength = 8;
var choiceArr = [];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); //either true or false depending on if user followed the prompts correctly
    var passwordText = document.querySelector("#password");

   if(correctPrompts) { //only if they prompts are corrects, then i can start using generatepassword method and query selector etc to generate the right password
    var newPassword = generatePassword();
    
  
    passwordText.value = newPassword;
  } else {
    passwordText.value = ""; 
  }
}

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length); //the function will gfet a random letter using math.random
  password = password + choiceArr[randomIndex];
  }
  return password;
}
//getting information and selected criteria from user
//parseInt will turn the string input from the user into a number 
function getPrompts() {
  choiceArr = []; //resetting it to be empty so that it will always restart from here
  characterLength = parseInt(prompt("how many chacacters should we make this password? should between 8 and 128"))
  //NaN stands for not a number....this makes sure than the user types the right thing...if they do, the if statement below should return as false
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //here, we are basically hoping all this is false because that means the user is inputing accepting criteria so that we can generate a password for them
    alert("Please make sure the length is between 8 and 128 characters!!");
    return false;

  } 
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if(confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
  }
  if(confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}