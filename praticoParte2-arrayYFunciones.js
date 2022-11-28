// Arrays

// Dificultad: 🟢
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
// año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.


// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// for (let i = 0 ; i < meses.length ; i++){

//     document.write (meses[i] + "<br>")

// }

// document.write (meses)




// Dificultad: 🟢🟡
// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'.


// let arrayCiudades = []

// do {
//     var ciudad = prompt("Introduce una ciudad del mundo: ");
//     if (ciudad == undefined){
//         break
//     }
//     arrayCiudades.push(ciudad)
//     // console.log(arrayCiudades)
    
// } while (ciudad != undefined);

// console.log (arrayCiudades)
// console.log (arrayCiudades.length)
// console.log (arrayCiudades[0] + arrayCiudades[2] + arrayCiudades [arrayCiudades.length-1])
// arrayCiudades.push("Paris")
// document.write(arrayCiudades[1])
// arrayCiudades.splice(1,1,"Barcelona")
// document.write(arrayCiudades)




// Dificultad: 🟢🟡🔴
// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
// función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
// de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
// anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
// esta operación.


// let dado1
// let dado2
// let apariciones = []
// let suma

// for ( let i = 0 ; i < 50 ; i++){
//     dado1 = Math.ceil (Math.random() * 6)
//     dado2 = Math.ceil (Math.random() * 6)
//     suma = dado1 + dado2
//     // document.write (suma + "<br>")
//     apariciones.push(suma)
    
// }

// document.write(apariciones)



// Funciones

// Dificultad: 🟢
// 1- Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.


// function parOImpar (numero){
//     if (numero % 2 == 0){
//         return "El numero es PAR"
//     } else
//     return "El numero es Impar"
// }

// let numerito = parseInt (prompt ("Ingrese un numero y te digo si es par o Impar: "))

// let resultado = parOImpar(numerito)

// console.log (resultado)



// Dificultad: 🟢🟡
// 2- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.


// function esMayusOMinis(cadena){
//     let mayusculas = cadena.toUpperCase()
//     let minusculas = cadena.toLowerCase()

//     if (cadena == mayusculas){
//         console.log("Esta formado por solo MAYUSCULAS")
//     } else if (cadena == minusculas) {
//         console.log("Esta formado por solo MINUSCULAS")
//     } else console.log("ES UN MIX DE MAYUSCULAS Y MINISCULAS")

// }

// let cadenaDeTexto = "holaaasfasfasfasS"

// esMayusOMinis(cadenaDeTexto)




// Dificultad: 🟢🟡
// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// ● La fórmula del perímetro es p = 2*(a +b)



// function perimetro (lado1, lado2){
//     let perim = 2*(lado1+lado2)
//     document.write (`El perimetro del rectangulo de lado 1: ${lado1} y lado 2: ${lado2} es ${perim}`)
// }


// let lado1 =  parseInt (prompt ("Ingrese el lado 1 del Rectangulo: "))
// let lado2 =  parseInt (prompt ("Ingrese el lado 2 del Rectangulo: "))

// perimetro (lado1,lado2)



// Dificultad: 🟢🟡
// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.


// function tablaMultiplicar (numero){
//     console.log (`Tabla del ${numero}`)
//     for (let i = 1 ; i <= 10 ; i++){
//         console.log (`${numero} x ${i} = ${numero*i}`)
//     }

// }

// let numero = parseInt (prompt ("Ingrese la tabla de multiplicar que quiere generar: "))

// tablaMultiplicar(numero)
