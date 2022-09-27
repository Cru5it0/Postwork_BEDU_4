/**
 * Una lista es una serie de objetos anidados donde el primero tiene 
 * una referencia al segundo, el segundo al tercero y así sucesivamente 
 * hasta llegar al último objeto de la lista.
 */

const list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
        value: 3,
        rest: null
        } 
    }
}

function arrayToList(array) {
    // Code goes here
    // console.log(array);
    let list = {};

    for (let i = array.length; i >= 0;  i--) {
        //console.log(i);
        list = { value: array[i], rest: list};
    }

    return list;
}

function listToArray(list) {
    // Code goes here
    // console.log(list);
    let array = [];
  
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
  
  return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    // Code goes here
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2]));
// {value: 1, rest: {value: 2, rest: null}}

console.log(listToArray(arrayToList([1, 2, 3])));
// [1, 2, 3]

console.log(prepend(1, prepend(2, null)));
// {value: 1, rest: {value: 2, rest: null}}

console.log(nth(arrayToList([1, 2, 3]), 1));
// 2