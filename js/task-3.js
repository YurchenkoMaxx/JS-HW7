const usernameInput = document.querySelector('#city-input');
const usernameOutput = document.querySelector('#city-output');

usernameInput.addEventListener('input', handleUserNameInput);

function handleUserNameInput(e) {
    const userValue = e.target.value.trim();
        if(userValue === "") {
            usernameOutput.textContent = "Anonymous";
} else {
            usernameOutput.textContent = userValue;
    }
}