// // En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// // Crea una variable "string", puede contener lo que quieras:
// const nuevaString = "soyUnString";

// // Crea una variable numérica, puede ser cualquier número:
// const nuevoNum = 123;

// // Crea una variable booleana:
// const nuevoBool = true;

// // Resuelve el siguiente problema matemático:
// const nuevaResta = 10 - 5 === 5;

// // Resuelve el siguiente problema matemático:
// const nuevaMultiplicacion = 10 * 4 === 40;

// // Resuelve el siguiente problema matemático:
// const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// function devolverString(str) {
//   // "Return" la string provista: str
//   // Tu código:
//   return str
// }
// devolverString("PrimerEjercicio")

// function suma(x, y) {
//   // "x" e "y" son números
//   // Suma "x" e "y" juntos y devuelve el valor
//   // Tu código:
//   return x + y;
// }
// suma (2,8)

// function resta(x, y) {
//   // Resta "y" de "x" y devuelve el valor
//   // Tu código:
//   return x - y
// }
// resta (4, 6)

// function multiplica(x, y) {
//   // Multiplica "x" por "y" y devuelve el valor
//   // Tu código:
//   return x*y;
// }
// multiplica(4,5)

// function divide(x, y) {
//   // Divide "x" entre "y" y devuelve el valor
//   // Tu código:
//   return x/y;
// }
// divide (10,2)

// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return x===y;
// }

// sonIguales (1,2)

// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return str1.length===str2.length  
// }
// tienenMismaLongitud("abc", "ABC")

// function menosQueNoventa(num) {
//   // Devuelve "true" si el argumento de la función "num" es menor que noventa
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return num < 90
// }
// menosQueNoventa(89)

// function mayorQueCincuenta(num) {
//   // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return num > 50
// }
// mayorQueCincuenta (51)

// function obtenerResto(x, y) {
//   // Obten el resto de la división de "x" entre "y"
//   // Tu código:
//   return x%y
  
// }
// obtenerResto(10,3)

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu código:
//   return num*num
// }
// elevarAlCuadrado(4)


// function elevarAlCubo(num) {
//   // Devuelve el valor de "num" elevado al cubo
//   // Tu código:
//   return num*num*num
// }
// elevarAlCubo (5)


// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//   return num**exponent
// }
// elevar(5,4)

// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y devuélvelo
//   // Tu código:
//   return Math.round (num)
// }
// redondearNumero (3.22)

// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//   // Tu código:
//   return Math.ceil (num)
// }
// redondearHaciaArriba(2.44)

// function numeroRandom() {
//   //Generar un número al azar entre 0 y 1 y devolverlo
//   //Pista: investigá qué hace el método Math.random()
//   return Math.random ()
// }
// numeroRandom()

// function esPositivo(numero) {
//   //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//   //Si el número es positivo, devolver ---> "Es positivo"
//   //Si el número es negativo, devolver ---> "Es negativo"
//   //Si el número es 0, devuelve false
//   if (numero<0) return "Es negativo"
//   else if (numero>0) return "Es positivo"
//   return "FALSE"
// }
// esPositivo(2)

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
//   return str+"!"
// }
// agregarSimboloExclamacion("HOLA A TODOS")

// function combinarNombres(nombre, apellido) {
//   // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//   // Ejemplo: "Soy", "Henry" -> "Soy Henry"
//   // Tu código:
//   return nombre + " " + apellido
// }
// combinarNombres ("Juan", "Alderete")

// function obtenerSaludo(nombre) {
//   // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
//   // "Martin" -> "Hola Martin!"
//   // Tu código:
//   return "Hola " + nombre
// }
// obtenerSaludo("JUAN MARTIN")

// function obtenerAreaRectangulo(alto, ancho) {
//   // Retornar el area de un rectángulo teniendo su altura y ancho
//   // Tu código:
//   return "El area del rectangulo es: " + alto*ancho + " cm2"
// }

// obtenerAreaRectangulo (4,5)

