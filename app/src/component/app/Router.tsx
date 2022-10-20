import { createBrowserRouter } from 'react-router-dom'
import PageEditor from '../page/editor/Editor'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>,
    },
    {
        path: '/editor',
        element: <PageEditor />
    },
])

export default router;
