
import DataPropsOnly from '../../../../model/DataPropsOnly'
import L10n from '../../../../model/l10n/L10n'
import QuestionGroup from '../survey/QuestionGroup'

export class Survey {
    public id: number | null = null
    public title: L10n | null = new L10n()
    public questionGroups: QuestionGroup[] = []

    constructor(data?: Partial<DataPropsOnly<Survey>>) {
        if (data) {
            this.update(data)
            this.ensureTyped()
        }
    }

    public ensureTyped() {
        if (this.title && !(this.title instanceof L10n)) {
            this.title = new L10n(this.title)
        }

        if (this.questionGroups) {
            this.questionGroups = this.questionGroups.map<QuestionGroup>(
                questionGroup =>
                    (questionGroup instanceof QuestionGroup)
                        ? questionGroup
                        : new QuestionGroup(questionGroup)
            );
        }
    }

    public update(data: Partial<Survey>) {
        Object.assign(this, data)
    }

    public getQuestionGroup(id: number) {
        return this.questionGroups.filter(
            (group) => group.id === id
        )[0]
    }

    public getQuestionGroupByQuestionId(id: number) {
        return this.questionGroups.filter(
            (group) => {
                if (group.questions) {
                    return group.questions.filter(
                        (question) => {
                            if (question.id === id) {
                                return group;
                            }
                            return false
                        }
                    )[0]
                }
                return false
            }
        )[0]
    }

    public updateQuestionGroup(id: number, data: Partial<QuestionGroup>) {
        const surveyGroup = this.getQuestionGroup(id)
        if (surveyGroup) {
            surveyGroup.update(data);
        }
    }
}

export default Survey