// function retornarPerimetro(lado) {
//   //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//   //Escribe tu código aquí
//   return "El perímetro de un cuadrado de lado " + lado + " es " + lado*4
// }
// retornarPerimetro (10)

// function areaDelTriangulo(base, altura) {
//   //Desarrolle una función que calcule el área de un triángulo.
//   //Escribe tu código aquí
//   return "El área de un triangulo de base " + base + " y altura " + altura + " es " + (base*altura)/2 
// }
// areaDelTriangulo (5,4)

// function deEuroAdolar(euro) {
//   //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//   //como parámetro un número de euros y calcule el cambio en dólares.
//   //Escribe tu código aquí
//   return "Ud tiene " + euro + " Euros. En USD ud tendría: " + euro*1.2 + " USD"
// }
// deEuroAdolar (10)

// function esVocal(letra) {
//   //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//   //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
//   //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//   //Escribe tu código aquí
//   if (letra.length!=1) return "Dato Incorrecto"
//   else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") return "Es Vocal"
//   else return "SOY UNA CONSONANTE"

// }
// esVocal("a")

// function esPar(num) {
//   // Devuelve "true" si "num" es par
//   // De lo contrario, devuelve "false"
//   // Tu código:

//   if (num % 2===0) return console.log("es PAR")
//   return console.log("FALSE")

// }

// let numero = 13
// esPar(numero)

// function esImpar(num) {
//   // Devuelve "true" si "num" es impar
//   // De lo contrario, devuelve "false"
//   // Tu código:

//   if (num % 2 !== 0) return console.log("es IMPAR")
//   return console.log("FALSE")

// }

// let numero2 = 12
// esImpar(numero2)




// No cambies los nombres de las funciones.

// function obtenerMayor(x, y) {
//   // "x" e "y" son números enteros (int).
//   // Devuelve el número más grande
//   // Si son iguales, devuelve cualquiera de los dos
//   // Tu código:
  
//   if (x>y) return console.log(x)
//   return console.log(y)
  
// }

// let num1 = 10
// let num2 = 15


// obtenerMayor (num1,num2)



// function mayoriaDeEdad(edad) {
//   //Determinar si la persona según su edad puede ingresar a un evento.
//   //Si tiene 18 años ó más, devolver --> "Allowed"
//   //Si es menor, devolver --> "Not allowed"
  
//   if (edad>=18) return console.log("Allowed")
//   return console.log("Not Allowed")
 
// }

// let anios=18
// mayoriaDeEdad (anios)


// function conection(status) {
//   //Recibimos un estado de conexión de un usuario representado por un valor numérico.
//   //Cuando el estado es igual a 1, el usuario está "Online"
//   //Cuando el estado es igual a 2, el usuario está "Away"
//   //De lo contrario, presumimos que el usuario está "Offline"
//   //Devolver el estado de conexión de usuario en cada uno de los casos.

// if (status === 1 ) return console.log("Online")
//   else if (status === 2 ) return console.log ("Away")
// return console.log("Offline")

// }
// let estado = 3
// conection (estado)


// function saludo(idioma) {
//   // Devuelve un saludo en tres diferentes lenguajes:
//   // Si "idioma" es "aleman", devuelve "Guten Tag!"
//   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
//   // Si "idioma" es "ingles", devuelve "Hello!"
//   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
//   // Tu código:

//   if (idioma ==="aleman"|| idioma === "Aleman"){
//     return console.log("Guten Tag!")
//   }else if (idioma==="mandarin"|| idioma === "Mandarin"){ 
//     return console.log ("Ni Hao!")
//   }else if (idioma==="ingles"|| idioma=== "Ingles"){ 
//       return console.log ("Hello!")
//   }
//   return console.log ("Hola!")
  
// }

// let idioma="Mandarin"

// saludo(idioma)



// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
//   //En caso que el color recibido sea "red", devuleve --> "This is red"
//   //En caso que el color recibido sea "green", devuleve --> "This is green"
//   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
  
