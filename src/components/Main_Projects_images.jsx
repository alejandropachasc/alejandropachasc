import React,{useState} from 'react'
import morococha from '../assets/images/morococha.jpg' 
import yanaquihua from '../assets/images/undergrounding.jpg'
import carro from '../assets/images/truck.jpg'

import '../styles/Projects.css'
export default function Main_Projects_images(props) {
    const imageArray=[carro,yanaquihua,morococha]

    return (






        <div className="Main_Projects none" style={
            
            {backgroundImage:`linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 100%),url(${imageArray[props.position]})`}}>
        </div>
    )
}
