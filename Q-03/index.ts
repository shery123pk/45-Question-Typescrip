/*  Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/

    let personName="Asif Ali";     

//convert string into lowercase

    console.log(personName.toLowerCase());      

//convert string into uppercase

    console.log(personName.toUpperCase());      

//convert string into Title Case

    console.log(personName.replace(/\b\w/g, (char)=>char.toUpperCase()));      



    