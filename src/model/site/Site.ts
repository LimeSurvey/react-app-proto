
export default class Site
{
    public name: string

    constructor(data?:Partial<Site>)
    {
        this.name = ''

        if (data) {
            Object.assign(this, data)
        }
    }

}
