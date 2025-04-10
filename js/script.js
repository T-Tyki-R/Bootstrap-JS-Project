//Create 5 functions !PRACTICE FAT ARROW FUNCTION FORMAT!

// random Project Picker (Homepage (Later Date))
// Create multiple project ideas in an array in global scope
// Initialize a str var that take the length of a quote(s)
// Use both math.floor and math.random to generate numbers within a specified range: An array of projects
// print out a random project when function is called 

let projects = [
    "Portfolio", "Blog"
];

const projectRandomizer = () =>{
    let projectLength = projects.length;
    let ranIndex = Math.floor(Math.random() * projectLengthLength);
    return projects[ranIndex];
}

// Function Tester
console.log(projectRandomizer());

// Contact Storage (Nested Arrays)
// Initialize an array in global scope
// put args (both names, email, messages) into another array
// push filled array into the empty array
// return nested array
let contactData = [];

const contactStorage = (firstName, lastName, email, message) =>{
    let userData = [];
    userData.push(firstName, lastName, email, message)
    contactData.push(userData);
    return contactData;
}

// Function Tester
console.log(contactStorage("Jane", "Doe", "jDoe1@gmail.com", "I need help"));

// feedback Storage
// Initialize an array in global scope
// put args (last name and messages) into an object
// push object into the array
// return array

let feedbacks = [];

const feedbackStorage = (lastName, message) =>{
    feebacks.push({lastName : message});
    return feedbacks;
}

// Function Tester
console.log(feedbackStorage("Doe", "Great App!"));

// Display Inspirational Quote Randomizer (Homepage (Later Date))
// Create multiple quotes in an array in global scope
// Initialize a str var that take the length of a quote(s)
// Use both math.floor and math.random to generate numbers within a specified range: An array of quotes
// print out a random quote when function is called 

let quotes = [
    "Never let a fixed-mindset be the end of your journey!",
    "It's never too late to build something for yourself.",
    "Never remain stagnant! Challenges are the key to success."
];

const quoteRandomizer = () =>{
    let quoteLength = quotes.length;
    let ranIndex = Math.floor(Math.random() * quoteLength);
    return quotes[ranIndex];
}

// Function Tester
console.log(quoteRandomizer());

// Email Validation 
// Check to see is email contains "@" and ".", if true:
    // Return email
//else:
    // Return an error message

    const emailValidation = (email) =>{
        return email.includes("@") && email.includes(".") ? email : "email is invalid";
    }
    
    // Function Tester
    console.log(emailValidation("tyki193@gmail.com"));
    console.log(emailValidation("tyki193gmail.com"));

