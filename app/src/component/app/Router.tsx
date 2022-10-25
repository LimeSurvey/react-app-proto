import { createBrowserRouter } from 'react-router-dom'
import PageEditor from '../page/editor/Editor'
import QueryExamplePage from '../page/query-example/QueryExamplePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>,
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
