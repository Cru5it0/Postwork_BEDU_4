/**
 * Cambiar el orden de un arreglo
 * Los arreglos cuentan con el método reverse que cambia el orden de los 
 * elementos dentro del arreglo. Para este ejercicio debes crear dos funciones, 
 * reverseArray y reverseArrayInPlace. La primera función recibe un arreglo 
 * como argumento y crea un nuevo arreglo con los mismos elementos pero en el 
 * orden contrario. La segunda función es igual a la primera, la diferencia 
 * está en que no crea un nuevo arreglo, es decir, modifica el arreglo que está 
 * recibiendo como argumento.
 */

function reverseArray(array) {
    // Code goes here
    //console.log(array)
    let element = [];

    for (let i = array.length - 1; i >= 0; i--) {
        // console.log(array[i]);
        element.push(array[i]);
    }

    return element;

}

function reverseArrayInPlace(array) {
    // Code goes here
    let element = [];

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // console.log(array[i]);
        // element.push(array[i]);

        element = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = element;
        //console.log(array);
    }

    return array;

}

console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]

let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);

console.log(array); // [5, 4, 3, 2, 1]