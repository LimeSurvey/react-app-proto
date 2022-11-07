import React from 'react'
import classNames from 'classnames'
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionType from '../model/survey/Question'
import TextEditableInline from './../../../component/TextEditableInline/TextEditableInline'
import { useApi as surveyUseApi } from '../model/SurveyUseApi'

function Question(props: { question: QuestionType, children?: React.ReactNode }) {

    const question = props.question
    const id = question && question.id ? question.id : ''
    const name = question && question.name ? question.name['en'] : '< Question ? >'
    const helpText = question && question.helpText ? question.helpText['en'] : ''

    const { updateQuestion } = surveyUseApi()

    return (
        <ListGroup.Item id={'question-' + id} className={classNames(
            'justify-content-center',
            'mb-1'
        )}>
            <div className={classNames(
                'mb-1'
            )}>
                <TextEditableInline
                    defaultValue={name}
                    onSave={value => {
                        if (question.id) {
                            updateQuestion(
                                question.id,
                                { name: { en: value } }
                            )
                        }
                    }}
                />
            </div>
            <div style={{ opacity: 0.5, fontSize: '80%' }}>
                <TextEditableInline
                    defaultValue={helpText} size="sm"
                    onSave={value => {
                        if (question.id) {
                            updateQuestion(
                                question.id,
                                { helpText: { en: value } }
                            )
                        }
                    }}
                />
            </div>
        </ListGroup.Item>
    )
}

export default Question
