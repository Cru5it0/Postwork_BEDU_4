//Suma de rango

/**
 * Crear una función range que recibe tres argumentos, start, end y step. 
 * La función debe retornar un arreglo que contenga todos los números desde 
 * start hasta end. El tercer argumento step es opcional, y nos indica el 
 * número de incrementos para crear el arreglo. Si no se recibe este argumento 
 * el incremento debe ser de uno en uno. step puede ser negativo, en este caso 
 * en lugar de incrementar los números el arreglo debería ir disminuyendo los números.
 */

function range(start, end, step) {
    // Code goes here    
    // Si step es diferente de vacio declarar que el arreglo va a\
    // incrementar de uno en uno
    if (!step) {
        step = start < end ? 1 : -1;   
    }

    //Creamos el array donde se integraran start y end
    let array = [];
    //console.log(start);
    
    if(step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }

    return array
    
}

function sum(array) {
    // Code goes here
    let total = 0;

    // Creamos un elemento que recorrera el array funal
    for (const element of array){

        total += element;

    }

    return total;
}

console.log( range(1, 5) ); // [1, 2, 3, 4, 5]

console.log( range(1, 10, 2) ); // [1, 3, 5, 7, 9]

console.log( range(5, 2, -1) ); // [5, 4, 3, 2]

console.log( sum(range(1, 10)) ); // 55
