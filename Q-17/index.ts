/*  Shrinking Guest List: You just found out that your new dinner table won’t arrive 
in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that 
    you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time 
    you pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
    invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
    actually have an empty list at the end of your program.*/

    let guestList:string[]=['Shahnaz','Hamna','Nida','Rubina','Asif'];
  

guestList.splice(0,1,"Safia");

guestList.push('Rabia');

let middleName=(Math.floor(guestList.length/2));

guestList.splice(middleName,0,"Asif");

guestList.forEach(i=>console.log(`Assalamo Aliekum ${i}, you are invited in my Birthday Party celebrated on Sunday.`));

    guestList.forEach(i=>console.log(`Dear ${i}, unfortunately new dinner table won’t arrive in time for the dinner, so we have space for only two guests.We can invite only two people for dinner`));

    guestList.pop();
    guestList.pop();
    console.log( guestList)