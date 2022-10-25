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

    // cast unknown data type from useQuery
    const stats = data as Stats;

    const loadStatus = (isInitialLoading) ? (
        <span>{'Loading...'}</span>
    ) : null;
    if (error instanceof Error) return (
        <span>{'An error has occurred: ' + error.message}</span>
    )

    return !isInitialLoading ? (
        <div>
            {loadStatus}
            <h1>{stats.name}</h1>
            <p>{stats.description}</p>
            <strong>👀 {stats.subscribers_count}</strong>{' '}
            <strong>✨ {stats.stargazers_count}</strong>{' '}
            <strong>🍴 {stats.forks_count}</strong>
        </div>
    ) : null;
}
