// function mayorMenosMenor(arr) {
//     // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
//     // NOTA: No utilizar los métodos "min" y "max" de "Math".
//     //
//     // Tu código:
//     document.write(`El arreglo original es el: [${arr}] <br>` )

//     arr.sort(function (a, b) {
//         return a - b;
//     });
    
//     arr.sort()

//     let minimo= parseInt(arr[0]);
//     let maximo= parseInt(arr[arr.length-1]);

//     let diferencia= maximo-minimo;

//     document.write(`El arreglo ordenado es el: [${arr}] <br> <br>`)

//     document.write(`El máximo numero dentro del arrego es el: ${maximo} <br>`);
//     document.write(`El mínimo numero dentro del arrego es el: ${minimo} <br><br>`);
//     document.write(`La diferencia entre el máximo y el minimo es: ${diferencia}<br>`);

// };


// let arr=[5, 144, 19, 68, 52, 1200, 442, 779];

// mayorMenosMenor(arr)







// function ingredienteEnMalEstado(menu, comida, ingrediente) {
//     // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
//     // ya que deben estar contaminados también.
//     // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
//     // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
//     // diferencia.
//     // Ej:
//     /* let menuDelDia = {
//         raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
//         bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
//         tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
//     } */
//     // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
//     // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
//     // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
//     // NOTA: No utilizar el método "includes".
//     //
//     // Tu código:

//     // if (comida.findIndex(ingrediente)===-1) {
//     //     document.write("NO TOY");
//     // }else {
//     //     document.write("SI TOY")

//     // }

//     document.write(menu + "<br>")
//     document.write(comida + "<br>")
//     document.write(ingrediente + "<br>")

//     let indice = comida.indexOf(ingrediente);
//     console.log(indice)


// };



// let menuDelDia = {
//         raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
//         bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
//         tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
//     }


    
// ingredienteEnMalEstado ("menuDelDia", "tallarines", "Huevos");



function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:

};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
    
};

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:

};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:

};


