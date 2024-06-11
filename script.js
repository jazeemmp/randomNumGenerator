const number = document.getElementById('number')
function generateNum() {
    // Generate a random number between 0 and 999
    let randomNum = Math.floor(Math.random() * 1000);
    // Convert the number to a string and pad it with leading zeros if necessary
    let paddedNum = randomNum.toString().padStart(3, '0');
    
    number.textContent = paddedNum;
}
