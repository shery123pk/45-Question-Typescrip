//Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function SandWich(...item:string[]){      //accepts a array of items a person wants on a sandwich using rest parameter

    console.log("\n sandwich with different ingredients:\n")

    item.forEach(i=>console.log(i))                     // type all item of sandwich; 
    
    console.log("\n Now sandwich is ready to eat")
    console.log("*".repeat(60))

}
SandWich ("bread","chicken spread", "egg")                      //different number of arguments each time
SandWich ("bread","mayones", "kheera", "tomato")
SandWich ("bread","beaf", "tomato ketchup", "french fries")

//2nd method for program


function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
  }
  
  make_sandwich("ham", "cheese");
  make_sandwich("turkey", "lettuce", "tomato");
  make_sandwich("avocado", "sprouts", "mustard", "mayo");
  
  