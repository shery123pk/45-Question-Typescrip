//Q 42 :: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians:string[]){

    magicians.forEach(i=>{console.log(`Great, ${i}`)})

}

let names_magician=["Tony", "william", "jone","michel","peter"]         //array of magician’s names

make_great(names_magician)    