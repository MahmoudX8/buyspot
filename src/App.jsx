import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { RootLayout } from './components/layout/RootLayout'
import { Products } from './pages/Products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductDetails } from './pages/ProductDetails'

function App() {
  const queryClient = new QueryClient()
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path= '/product/:id' element={<ProductDetails />}/>
    </Route>
  ))

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
