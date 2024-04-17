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
  
       // Client-side validation for password and confirm password fields
       if (password !== confirmPassword) {
        // Display error message
        const signupErrorElement = document.getElementById('signup-error');
        signupErrorElement.textContent = 'Passwords do not match';
        return; // Prevent further execution
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
      const loginErrorElement = document.getElementById('signup-error');
      loginErrorElement.textContent = 'Invalid username or password';
    });
  });