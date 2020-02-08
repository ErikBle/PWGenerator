// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added variables 
var allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
var upperLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperNumLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var upperCharLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*';
var numLetters = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charLetters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*';
var numCharLetters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
var noneLetters ='abcdefghijklmnopqrstuvwxyz';
var result = '';


function generatePassword() {

  // variables needed for this function
  var pwLength = parseInt(prompt("Input how many characters you would like your password to be (between 8 and 128)"));
  var confirmUC = confirm("Would you like Uppercase letters?")
  var confirmNum = confirm("Would you like numbers?")
  var confirmSpec = confirm("Would you like special characters?")


  for (var i=0; i<=pwLength; i++)  {
   
    // All possiblities 
    if (confirmUC === true && confirmNum === true && confirmSpec === true) {
        result = result + allLetters.charAt(Math.floor(Math.random()*allLetters.length -1)) } 
    
    else if(confirmUC === true && confirmNum === true && confirmSpec === false) {
         result = result + upperNumLetters.charAt(Math.floor(Math.random()*upperNumLetters.length -1)) }

    else if(confirmUC === true && confirmSpec === true && confirmNum === false) {
        result = result + upperCharLetters.charAt(Math.floor(Math.random()*upperCharLetters.length -1)) }
    
    else if(confirmUC === true && confirmNum === false && confirmSpec === false) {
      result = result + upperLetters.charAt(Math.floor(Math.random()*upperLetters.length -1)) } 
    
    else if(confirmNum === true && confirmSpec === true && confirmUC === false) {
      result = result + numCharLetters.charAt(Math.floor(Math.random()*numCharLetters.length -1)) } 
    
    else if(confirmNum === true && confirmSpec === false && confirmUC === false) {
        result = result + numLetters.charAt(Math.floor(Math.random()*numLetters.length -1)) } 

    else if(confirmSpec === true && confirmNum === false && confirmUC === false) {
          result = result + charLetters.charAt(Math.floor(Math.random()*charLetters.length -1)) } 

    else  {
      result = result + noneLetters.charAt(Math.floor(Math.random()*noneLetters.length -1)) } } 
    
    // Returns the password result
    return result;

    
        }    
