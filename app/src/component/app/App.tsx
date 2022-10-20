import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
        <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
