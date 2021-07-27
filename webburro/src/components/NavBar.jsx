import React from 'react'
import '../styles/NavBar.css'
export default function NavBar() {
    return (
    <React.Fragment>
        <div className="Main_NavBar_image"></div>

        <div className="NavBar">

        <div className="NavBar__container">

        <a className="NavBar__container--text" href="/">Home</a>
        <a className="NavBar__container--text" href="/blog">Blog</a>
        
        <a className="NavBar__container--text" href="/aboutme">Acerca de mi</a>
        </div>

        </div>
    </React.Fragment>
    )
}
