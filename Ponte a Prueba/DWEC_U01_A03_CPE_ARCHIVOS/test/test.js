// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');//se hace una comprobacion

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
//it es una funcion proporcionada por un entorno de test que se llama mocha
it('comprobar función suma', function() {
	  assert.equal(operaciones.suma(1, 3), 4);
	  assert.equal(operaciones.suma(-1, 3), 2);
	  assert.equal(operaciones.suma(8, -3), 5);
});

it('comprobar función división', function() {
	  assert.equal(operaciones.division(12, 3), 4);
	  assert.equal(operaciones.division(9, -3), -3);
	  assert.equal(operaciones.division(15, 5), 3);
});
/* Para instalar las depencias hay que seleccionar la carpeta donde esta de json con las dependencias que hay que descargar
luego abrir la terminal desde la carpeta y hacer npm install y se creara una carpeta de node_modules
luego ya puedes hacer las comprobaciones npm test para realizar todos los test para hacer todos los test
pero si queremos hacer test de uno en uno se utiliza el comando npm run test1 etc..
*/

