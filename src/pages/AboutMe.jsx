import React from 'react'
import '../styles/AboutMe.css'

import { Icon } from '@iconify/react';
import linkedinFill from '@iconify/icons-akar-icons/linkedin-fill';
import emailLine from '@iconify/icons-clarity/email-line';

export default function AboutMe() {



    return (
        <React.Fragment>
            <div className="Main_AboutMe"></div>

        <div className="AboutMe">
        <div className="AboutMe__container">
     
            <section className="AboutMe__container--section">
            <h2 className="AboutMe__title">Alejandro Pachas Claussen</h2>

                <div className="AboutMe__container--summary"> 
                                                                
                    <p className="summary--paragraph">
                        Graduado en Ingeniería de Minas de la <strong>Pontificia Universidad Católica del Perú</strong>, Master en Liderazgo de la <strong>Escuela de Negocios EADA </strong>en Barcelona y con un MBA en <strong>Centrum Católica</strong>. 
                    </p>

                    <p className="summary--paragraph">
                                    
                    Cuenta con 23 años de experiencia
                    en operaciones de minas subterráneas y superficiales, trabajando en Empresas Mineras, Especializadas y Consultoras, ocupando cargos de Operación Mina, Costos, Productividad, Ingeniería y Proyectos. 
                                    
                    </p>

                    <p className="summary--paragraph">
                    Ha desempeñado altos cargos ejecutivos en el área de Planeamiento e Ingeniería y estimación de Reservas en compañías mineras de grupos importantes como Panamerican Silver, Volcan Compañía Minera, Glencore y
                    Hochschild; asimismo, ha participado como expositor de varios cursos en Planeamiento, Diseño de Minado, y Optimización de Procesos.
                             
                    </p>

                    <div className="summary--icons">
                                       
                             <a target="_blank" rel="noopener noreferrer" href="https://www.panamericansilver.com/es/operations/south-america/morococha/"
                             className="summary--icon panamericaSilver"></a>
                             <a target="_blank" rel="noopener noreferrer" href="https://www.volcan.com.pe/en/"
                             className="summary--icon volcan"></a>
                             <a target="_blank" rel="noopener noreferrer" href="https://www.glencore.com/"
                             className="summary--icon glencore"></a>
                             <a target="_blank" rel="noopener noreferrer" href="http://www.hochschildmining.com/en/home"
                             className="summary--icon honchshild"></a>
                                        
                    </div>
                </div>
               
            </section>

            <section className="AboutMe__container--section">

          
             
                <div className="AboutMe__container--icon">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alejandropachasclaussen/" >
                        <Icon icon={linkedinFill} style={{color: '#fff', fontSize: '30px'}} />
                    </a>
                    
                    <div className="email">
                        <Icon icon={emailLine} style={{color: '#fff', fontSize: '30px'}}  />
                        <p className="email-line">apachasc@pucp.pe.</p>
                    </div> 
               
                </div>
                </section>
            </div>

        </div>


        </React.Fragment>
    )}
