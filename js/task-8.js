const userInput = document.querySelector('#city-input');
const userOutput = document.querySelector('#city-output');

userInput.addEventListener('input', handleCityInput);

function handleCityInput(e) {
    const newCityInput = e.target.value.trim();
    if (newCityInput === '') {
        userOutput.textContent = 'Anywhere';
    } else { userOutput.textContent = newCityInput
        
    }
};