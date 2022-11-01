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
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                <RouterProvider router={Router} />
                <ReactQueryDevtools initialIsOpen={false}/>
            </PersistQueryClientProvider>
        </ThemeProvider>
    )
}

export default App
