const prompt = require("prompt-sync")();
l1=['shyam','ram','mohan']
function isname(name){
     for(let x=0;x<l1.length;x++) {
         if(l1[x]===name){
            return true;
        }
    }
     return false;
    
    
}
let namee = prompt('Enter Name:');
const ishere = isname(namee);

if (ishere) {
    console.log(`yes,${namee} is a valid users.`);
} else {
    console.log(`No,${namee} is not a valid users.`);
}