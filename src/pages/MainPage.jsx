import React from 'react'

import '../styles/MainPage.css'
export default function MainPage() {
    return (
        <div>
              <section className="MainPage">
                  <div className="MainPage__profile">
                    <h1 className="MainPage--title">Alejandro Pachas</h1>
                    <p className="MainPage--jobtitle">Ingeniero de Minas / Magister en Administrador de Empresas</p>
                    </div>  
                        <p className="MainPage--text">Este página ha sido diseñada con la finalidad de compartir conocimientos y experiencias adquiridas en todos estos años de trabajo, así como estudios, proyectos e investigaciones realizados en el interesante y extenso campo de la actividad Minera. Con tu apoyo en base a recomendaciones y comentarios espero completar esta página de consulta para todos los que deseen conocer sobre los procesos mineros y reforzar la importancia económica, política y social de este sector para nuestro país y el mundo.</p>
                       
                    <div className="MainPage--image">

                        <div className="image--mining"></div>
                    </div>

                </section>
        </div>
    )
}
