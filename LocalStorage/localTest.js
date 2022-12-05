// Ciclo simple de LocalStorage
// Persistencia hasta que se borra el historial del navegador
//
// 1.-Verificacion de soporte localStorage
// 2.-Guardado de datos (string,number,object)
// 3.-Recuperacion
//
// Resultados mostrados en consola
// -----------------------------------------


// 1.---------------------------------------
// Verificacion de soporte en navegador

if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
	console.log('Storage_Disponible');
} else {
    // LocalStorage no soportado en este navegador
	console.log('Storage_No_Disponible');
}

// 2.---------------------------------------
// Guardardado de datos

// Strings
localStorage.setItem("Item1", "Informacion de Item1");
// Numbers
localStorage.setItem("Item2", 2454);
// Objects

let MyObj = {
	Archivos: 'foo used files for test string local storage',
	Id: 322,
	Status: true,
}

localStorage.setItem("Item3",JSON.stringify(MyObj));


// 3.---------------------------------------
// Recuperar datos
let DataRead = localStorage.getItem("Item2");
console.log(DataRead);

// Recuperar objeto

let ObjRead = JSON.parse(localStorage.getItem("Item3"));
console.log(ObjRead);

