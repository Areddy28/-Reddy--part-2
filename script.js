
let name = prompt("Name your pet?"); 
let action = prompt("Feed, Pet, or Walk?")
let total = 0; 
let happiness = 0;
let energy = 0;  

for (let i = 0; i< 6; i++) {
    let action = prompt("Enter action"); 
    console.log(action);

    if (action === "feed") {
        energy += 2;
    } else if (action === "pet") {
    happiness += 1; 
    } else if (action === "walk") {
            if (energy < 1) {
                 console.log("too tired to walk");   
            } else {
                happiness +=2;
                energy -= 1;
            }
        } else {
        }         
    }
console.log("happiness"); 
console.log("energy"); 