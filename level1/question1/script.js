//Use RegEx to validate form

// set global variables
const names = document.querySelectorAll("input[type='name']");
const formSubmit = document.querySelector("input[type='submit']");
let validateRegex = false;
let validateNames = false;
let i = "";
let message = [];

// Output error messages
function errorOutput(messageArray) {
  for (i = 0; i < messageArray.length; i++) {
    console.log(messageArray[i] + "\n");
  }
}

// Validate that name inputs are not empty
function valNames(){
  for (i = 0; i < names.length; i++) {
    if (!names[i].value) {
      validateNames = false;
      message.push("You must type your first AND last name");
      break
    } else {
      validateNames = true;
    }
  }
}

// Validate phone and email
function valRegex() {
  let phoneInput = document.querySelector("input[type='tel']").value;
  let emailInput = document.querySelector("input[type='email']").value;
  const phoneRegex = /[\d]/;
  const emailRegex = /^.+@.+\..+$/;
  let phoneResult = phoneRegex.test(phoneInput.trim());
  let emailResult = emailRegex.test(emailInput.trim());
  if (phoneResult & emailResult) {
    validateRegex = true;
  } else {
    validateRegex = false;
    if (!emailResult){
      message.push("Incorrect email address format");
    }
    if (!phoneResult) {
      message.push("Incorrect telephone number format");
    }
  }
}

// Check if form is validated correctly
formSubmit.addEventListener("click", function(){
  valRegex(); // call to check regex function
  valNames(); // call to check names function
  if (validateRegex && validateNames) {
    console.log("The form has been sent")
  } else {
    errorOutput(message.reverse()); // output message to error function, reversed to more logical order
    message = [];
  }
});
