// Task 1: Change the color of the greeting text
document.getElementById('colorButton').addEventListener('click', function() {
    // Get the 'greeting' element
    var greetingElement = document.getElementById('greeting');
    // Change the 'greeting' element's color to a random color
    greetingElement.style.color = getRandomColor();
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    // Change the text of the 'greeting' element to "Hello, JavaScript!"
    document.getElementById('greeting').textContent = "Hello, JavaScript!";
});

// Helper function for generating a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
