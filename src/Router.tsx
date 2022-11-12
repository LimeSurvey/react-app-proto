import { createBrowserRouter } from 'react-router-dom'
import EditorPage from './page/editor'
import HomePage from './page/home/HomePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/editor',
        element: <EditorPage />
    }
])

export default router;
