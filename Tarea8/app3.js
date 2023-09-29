// Operadores Logicos
// && : si los dos son verdaderos
// || : con que uno sea verdadero
// != : Negacion

// let res= true && true;
// console.log(res);

//and
let and=true && true;
console.log(and);

//or
let or= true || false;
console.log(or);

//negacion
let neg= !(true);
let neg1= !(false);

console.log(neg);
console.log(neg1);

//tablas de verdad
//and
const AND = {
    "false AND false": false && false,
    "false AND true": false && true,
    "true AND false": true && false,
    "true AND true": true && true
}
console.table(AND)

//or
const OR = {
    "false OR false": false || false,
    "false OR true": false || true,
    "true OR false": true || false,
    "true OR true": true || true
}
console.table(OR)

//negacion
const NOT = {
    "NOT true": !true,
    "NOT false": !false
}
console.table(NOT)

//if-else
// let textPromt = prompt("Escribe <Agropecuario>");
// if (textPromt === "Agropecuario") console.log("Eres un diccionario andante");
// else console.log("Eres un analfabeta");

// let num = prompt("Escribe un numero");
// if (parseInt(num) >= 1 && parseInt(num)<=10) console.log("Esta en el rango");
// else console.log("No esta en el rango");

//Comparar 3 numeros y decirte que numero es mayor, menor o igual
let a=  prompt("Escribe un numero");
let b=  prompt("Escribe un numero");
let c=  prompt("Escribe un numero");

if (parseInt(a) > parseInt(b) && parseInt(a) > parseInt(c)){
    console.log("El primer numero:",a,"es mayor que el segundo:",b,"y el tercero:",c);
    if(parseInt(b) > parseInt(c)){
        console.log("El segundo numero:",b,"es mayor que el tercero:",c);    
    }else if (parseInt(b) === parseInt(c)){ 
        console.log("El segundo numero:",b,"es igual que el tercero:",c);
    }else{
        console.log("El segundo numero:",b,"es menor que el tercero:",c);
    }
}
else if (parseInt(b) > parseInt(c) && parseInt(b) > parseInt(a)){
    console.log("El segundo numero:",b,"es mayor que el primero:",a,"y el tercero:",c);
    if(parseInt(c) > parseInt(a)){
        console.log("El tercer numero:",c,"es mayor que el primero:",a);    
    }else if (parseInt(c) === parseInt(a)){
        console.log("El tercer numero:",c,"es igual que el primero:",a);
    }else{
        console.log("El tercer numero:",c,"es menor que el primero:",a);
    }
}
else if (parseInt(c) > parseInt(a) && parseInt(c) > parseInt(b)){
    console.log("El tercer numero:",c,"es mayor que el primero:",a,"y el segundo:",b);
    if(parseInt(a) > parseInt(b)){
        console.log("El primer numero:",a,"es mayor que el segundo:",b);  
    }else if (parseInt(a) === parseInt(b)){
        console.log("El primer numero:",a,"es igual que el segundo:",b); 
    }else{
        console.log("El primer numero:",a,"es menor que el segundo:",b);
    }
}
else if (parseInt(a) === parseInt(b) && parseInt(a) === parseInt(c)){
    console.log("El primer numero:",a,"es igual que el segundo:",b,"y el tercero:",c);
}