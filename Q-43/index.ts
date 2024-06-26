//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great(magicians: string[]): string[] {
    
    const greatMagicians = magicians.map(magician => `${magician} the Great`);  // Create a copy of the original array
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const magicians = ["Asim", "Masood", "Arsalan", "Asif"];    // Array of magicians' names

const greatMagicians = make_great([...magicians]);      // Call make_great with a copy of the array and store the new array

console.log("Original magicians:");     // Show original magicians' names
show_magicians(magicians);

console.log("\nGreat magicians:");      // Show great magicians' names
show_magicians(greatMagicians);


