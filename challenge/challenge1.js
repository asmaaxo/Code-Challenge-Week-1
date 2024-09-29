// Grading system
// A function to determine the grade based on marks
// Initialize the variable GRADE with a value 
let GRADE = 10;

// Check if the GRADE is less than 40
if (GRADE > 0 && GRADE < 40) {
    console.log("E"); // Output grade E for marks less than 40
}
// Check if the GRADE is between 40 (inclusive) and 49 (exclusive)
else if (GRADE >= 40 && GRADE < 49) {
    console.log("D"); // Output grade D for marks between 40 and 48
}
// Check if the GRADE is between 49 (inclusive) and 59 (exclusive)
else if (GRADE >= 49 && GRADE < 59) {
    console.log("C"); // Output grade C for marks between 49 and 58
}
// Check if the GRADE is between 59 (inclusive) and 79 (exclusive)
else if (GRADE >= 59 && GRADE < 79) {
    console.log("B"); // Output grade B for marks between 59 and 78
}
// If GRADE is 79 or higher
else {
    console.log("A"); // Output grade A for marks 79 and above
}

// Prompt for input
let marks = parseFloat(prompt("Enter student marks (0-100):"));

// Check if input is within the valid range
if (marks >= 0 && marks <= 100) {
    // Determine and display the grade
    alert("The grade is: " + determineGRADE(marks));
} else {
    alert("Please enter a number between 0 and 100.");
}