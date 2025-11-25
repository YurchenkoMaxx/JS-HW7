const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    userData.email = userData.email.trim();
    userData.password = userData.password.trim();

    if (!userData.email || !userData.password) {
        alert('All form fields must be filled in');
        return;
    }
    console.log(userData);
    e.target.reset();

});
