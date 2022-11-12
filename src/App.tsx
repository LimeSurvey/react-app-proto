import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
// @ts-ignore - indexDB shim just needs to be included it is never called
// import setGlobalVars from 'indexeddbshim/src/node-UnicodeIdentifiers'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from './Query'

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <RouterProvider router={Router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </PersistQueryClientProvider>
        </ThemeProvider>
    )
}

export default App
