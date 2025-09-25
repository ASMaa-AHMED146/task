import React from "react";
import Mainsection from '../component/Mainsection';
import AboutApp from "../component/AboutApp";
import About from "../component/About";
import Screens from "../component/Screens"
import Opinins from "../component/Opinins";

export default function Home() {
  
  return (
    <>
      <div>
        <Mainsection/>
        <AboutApp/>
        <About/>
        <Screens/>
        <Opinins/>
        <div>
          
        </div>

      </div>
    </>
  )
}
