import { Stats, StatsData } from '../constructor/Stats'

const mockData = new Stats({
    name: 'Test',
    description: 'Test description',
    subscribers_count: 25432,
    stargazers_count: 73,
    forks_count: 1245
})

export async function exampleStatsQueryGet() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(mockData)
        }, 1500)
    })
}

export default exampleStatsQueryGet;