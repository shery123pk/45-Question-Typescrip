//Q37 :: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, msg) {
    console.log(`print a message on the ${size} shirt, ${msg}\n`);
}
make_shirt('large and medium', 'I love TypeScript');
make_shirt('small', 'Pakistan Zindabad');
export {};
