import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <h1>{'Home'}</h1>
            <ul>
                <li><Link to="/editor">Editor</Link></li>
                <li><Link to="/query-example">Query Example</Link></li>
            </ul>
        </div>
    )
}