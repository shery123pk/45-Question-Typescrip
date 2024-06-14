// //Assignment No 14:
// let guestName:string[]=['Shahnaz','Hamna','Nida','Rubina']
// guestName.forEach(i=>console.log(`Assalamo Aliekum ${i}, you are invited in my Birthday Party celebrated on Sunday. `));
// //Assignment No 15:
// let guestNames:string[]=['Shahnaz','Hamna','Nida','Rubina'];
// let guestNotCome=guestNames[0];
// guestNames.splice(0,1,"Safia")
// console.log(`${guestNotCome}, is not coming in Part due to some reason`)
// guestNames.forEach(i=>console.log(`Assalamo Aliekum ${i}, you are invited in my Birthday Party celebrated on Sunday. `));
//Assignment No 16:
let guestList = ['Shahnaz', 'Hamna', 'Nida', 'Rubina'];
guestList.splice(0, 1, "Safia");
guestList.push('Rabia');
let middleName = (Math.floor(guestList.length / 2));
guestList.splice(middleName, 0, "Asif");
guestList.forEach(i => console.log(`Assalamo Aliekum ${i}, you are invited in my Birthday Party celebrated on Sunday.`));
export {};
