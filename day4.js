// Basic "IF" Statement
let temperature = 85;
 if (temperature > 80) {
    console.log("It's hot!");
 }

//  "IF/ELSE"
let age = 15;
if (age >= 18){
    console.log("You can vote.");
} else {
    console.log("Not old enough yet.");
}

// "IF/ ELSE IF/ ELSE"
let score = 72;

if (score >= 90){
    console.log("Grade A: ");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// LOGICAL OPERATORS
let age2 = 25;
let hasLicense = true;

// && means "AND" - both must be true
if (age >= 18 && hasLicense) {
    console.log("You can drvie.");
}

// || means "OR" - at least one must be true
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("No work today!");
}

// ! means "NOT" - flips true/false
let isRaining = false;
if (!isRaining) {
    console.log("Good day for a walk.");
}

// Write a function that takes a number grade (0–100) and logs the letter grade using this scale:
// 90+ → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → F

function getLetterGrade(score){
    if (score >= 90){
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

getLetterGrade(95);
getLetterGrade(72);
getLetterGrade(40);