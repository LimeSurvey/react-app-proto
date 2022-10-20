import { useQuery } from '@tanstack/react-query';

const debug = true;

const mockData = {
    name: 'Test',
    description: 'Test description',
    subscribers_count: 25432,
    stargazers_count: 73,
    forks_count: 1245
};

function queryGetStats() {
    return mockData;
}

export default function QueryExampleStats() {

    const { isLoading, error, data } = useQuery(['repoData'], queryGetStats, {
        placeholderData: {
            name: '',
            description: '',
            subscribers_count: 0,
            stargazers_count: 0,
            forks_count: 0
        },
        onSuccess: (data) => {
            return debug ? console.log('onSuccess', data) : null
        },
        onSettled: (data) => {
            return debug ? console.log('onSettled', data) : null
        }
    });

    if (isLoading) return (
        <span>{'Loading...'}</span>
    )
    if (error instanceof Error) return (
        <span>{'An error has occurred: ' + error.message}</span>
    )

    return data ? (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    ) : null;
}
