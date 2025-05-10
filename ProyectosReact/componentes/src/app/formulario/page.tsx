'use client'
import { useState } from "react";
import { Usuario } from "../models/usaurio";

export default function Formulario() {

    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");
    const [correo, setcorreo] = useState("");

    const [usuarios, setusuarios] = useState<Usuario[]>([])

    function limpiarUsuarios(){
        setnombre("")
        setapellido("")
        setcorreo("")
    }
    function anadirUsuario(){
       //captuura la variable lista, se queda con lo que hay en la lista y añade un usuario nuevo
        if (!nombre || !apellido || !correo) {
            alert('debes ingresar todos los datos')
        }else{
            setusuarios([...usuarios, {nombre, apellido, correo}])
            console.log(usuarios);
        }
        
        
    }

    return (
        <div>
            <h2 className="mt-3">Formulario de Registro</h2>
            
                <div className="mb-3">
                    <label  className="form-label">Introduce nombre</label>
                    <input type="text" value={nombre} className="form-control" id="1" onChange={(e) => {setnombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Introduce apellido</label>
                    <input type="text" value={apellido} className="form-control" id="2" onChange={(e) => {setapellido(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Introduce correo</label>
                    <input type="email" value={correo} className="form-control" id="3" onChange={(e) => {setcorreo(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => {
                    anadirUsuario();
                    limpiarUsuarios();
                }}>Guardar</button>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                    {
                        usuarios.map((item, index) => {
                            return(
                                <div className="col" key={index}>
                                <div className="card border-light mb-3"  style={{maxWidth: '18rem'}}>
                                <div className="card-header">{item.nombre}</div>
                                  <div className="card-body">
                                    <h5 className="card-title">{item.apellido}</h5>
                                    <p className="card-text">{item.correo}</p>
                                    
                                  </div>
                                </div>
                              </div>
                        )

                        })
                    }
                </div>
        </div>

    
    );
}