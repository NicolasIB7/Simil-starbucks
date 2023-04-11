import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import style from "./Footer.module.css";
import {Divider} from "@mui/material"

const Footer=()=>{

    return(
        <div className={style.container}>
            <div>
            <Divider/>
            <Divider/>
            
            </div>
        <div className={style.info}>
            <Divider/>
            <div className={style.info2}>
                <h3>Sobre nosotros</h3>
                <h4>Nuestra historia</h4>
                <h4>Nuestra misión</h4>
                <h4>Nuestra cultura inclusiva y valores</h4>
                <h4>Nuestro café</h4>
                <h4>Historias y novedades</h4>
                <h4>Comunicados oficiales</h4>
            </div>
            <div className={style.info2}>
                <h3>Impacto social</h3>
                <h4>Planeta</h4>
                <h4>Personas</h4>
            </div>
            <div className={style.info2}>
                <h3>Atencion al cliente</h3>
                <h4>Contacto</h4>
                <h4>Medios de pago</h4>
                <h4>Defensa de las y los consumidores</h4>
            </div>
            <div className={style.info2}>
                <h3>Experiencia Starbucks</h3>
                <h4>Formas de comprar</h4>
                <h4>Delivery</h4>
            </div>
        </div>
        
        <div className={style.logos}>
        <Divider/><br/>
        <a href="https://www.facebook.com/StarbucksArgentina" target="_blank" style={{color:"black", marginRight:15}}>
            <FacebookIcon/>
        </a>
        <a href="https://www.instagram.com/starbucksargentina/" target="_blank" style={{color:"black", marginRight:15}}>
            <InstagramIcon/>
        </a>
       
        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFfnjLY5K6wMwAAAYdx4Gioj7aOU91cBrz778lsTfd-_CBDXg4e4oB_A2Wtr9gD22UY-SD7-P4dUSKMQp1oCzEHM7Xt5ATFbzyKnKQUaRzN3KX50lzK-hp04J3iqSkULd5tFbg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fstarbucks-coffee-argentina%2F" target="_blank" style={{color:"black", marginRight:15}}>
           <LinkedInIcon/>
        </a>
        </div>
        <div className={style.links}>
        <a href="https://github.com/" target="_blank" style={{fontSize:20, color:"rgb(109, 109, 109)"}}>
            <p>Accesibilidad</p>
        </a>
        <a href="https://github.com/" target="_blank" style={{fontSize:20, color:"rgb(109, 109, 109)"}}>
            <p>Aviso de privacidad</p>
            </a>
            <a href="https://github.com/" target="_blank" style={{fontSize:20, color:"rgb(109, 109, 109)"}}>
            <p>Condiciones de uso</p>
            </a>
            <a href="https://github.com/" target="_blank" style={{fontSize:20, color:"rgb(109, 109, 109)"}}>
            <p>Mapa del sitio</p>
            </a>
        </div>

        <div>
            <p>2023 Starbucks Cofee Company. Reservados todos los derechos.</p>
        </div>
    
        
        
        
        </div>
    )


}

export default Footer;