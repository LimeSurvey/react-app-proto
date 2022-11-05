import React from 'react'
import classNames from 'classnames'
import ListGroup from 'react-bootstrap/ListGroup';
import Question from '../model/survey/Question'
import TextEditableInline from './../../../component/TextEditableInline/TextEditableInline'

function QuestionView(props: { question: Question, children?: React.ReactNode }) {

    const question = props.question
    const id = question && question.id ? question.id : ''
    const name = question && question.name ? question.name['en'] : '< Question ? >'
    const helpText = question && question.helpText ? question.helpText['en'] : ''

    return (
        <ListGroup.Item id={'question-' + id} className={classNames(
            'justify-content-center',
            'mb-1'
        )}>
            <div className={classNames(
                'mb-1'
            )}>
                <TextEditableInline defaultValue={name} />
            </div>
            <div style={{ opacity: 0.5, fontSize: '80%' }}>
                <TextEditableInline defaultValue={helpText} size="sm" />
            </div>
        </ListGroup.Item>
    )
}

export default QuestionView
