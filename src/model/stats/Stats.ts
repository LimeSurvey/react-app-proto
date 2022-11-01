
export class Stats
{
    public name: string = ''
    public description: string = ''
    public subscribers_count: number = 0
    public stargazers_count: number = 0
    public forks_count: number = 0

    constructor(data: Partial<Stats>) {
        if (data) {
            Object.assign(this, data)
        }
    }
}

const mockData = new Stats({
    name: 'Test',
    description: 'Test description',
    subscribers_count: 25432,
    stargazers_count: 73,
    forks_count: 1245
})

export async function statsQuery(): Promise<Stats> {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(mockData)
        }, 1500)
    })
}

export default statsQuery;