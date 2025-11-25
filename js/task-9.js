const userForm = document.querySelector('.register-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    userData.username = userData.username.trim();
    userData.age = userData.age.trim();
    
    if (!userData.username || !userData.age) {
        alert('All fields are required')
        return;
    }
    console.log(userData);
    e.target.reset()
    

}
);

