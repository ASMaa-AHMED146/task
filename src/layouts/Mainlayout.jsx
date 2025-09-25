import React from 'react';
import Footer from '../component/Footer'
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

export default function Mainlayout() {
  return (
    <div>
      <Header/>
      <div >
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
