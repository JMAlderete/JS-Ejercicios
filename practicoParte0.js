// Dificultad: 🟢
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un
// alert que diga “un mensaje”.

//alert ("un mensaje")



// Dificultad: 🟢
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que
// diga «Hello World» (document.write).

//document.write ("Hello World")



// Dificultad: 🟢
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado
// de sumar 3 + 5.

//document.write (3+5)



// Dificultad: 🟢
// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un
// prompt y escriba un texto que diga «Hola nombreUsuario»

// let nombre = prompt ("Escriba su nombre: ")
// document.write ("HOLA " + nombre)



// Dificultad: 🟢
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y
// escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/
// parseInt

// let num1 = parseInt(prompt("Ingrese el primer número: "))
// let num2 = parseInt(prompt("Ingrese el segundo número: "))
// console.log (num1 + num2)


// Dificultad: 🟢
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.

// let num1 = parseInt(prompt("Ingrese el primer número: "))
// let num2 = parseInt(prompt("Ingrese el segundo número: "))

// if (num1 == num2){
//     console.log("Los números ingresados son iguales")
// } else if (num1 > num2){
//     console.log (`El numero ${num1} es mayor a ${num2}`)
// }else console.log (`El numero ${num2} es mayor a ${num1}`) 


// Dificultad: 🟢
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.

// let n1 = parseInt(prompt("Ingrese el primer número: "))
// let n2 = parseInt(prompt("Ingrese el segundo número: "))
// let n3 = parseInt(prompt("Ingrese el tercer número: "))
// let grande = 0
// let elMayor = 0

// if ( n1 > n2 ){
//     grande = n1
// }else grande = n2

// if (grande > n3){
//     elMayor = grande
// } else elMayor = n3

// document.write (`El numero ${elMayor} es el numero más grande de los 3 ingresados`)

// Dificultad: 🟢
// 8.- Escribe un programa que pida un número y diga si es divisible por 2

// let num = parseInt(prompt("Ingrese un número: "))

// if (num % 2 == 0){
//     document.write (`El numero ${num} es divisible por 2`)
// }else document.write (`El numero ${num} NO es divisible por 2`)



// Dificultad: 🟢🟡
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

// let frase = prompt ("Ingrese un frase: ")

// for (let i = 0; i < frase.length; i++) {
//     if (frase[i]=="a" || frase[i]=="e" || frase[i]=="i" || frase[i]=="o" || frase[i]=="u" || frase[i]=="A" || frase[i]=="E" || frase[i]=="I" || frase[i]=="O" || frase[i]=="U")
//     document.write (frase[i]) 
// }




// Dificultad: 🟢🟡
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
// 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let num = parseInt(prompt("Ingrese un número: "))

// if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
//     document.write (`El numero ${num} es divisible por 2, 3, 5 o 7`)
// } else document.write (`El numero ${num} NO es divisible por 2, 3, 5 ni por 7`)




// Dificultad: 🟢🟡
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
// que decir todos por los que es divisible)

// let num = parseInt(prompt("Ingrese un número: "))

// if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
    
//     if (num % 2 == 0 ) document.write (`El numero ${num} es divisible por 2<br>`)
//     if (num % 3 == 0 ) document.write (`El numero ${num} es divisible por 3<br>`)
//     if (num % 5 == 0 ) document.write (`El numero ${num} es divisible por 5<br>`)
//     if (num % 7 == 0 ) document.write (`El numero ${num} es divisible por 7<br>`)

// } else document.write (`El numero ${num} NO es divisible por 2, 3, 5 ni por 7`)
