
import L10n from '../l10n/L10n'
import Question from './Question'

export class QuestionGroup
{
    public id: number | null = null
    public name: L10n | null = new L10n({})
    public questions?: Question[] = []

    constructor(data: Partial<QuestionGroup>)
    {
        if (data) {
            Object.assign(this, data)
        }
    }
}

export default QuestionGroup