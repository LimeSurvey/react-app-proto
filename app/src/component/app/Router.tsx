import { createBrowserRouter } from 'react-router-dom'
import PageEditor from '../page/editor/Editor'
import HomePage from '../page/home/HomePage'
import QueryExamplePage from '../page/query-example/QueryExamplePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/editor',
        element: <PageEditor />
    },
    {
        path: '/query-example',
        element: <QueryExamplePage />
    }
])

export default router;
