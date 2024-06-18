
//Assignment No 16:


let guestList:string[]=['salman','kamal','saad','zulqarnain'];

guestList.splice(0,1,"tahir");

guestList.push('qaisar');

let middleName=(Math.floor(guestList.length/2));

guestList.splice(middleName,0,"Asif");

guestList.forEach(i=>console.log(`Assalamo Aliekum ${i}, you are invited in my Birthday Party celebrated on Sunday.`));