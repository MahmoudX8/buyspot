import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { RootLayout } from './components/layout/RootLayout'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />}/>

    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
