//Q 41 :: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians:string[]){

    magicians.forEach(i=>console.log(i))

    
}

let names_magician=["Tony", "william", "jone","michel","peter"]         //array of magician’s names

show_magicians(names_magician)                                          //prints the name of each magician 