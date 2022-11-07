
export class L10n
{
    [key: string]: string

    constructor(data?: Partial<L10n>) {
        if (data) {
            Object.assign(this, data)
        }
    }
}

export default L10n;