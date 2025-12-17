function showMessage() {
    var color = document.getElementById('signalColor').value.toLowerCase();
    var message = '';

    switch (color) {
        case'red':
        message = 'Must stop';
        break;

        case 'orange':
        message = 'Ready to move'
        break;

        case 'green':
        message = 'Move now'
        break;
        default: 
        message = 'Please enter valied color';
    }
    document.getElementById('message').innerText = message;
}