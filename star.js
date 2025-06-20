//Star Pattern

let n =5
for (let i = 1; i <= n; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
    
// Reverse star pattern
let n = 5;
for (let i = n; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}


// Declare a variable
let name = "Saran";

// Check if 'name' exists
if (typeof name !== "undefined") {
  console.log("Variable 'name' exists. Value is:", name);
} else {
  console.log("Variable 'name' does not exist");
}

// Now check for a variable that does NOT exist
if (typeof age !== "undefined") {
  console.log("Variable 'age' exists. Value is:", age);
} else {
  console.log("Variable 'age' does not exist");
}


var value = 7
switch(value){

case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday")
break;
case 3:
console.log("Wednesday")
break;
case 4:
console.log("Thrusday")
break;
case 5:
console.log("Friday")
break;
}
