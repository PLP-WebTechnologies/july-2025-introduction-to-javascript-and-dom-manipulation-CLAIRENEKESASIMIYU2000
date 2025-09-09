// Part 1: JavaScript Basics - Variables, Conditionals

// Voting eligibility check
function checkVotingEligibility() {
    // Get user input
    const age = document.getElementById('ageInput').value;
    let result = "";
    
    // Check eligibility with conditional
    if (age === "") {
        result = "Please enter your age.";
    } else if (age < 0) {
        result = "Age cannot be negative.";
    } else if (age < 18) {
        result = `At ${age} years, you are not eligible to vote.`;
    } else {
        result = `At ${age} years, you are eligible to vote!`;
    }
    
    // Display result
    document.getElementById('votingResult').innerHTML = result;
}

// Number comparison
function compareNumbers() {
    // Get user inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = "";
    
    // Compare numbers with conditionals
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else if (num1 > num2) {
        result = `${num1} is greater than ${num2}`;
    } else if (num2 > num1) {
        result = `${num2} is greater than ${num1}`;
    } else {
        result = `${num1} and ${num2} are equal`;
    }
    
    // Display result
    document.getElementById('comparisonResult').innerHTML = result;
}

// Part 2: JavaScript Functions

// Calculate total price
function calculateTotal() {
    // Get user inputs
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Validate inputs
    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
        document.getElementById('totalResult').innerHTML = "Please enter valid positive values.";
        return;
    }
    
    // Calculate total
    const total = price * quantity;
    
    // Display result
    document.getElementById('totalResult').innerHTML = 
        `Total: $${total.toFixed(2)} ($${price} × ${quantity})`;
}

// Format text based on selection
function formatText() {
    // Get user input and selected option
    const text = document.getElementById('formatInput').value;
    const formatOption = document.getElementById('formatOption').value;
    let formattedText = "";
    
    // Apply formatting based on selection
    if (formatOption === "uppercase") {
        formattedText = text.toUpperCase();
    } else if (formatOption === "lowercase") {
        formattedText = text.toLowerCase();
    } else if (formatOption === "capitalized") {
        formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    
    // Display result
    document.getElementById('formatResult').innerHTML = formattedText;
}

// Part 3: JavaScript Loops

// Generate multiplication table
function generateMultiplicationTable() {
    // Get the number for which to generate the table
    const number = parseInt(document.getElementById('tableNumber').value);
    
    // Validate input
    if (isNaN(number)) {
        document.getElementById('multiplicationTable').innerHTML = "Please enter a valid number.";
        return;
    }
    
    // Generate multiplication table using a loop
    let tableHTML = `<h4>Multiplication Table for ${number}</h4>`;
    for (let i = 1; i <= 10; i++) {
        tableHTML += `${number} × ${i} = ${number * i}<br>`;
    }
    
    // Display the table
    document.getElementById('multiplicationTable').innerHTML = tableHTML;
}

// Array to store users
let users = [];

// Add user to list
function addUser() {
    // Get user input
    const userName = document.getElementById('userInput').value.trim();
    
    // Validate input
    if (userName === "") {
        alert("Please enter a name.");
        return;
    }
    
    // Add user to array
    users.push(userName);
    
    // Update the user list using a loop
    updateUserList();
    
    // Clear input field
    document.getElementById('userInput').value = "";
}

// Update user list display
function updateUserList() {
    let listHTML = "";
    
    // Loop through users array and create list items
    for (let i = 0; i < users.length; i++) {
        listHTML += `<li>User ${i+1}: <span class="highlight">${users[i]}</span></li>`;
    }
    
    // Display the list
    document.getElementById('userList').innerHTML = listHTML;
}

// Clear user list
function clearUserList() {
    // Clear the users array
    users = [];
    
    // Update the display
    updateUserList();
}

// Part 4: DOM Manipulation

// Switch theme function
function switchTheme(theme) {
    const body = document.body;
    
    // Remove any existing theme classes
    body.classList.remove('light-theme', 'dark-theme', 'colorful-theme');
    
    // Apply the selected theme
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else if (theme === 'colorful') {
        body.classList.add('colorful-theme');
    }
}

// Add new item to DOM
function addNewItem() {
    // Get user input
    const itemText = document.getElementById('newItemInput').value.trim();
    
    // Validate input
    if (itemText === "") {
        alert("Please enter some text.");
        return;
    }
    
    // Create new element
    const newItem = document.createElement('div');
    newItem.className = 'card';
    newItem.innerHTML = `<p>${itemText}</p>`;
    
    // Add to container
    document.getElementById('itemContainer').appendChild(newItem);
    
    // Clear input field
    document.getElementById('newItemInput').value = "";
}

// Remove last item from DOM
function removeLastItem() {
    const container = document.getElementById('itemContainer');
    
    // Check if there are items to remove
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

// Change color of the box
function changeColor() {
    const colorBox = document.getElementById('colorBox');
    
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply the color
    colorBox.style.backgroundColor = randomColor;
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Part 1 event listeners
    document.getElementById('votingButton').addEventListener('click', checkVotingEligibility);
    document.getElementById('compareButton').addEventListener('click', compareNumbers);
    
    // Part 2 event listeners
    document.getElementById('calculateButton').addEventListener('click', calculateTotal);
    document.getElementById('formatButton').addEventListener('click', formatText);
    
    // Part 3 event listeners
    document.getElementById('tableButton').addEventListener('click', generateMultiplicationTable);
    document.getElementById('addUserButton').addEventListener('click', addUser);
    document.getElementById('clearListButton').addEventListener('click', clearUserList);
    
    // Part 4 event listeners
    document.getElementById('lightThemeButton').addEventListener('click', function() {
        switchTheme('light');
    });
    document.getElementById('darkThemeButton').addEventListener('click', function() {
        switchTheme('dark');
    });
    document.getElementById('colorfulThemeButton').addEventListener('click', function() {
        switchTheme('colorful');
    });
    document.getElementById('addItemButton').addEventListener('click', addNewItem);
    document.getElementById('removeItemButton').addEventListener('click', removeLastItem);
    document.getElementById('colorButton').addEventListener('click', changeColor);
    
    // Initialize the page with some content
    generateMultiplicationTable();
    changeColor();
});
