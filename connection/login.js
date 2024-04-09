document.querySelector('.sign-in-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(this); // Get form data
    const url = '/api/auth/login'; 
    try {
        const response = await fetch(url, {
            method: 'post',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Handle success response
        }else{
            throw new Error('Failed to login'); // Handle error response
            // console.log('Failed to login');
        }
    } catch (error) {
        console.error(error.message);
    }
});