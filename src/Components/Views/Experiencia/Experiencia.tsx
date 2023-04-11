import React from "react";
import style from "./Experiencia.module.css";

const Experiencia=()=>{

    return(
        <div>
        <div className={style.titulo}>
        <h1>Experiencia Sturbucks</h1>
      </div>

      <div className={style.texto}>
    
      <h2 style={{color:"#1E3932"}}>Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.</h2>

      <div className={style.bloque1}>
        <div className={style.tituloParrafo}>
      <h3>In Store</h3>
      <p>En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
      </div>
      <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67487_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" alt="" style={{width: 800}} />
      </div>

    
     

    <div className={style.bloque2}>
    
    <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67488_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=maxhttps://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67488_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" alt="" style={{width: 800}}/>
    <div className={style.tituloParrafo}>
      <h3>Drive Thru</h3>
      <p>Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.</p>
      </div>
      </div>


      <div className={style.bloque3}>
      
      <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-01%2F137-67485_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max" alt="" style={{width: 800}} />
      <div className={style.tituloParrafo}>
      <h3>Delivery</h3>
      <p>En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
      <a href="https://www.pedidosya.com.ar/cadenas/starbucks" className={style.boton}>Pedí Delivery</a>
      </div>
      </div>
        
        
        
        
      </div>
        </div>
    )


}

export default Experiencia;