
document.addEventListener('DOMContentLoaded', async () => {
  const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form

  adminloginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email_for_admin_login').value;
    const password = document.getElementById('password_for_admin_login').value;

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
        adminloginErrorElement.textContent = errorData.message; // Display generic error message from the server
        console.error('Failed to login admin');
      }
    } catch (loginError) {
      console.error('Error logging in user:', loginError.message);
      const adminloginErrorElement = document.getElementById('admin-login-error');
      adminloginErrorElement.textContent = 'Error during login process';
    }
  });
});
