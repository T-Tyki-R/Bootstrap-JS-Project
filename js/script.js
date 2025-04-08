//Create 5 functions !PRACTICE FAT ARROW FUNCTION FORMAT!

// Dark Mode (Accessibility/Readibility) 
toggleDarkMode = () =>{
    document.body.classList.toggle("dark-mode")
}

// Contact Storage (Nested Arrays)
// Initialize an array in global scope
// put args (both names, email, messages) into an object
// push object into the array
// return array
let storage = [];

const contactStorage = (firstName, lastName, email, message) =>{
    let userData = [];
    userData.push(firstName, lastName, email, message)
    storage.push(userData);
    return storage;
}

// Function Tester
console.log(contactStorage("Jane", "Doe", "jDoe1@gmail.com", "I need help"));

// Display Inspirational Quote Randomizer (Homepage (Later Date))
// import Random Package
// Create multiple quotes in an array
// print out a random quote when function is called 

let quotes = [
    "Never let a fixed-mindset be the end of your journey!",
    "It's never too late to build something for yourself.",
    "Never remain stagnant! Challenges are the key to success."
];

const quoteRandomizer = () =>{
    let ranIndex = Math.floor(Math.random() * quotes.length);
    return quotes[ranIndex];
}

// Function Tester
console.log(quoteRandomizer());





