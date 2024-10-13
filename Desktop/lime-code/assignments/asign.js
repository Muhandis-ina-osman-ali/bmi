// assignment of module 5 
// function declaration 
// question number 1 
function great ( hello)
{
console.log(hello)
}
great("hello world ");

// question number 2 
function square (num){
    console.log(num*num)
}
square(5);

// question number 3 
function greeting (name){
    console.log(name)
}
greeting("Hello " + " john" );

// question number 4 
function factorial(n){
    let result =1;
    for(let i =1; i <=n; i++){
        result *= i;
    }
    console.log(result)
}
factorial(6);

// function parameters 
// question number 1 
function mul (a,b){
    let res = a*b;
    console.log(res)
}
mul(10,10);
// question number 2 
function fulln (fname,lname){
    console.log(fname + lname)
}
fulln("Abdisamad ","Osman")

// question number 3 
function evenodd(numb){
    if (numb % 2 === 0){
        console.log("it's even number ")
    } else {
        console.log("it's odd number")
    }
}
evenodd(10);

// question number 4 
function area ( length , width){
    let natija =length * width;
    console.log(natija);

} area (2,5)


// return function 
// question number 1 
function divide (a,b){
    return a / b;
} console.log(divide (10,2));

// question number 2 
function adult (age){
    if (age >= 18 ) {
console.log(true)
    } else {
        console.log(false)
    }
}
adult(20);

// question number 3 
function max (a,b,c){
    if (a >= b && a>=c){
return a;
    } else if (b >=a && b>=c){
        return b ;
    } else if ( c >=a && c>=b){
        return c;
    }
   
} console.log(max(10,20,30));

/*array mana qadan sidan daraded waxaan ku xaliyay 
function io condition */

// question number 4 
function add (a,b,c){
    return a + b +c;
}
console.log(add(10,20,10));

// inta sidas oo kale baan uxaliyay 

// function expression 
// question number1 
let odd = function (od){
    if (od % 2 === 1){
        console.log("it's odd number")
    }
} 
odd(11);
// question number 2 
let min = function (d,f){
    if (d <= f){
        return d;
    } else {
        return f;
    }
}
min(10,20);

// question number 3 
let fah = function (fahren){
    let natijada = (fahren-32)*5/9;
    return natijada;
}
console.log(fah(77));

// question number 4 
let lan = function(language){
    if(language ==="en"){
        console.log("soo dhawoow")
    } else if (language === "esp"){
        console.log("bienvenida");
    } else if (language === "som"){
        console.log("soo dhawoow")
    }
}
lan =("en");

// arrow function 
// question number 1 
let multiple = (tiro) =>{
return tiro*tiro
}
console.log(multiple(4));

// question number 2 
let subs =(fir,sec) =>{
    return sec - fir;
    
}
console.log(subs(10,20));

// question number 3 

