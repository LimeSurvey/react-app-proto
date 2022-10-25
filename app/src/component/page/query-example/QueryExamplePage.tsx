import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { exampleStatsQueryGet } from '../../../model/query/ExampleStatsQuery'

const debug = true

export default function QueryExamplePage() {

    const { isInitialLoading, error, data } = useQuery(['exampleStatsQueryGet'], exampleStatsQueryGet, {
        onSuccess: (data) => {
            return debug ? console.log('onSuccess', data) : null
        }
    });

    if (isInitialLoading) return (
        <span>{'Loading...'}</span>
    )
    if (error instanceof Error) return (
        <span>{'An error has occurred: ' + error.message}</span>
    )

    return !isInitialLoading && data ? (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    ) : null
}
