
document.addEventListener('DOMContentLoaded', async () => {
  const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form

  // Event listener for form submission
  adminloginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email_for_admin_login').value;
    const password = document.getElementById('password_for_admin_login').value;

    try {
      // Fetch request for login
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
        adminloginErrorElement.textContent = errorData.message || 'Failed to login';
      }
    } catch (loginError) {
      console.error('Error logging in admin:', loginError);
      const adminloginErrorElement = document.getElementById('admin-login-error');
      adminloginErrorElement.textContent = 'Error during login process';
    }
    
    //   // Check the response status explicitly
    //   if (adminloginResponse.status >= 200 && adminloginResponse.status < 300) {
    //     // Redirect to admin.html if the response status is OK (status code 200)
    //     window.location.href = 'admin.html';
    //   } else {
    //     // Handle the case where the response status is not OK
    //     console.error('Failed to login admin');
    //   }
    // } catch (loginError) {
    //   console.error('Error logging in user:', loginError.message);
    //   // Handle login error
    //   // Display error message to the user
    //   const adminloginErrorElement = document.getElementById('admin-login-error');
    //   adminloginErrorElement.textContent = 'Invalid email or password';
    // }
  });
});

