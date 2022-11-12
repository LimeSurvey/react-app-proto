import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <h1>{'Home'}</h1>
            <ul>
                <li><Link to="/editor">Editor</Link></li>
            </ul>
        </div>
    )
}