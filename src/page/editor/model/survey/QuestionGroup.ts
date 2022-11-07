
import DataPropsOnly from '../../../../model/DataPropsOnly'
import L10n from '../../../../model/l10n/L10n'
import Question from './Question'

export class QuestionGroup {
    public id: number | null = null
    public name: L10n | null = new L10n()
    public questions: Question[] = []

    constructor(data?: Partial<DataPropsOnly<QuestionGroup>>) {
        if (data) {
            this.update(data)
            this.ensureTyped()
        }
    }

    public ensureTyped() {
        if (this.name && !(this.name instanceof L10n)) {
            this.name = new L10n(this.name)
        }

        if (this.questions) {
            this.questions = this.questions.map<Question>(
                question =>
                    (question instanceof Question)
                        ? question
                        : new Question(question)
            )
        }
    }

    public update(data: Partial<QuestionGroup>) {
        Object.assign(this, data)
    }

    public getQuestion(id: number) {
        return this.questions ? this.questions.filter(
            (question) => question.id === id
        )[0] : null
    }

    public updateQuestion(id: number, data: Partial<Question>) {
        const question = this.getQuestion(id)
        if (question) {
            question.update(data);
        }
    }
}

export default QuestionGroup