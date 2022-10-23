import React from 'react'
import { useQuery } from '@tanstack/react-query'

const debug = true

const mockData = {
    name: 'Test',
    description: 'Test description',
    subscribers_count: 25432,
    stargazers_count: 73,
    forks_count: 1245
}

async function queryGetStats() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(mockData)
        }, 1500)
    })
}

type Stats = {
    name: string
    description: string
    subscribers_count: number
    stargazers_count: number
    forks_count: number
}

const placeholderData:Stats = {
    name: '',
    description: '',
    subscribers_count: 0,
    stargazers_count: 0,
    forks_count: 0
}

export default function QueryExampleStats() {

    const { isInitialLoading, error, data } = useQuery(['exampleStats'], queryGetStats, {
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
