/*
Step 1: prompt user for pets name, 
        store in variable (name)
Step 2: prompt user for an action
        store in variable (action)        
Step 2: Loop action times 
        ask user for action 
        add that action        
*/

let name = prompt("Name your pet?"); 
let action = prompt("Feed, Pet, or Walk?")
let total = 0;
for (let i = 0; i< 6; i++) {
    let action = prompt("Enter action"); 
    total += action; 
}
console.log("")