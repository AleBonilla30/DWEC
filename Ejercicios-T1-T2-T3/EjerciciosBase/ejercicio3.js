/* 3. Tablero de ajedrez

Escribe un programa que cree un string que represente un tabledo de 8 × 8, 
usando caracteres de nueva línea para separar las líneas. En cada posición del tabledo hay un espacio o un carácter "#". 
Los caracteres deberían de formar un tablero de ajedrez.

```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # # */

let filas = 8;
let columnas = 8;
let posiciones = "";

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {

        if ((i + j) % 2 == 0) {
            posiciones += "#";
        }else{
            posiciones += " ";
        }
        
        
    }
    posiciones +="\n";
}
console.log(posiciones);
