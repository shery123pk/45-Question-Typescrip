/*  Seeing the World: Think of at least five places in the world you’d like to visit.

    • Store the locations in a array. Make sure the array is not in alphabetical order.
    • Print your array in its original order.
    • Print your array in alphabetical order without modifying the actual list.
    • Show that your array is still in its original order by printing it.
    • Print your array in reverse alphabetical order without changing the order of the original list.
    • Show that your array is still in its original order by printing it again.
    • Reverse the order of your list. Print the array to show that its order has changed.
    • Reverse the order of your list again. Print the list to show it’s back to its original order.
    • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
//Store the locations in a array
let countries = ['Denmark', 'Egypt', 'Balgharia', 'China', 'Argentina'];
//print array in its orignal location, not in alphabetical order.
console.log(`orignal location =`, countries);
//Alphabetical order without modifying the actual list.
console.log(`Alphabetical order =`, [...countries].sort());
//array is still in its original order
console.log('array is still in its original order', countries);
//array in reverse alphabetical order
console.log(`array in reverse alphabetical order =`, [...countries].reverse());
//array is still in its original order
console.log('array is still in its original order', countries);
//Reverse the order
console.log(`array in reverse alphabetical order =`, countries.reverse());
//its orignal order has changed
console.log('its orignal order has changed= ', countries);
//again Reverse the order
console.log(`Again array in reverse alphabetical order =`, countries.reverse());
//its orignal order has changed
console.log('its orignal order has changed= ', countries);
//sort array.
console.log(`Alphabetical order =`, countries.sort());
//orignal order 
console.log('array is still in its original order', countries);
//reverse in alphabetical order
console.log(`Alphabetical order =`, countries.sort());
export {};
