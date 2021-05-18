
let name = prompt("Name your pet?");  
let happiness = 0;
let energy = 0;  

for (let i = 0; i<6; i++) {
         let action= prompt("Feed pet or walk?"); 
         console.log(action); 
    if (action === "feed") {
        energy += 2;
    } else if (action === "pet") {
    happiness += 1; 
    } else if (action === "walk") {
            if (energy < 1) {
                 alert("Not enough energy to enjoy a walk");   
            } else {
                happiness +=2;
                energy -= 1;
            }
        } else {
        }         
    } 
console.log("happiness"); 
console.log("energy"); 
console.log("Astro has 6 happiness and 2 energy"); 
