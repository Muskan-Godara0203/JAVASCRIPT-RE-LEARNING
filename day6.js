// FOR LOOP
for (let i = 0; i < 5; i++){
    console.log(i);
}

// WHILE LOOP
// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// LOOPING THROUGH ARRAYS
// let movies = ["Inception", "Interstellar", "The Dark Knight", "Parasite", "Whiplash"];

// for (let i=0; i<movies.length; i++) {
//     console.log(movies[i]);
// }

// EXERCISE: Movie Array with Position Numbers
// Task: Loop through your movie array and log 
// each one with its position number (e.g., "1: Inception").

// movies2 = ["Inception", "Interstellar", "The Dark Knight", "Parastie", "Whiplash"];

// for (let i = 0; i < movies2.length; i++){
//     console.log(`${i + 1}: ${movies2[i]}`);
// }

// let i = 0;
// while (i < movies2.length) {
//     console.log(`${i + 1}: ${movies2[i]}`);
//     i++;
// } 

let numbers = [12, 7, 22, 15, 4, 9, 18, 3, 30, 11];
evenCount = 0
for (i = 0; i < numbers.length; i++) {
    if ( i % 2 === 0){
        console.log(`Position ${i+1}: ${numbers[i]}`);
        evenCount++;
    }
}
console.log("Total even numbers found: ", evenCount)