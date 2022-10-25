import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { exampleStatsQueryGet } from '../../../model/query/ExampleStatsQuery'
import { Stats } from '../../../model/constructor/Stats'

const debug = true

const placeholderData = new Stats({
    name: '',
    description: '',
    subscribers_count: 0,
    stargazers_count: 0,
    forks_count: 0
})

export default function QueryExamplePage() {

    const { isInitialLoading, error, data } = useQuery(['exampleStats'], exampleStatsQueryGet, {
        placeholderData,
        onSuccess: (data) => {
            return debug ? console.log('onSuccess', data) : null
        },
        onSettled: (data) => {
            return debug ? console.log('onSettled', data) : null
        }
    });

    const loadStatus = (isInitialLoading) ? (
        <span>{'Loading...'}</span>
    ) : null;
    if (error instanceof Error) return (
        <span>{'An error has occurred: ' + error.message}</span>
    )

    return !isInitialLoading && data ? (
        <div>
            {loadStatus}
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    ) : null;
}
