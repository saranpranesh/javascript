for(let i=0; i<=50; i++){
    if(i % 3 ===0 &&  i % 5 ===0){
      console.log("FizzBuzz")
    }else if(i % 3 ===0){
      console.log("Fizz")
    }
    else if(i % 5 ===0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }


  for(let i =0; i<=20;i++){
    if(i % 2===0){
      console.log("Even:" + (i))
    }else{
    console.log("Odd:" + (i))
  }
}

for( i=0;i<=20;i++){
if(i % 4 ===0 && i% 6===0){
console.log("Multiple of Both:" +(i))
}else if(i % 4 ===0){
console.log("Multiple of 4:" +(i))
}else if(i % 6 ===0){
console.log("Multiple of 6:" +(i))
}else{
console.log(i)
}
}

let word = "education";          
let count = 0;                   

for (let char of word.toLowerCase()) {   
  if ("aeiou".includes(char)) {          
    count++;                            
  }
}

console.log("Vowel count:", count); 

