
export type StatsData = {
    name:string
    description:string
    subscribers_count:number
    stargazers_count:number
    forks_count:number
}

export class Stats
{
    name:string = ''
    description:string = ''
    subscribers_count:number = 0
    stargazers_count:number = 0
    forks_count:number = 0

    constructor(data:StatsData|null=null) {
        this.name = data && data.name ? data.name : '';
        this.description = data && data.description ? data.description : '';
        this.subscribers_count = data && data.subscribers_count ? data.subscribers_count : 0;
        this.stargazers_count = data && data.stargazers_count ? data.stargazers_count : 0;
        this.forks_count = data && data.forks_count ? data.forks_count : 0;
    }
}

export default Stats;