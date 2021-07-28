import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
export default function NavBar() {
    return (
    <React.Fragment>
        <div className="Main_NavBar_image"></div>

        <div className="NavBar">

        <div className="NavBar__container">

        <Link className="NavBar__container--text" to="/alejandropachasc.me/home">Home</Link>
        <Link className="NavBar__container--text" to="/alejandropachasc.me/aboutme">Acerca de mi</Link>
        <Link className="NavBar__container--text" to="/alejandropachasc.me/projects">Projectos</Link>
        <Link className="NavBar__container--text" to="/alejandropachasc.me/blog">Blog</Link>

        </div>

        </div>
    </React.Fragment>
    )
}
