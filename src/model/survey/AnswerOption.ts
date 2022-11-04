
import L10n from '../l10n/L10n'

export class AnswerOption
{
    public id: number | null = null
    public answer: L10n | null = new L10n({})

    constructor(data: Partial<AnswerOption>)
    {
        if (data) {
            Object.assign(this, data)
        }
    }
}

export default AnswerOption