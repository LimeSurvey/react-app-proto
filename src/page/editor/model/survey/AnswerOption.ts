
import DataPropsOnly from '../../../../model/DataPropsOnly'
import L10n from '../../../../model/l10n/L10n'

export class AnswerOption {
    public id: number | null = null
    public answer: L10n | null = new L10n()

    constructor(data?: Partial<DataPropsOnly<AnswerOption>>) {
        if (data) {
            Object.assign(this, data)
            this.ensureTyped()
        }
    }

    public ensureTyped() {
        if (this.answer && !(this.answer instanceof L10n)) {
            this.answer = new L10n(this.answer)
        }
    }

    public update(data: Partial<AnswerOption>) {
        this.update(data)
    }
}

export default AnswerOption