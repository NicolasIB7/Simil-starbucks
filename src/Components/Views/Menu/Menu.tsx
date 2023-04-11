import React from "react";
import {data} from "./data";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";


const Menu=()=>{


    return(
        <>
        <div className={style.titulo}>
        <h3>¡Disfrútalos!</h3>
        <h2 style={{fontSize:"30px"}}>Conoce nuestras bebidas y alimentos de temporada</h2><br/>
        <hr/>
        <h2 style={{fontSize:30,marginRight:"65%" }}>Bebidas</h2>
        <hr/>
        </div>
        <div className={style.bebidas}>
        
        {data.map((info)=>{
            return (
                <div >
                    <Link to={`/menu/${info.name.toLowerCase()}`}>
            <img src={info.img} alt="" className={style.imagenes} />
            </Link>
                <h3 style={{fontFamily: "Helvetica, Sans-Serif"}}>{info.name}</h3>
                
            </div>
            )
        })}
        </div>
        </>
    )


}

export default Menu;