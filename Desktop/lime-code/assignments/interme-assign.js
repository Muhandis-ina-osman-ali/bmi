// part 1 question number one 

// function divide(a,b){
//     try{
//         if(b === 0){
//             console.log("0 lama qebin karo")
//         }
//        throw new error("0 lama qebin karo")
//         let result = a/b;
//         console.log(`natiijadu waa ${result}`)
//     }
//     catch(error){
//         console.log("qalad ayaa dhacay", error.message)
//     }
//     finally{
//         console.log("this is always runs")
//     }
// }
// divide(20,2)

// question number one part two  
// setTimeout(()=>{
//     alert("hello wolrd")
// },3000)

// question number two 
// let counter =1;
// const number = setInterval(()=>{
//     console.log("counter", counter++);
//     if(counter >5){
//         clearInterval(number)
//     }
// },1000)

// part 3 question number 1 
// let num = 5.76;
// let round = Math.round(num);
// console.log(round);

// question number 2 
// let random = Math.random()*10;
// console.log(Math.floor(random));

// question number 3 
// function divide(){
//  let sqr = Math.sqrt("16");
//  console.log(sqr)  
 
//  try{
//     if(sqr !== Number){
//         console.log("it's not a number")
//     }
//     Error("qalad ayaa dhacay")
  
//  }   catch( Error){
//       console.log("waan ka xunahay", Error.message)
//  }
//  finally{
//     console.log("this is always runs")
//  }
 
// } divide("nnmm")

let names=["abdisamad","osman",21];
// console.log(names[1])
// console.log(names.length);
// // adding last 
// names.push("abdi");
// console.log(names)
// // adding front 
// names.unshift("abdiqadir");
// console.log(names)
// // removing last one 
// names.pop();
// console.log(names)
// // removing first one 
// names.shift()
// console.log(names)

for(i=0; i<names.length;i++){
    console.log(names[i]);
}