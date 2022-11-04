import React from 'react'
import'./Survey.scss'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'
import SurveyType from '../../../model/survey/Survey'
import QuestionGroupType from '../../../model/survey/QuestionGroup'
import QuestionType from '../../../model/survey/Question'
import SubQuestionType from '../../../model/survey/SubQuestion'
import QuestionGroup from './QuestionGroup'
import Question from './Question'
import SubQuestion from './SubQuestion'
import AnswerOption from './Question'


export function Survey(props: { survey: SurveyType }) {

    const { survey } = props
    const { questionGroups } = survey

    const title = survey && survey.title ? survey.title['en'] : null

    const questionGroupsView = questionGroups ? questionGroups.map(
        (questionGroup, x) => renderQuestionGroup(questionGroup, x)
    ) : []

    return (
        <Col
        className={classNames(
            'survey',
            'justify-content-center',
        )}>
            <>
                <h2>{title}</h2>
                {questionGroupsView}
            </>
        </Col>
    )
}

function renderQuestionGroup(questionGroup: QuestionGroupType, key: number) {

    const { questions } = questionGroup

    const name = questionGroup && questionGroup.name ? questionGroup.name['en'] : null

    const questionsView = questions ? questions.map(
        (question, x) => renderQuestion(question, x)
    ) : []

    return (
        <QuestionGroup questionGroup={questionGroup} key={key}>
            {questionsView}
        </QuestionGroup>
    )
}

function renderQuestion(question: QuestionType, key: number) {

    const { subQuestions } = question

    const subQuestionsView = subQuestions ? subQuestions.map(
        (subQuestion, x) => renderSubQuestion(subQuestion, x)
    ) : []

    return (
        <Question question={question} key={key}>
            {subQuestionsView}
        </Question>
    )
}

function renderSubQuestion(subQuestion: SubQuestionType, key: number) {
    return (
        <SubQuestion subQuestion={subQuestion} key={key} />
    )
}

export default Survey
