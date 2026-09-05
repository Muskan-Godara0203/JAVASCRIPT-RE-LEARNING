````markdown
# JavaScript Re-Learning Journey

This repository documents my journey of relearning JavaScript from the fundamentals and building a strong foundation for frontend and full-stack development.

I have previously studied JavaScript as part of my college coursework, but I want to rebuild my understanding from the ground up so that I can write programs independently rather than relying on tutorials or copied code.

The goal is to move from:

> **"I have studied JavaScript."**

to:

> **"I can confidently build with JavaScript."**

---

## 🎯 Goals

By the end of this journey, I want to be able to:

- Understand JavaScript fundamentals properly
- Write JavaScript programs independently
- Solve small programming problems without copying solutions
- Understand how JavaScript works in the browser
- Manipulate the DOM
- Handle events and forms
- Work confidently with arrays and objects
- Use modern JavaScript syntax
- Understand asynchronous JavaScript
- Work with APIs and JSON
- Build practical JavaScript projects
- Become comfortable enough with JavaScript to move into React
- Build a strong foundation for full-stack development

---

# 📚 Learning Roadmap

## Phase 1 — Core JavaScript

**Target duration: 7–10 days**

### Fundamentals

- [ ] Variables
  - [ ] `let`
  - [ ] `const`
- [ ] Data Types
  - [ ] String
  - [ ] Number
  - [ ] Boolean
  - [ ] Undefined
  - [ ] Null
  - [ ] Object
  - [ ] BigInt
  - [ ] Symbol
- [ ] Operators
  - [ ] Arithmetic
  - [ ] Assignment
  - [ ] Comparison
  - [ ] Logical
  - [ ] Increment / Decrement
  - [ ] Ternary
- [ ] `if`
- [ ] `else`
- [ ] `else if`
- [ ] `switch`
- [ ] Loops
  - [ ] `for`
  - [ ] `while`
  - [ ] `do...while`
- [ ] Functions
- [ ] Parameters
- [ ] Arguments
- [ ] Return values
- [ ] Arrow functions
- [ ] Scope
  - [ ] Global scope
  - [ ] Function scope
  - [ ] Block scope
- [ ] Arrays
- [ ] Objects
- [ ] Strings
- [ ] String methods

### Array Methods

- [ ] `forEach()`
- [ ] `map()`
- [ ] `filter()`
- [ ] `find()`
- [ ] `some()`
- [ ] `every()`
- [ ] `reduce()`

### Modern JavaScript

- [ ] Destructuring
- [ ] Spread operator
- [ ] Rest operator
- [ ] Template literals
- [ ] Modules
- [ ] `export`
- [ ] `import`

### Phase 1 Requirement

I should be able to write small JavaScript programs without copying complete solutions from tutorials.

---

# 🌐 Phase 2 — JavaScript in the Browser

**Target duration: 4–5 days**

### DOM

- [ ] What is the DOM?
- [ ] `querySelector()`
- [ ] `querySelectorAll()`
- [ ] `getElementById()`
- [ ] `textContent`
- [ ] `innerHTML`
- [ ] `classList`
- [ ] Creating elements
- [ ] Modifying elements
- [ ] Removing elements

### Events

- [ ] Events
- [ ] `addEventListener()`
- [ ] Click events
- [ ] Input events
- [ ] Submit events
- [ ] Keyboard events
- [ ] Event object
- [ ] Event bubbling

### Forms

- [ ] Reading form values
- [ ] Handling form submission
- [ ] Preventing default behaviour
- [ ] Form validation
- [ ] Displaying validation messages

---

# 📝 Main Browser Project — To-Do List

The first major browser project will be a To-Do List.

### Features

- [ ] Add a task
- [ ] Delete a task
- [ ] Mark a task as complete
- [ ] Edit a task
- [ ] Filter tasks
- [ ] Add task counters
- [ ] Improve the UI
- [ ] Store tasks using Local Storage

### Concepts Practiced

The project should reinforce:

- DOM manipulation
- Events
- Functions
- Arrays
- Objects
- Array methods
- Forms
- Conditional logic
- Local Storage

---

# ⚡ Phase 3 — Modern JavaScript for React

This phase focuses on the JavaScript concepts that are especially important before learning React.

### Functions

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

Topics:

- [ ] Arrow functions
- [ ] Callback functions
- [ ] Higher-order functions
- [ ] Function expressions
- [ ] Return values

---

### Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
```

Topics:

- [ ] `forEach()`
- [ ] `map()`
- [ ] `filter()`
- [ ] `find()`
- [ ] `some()`
- [ ] `every()`
- [ ] `reduce()`

---

### Objects

```javascript
const student = {
    name: "Muskan",
    age: 19,
    course: "B.Tech CSE"
};
```

Topics:

- [ ] Creating objects
- [ ] Accessing properties
- [ ] Updating properties
- [ ] Adding properties
- [ ] Removing properties
- [ ] Nested objects
- [ ] Object methods

---

### Destructuring

```javascript
const { name, age } = student;
```

Topics:

- [ ] Object destructuring
- [ ] Array destructuring
- [ ] Default values
- [ ] Renaming variables during destructuring

---

### Spread Operator

```javascript
const updatedStudent = {
    ...student,
    age: 20
};
```

Topics:

- [ ] Spread with arrays
- [ ] Spread with objects
- [ ] Creating copies
- [ ] Combining arrays
- [ ] Updating objects without directly mutating the original

---

### Rest Operator

```javascript
const add = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
};
```

Topics:

- [ ] Rest parameters
- [ ] Rest destructuring

---

### Template Literals

```javascript
const name = "Muskan";
const age = 19;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Topics:

- [ ] Template literals
- [ ] String interpolation
- [ ] Multi-line strings

---

# 📦 Modules

### Export

```javascript
export default greet;
```

### Import

```javascript
import greet from "./greet.js";
```

Topics:

- [ ] ES modules
- [ ] Named exports
- [ ] Default exports
- [ ] Imports
- [ ] File organization

---

# 🔄 Phase 4 — Asynchronous JavaScript

**Target duration: 3–4 days**

### Topics

- [ ] Synchronous JavaScript
- [ ] Asynchronous JavaScript
- [ ] Callbacks
- [ ] Callback functions
- [ ] Callback problems
- [ ] Promises
- [ ] Promise states
- [ ] `.then()`
- [ ] `.catch()`
- [ ] `.finally()`
- [ ] `async`
- [ ] `await`
- [ ] `try...catch`
- [ ] `fetch()`
- [ ] APIs
- [ ] JSON
- [ ] HTTP request basics
- [ ] Handling API errors

### Example

```javascript
async function getUsers() {
    try {
        const response = await fetch("https://example.com/users");
        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
```

The goal is not to memorize this syntax.

The goal is to understand:

```text
Request
   ↓
Wait for response
   ↓
Receive response
   ↓
Convert response to JSON
   ↓
Use the data
   ↓
Handle errors
```

---

# 🛠️ Project Roadmap

Projects will be built throughout the learning journey.

The purpose is to apply concepts instead of learning JavaScript only through theory.

---

## 🟢 Beginner Projects

### Calculator

- [ ] Basic arithmetic
- [ ] User input
- [ ] Display result
- [ ] Clear/reset functionality

### Number Guessing Game

- [ ] Generate random number
- [ ] Take user input
- [ ] Compare guesses
- [ ] Give hints
- [ ] Track attempts

### To-Do List

- [ ] Add tasks
- [ ] Delete tasks
- [ ] Edit tasks
- [ ] Complete tasks
- [ ] Filter tasks
- [ ] Local Storage

### Quiz App

- [ ] Display questions
- [ ] Multiple-choice answers
- [ ] Calculate score
- [ ] Show final result
- [ ] Restart quiz

---

## 🟡 Intermediate Projects

### Expense Tracker

- [ ] Add income
- [ ] Add expenses
- [ ] Calculate balance
- [ ] Categorize expenses
- [ ] Display transaction history
- [ ] Store data locally

### Notes App

- [ ] Create notes
- [ ] Edit notes
- [ ] Delete notes
- [ ] Search notes
- [ ] Local Storage

### Weather App

- [ ] Search city
- [ ] Fetch weather API
- [ ] Display temperature
- [ ] Display weather condition
- [ ] Handle invalid cities
- [ ] Handle API errors

---

## 🟠 Intermediate+ Projects

### Movie Search App

- [ ] Search movies
- [ ] Use an external API
- [ ] Display movie information
- [ ] Show posters
- [ ] Handle loading states
- [ ] Handle errors
- [ ] Add search filters

---

## 🔴 Advanced Project

### Full-Stack Task Manager

Planned features:

- [ ] User authentication
- [ ] Create tasks
- [ ] Edit tasks
- [ ] Delete tasks
- [ ] Mark tasks complete
- [ ] Task categories
- [ ] Search
- [ ] Filtering
- [ ] Backend API
- [ ] Database
- [ ] Frontend
- [ ] Deployment

This project will eventually connect the JavaScript learning journey with:

```text
JavaScript
    ↓
React
    ↓
Node.js
    ↓
Express.js
    ↓
Database
    ↓
Full-Stack Application
```

---

# 📅 Daily Learning Plan

The general daily structure will be:

### 1. Learn

Spend approximately 30 minutes understanding a new concept.

### 2. Practice

Spend approximately 30 minutes writing examples yourself.

### 3. Build

Spend approximately 30–60 minutes using the concept in a small program or project.

### Learning Cycle

```text
Learn
  ↓
Understand
  ↓
Write
  ↓
Experiment
  ↓
Break the code
  ↓
Debug
  ↓
Build
```

The emphasis is on active practice rather than passive watching.

---

# 📊 Progress Tracker

## Phase 1 — Core JavaScript

