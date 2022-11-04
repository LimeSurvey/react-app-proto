
import L10n from '../../../model/l10n/L10n'
import QuestionGroup from './survey/QuestionGroup'

export class Survey
{
    public id: number | null = null
    public title: L10n | null = new L10n({})
    public questionGroups: QuestionGroup[] = []

    constructor(data?: Partial<Survey>)
    {
        if (data) {
            Object.assign(this, data)
        }
    }
}

export default Survey