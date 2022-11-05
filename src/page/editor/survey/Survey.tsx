import React, { useEffect } from 'react'
import'./Survey.scss'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'
import SurveyType from '../model/Survey'
import QuestionGroupType from '../model/survey/QuestionGroup'
import QuestionType from '../model/survey/Question'
import SubQuestionType from '../model/survey/SubQuestion'
import QuestionGroup from './QuestionGroup'
import Question from './Question'
import SubQuestion from './SubQuestion'
import AnswerOption from './Question'
import TextEditableInline from './../../../component/TextEditableInline/TextEditableInline'
import { useApi as surveyUseApi } from '../model/SurveyUseApi'

export function Survey() {

    const { data: survey } = surveyUseApi();
    const { questionGroups } = survey ?? {};

    console.log({ survey })

    const title = survey && survey.title && survey.title['en'] ? survey.title['en'] : ''

    const questionGroupsView = questionGroups ? questionGroups.map(
        (questionGroup, x) => renderQuestionGroup(questionGroup, x)
    ) : []


    return survey ? (
        <Col
            className={classNames(
                'survey',
                'justify-content-center',
            )}>
            <>
                <h2 className={classNames('mt-4', 'mb-4')}>
                    <TextEditableInline defaultValue={title} />
                </h2>
                {questionGroupsView}
            </>
        </Col>
    ) : null
}

function renderQuestionGroup(questionGroup: QuestionGroupType, key: number) {

    const { questions } = questionGroup

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