| Day | Topic | Status |
|---|---|---|
| Day 1 | Variables, Data Types, Operators | ✅ |
| Day 2 | `if`, `else`, Comparisons, Logical Operators | ⬜ |
| Day 3 | `switch` and Loops | ⬜ |
| Day 4 | Functions and Arrow Functions | ⬜ |
| Day 5 | Scope | ⬜ |
| Day 6 | Arrays, Objects and Strings | ⬜ |
| Day 7 | Array Methods | ⬜ |
| Day 8 | `reduce`, Destructuring, Spread/Rest, Template Literals | ⬜ |
| Day 9 | Modules + Mixed Practice | ⬜ |
| Day 10 | Revision + Mini Project | ⬜ |

---

## Phase 2 — Browser JavaScript

| Topic | Status |
|---|---|
| DOM | ⬜ |
| `querySelector()` | ⬜ |
| `querySelectorAll()` | ⬜ |
| `textContent` | ⬜ |
| `innerHTML` | ⬜ |
| `classList` | ⬜ |
| Creating Elements | ⬜ |
| Removing Elements | ⬜ |
| Events | ⬜ |
| `addEventListener()` | ⬜ |
| Forms | ⬜ |
| Form Validation | ⬜ |
| To-Do List Project | ⬜ |

---

## Phase 3 — Modern JavaScript

| Topic | Status |
|---|---|
| Arrow Functions | ⬜ |
| Callback Functions | ⬜ |
| Array Methods | ⬜ |
| Objects | ⬜ |
| Destructuring | ⬜ |
| Spread Operator | ⬜ |
| Rest Operator | ⬜ |
| Template Literals | ⬜ |
| Modules | ⬜ |
| Import / Export | ⬜ |

---

## Phase 4 — Async JavaScript

| Topic | Status |
|---|---|
| Synchronous vs Asynchronous | ⬜ |
| Callbacks | ⬜ |
| Promises | ⬜ |
| `.then()` | ⬜ |
| `.catch()` | ⬜ |
| `async` / `await` | ⬜ |
| `try...catch` | ⬜ |
| `fetch()` | ⬜ |
| APIs | ⬜ |
| JSON | ⬜ |

---

# 📂 Repository Structure

```text
JAVASCRIPT-RE-LEARNING/
│
├── README.md
│
├── day1.js
├── day2.js
├── day3.js
├── day4.js
├── day5.js
├── day6.js
├── day7.js
├── day8.js
├── day9.js
├── day10.js
│
├── browser/
│   ├── dom/
│   ├── events/
│   └── forms/
│
├── projects/
│   ├── calculator/
│   ├── number-guessing-game/
│   ├── todo-list/
│   ├── quiz-app/
│   ├── expense-tracker/
│   ├── notes-app/
│   ├── weather-app/
│   ├── movie-search/
│   └── task-manager/
│
└── modules/
```

The repository structure may change as the projects become more complex.

---

# 🧠 Learning Rules

## 1. Understand, Don't Memorize

I want to understand what the code is doing and why it works instead of memorizing syntax without understanding it.

## 2. Write Code Every Day

Even on busy college days, I should write and practice JavaScript.

## 3. Avoid Copying Complete Solutions

Documentation, tutorials, and AI can be used to understand concepts and solve blockers.

However, complete solutions should not be copied blindly.

## 4. Debug First

When something does not work:

```text
Read the error
    ↓
Understand the error
    ↓
Inspect the code
    ↓
Test possible solutions
    ↓
Fix the problem
```

Debugging is part of learning.

## 5. Build Projects

Concepts should eventually be used in practical projects.

## 6. Revise Through Practice

A concept is not considered learned just because I can recognize its syntax.

I should be able to use it independently.

## 7. Commit My Progress

Git will be used to track the journey.

Example:

```bash
git add .
git commit -m "Complete Day 1 JavaScript fundamentals"
git push
```

---

# 🔧 Tools

The primary tools used in this journey are:

- JavaScript
- Node.js
- VS Code
- Git
- GitHub
- Chrome DevTools

---

# 🚀 Next Step After JavaScript

Once the JavaScript foundation is strong, the next stage will be:

```text
HTML + CSS
     ↓
JavaScript
     ↓
React
     ↓
Node.js
     ↓
Express.js
     ↓
Database
     ↓
Full-Stack Development
```

JavaScript will serve as the foundation for both frontend and backend development.

---

# 📈 Current Status

**Learning Phase:** Phase 1 — Core JavaScript

**Current Day:** Day 1

**Current Focus:** Variables, Data Types, Operators, Input/Output and Type Conversion

**Goal:** Build a strong JavaScript foundation before moving to React.

---

# 🎯 Definition of Success

This journey will be considered successful when I can:

- Read JavaScript code and understand what it does
- Write small programs without copying solutions
- Debug my own JavaScript errors
- Manipulate the DOM
- Handle browser events
- Work confidently with arrays and objects
- Use modern JavaScript features
- Make API requests
- Build JavaScript projects independently
- Start React without feeling lost

---

## Current Objective

> **Learn JavaScript deeply enough that React becomes easier, rather than using React to avoid learning JavaScript.**
````
