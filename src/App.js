import React from 'react';
import "./App.css"
import Sidebar from './components/Sidebar/sidebar';   
import Home from './components/Home/Home';
import About from './components/About/about';
import Services from './components/Services/services';
import Resume from './components/Resume/resume'; 
import Portifolio from './components/Portifolio/portifolio';  
import Contact from './components/Contact/contact'; 


const App = () => {

  return(
    <>
    <Sidebar/>
      <main className="main"> 
        <Home/>
        <About/>
        <Services/>
        <Resume/> 
        <Portifolio/>  
        <Contact/> 
      
      </main>
    </>
  )
}
export default App;