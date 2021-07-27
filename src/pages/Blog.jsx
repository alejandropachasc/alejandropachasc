import React from 'react'
import {Link} from 'react-router-dom'
// import BlogContent from '../components/BlogContent'
import coal from '../assets/images/coal.svg'
import '../styles/Blog.css'

export default function Blog() {




    return (
        
        <div className="Blog">
                
            <div className="Blog__description">
                <h2>En desarrollo...</h2>

            </div>
            <div className="coal"></div>
                {/* <h2 className="Blog__description--titulo">Titulo de la página</h2>
        
                <p className="Blog__description--texto">Un pequeño texto de qué haces en este blog</p>
            </div>
            

            <div className="Blog__container">

                <Link className="Blog__container--section" to={{  pathname:"/blog1",state:{
                    title:"Titulo del blog1 aecati distinctio nulla a. Voluptas dolorem incidunt ratione voluptatibus quos"}

                    }}> 

                    <BlogContent titulo={"Titulo del blog1"} 
                                 
                                 contenido={"Descripción del blog aquí.. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aliquid placeat repudiandae a quos optio deserunt! Modi, ea! Obcaecati distinctio nulla a. Voluptas dolorem incidunt ratione voluptatibus quos reprehenderit corporis."}
                                 
                                 fecha={"20 Julio 2021"}/>
                
                
               </Link>


               <Link className="Blog__container--section" to={{pathname:"/blog2",state:{
                    title:"Titulo del blog2 aecati distinctio nulla a. Voluptas dolorem incidunt ratione voluptatibus quos"}

                    }}> 
                 
                    <BlogContent titulo={"Titulo del blog2"} 
                                 
                                 contenido={"Descripción del blog aquí.. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aliquid placeat repudiandae a quos optio deserunt! Modi, ea! Obcaecati distinctio nulla a. Voluptas dolorem incidunt ratione voluptatibus quos reprehenderit corporis."}
                                 
                                 fecha={"20 Julio 2021"}/>
                
                
                </Link> */}


             


            
        </div>
    )
}
