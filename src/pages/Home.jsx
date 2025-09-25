import React from "react";
import Mainsection from '../component/Mainsection';
import AboutApp from "../component/AboutApp";
import About from "../component/About";
import Screens from "../component/Screens"
import Opinins from "../component/Opinins";
import Downloads from "../component/Downloads";

export default function Home() {
  
  return (
    <>
      <div>
        <Mainsection/>
        <AboutApp/>
        <About/>
        <Screens/>
        <Opinins/>
        <Downloads/>
      </div>
    </>
  )
}
