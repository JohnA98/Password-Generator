// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Array of all the different characters

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChars = " !'][@{}#$%^&*()-=_+,./<>;:`~?";


//function to generate the password
function generatePassword() {
  //get length of password, if below 8 or above 128, then exit function.
  var passLength = prompt("Enter the length you want your password, between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Invalid password length. Please choose between 8 and 128.");
    return;
  }
  var password = "";
  var characters = ""; // this variable will contain the set of characters for the computer to pull from when making the password
  
  // Checks which criteria the user wants in their password.
  var uppercaseB = confirm("Include uppercase letters in your password?");
  var lowercaseB = confirm("Include lowercase letters in your password?");
  var numbersB = confirm("Include numbers in your password?");
  var specialCharsB = confirm("Include special characters in your password?");
// If the user did not pick any criteria, then no password will be created.
  if (!uppercaseB && !lowercaseB && !numbersB && !specialCharsB) {
    alert("Please choose some criteria for the password characters.");
    return;
  }
// checks to see which character sets are to be added in creating the password
  if (uppercaseB) {
    characters = uppercase;
    password += randomCharacter(uppercase);
  }
  if (lowercaseB) {
    characters += lowercase;
    password += randomCharacter(lowercase);

  }  
  if (numbersB) {
    characters += numbers;
    password += randomCharacter(numbers);
  }  
  if (specialCharsB) {
    characters += specialChars;
    password += randomCharacter(specialChars);
  }
//generating the password. variable i starts at password.length because I add whatever criteria is needed first in the password, so the criteria is satisfied. Explained in next function.
  for (var i = password.length; i < passLength; i++) {
    var randomChar = Math.floor(Math.random() * characters.length);
    password += characters[randomChar];
  }
return password
}

//This function gets 1 character from 1 of the character sets that the user wants in their password. I made this function so that the criteria of having different characters is always satisfied, as sometimes I found that the password wouldn't contain some values, especially if the length was short. 
function randomCharacter(criteriaSet) {
  var randomChar = Math.floor(Math.random() * criteriaSet.length);
  return criteriaSet[randomChar];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
