/**
 * El operador == compara objetos por identidad. 
 * En ocasiones lo que necesitamos es comparar los valores de sus propiedades.
 * 
 * Crear una función deepEqual que recibe dos argumentos y retorne true solo en 
 * los siguientes casos:
 * 
 * Ambos son el mismo valor y tipo de dato.
 * 
 * Los dos son objetos, tienen las mismas propiedades y los valores son 
 * iguales cuando se comparan con una llamada recursiva de deepEqual.
 */

function deepEqual(a, b) {
    // Code goes here
    //console.log(a);
    if (a === b) return true;
    
    if (a == null || typeof a !=  "object" || 
        b == null || typeof b != "object" ) return false;
        
    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj)); // true

console.log(deepEqual(obj, { here: 1, object: 2 })); // false

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true