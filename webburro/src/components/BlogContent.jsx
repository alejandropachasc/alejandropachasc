import React from 'react'

export default function BlogContent(props) {
    return (
    <React.Fragment>
       <div className="section__container">

                        <h3 className="section__container--titulo">{props.titulo}</h3>
                        <div className="section__container--texto"><p>{props.contenido}</p></div>
        </div>

        <div className="section--fecha"><p>20 Julio 2021</p></div>  
            
    </React.Fragment>
    )
}
