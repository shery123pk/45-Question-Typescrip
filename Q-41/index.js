//Q 41 :: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (i) { return console.log(i); });
}
var names_magician = ["Tony", "william", "jone", "michel", "peter"]; //array of magician’s names
show_magicians(names_magician); //prints the name of each magician 
