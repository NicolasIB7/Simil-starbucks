import React from "react";
import style from "./Cafe.module.css"

const Cafe=()=>{

    return(
        <div>
      <div className={style.principal}>
        <h1 >Nuestro café</h1>
      </div>

      <div className={style.texto}>
      <p>El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo.</p>
        <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNuestro%20Caf%C3%A9.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max" alt="" />
        <p>De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares. 
        Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos.</p>
        <h3>Nuestro tostado Starbucks</h3>
        <p>Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. </p>
        <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2Fcurva.jpg?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max" alt="" />
        <h3>Rubio</h3>
        <p>El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.</p>
        <h3>Medio</h3>
        <p>El café con tostado medio es balanceado con sabores agradables y enriquecidos.</p>
        <h3>Oscuro</h3>
        <p>Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. </p>
        <h3>Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?</h3>
        <p>Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo. </p>
        <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMetodos.png?auto=format,compress&q=70&crop=focalpoint&ar=1.6:1.0&w=700&fit=max" alt="" />
        <p>Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks.</p>

        <a href="https://historias.starbucks.com/es/stories/2020/descubre-los-metodos-de-preparacion-en-starbucks-cual-es-el-correcto-para-ti/" className={style.boton}>Conocé nuestros métodos</a>
        </div>
        </div>
    )


}

export default Cafe;