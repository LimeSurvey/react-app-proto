
import L10n from '../../../../model/l10n/L10n'
import Question from './Question'

export type SubQuestion = Omit<Question, 'subQuestions'>

export default SubQuestion