import { createBrowserRouter } from 'react-router-dom'
import EditorPage from './page/editor'
import HomePage from './page/home/HomePage'
import QueryExamplePage from './page/query-example/QueryExamplePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/editor',
        element: <EditorPage />
    },
    {
        path: '/query-example',
        element: <QueryExamplePage />
    }
])

export default router;
