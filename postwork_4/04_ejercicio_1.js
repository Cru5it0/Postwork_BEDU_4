/**
 * Asynchronous Output
 * 
 * Completar la función triggerActions que pasa un callback a 
 * processAction para producir el siguiente resultado:
 */

// "Processed Action 1"
// "Processed Action 2"
// "Processed Action 3"
// ...
// "Processed Action n"

/**
 * Se debe mostrar el mensaje n cantidad de veces, 
 * determinado por triggerActions. Tomar en cuenta que no se 
 * debe modificar la función processAction. 
 */


 // Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}

const triggerActions = (count) => {
    // Code goes here
    // Funcion local para procesar y dar el numero de la accion
    let triggerAction = function (i) { 
        if (i <= count) {  // Mientras el stop (i) sea mayor o igual al contador continuara haciendo:
            processAction(i, function (text) { // para llamar un callbak se necesita enviar una funcion que sera el texto a imprimir
                console.log(text);
                triggerAction(i + 1); // Dentro de la funcion estara reciviendo el contador y cada vez incrementara
            });
        }
    }
    triggerAction(1); //Le endicamos a la accion donde iniciara
}

//Llamar a lafunccion con el limite de mensajes
// triggerActions(10);

// //Solucion de BEDU
// const triggerActions = (count) => {
//     const promises = [];
//     const generatePromise = (i) => {
//       return new Promise((resolve) => {
//         processAction(i, resolve);
//       });
//     }
//     for (let i = 1; i <= count; i += 1) {
//       promises.push(generatePromise(i));
//     }
//     Promise.all(promises)
//       .then((strings) => 
//         strings.forEach((string) => console.log(string)));
//   }
  
//   triggerActions(10);
