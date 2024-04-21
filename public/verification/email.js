
function validateEmail(email) {
  return email.match(/^([a-zA-Z0-9_\-]+)@([a-zA-Z_\-]+)\.([a-zA-Z]{2,5})$/);
}

// Add event listener to the email input field for onBlur validation
document.getElementById("email_for_signup").addEventListener("blur", function() {
  validateEmailOnBlur();
});

function validateEmailOnBlur() {
  var emailField = document.getElementById("email_for_signup").value;
  var emailerror = document.getElementById("errormsg_for_email");
  
  if (emailField.trim() === "") {
    emailerror.innerText = ""; // Clear the error message if email field is empty
  } else if (!emailField.match(/^([a-zA-Z0-9_\-]+)@([a-zA-Z_\-]+)\.([a-zA-Z]{2,5})$/)) {
    emailerror.innerText = "Please enter a valid email address";
  } else {
    emailerror.innerText = ""; // Clear the error message if email is valid
  }
}
