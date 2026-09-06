// use ".length" along with the variable to get the length of the string
let name = "Alexandra";
console.log(name.length);

// use ".toUpperCase" to convert the whole string to uppercase
console.log(name.toUpperCase());

// use ".toLowerCase" to convert the whole string to lowercase
console.log(name.toLowerCase());

// use ".slice(start, end)" to eliminate the characters of the string which doesn't come in the defined range
let name2 = "JavaScript";
console.log(name2.slice(0, 4));
console.log(name2.slice(4));

// Template Literals

let name3 = "Alex";
let age = 25;
console.log(`My name is ${name3} and I'm ${age} years old.`);
// Way easier to read than -- "My name is " + name + " and I'm " + age + " years old."


// EXERCISE: Take a full name string, and log just the first name, in all caps.
// For example: "Alex Johnson" → should log "ALEX".
// Hint: You'll need to find where the space is in the string to know where the first name ends. 
// There's a method called .indexOf(" ") that returns the position of the first space — 
// that's the piece you're missing to combine with .slice().

fullName = "Muskan Godara";
// console.log(fullName.slice(0, 6).toUpperCase());
let spaceIndex = fullName.indexOf(" "); // finds position of the space 
console.log(fullName.slice(0, spaceIndex).toUpperCase()); 