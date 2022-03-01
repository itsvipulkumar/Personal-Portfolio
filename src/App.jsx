import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import swal from 'sweetalert'
import Contact from './Components/Contact'
import Educations from './Components/Educations'
import Home from './Components/Home'
import { Navbar } from './Components/Navbar'
import Project from './Components/Projects'
import Service from './Components/Service'

const App = () => {
  
  return (
    <>
        <Navbar />
      <div className="wrapper">
      <Switch>
        <Route exact path='/'>{Home}</Route>
        <Route exact path='/education'>{Educations}</Route>
        <Route exact path='/service'>{Service}</Route>
        <Route exact path='/projects'>{Project}</Route>
        <Route exact path='/contact'>{Contact}</Route>
      </Switch>
        {/* <Home /> */}

      </div>
    </>
  )
}
export default App;
