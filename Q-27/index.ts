// /*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

let alien_color1='green';

if (alien_color1==="green"){
    console.log("Alien color is green, the player earned 5 points");
}
else if (alien_color1==="yellow"){
    console.log("Alien color is yellow, the player earned 10 points");
}
else if (alien_color1==="red"){
    console.log("Alien color is red, the player earned 15 points");
}

//version 2
let alien_color2='yellow';

if (alien_color2==="green"){
    console.log("Alien color2 is green, the player earned 10 points");
}
else if (alien_color2==="yellow"){
    console.log("Alien color2 is yellow, the player earned 10 points");
}
else if (alien_color2==="red"){
    console.log("Alien color2 is red, the player earned 15 points");
}

//version 3
let alien_color3 ="red"

if(alien_color3==="yellow"){
console.log("this is version3, alien color is yellow")
}
 else if(alien_color3==="red"){
    console.log("Alien color3 is red, the player earned 15 points")
 }
 else if(alien_color3==="green"){
    console.log("this is version3, alien color is green")
 }

