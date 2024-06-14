//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); }); // Create a copy of the original array
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = ["Asim", "Masood", "Arsalan", "Asif"]; // Array of magicians' names
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Call make_great with a copy of the array and store the new array
console.log("Original magicians:"); // Show original magicians' names
show_magicians(magicians);
console.log("\nGreat magicians:"); // Show great magicians' names
show_magicians(greatMagicians);
