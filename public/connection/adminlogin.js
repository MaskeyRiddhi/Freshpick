
document.addEventListener('DOMContentLoaded', async () => {
  const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form

  adminloginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email_for_admin_login').value;
    const password = document.getElementById('password_for_admin_login').value;

    // Check if any field is empty
    if (email === '' || password === '') {
      const adminloginError = document.getElementById('admin-login-error');
      adminloginError.innerText = 'Please fill in all the fields!!!';
      return;
    } else {
      const adminloginError = document.getElementById('admin-login-error');
      adminloginError.innerText = ''; // Clear the error message if all fields are filled
    }

    try {
      const adminloginResponse = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (adminloginResponse.ok) {
        window.location.href = 'admin.html';
      } else {
        const errorData = await adminloginResponse.json();
        const adminloginErrorElement = document.getElementById('admin-login-error');
        adminloginErrorElement.textContent = errorData.message || 'Failed to login. Please try again.'; // Display error message from the server or a generic one
        console.error('Failed to login admin:', errorData.message);
      }
    } catch (error) {
      console.error('Error logging in admin:', error.message);
      const adminloginErrorElement = document.getElementById('admin-login-error');
      adminloginErrorElement.textContent = 'Error during login process. Please try again later.';
    }
  });
});

