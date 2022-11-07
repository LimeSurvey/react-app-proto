import DataPropsOnly from '../../../../model/DataPropsOnly'
import L10n from '../../../../model/l10n/L10n'
import AnswerOption from './AnswerOption'

export class Question {
    public id: number | null = null
    public name: L10n | null = new L10n()
    public type?: string | null = null
    public helpText?: L10n | null = new L10n()
    public answerOptions?: AnswerOption[] = []
    public subQuestions?: Omit<Question, "subQuestions">[] = []

    constructor(data?: Partial<DataPropsOnly<Question>>) {
        if (data) {
            Object.assign(this, data)
            this.ensureTyped()
        }
    }

    public ensureTyped() {
        if (this.name && !(this.name instanceof L10n)) {
            this.name = new L10n(this.name)
        }
        if (this.helpText && !(this.helpText instanceof L10n)) {
            this.helpText = new L10n(this.helpText)
        }

        if (this.answerOptions) {
            this.answerOptions = this.answerOptions.map<AnswerOption>(
                answerOption =>
                    (answerOption instanceof AnswerOption)
                        ? answerOption
                        : new AnswerOption(answerOption)
            );
        }
    }

    public update(data: Partial<Question>) {
        Object.assign(this, data)
    }

    public getAnswerOption(id: number) {
        return this.answerOptions ? this.answerOptions.filter(
            (answerOptions) => answerOptions.id === id
        )[0] : null
    }

    public updateAnswerOption(id: number, data: Partial<AnswerOption>) {
        const answerOption = this.getAnswerOption(id)
        if (answerOption) {
            answerOption.update(data);
        }
    }
}

export default Question