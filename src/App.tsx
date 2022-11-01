import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={Router} />
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default App
