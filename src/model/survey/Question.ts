
import L10n from '../l10n/L10n'
import AnswerOption from '../survey/AnswerOption'

export class Question
{
    public id: number | null = null
    public name: L10n | null = new L10n({})
    public type?: string | null = null
    public helpText?: L10n | null = new L10n({})
    public answerOptions?: AnswerOption[] = []
    public subQuestions?: Omit<Question, "subQuestions">[] = []

    constructor(data: Partial<Question>)
    {
        if (data) {
            Object.assign(this, data)
        }
    }
}

export default Question