//   switch (color){
//     case "blue":
//       console.log("This is blue")
//       break;
//     case "red":
//       console.log("This is red")
//       break;
//     case "green":
//       console.log("This is green")
//       break;
//     case "orange":
//       console.log("This is orange")
//       break;
//     default:
//       console.log("Color is not found")
//     }
    
// }
// let color="orange"
// colors(color)


// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
  
//   return console.log (numero===10 || numero===5)
  
// }

// let numero=5

// esDiezOCinco(numero)

// function estaEnRango(numero) {
//   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
//   // De lo contrario, devuelve "false"
//   // Tu código:
  
//   return console.log(numero>20 && numero <50)
  
// }

// numero=50
// estaEnRango(numero)

// function esEntero(numero) {
//   // Devuelve "true" si "numero" es un entero (int/integer)
//   // Ejemplo: 0.8 -> false
//   // Ejemplo: 1 -> true
//   // Ejemplo: -10 -> true
//   // De lo contrario, devuelve "false"
//   // Pista: Puedes resolver esto usando `Math.floor`
//   // Tu código:
  
//   return console.log (Number.isInteger(numero))
    
// }

// let numero=-2
// esEntero(numero)

// function fizzBuzz(numero) {
//   // Si "numero" es divisible entre 3, devuelve "fizz"
//   // Si "numero" es divisible entre 5, devuelve "buzz"
//   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//   // De lo contrario, devuelve el numero
  
//   if(numero>0){
  
//   if(numero%3===0 && numero%5===0) return console.log("fizzbuzz")
//   else if (numero%3===0) console.log("fizz")
//   else if (numero%5===0) console.log("buzz")
//   else return console.log (numero)
//   }
//   else return console.log ("Ingrese un numero mayor a 0")
  
// }

// let numero=15
// fizzBuzz(numero)

// function operadoresLogicos(num1, num2, num3) {
//   //   La función recibe tres números distintos.
//   //OK Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //OK Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //OK Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //OK 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //   Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  
//   if (num1===0||num2===0||num3===0) return console.log("Error")
//   else if (num1<0||num2<0||num3<0) return console.log("Hay negativos")
//   else if (num1>num2 && num1>num3) return console.log("Número 1 es mayor y positivo")
//   else if (num3>num1 && num3>num2) return ++num3
//   else return false
// }

// let num1=3
// let num2=2
// let num3=4

// operadoresLogicos(num1, num2, num3)

// function esPrimo(numero) {
//   // Devuelve "true" si "numero" es primo
//   // De lo contrario devuelve "falso"
//   // Pista: un número primo solo es divisible por sí mismo y por 1
//   // Pista 2: Puedes resolverlo usando un bucle `for`
//   // Nota: Los números 0 y 1 NO son considerados números primos
//   if (numero===0||numero===1){
//     console.log("0 y 1 no son primos")
//   }
//   else {
//     for (let i=2; i<numero ; i++){
//       if (numero%i === 0){
//         return console.log(false)
//       }

//     }
//     return true
//   }
// }
// let numero = 8
// esPrimo(numero)

// function esVerdadero(valor) {
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí
  
//   if (valor==false) return console.log("Soy falso")
//   return console.log("Soy verdadero")
  
// }

// let valor = false
// esVerdadero(valor)

// function tablaDelSeis() {
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí
  
//   let seis=[]  
//   for (let i=0; i<=60 ; i=i+6 ) seis.push(i)
//   return console.log(seis)
  
// }

// tablaDelSeis()

// function tieneTresDigitos(numero) {
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí
//   let num = numero.toString()
//     if (num.length===3) return true
//   return false
  
// }

// let numero = 123
// tieneTresDigitos(numero)

// function tieneTresDigitosREV(numero) {
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí
//   let tresDigitos=numero/100
//   if (tresDigitos>=1 && tresDigitos<10) return true
//   return false
  
// }

// let numeroo = 912
// tieneTresDigitosREV(numeroo)

// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
//   i=0
//   do {
//   numero = numero + 5;
//   i++;
//   } while (i < 8);
//   return console.log(numero)
// }

// let numero=40
// doWhile(numero)

// No cambies los nombres de las funciones.

// function devolverPrimerElemento(array) {
//   // Devuelve el primer elemento de un array
//   // Tu código:
//   return console.log(array[0])
// }

// let arr=[855,"HOLA",18,false,"Ultimo"]
// devolverPrimerElemento(arr)

// function devolverUltimoElemento(array) {
//   // Devuelve el último elemento de un array
//   // Tu código:
//   return console.log(array[array.length-1])
// }
// let array=[855,"HOLA",18,false,22]
// devolverUltimoElemento(array)

// function obtenerLargoDelArray(array) {
//   // Devuelve el largo de un array
//   // Tu código:
  
//   return console.log(array.length)
// }

// let array=[855,"HOLA",18,false,22]
// obtenerLargoDelArray(array)


// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:
//   for (let i=0;i<array.length;i++){
//     array[i]=array[i]+1
//   }
//   return console.log(array)
// }

// let array=[855,2,18,0,22,5]
// incrementarPorUno(array)

// function agregarItemAlFinalDelArray(array, elemento) {
//   // Añade el "elemento" al final del array
//   // y devuelve el array
//   // Tu código:
  
//   array.push(elemento)
//   return console.log(array)
  
// }

// let array=[12,42,25,124,"hola",true]
// let elemento="PEPITO"
// agregarItemAlFinalDelArray(array, elemento)

// function agregarItemAlComienzoDelArray(array, elemento) {
//   // Añade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el método `.unshift`
//   // Tu código:
//   array.unshift(elemento)
//   return console.log(array)
  
// }
// let array=[12,42,25,124,"hola",true]
// let elemento="PEPITO"
// agregarItemAlComienzoDelArray(array, elemento)

// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:
  
//   console.log(palabras.join(" "))
  
// }

// let palabras=["Soy","Juan","Martin","Aguante","Rolling"]
// dePalabrasAFrase(palabras)

// function arrayContiene(array, elemento) {
//   // Comprueba si el elemento existe dentro de "array"
//   // Devuelve "true" si está, o "false" si no está
//   // Tu código:
//   console.log (array.includes(elemento))
  
// }

// let array=[19,14,28,11]
// let elemento=14

// arrayContiene(array, elemento)

// function agregarNumeros(numeros) {
//   // "numeros" debe ser un arreglo de enteros (int/integers)
//   // Suma todos los enteros y devuelve el valor
//   // Tu código:
//   let suma=0
//   for (let i=0 ; i < numeros.length ; i++){
//     suma=suma+numeros[i]
//   }
//   return suma
// }

// let numeros=[1,2,3,4,5]
// agregarNumeros(numeros)

// function promedioResultadosTest(resultadosTest) {
//   // "resultadosTest" debe ser una matriz de enteros (int/integers)
//   // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
//   // Tu código:
//   let suma=0
//   let promedio=0
//     for (let i = 0 ; i < resultadosTest.length ; i++){
//       suma = suma + resultadosTest[i]
//     }
  
//   return console.log(promedio = suma / resultadosTest.length)
// }


// resultadosTest=[4,2,5,10,5,7,7,2,5,10]
// promedioResultadosTest(resultadosTest)

// function numeroMasGrande(numeros) {
//   // "numeros" debe ser una matriz de enteros (int/integers)
//   // Devuelve el número más grande
//   // Tu código:
  
//   return console.log (Math.max(...numeros))
    
// }

// let numeros = [14,22,55,125,2,4,550,1]
// numeroMasGrande(numeros)



// function multiplicarArgumentos(){
//   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
//   // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
//   // Escribe tu código aquí:
//   let producto = 1
  
//   if (arguments.length > 0){
  
//     for (i = 0 ; i < arguments.length ; i++){
//       producto = producto * arguments[i]
//     }
//       console.log(producto)
// }
//     else return 0

