let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = ['#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"'];


function generatePassword(){
  let builtArray =[]
  let randomGenerator = Math.floor(Math.random()*builtArray.length);

  if(confirm("Do you want your password to have lower case letters?")){
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  
  if(confirm("Do you want your password to have upper case letters?")){
    builtArray = [...builtArray, ...upperAlphabet]
  }
  
  if(confirm("Do you want your password to have numbers?")){
    builtArray = [...builtArray, ...numbers]
  }
  
  if(confirm("Do you want your password to have special characters?")){
    builtArray = [...builtArray, ...specialCharacters]
    
  }
  
  let passwordLength = prompt("How many characters would like your password to have (must have at least 8 characters but no more than 128 characters?")
  let password= "";
  
  // code for parameters and alert when parameter not met
  if (builtArray.length === 0){
    alert("please try again, you must have at least one character type");
  }
  if (passwordLength >= 8 && passwordLength <= 128 ){

    for (let i = 0; i < passwordLength; i++) {
      password+= builtArray [Math.floor(Math.random()*builtArray.length)];
     
    }
    return password;

  }else {
  alert("undefined* password length must be between 8 and 128 character long. please try again")


  } 

}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (passwordText.value = password){
    alert(password)
    
  };
  
}

generateBtn.addEventListener("click", writePassword);

