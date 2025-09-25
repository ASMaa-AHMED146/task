import React from 'react'
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//lotties
import LottieHandler from '../component/feedback/LottieHandler';
import PageSuspenseFallback from '../component/feedback/PageSuspenseFallback';

//layouts
const Mainlayout =lazy(()=>import('../layouts/Mainlayout'))

//pages

const Error=lazy(()=>import('../pages/Error'))
const Home=lazy(()=>import('../pages/Home'))
const AboutUs=lazy(()=>import('../pages/AboutUs'))
const Advantage=lazy(()=>import('../pages/Advantage'))
const Opinins=lazy(()=>import('../pages/Opinins'))
const Screens=lazy(()=>import('../pages/Screens'))
const Language=lazy(()=>import('../pages/Language'))


const router=createBrowserRouter([{
    path:'/',
    element:(
    <Suspense fallback={
       <div>
        <LottieHandler type='loading' message="Loading please wait..." />
      </div>
    } >
      <Mainlayout/>
    </Suspense>),errorElement:<Error/>,
    children:[
      {
        index:true,
        element:(
          <PageSuspenseFallback>
            <Home/>
          </PageSuspenseFallback>
        )
      },
      {
        path:'aboutus',
        element:
          <PageSuspenseFallback>
            <AboutUs/>
          </PageSuspenseFallback>
      },
      {
        path:'advantge',
        element:
          <PageSuspenseFallback>
            <Advantage/>
          </PageSuspenseFallback>
      },
      {
        path:'opinins',
        element:
          <PageSuspenseFallback>
            <Opinins/>
          </PageSuspenseFallback>
      },
      {
        path:'screens',
        element:
          <PageSuspenseFallback>
            <Screens/>
          </PageSuspenseFallback>
      },
      {
        path:'language',
        element:
          <PageSuspenseFallback>
            <Language/>
          </PageSuspenseFallback>
      },
    ]
}])

export default function Approutes() {
  return (
    <RouterProvider router={router}/>
  )
}
