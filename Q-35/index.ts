//Q35:  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let petAnimals:string[]=["goat","cow","Buffalow","Sheep"];

petAnimals.forEach(i=>console.log(i));
console.log("-".repeat(60))

petAnimals.forEach(i=>console.log(` A ${i}, would make a great pet\n `));

console.log("-".repeat(60))
console.log(`This is common property among all these animals that they all eat grass!`)
console.log("-".repeat(60))