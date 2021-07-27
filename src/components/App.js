import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage.jsx'
import AboutMe from '../pages/AboutMe.jsx'
import Blog from '../pages/Blog.jsx'
import Blog1 from '../pages/Blog1'
import Blog2 from '../pages/Blog2'
import Projects from '../pages/Projects'

export default function App() {

    return (

    
     <BrowserRouter>
        <Layout>
            <Switch>
            
            <Route exact path="alejandropachasc.github.io/" component={MainPage}/> 
            <Route exact path="alejandropachasc.github.io/aboutme" component={AboutMe}/> 
            <Route exact path="alejandropachasc.github.io/blog" component={Blog}/> 
            <Route exact path="alejandropachasc.github.io/projects" component={Projects}/>
        
            </Switch>
        </Layout>

    </BrowserRouter>
    )
}
