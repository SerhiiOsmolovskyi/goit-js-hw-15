const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const { email, password } = loginForm.elements;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill up all the input areas!')
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        loginForm.reset();
    }
});
