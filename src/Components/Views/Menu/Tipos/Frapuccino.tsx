import React from "react";
import {data} from "../data"
import style from "./estilos.module.css"
const Frapuccino=()=>{
    const filtro=data.filter((tipo)=>tipo.name==="Frapuccino");

    return(
        <div>
            <h2 style={{fontSize:40,marginRight:"65%" }}>Frapuccino</h2>
            {filtro[0].tipos.map((tipo)=>{
                return(
                    <div className={style.container}>
                        <hr/>
                    <h3 style={{fontFamily: "Helvetica, Sans-Serif", marginRight:"100%"}}>{tipo.name}</h3>
                    <hr/>
                    {tipo.tipos.map((t)=>{
                        return (
                        <div className={style.imagenes}>
                            
                        <img src={t.img} alt="" style={{backgroundColor:"#1E3932", borderRadius:"50%"}}/>
                        <h3 style={{fontFamily: "Helvetica, Sans-Serif"}}>{t.name}</h3>
                        </div>
                        
                        )
                    })}
                    </div>
                )
            
                })}
        </div>
    )
}

export default Frapuccino;