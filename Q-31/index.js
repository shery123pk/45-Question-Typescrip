/* Q31:: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let userName = ["samina", "Arfa", "Iqrar", "Admin"];
// userName=[]
if (userName.length === 0) {
    console.log("list is empty, We need to find some users!");
}
else {
    userName.forEach(i => {
        if (i === "Admin") {
            console.log(`Hello, ${i} whould you like to see a status report.`);
        }
        else {
            console.log(`Hello, ${i} thank you logging in again.`);
        }
    });
}
export {};
