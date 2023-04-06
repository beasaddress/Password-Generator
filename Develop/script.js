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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}
//getting information and selected criteria from user
//parseInt will turn the string input from the user into a number 
function getPrompts(){
  choiceArr = []; //resetting it to be empty so that it will always restart from here
  characterLength = parseInt(prompt("how many chacacters should we make this password? should between 8 and 128"))
  //NaN stands for not a number....this makes sure than the user types the right thing...if they do, the if statement below should return as false
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //here, we are basically hoping all this is false because that means the user is inputing accepting criteria so that we can generate a password for them
    alert("Please make sure the length is between 8 and 128 characters!!");
    return false;

  } 
  if (confirm("would u like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if(confirm("would you like special characters?")) {
    choiceArr = choiceArr.concat(specialChar);
  }
  if(confirm("would you like numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}