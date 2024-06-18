/*  Changing Guest List: You just heard that one of your guests can’t make the dinner, 
    so you need to send out a new set of invitations. You’ll have to think of someone else 
    to invite. 

    • Start with your program from Exercise 14. Add a print statement at the end of your program 
        stating the name of the guest who can’t make it.
    • Modify your list, replacing the name of the guest who can’t make it with the name of the 
        new person you are inviting.
    • Print a second set of invitation messages, one for each person who is still in your list.   */

    let inviteeName:string[]=['ahsan','saqib','masood','jamal'];

    let personNotcome=inviteeName[0];

        inviteeName.splice(0,1,'bilal');
        console.log(`Hello friends how are you,${personNotcome} cant attend the party due to some reason, So`);

inviteeName.forEach(i=>console.log(`${i} you are invited in my birthday party on sunday`));

