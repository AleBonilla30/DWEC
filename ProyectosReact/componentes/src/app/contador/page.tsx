'use client';

import { useState } from "react";

export default function Contador () {
     // useState es un hook de react que me permite crear un estado
    const [contador, setcontador] = useState(0); //el valor inicial quue tiene la variable
    const eventHandler = (e) => {
        console.log('evento', e.target.id);
        const id = e.target.id;
        switch (id) {
            case '1':
                setcontador(contador + 1);
                break;
        
            case '2':
                setcontador(contador - 1);
                break;
            case '3':
                setcontador(0);
                break
        }
    } 


    return (
        <div>
            <h2>Contador APP</h2>
            <p className="mt-2">El valor del contador es: {contador}</p>
            <button className="btn btn-primary mt-2" id="1" onClick={eventHandler}>Incrementar</button>
            <button className="btn btn-primary mt-2" id="2" onClick={eventHandler}>Decrementar</button>
            <button className="btn btn-primary mt-2" id="3" onClick={eventHandler}>Resetear</button>
        </div>
    );
}


