// Dificultad: 🟢
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje.

// let edad = parseInt(prompt ("Ingrese su edad: "))

// if (edad <1 ){
//     document.write ("Ingrese un numero válido.")
// } else if (edad <= 18){
//     document.write ("Ud no tiene edad suficiente para conducir.")
// } else document.write ("Ud ya puede conducir")



// Dificultad: 🟢🟡
// 2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
// la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
// de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
// “Introduce un número válido”.

// let nota = parseInt ( prompt ("Ingrese la nota: "))

// //Comprueba que sea un numero
// if (Number(nota)!=nota){
//     alert ("Ingrese un numero válido")
// //Comprueba que el numero esté entre 0 y 10
// } else if (nota >= 0 && nota <= 10){
    
//     if (nota <= 2.9){
//         alert("Muy Deficiente")

//     } else if (nota <= 4.9){
//         alert("Insuficiente")

//     } else if (nota <= 6.9){
//         alert("Suficiente")

//     } else if (nota == 7){
//         alert("Bien")

//     } else if (nota <= 9.9){
//         alert("Notable")

//     } else if (nota == 10){
//         alert("Sobresaliente")

//     } else alert ( "Numero Erroneo")
    
// //else en caso de ingresar un numero fuera del rango 0 a 10
// } else alert ("Ingrese un numero entre 0 y 10")



// Dificultad: 🟢🟡
// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// let array = []
// let string = ""

// let ingresoCadenas = (array,string) => array.push(string)

// do{
//     string = prompt("Ingrese Cadena de Texto: ")
//     ingresoCadenas(array,string)
// } while (confirm("¿Desea agregar otra cadena?") == true) 

// let concatenado = array.join (" - ")
// document.write(concatenado)



// Dificultad: 🟢🟡
// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducidos.


// let suma = 0;
// do {
//     let numero = prompt("Introduce un numero");
//     if (Number(numero) == numero) {
//         numero = Number(numero);
//         suma = suma + numero;
//     }
//     else {
//         // Si pulso CANCELAR ES UNDEFINED, pero si es una letra no lo es, por lo tanto tiene que mostrar en ese caso el mensaje de "NO ES UN NUMERO" unicamente. Si quito el IF me mostrará el mensaje tambien cuando pulse cancelar
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// } while (numero != undefined);
// document.write(suma);




// Dificultad: 🟢🟡🔴
// 5- Realizar una página con un script que calcule el valor de la letra de un número
// de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
// W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a
// preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».



// let dni

// do  {
//     dni = parseInt (prompt ("Ingrese el numero de DNI: "))
// }
// while (!Number.isInteger(dni));
  
// let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L","C", "K", "E"]

// let modulo = dni % 23 

// console.log (`La letra del DNI es " ${letras[modulo]} "`)



// Dificultad: 🟢🟡
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….



// for (let i = 1 ; i <= 30 ; i++){
//     str = i.toString()
//     console.log(str.repeat(i))
// }



// Dificultad: 🟢🟡
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


// do {
//     var cantidad = parseInt(prompt("Ingrese un numero menor a 50: "))
// }while (cantidad >50)

// for (let i = cantidad ; i > 0 ; i--){
//     str = i.toString()
//     console.log(str.repeat(i))
// }



// Dificultad: 🟢🟡
// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)
// 1 12
// 123
// 1234
// 12345
// 123456
// ……


// var total = "";
// do {
//     var cantidad = parseInt(prompt("Ingrese un numero menor a 50: "))
// }while (cantidad >50)

// for (let i = 1 ; i <= cantidad ; i++){
//     str = i.toString()
//     total = total.concat(str)
//     console.log(total)
// }




// Dificultad: 🟢🟡🔴
// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
// ejemplo :
// 1
// 23
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 67
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10


// for (let i = 1 ; i <= 500 ; i++){
   
//     if (i % 4 == 0 && i % 9 == 0){
//         console.log (`${i} (Multiplo de 4 y 9)`)
//     } else if (i % 4 == 0){
//         console.log (`${i} (Multiplo de 4)`)
//     } else if (i % 9 == 0){
//         console.log (`${i} (Multiplo de 9)`)
//     } else console.log (i)
//     if ( i % 5 == 0){
//         console.log("---------------")
//     } 
//   }


// Dificultad: 🟢🟡🔴
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en
// orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let filas = parseInt (prompt("Ingrese la cantidad de filas: "))
// let columnas = parseInt (prompt("Ingrese la cantidad de columnas: "))

// let resultado = filas * columnas

// document.write("<table>")

// for (let i = 0 ; i < filas ; i++){

//     document.write("<tr>")

//     for (let j = 0 ; j < columnas ; j++){
//         document.write("<td>" + resultado + "</td>")
//         resultado--
//     }
//     document.write("</tr>")
// }
// document.write("</table>")


// Ejercicios con Math

// Dificultad: 🟢🟡
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
// nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// let nombre1 = prompt("Ingrese el primer nombre: ")
// let edad1 = Number (prompt(`Ingrese la edad de ${nombre1}: `))

// let nombre2 = prompt("Ingrese el segundo nombre: ")
// let edad2 = Number (prompt(`Ingrese la edad de ${nombre2}: `))

// let nombre3 = prompt("Ingrese el tercer nombre: ")
// let edad3 = Number (prompt(`Ingrese la edad de ${nombre3}: `))

// let mayor = Math.max (edad1, edad2, edad3)

// if (mayor == edad1) console.log (`El mayor es ${nombre1} y tiene ${edad1} años`)

// if (mayor == edad2) console.log (`El mayor es ${nombre2} y tiene ${edad2} años`)

// if (mayor == edad3) console.log (`El mayor es ${nombre3} y tiene ${edad3} años`)



// Dificultad: 🟢🟡
// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let num = Math.ceil (Math.random() * 99)
// console.log (num)



// Ejercicios con String


// Dificultad: 🟢🟡
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let texto = prompt ("Ingrese un texto y yo lo pasaré a mayusculas sin costo alguno: ")
// texto = texto.toUpperCase()
// console.log(texto)


// Dificultad: 🟢🟡
// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
// – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
// tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.



// let texto = prompt ("Ingrese un texto y le pondré guiones: ")

// let caracter = ""


// for (let i = 0 ; i < texto.length ; i++){
//     caracter = texto[i]
    
//     if (i == texto.length-1){
//         document.write(caracter); 
//     }else document.write(caracter + "-");
    
// }



// Dificultad: 🟢🟡
// 15- Realiza un script que cuente el número de vocales que tiene un texto.



// let texto = prompt ("Ingrese un texto y te diré cuantas vocales tiene: ")
// let cantidad = 0

// for (let i = 0 ; i < texto.length ; i++){

//     if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u" || texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "U"){
//         cantidad++
//     }
   
// }
// document.write(`En el texto " ${texto} " hay ${cantidad} vocales mayusculas o minusculas`)




// Dificultad: 🟢🟡
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
// si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let texto = prompt ("Ingrese un texto cualquiera y lo escribiré al reves GRATIS: ")

// let caracter = ""
// let textoInvertido = ""

// for (let i = 0 ; i < texto.length ; i++){
//     caracter = texto [i]
//     textoInvertido = caracter + textoInvertido
// }
// console.log (textoInvertido)



// Dificultad: 🟢
// 17- Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.

// let texto = prompt ("Ingrese un texto cualquiera y te diré en que posicion está la primera vocal que ingresaste: ")

// let posicion

// for (let i = 0 ; i < texto.length ; i++){

//     if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u" || texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "U"){

//         posicion = i
//         break
//     }

// }

// console.log (posicion)