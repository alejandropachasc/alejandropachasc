import React from 'react'
import '../styles/AboutMe.css'

import { Icon, InlineIcon } from '@iconify/react';
import linkedinFill from '@iconify/icons-akar-icons/linkedin-fill';
import emailLine from '@iconify/icons-clarity/email-line';

export default function AboutMe() {
    return (
        <div className="AboutMe">
        
        <div className="AboutMe__container">

            <div className="AboutMe__container--section">

                <h2 className="AboutMe__container--title">Summary:</h2>

                <p className="AboutMe__container--description"> Graduado en Ingeniería de Minas de la Pontificia Universidad Católica del Perú, Master en Liderazgo de la 
                                                                Escuela de Negocios EADA en Barcelona y con un MBA en Centrum Católica. Cuenta con 23 años de experiencia
                                                                en operaciones de minas subterráneas y superficiales, trabajando en Empresas Mineras, Especializadas y 
                                                                Consultoras, ocupando cargos de Operación Mina, Costos, Productividad, Ingeniería y Proyectos. 
                                                                Ha desempeñado altos cargos ejecutivos en el área de Planeamiento e Ingeniería y estimación de Reservas 
                                                                en compañías mineras de grupos importantes como Panamerican Silver, Volcan Compañía Minera, Glencore y 
                                                                Hochschild; asimismo, ha participado como expositor de varios cursos en Planeamiento, Diseño de Minado, 
                                                                y Optimización de Procesos.</p>
            </div>

            <div className="AboutMe__container--section">

                <h2 className="AboutMe__container--title">Projects:</h2>

                 <p className="AboutMe__container--description">Rampa Sierra Nevada, Mina Morococha, CIA  Minera Argentum S.A.
                                                                Tunel de acceso principal Mina El Roble, Chocó, Colombia.</p>
                </div>

            <div className="AboutMe__container--section">

                <h2 className="AboutMe__container--title">Consultant:</h2>

             <p className="AboutMe__container--description">    MINERA YANAQUIHUA S.A.C., Evaluación Económico-Operacional de la Mina Yanaquihua, U.E. Alpacay.
                                                                SOCIEDAD MINERA AUSTRIA DUVAZ S.A.C., Estimación de Costos de Operación y Plan de Minado para la 
                                                                puesta en marcha de la Mina Purísima, Cuzca, Corongo, Ancash.</p>

            
            </div>

   



            <div className="AboutMe__container--section">

                <h2 className="AboutMe__container--title">Contactame:</h2>

             <p className="AboutMe__container--description">    Celular: 916464528
                                                                Correo: apachasc@pucp.pe.</p>
                
             
                <div className="AboutMe__container--icon">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alejandropachasclaussen/" >
                        <Icon icon={linkedinFill} style={{color: '#fff', fontSize: '30px'}} />
                    </a>
                    
                    <div className="email">
                        <Icon icon={emailLine} style={{color: '#fff', fontSize: '30px'}}  />
                        <p className="email-line">apachas@pucp.com</p>
                    </div> 
               
                </div>
            
            </div>

        </div>

      </div>

    

