document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.querySelector('.sign-in-form'); // Select the login form
  const roleSelect = document.getElementById('role_for_login'); // Select the role dropdown

  // Event listener for form submission
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email_for_login').value;
    const password = document.getElementById('password_for_login').value;
    const role = roleSelect.value; // Get the selected role from the dropdown

    if (!validateEmail(email)) {
      const emailerror = document.getElementById("email-error");
      emailerror.innerText = "Please enter a valid email address";
      return; // Prevent form submission if email format is incorrect
    } else {
      const emailerror = document.getElementById("email-error");
      emailerror.innerText = ""; // Clear the error message if email format is correct
    }

    try {
      // Fetch request for login based on role
      const loginResponse = await fetch(`/api/${role}/login`, { // Dynamically set endpoint based on role
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!loginResponse.ok) {
        throw new Error('Failed to login user');
      }

      const loginUserData = await loginResponse.json();
      console.log('User logged in successfully:', loginUserData);

      // Redirect to appropriate home page based on role
      if (role === 'farmer') {
        window.location.href = "FarmerHomepage.html";
      } else if (role === 'customer') {
        window.location.href = "user.html";
      }

      // Pop-up message after successful login and redirection
      window.onload = function() {
        alert('Logged in successfully');
      };
    } catch (loginError) {
      console.error('Error logging in user:', loginError.message);
      // Handle login error
      // Display error message to the user
      const loginErrorElement = document.getElementById('login-error');
      loginErrorElement.textContent = 'Invalid username or password';
    }
  });
});
