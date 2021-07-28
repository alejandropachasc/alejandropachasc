import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage.jsx'
import AboutMe from '../pages/AboutMe.jsx'
import Blog from '../pages/Blog.jsx'

import Projects from '../pages/Projects'

export default function App() {

    return (

    
     <BrowserRouter>
        <Layout>
            <Switch>
            
            <Route exact path="/alejandropachasc.me/home/" component={MainPage}/> 
            <Route exact path="/alejandropachasc.me/aboutme/" component={AboutMe}/> 
            <Route exact path="/alejandropachasc.me//blog/" component={Blog}/> 
            <Route exact path="/alejandropachasc.me/projects/" component={Projects}/>
        
            </Switch>
        </Layout>

    </BrowserRouter>
    )
}
