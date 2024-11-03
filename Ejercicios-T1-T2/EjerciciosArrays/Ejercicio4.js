/* 4. Crea un array vacío llamado baraja de tipo string. 
Mete de golpe todas las cartas de la baraja francesa con el siguiente formato:

```javascript
1C,2C,3C,4C....,JC,QC,KC
1D,2D,3D,4D....,JD,QD,KD
1R,2R,3R,4R....,JR,QR,KR
1P,2P,3P,4P....,JP,QP,KP
```

Una vez creado el array baraja las cartas para que se desordenen.
Puedes utilizar alguna librería externa como por ejemplo underscore */

let baraja = []


function generadorCartas(palo) {

    for (let i = 1; i <= 13; i++) {

        //ponemos el valor de las cartas
        let carta;
        if (i <=10) {
            carta = i//nummeros del 1 al 10
        }else{
            switch (i) {
                case 11:
                    carta = 'J'
                    break;
            
                case 12:
                    carta = 'Q'
                    break
                case 13:
                    carta = 'K'
                    break
            }

        }
    baraja.push(carta + palo)
    
    }
}

//generacion de cartas de todos los palos
generadorCartas('C')
generadorCartas('D')
generadorCartas('R')
generadorCartas('T')

console.log(`Baraja completa: ${baraja}`);



