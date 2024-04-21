document.addEventListener('DOMContentLoaded', async () => {
    const signupForm = document.querySelector('.sign-up-form'); // Select the signup form
    const roleSelect = document.getElementById('role_for_signUp'); // Select the role dropdown
  
    // Event listener for form submission
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username_for_signup').value;
      const email = document.getElementById('email_for_signup').value;
      const password = document.getElementById('password_for_signup').value;
      const confirmPassword = document.getElementById('confirm_password_for_signup').value;
      const address = document.getElementById('address_for_signup').value;
      const role = roleSelect.value; // Get the selected role from the dropdown
      
      // Check if any field is empty
      if(username ==='' || email ==='' || password ==='' || confirmPassword ==='' || address ===''){
        const signupError = document.getElementById('signup-errors');
        signupError.innerText = 'Please fill in all the fields!!!';
        return;
      } else {
        const signupError = document.getElementById('signup-errors');
        signupError.innerText = ''; // Clear the error message if all fields are filled
      }
  
      // Check if password format error is displayed
      const passwordErrorElement = document.getElementById('password-error');
      if (passwordErrorElement.textContent !== '') {
          throw new Error('Password format error'); // Throw error and prevent signup
      }
  
      // Validate email format
      if (!validateEmail(email)) {
        const emailerror = document.getElementById("errormsg_for_email");
        emailerror.innerText = "Please enter a valid email address";
        return; // Prevent form submission if email format is incorrect
      }
  
      try {
        // Set the action attribute of the form based on the selected role
        signupForm.action = `/api/${role}`;
  
        // Fetch request for signup
        const signupResponse = await fetch(signupForm.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password, confirm_password: confirmPassword, address, role }) // Use correct variable name
        });
  
        if (!signupResponse.ok) {
          throw new Error('Failed to sign up user');
        }
  
        const signupUserData = await signupResponse.json();
        console.log('User signed up successfully:', signupUserData);
  
        // Redirect to appropriate home page based on role
        if (role === 'farmer') {
          window.location.href = "FarmerHomepage.html";
        } else if (role === 'customer') {
          window.location.href = "user.html";
        }
      } catch (signupError) {
        console.error('Error signing up user:', signupError.message);
        // Handle signup error
      }
    });
  
    // Clear error message when user starts typing in any field
    const inputFields = document.querySelectorAll('.sign-up-form input');
    inputFields.forEach(inputField => {
      inputField.addEventListener('input', () => {
        const signupError = document.getElementById('signup-errors');
        signupError.innerText = ''; // Clear the error message
      });
    });
  });
  