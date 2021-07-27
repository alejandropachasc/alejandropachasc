import React,{useState,useRef, useEffect} from 'react'
import '../styles/Projects.css'
import Main_Projects_images from '../components/Main_Projects_images'

export default function Projects() {
    
    // const tv=document.getElementsByClassName("Projects__container--tv")
    // let prevPhoto=''
    // let timer;
    
    // const options={
    //     root:null,
    //     rootMargin:"0px",
    //     threshold:0.3
    // }

    // const containerRef=useRef(null);
    // const [isVisible,setIsVisible]=useState(false)
    
    // const callbackFunction=(entries)=>{

  

    //     const [entry]=entries
    
    //     setIsVisible(entry.isIntersecting)
    // }
 
    
    // useEffect(()=>{
    //     const observer= new IntersectionObserver(callbackFunction,{threshold:0.3});
    //     if(containerRef.current)observer.observe(containerRef.current)
    
    //     return()=>{
    //         if(containerRef.current)observer.unobserve(containerRef.current)}
    
    
    //     },[containerRef,{threshold:0.3}])
    
    
    
    
    //         const [url, setUrl]=useState()
    
            // function handleMouseEnter(e){
            //  //si la imagen entrante es diferente a la anterior, quiero una transaccion
            //  if(tv[0].classList.contains("appear"))timer=setTimeout(()=>{tv[0].style.display="none"}
            //  ,1000,tv[0].classList.remove("appear"))
          
    //          if(e.target.id!=prevPhoto && prevPhoto!=''){
          
    //                              tv[0].classList.add("appear")
    //          }else{
    //          tv[0].classList.add("appear")
    //          }
    //          tv[0].style.display="flex"
      
    //          prevPhoto=e.target.id
    //      }
    
    //      if(isVisible){
    //    console.log(isVisible)
    //      }
    
    //  function handleMouseLeave(e){
    //      if(e.target.classList.contains("projects__list")){ clearTimeout(timer)
    //                                                             return
    //                                                         }
    //      }


const [position,setPosition]=useState(-1)

const handleOverflow=()=>{
    setPosition(0)
}

const deleteAnimation=()=>{
    setTimeout(()=>{
        
        
        setTimeout(()=>{
                
        document.getElementsByClassName('Main_Projects')[0].classList.add("Appear")}
        ,1000
        ,document.getElementsByClassName('Main_Projects')[0].classList.remove("Appear"))
        
    },4000)

}

setTimeout(()=>{

    if(position===-1)document.getElementsByClassName('Main_Projects')[0].classList.remove("none")
    
    if(position>=2){
        handleOverflow()
        return
    }

setPosition(position+1)},5000,deleteAnimation())

    return (
        <React.Fragment>
    <Main_Projects_images position={position}/>
            <div className="Projects">
        
                <div className="Projects__container">

            <div className="Projects__container--section">


                 <div className="Projects__container--projects">
                  <h2 className="Projects__container--title" >Projects:</h2>
                     
                     <ul className="projects__list" >
                         <li className="list--projects" >Rampa Sierra Nevada, Mina Morococha. CIA  Minera Argentum S.A.</li>
                         
                         <li className="list--projects" >Tunel de acceso principal Mina El Roble. Aitco Mining, Colombia.</li>
                     </ul>

                </div>
              
            </div>

        <div className="Projects__container--section">

            <h2 className="Projects__container--title" >Consultant:</h2>

            <div className="Projects__container--description">
                <ul className="consultant__list">
                    
                        <li className="list--consultant" >
                            <strong>MINERA YANAQUIHUA S.A.C.</strong>, Evaluación Económico-Operacional de la Mina Yanaquihua, U.E. Alpacay.

                        </li>
                        
                        <li className="list--consultant" >
                            <strong>SOCIEDAD MINERA AUSTRIA DUVAZ S.A.C.</strong>, Estimación de Costos de Operación y Plan de Minado para la puesta en marcha de la Mina Purísima, Cuzca, Corongo, Ancash.
                        </li>
                </ul>

            
            </div>
        </div>
   
        </div>
 
        </div>
        </React.Fragment>
    )
}
