export type StatsData = {
    name: string
    description: string
    subscribers_count: number
    stargazers_count: number
    forks_count: number
}

export class Stats
{
    public name: string = ''
    public description: string = ''
    public subscribers_count: number = 0
    public stargazers_count: number = 0
    public forks_count: number = 0

    constructor(data: StatsData|null = null) {
        if (data) {
            this.name = data.name ?? '';
            this.description = data.description ?? '';
            this.subscribers_count = data.subscribers_count ?? 0;
            this.stargazers_count = data.stargazers_count ?? 0;
            this.forks_count = data.forks_count ?? 0;
        }
    }
}

export default Stats;