import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import './night_mode.css'
import './components/Pages/services/services.css'
import Home from './components/Home/main_demo/index'
import Services1 from './components/Pages/services/services1'
import Services2 from './components/Pages/services/services2'
import Services3 from './components/Pages/services/services3'
import ServiceDetails from './components/Pages/services/serviceDetails'
import Work1 from './components/Pages/work/work1'
import WorkDetails from './components/Pages/work/workDetails'
import Blog from './components/Pages/Blog/blog'
import BlogDetails from './components/Pages/Blog/blogDetails/blogDetails'
import Contract from './components/Pages/contract/contract'
import About from './components/Pages/About/about'
import Pricing from './components/Pages/Pricing/pricing'
import Error from './components/Blocks/Error'

export default function App({mode}) {



      

  return (
    <Router>
     <div className={mode?'dark_mode':''}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/darkMode' component={Home} />
        <Route path='/services1' component={Services1} /> 
        <Route path='/services2' component={Services2} /> 
        <Route path='/services3' component={Services3} /> 
        <Route path='/serviceDetails' component={ServiceDetails} />
        <Route path='/work1' component={Work1} />
        <Route path='/workDetails' component={WorkDetails} />
        <Route path='/blog' component={Blog} />        
        <Route path='/blogDetails' component={BlogDetails} />    
        <Route path='/contract' component={Contract} />    
        <Route path='/about' component={About} />    
        <Route path='/pricing' component={Pricing} />    
        <Route path='*' component={Error} />
      </Switch>
     </div>
    </Router>
  )
}
