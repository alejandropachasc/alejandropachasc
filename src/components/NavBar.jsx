import React from 'react'
import '../styles/NavBar.css'
export default function NavBar() {
    return (
    <React.Fragment>
        <div className="Main_NavBar_image"></div>

        <div className="NavBar">

        <div className="NavBar__container">

        <a className="NavBar__container--text" href="/alejandropachasc.me/home">Home</a>
        <a className="NavBar__container--text" href="/alejandropachasc.me/aboutme">Acerca de mi</a>
        <a className="NavBar__container--text" href="/alejandropachasc.me/projects">Projectos</a>
        <a className="NavBar__container--text" href="/alejandropachasc.me/blog">Blog</a>

        </div>

        </div>
    </React.Fragment>
    )
}
