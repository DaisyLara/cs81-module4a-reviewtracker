//URL: https://github.com/DaisyLara/cs81-module4a-reviewtracker

// Weekly reading log
const readingLog = [ // This function is creating an array readingLog. Each object in the array has 3 keys
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/* Adds a new reading entry to the log. This is the clearest reference to the readingLog. Directly references the keys of each object */
function addReadBook(day, book, minutes) { // This function is adding another object (newEntry) to the existing array
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/* Returns total minutes spent reading all week. Creates local variabls to run a loop that looks at all values in the "minutes" key of each object. Adds the minutes for each entry as the loop runs, and outputs the total */
function totalReadingMinutes(log) {
  let total = 0; 
  for (let entry of log) { //this is a shortcut of a for loop, creates local variable (entry)
    total += entry.minutes; //This adds the minutes of each entry in the loop to the total
  }
  return total;
}
/* Returns the book read most frequently. Creates local variables and runs a loop to look at each "entry" in the array. In this case looks at the "book" entries from readingLog and determines if it has "seen" the entries before. Keeps a running score of books as it sees them from the readingLog, and ultimately outputs which book was seen the most. */
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) { //this is a shortcut of a for loop, creates local variable (entry)
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; //checks if bookCounts contains entry.book and sets count to 1 if not
    } else {
      bookCounts[entry.book]++; //checks if bookCounts contains entry and adds count if yes
    }
  }

  let maxBook = null; //this is a variable for the title of the book read the most
  let maxCount = 0; //this is a variable for the max amount of times a book is read
  for (let book in bookCounts) { //this is a shortcut of a for loop, creates local variable book, looks at const bookCounts
    if (bookCounts[book] > maxCount) { //checks if an entry for a book in bookCounts is greater than maxCount (0 in first loop)
      maxBook = book; //sets maxBook to book entry as new maxBook if requirements are met
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

/* Prints a summary of minutes read per day. This one builds console.log into the function directly rather than calling it later like all the previous functions. References the values for each key in the array of objects (readingLog), and outputs a pretty version with nice formatting */
function printDailySummary(log) { //
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); //new entry, good to test with
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

/* 4. Suggest an Improvement
 This code was extra confusing.
Each function would make local entries named the same thing as every other function,
and I had to keep reminding myself of what I was looking at. 
The "for (let book in bookCounts)" in line 37 was especially confusing, because I didn't
know whether it was a local variable or a reference to the book key in the ReadingLog array.
I would clean up the code by changing those local variable names to be more specific to make the code easier to understand. */


//5. Add a Test Case
addReadBook("Monday", "A Court of Mist and Fury", 90);
//running the below again because the example usage console entries were read top-down and now don't show new results
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