//    //  OTRA FORMA - FORMA 2
//   // if(arguments.length < 1) return 0;
//   // var total = 1;
//   // for(var i = 0; i < arguments.length; i++) {
//   //   total = total * arguments[i];
//   // }
//   // return total

//  // arguments.length < 1 ? console.log (0) : console.log (1)
  

// }

// multiplicarArgumentos(5,2,5);


// function cuentoElementos(arreglo) {
//   //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
//   //Escribe tu código aquí
  
//  let cantidad = 0 
  
//   for (let i = 0 ; i < arreglo.length ; i++){
    
//     if (arreglo[i] > 18) cantidad = cantidad + 1
  
//   }
//    return cantidad   
  
//   // return console.log (arreglo.length)
  
// }

// let arreglo=[1,2,3,4,52,6,7,8,9,0,41,2,3,4,5,6,7,8,91,0,1,2,3,44,5,6,7]
// cuentoElementos(arreglo)

// function diaDeLaSemana(numeroDeDia) {
//   //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
//   //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//   //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
//   //Escribe tu código aquí
  
//   if (numeroDeDia>=1 && numeroDeDia <=7){
//     if (numeroDeDia==1 || numeroDeDia == 7) return console.log ("Es fin de semana")
//     else return console.log ("Es día Laboral")
//   }
//   else return console.log ("numero de día debe estar entre 1 y 7")
  
// }

// let numeroDeDia=2
// diaDeLaSemana(numeroDeDia)


// function empiezaConNueve(n) {
//   //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
//   //inicia con 9 y false en otro caso.
//   //Escribe tu código aquí
    
//   let num = n.toString()
//   if (num[0]==9){
//     return true;
//   }else{
//      return false;
//   }
         
// }

// let n=4
// empiezaConNueve(n)

// function todosIguales(arreglo) {
//   //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//   //retornar true, caso contrario retornar false.
//   //Escribe tu código aquí

//   for (let i = 0 ; i < arreglo.length ; i++){
//     if (arreglo[0] !== arreglo [i]){
//         return false        
//       }
//   }
//   return true
// }

// let arreglo = [5,5,5]

// todosIguales(arreglo)


// function mesesDelAño(array) {
//   //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
//   // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//   //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
//   // Tu código:
    
// let filtrados = array.filter(mes=> mes == "Enero" || mes=="Marzo" || mes == "Noviembre");
//   if (filtrados.length < 3){
//     return console.log ("No se encontraron los meses pedidos")
//   } else console.log (filtrados)

//   }

// let array = ["Marzo","Enero","Noviembre","Diciembre", "Julio"]
// mesesDelAño(array)

// function mayorACien(array) {
//   //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
//   // Tu código:
  
//   let mayoresCien = array.filter (numero => numero>100 && numero <=200)
//   console.log (mayoresCien)
// }

// let array1 = [50, 20, 100, 101, 200, 150, 190, 0, 1] 
// mayorACien(array1)

// function breakStatement(numero) {
//   //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//   //Guardar cada nuevo valor en un array.
//   //Devolver el array
//   //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
//   //devolver: "Se interrumpió la ejecución"
//   //Pista: usá el statement 'break'
//   // Tu código:
  
//   let suma = numero
//   let arr = []
//   for (var i = 1 ; i <= 10 ; i++){
//     if (suma == i){
//       console.log (suma,i)
//       console.log ("Se interrumpió la ejecución")
//       break
//     }    
//     suma = suma + 2
//     arr.push (suma)
//   }
  
//   if (suma != i){
//     console.log (suma)
//     console.log (arr)
//   } 
  
// }

// let numero = 2
// breakStatement(numero)

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  let array = []
  
  for (var i = 1 ; i <= 10 ; i++){
    if (i == 5){
      continue
    }
    numero = numero + 2
    array.push(numero)
  }
  console.log (array)
  
}

let numero = 0
continueStatement(numero)
