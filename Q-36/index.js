// Q36:: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, msg) {
    console.log(`the ${size} size and text ${msg} print on this shirt:\n`);
}
make_shirt('small', '"Lahore Qalandar"');
make_shirt('Medium', '"Peshawar Zalmi"');
make_shirt('Large', '"Karachi King"');
export {};
