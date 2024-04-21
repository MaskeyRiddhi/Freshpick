document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password_for_signup');
    const confirmPasswordInput = document.getElementById('confirm_password_for_signup');
    const signupErrorElement = document.getElementById('signuppassword-error');
    const passwordErrorElement = document.getElementById('password-error'); 

    function validatePasswordFormat() {
        const password = passwordInput.value;

        // Reset error message if password is empty
        if (password === '') {
            passwordErrorElement.textContent = '';
            return false;
        }

        // Check if password contains at least one capital letter and one number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            passwordErrorElement.textContent = 'Password must contain one capital letter, one number, and 6 characters long';
            return false;
        }

        // Clear error message if password format is correct
        passwordErrorElement.textContent = '';
        return true;
    }

    function validatePasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Reset error message if both fields are empty
        if (password === '' && confirmPassword === '') {
            signupErrorElement.textContent = '';
            return false;
        }

        // Show error message if passwords do not match and confirm password is not empty
        if (password !== confirmPassword && confirmPassword !== '') {
            signupErrorElement.textContent = 'Passwords do not match';
            return false;
        }

        // Clear error message if passwords match or confirm password is empty
        signupErrorElement.textContent = '';
        return true;
    }

    // Event listener for password input
    passwordInput.addEventListener('blur', validatePasswordFormat);

    // Event listener for confirm password input
    confirmPasswordInput.addEventListener('blur', validatePasswordMatch);

    // Event listener for form submission
    document.querySelector('.sign-up-form').addEventListener('blur', (event) => {
        if (!validatePasswordFormat() || !validatePasswordMatch()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});