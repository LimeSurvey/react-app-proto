import { useQuery } from '@tanstack/react-query';

const debug = true;

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
    });
}

export default function QueryExampleStats() {

    const { isLoading, error, data } = useQuery(['exampleStats'], queryGetStats, {
        // An example of using type 'any' to hide type script warnings (this is not good)
        // - better would be define a the data structure as a named type
        placeholderData: {
            name: '',
            description: '',
            subscribers_count: 0,
            stargazers_count: 0,
            forks_count: 0
        } as any,
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
