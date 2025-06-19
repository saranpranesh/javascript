var mark=70

if(mark >=90){
    console.log("Grade A")
}else if(mark>=80){
    console.log("Grade b")
}else if(mark>=70){
    console.log("Grade c")
}else if(mark>=60){
    console.log("Grade D")
}else{
    console.log("Grade F")
}

var mark=20
if(mark>=10){
    console.log("Pass")
}

for (let i=1; i<=20;i++){
   if (i % 2===0){
console.log(i)
}
}
for (let i=1; i<=10;i++){
        console.log(i + " x 5 = " + (i*5))  
        }
var a=10
var b=20
console.log(a+b)

// Array
var fruits = ["apple","orange","cherry"]
console.log(fruits)

//Accessing Array Elements
console.log(fruits[0])

//Change Value in Array
fruits[2]="banana"
console.log(fruits)

//Using for loop for Array
for(let i=0;i<3;i++){
    console.log(fruits[i])
}

//we can use array length for finding how many values
console.log(fruits.length)
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//Add element to array

fruits.push("Cherry")
console.log(fruits)

//Remove elements from array
fruits.pop()
console.log(fruits)

// Add elements in beginning
fruits.unshift("graps")
console.log(fruits)

// Remove first element in array
fruits.shift()
console.log(fruits)

//Compaining Array

var container1 = ["Tv","Laptop"]
var container2 = ["Playstation","Table"]
 console.log(container1)
 console.log(container2)
  
 var container=("container1".concat(container2))
 console.log(container)

 //Array with mixed data
  var MixedData=(2,3.3,"light","Pen",true,false,undefined,null)
console.log(MixedData)

// object

var person={
    name:"john",
    age:21,
    isEmployed:true
}
console.log(person)

// Adding new property

person.city = ("NewYork")
console.log(person)

// Modifying the object
person.age = (25)
console.log(person)

//object with method = using function
//Destructuring assignment 
