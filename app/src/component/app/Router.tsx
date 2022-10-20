import { createBrowserRouter } from 'react-router-dom'
import PageEditor from '../page/editor/Editor'
import PageStats from '../page/query-example-stats/QueryExampleStats'

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
        path: '/query-example-stats',
        element: <PageStats />
    }
])

export default router;
