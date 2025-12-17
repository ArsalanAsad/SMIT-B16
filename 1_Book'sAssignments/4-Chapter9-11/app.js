function showMessage() {let fuel = document.getElementById('fuel').value;
let message = '';

if (fuel <= 0.25) {
    message = 'Please refill the fuel in your car';
} else {
    message = 'no need to refill the fuel';
}

document.getElementById('message').innerText = message;
}