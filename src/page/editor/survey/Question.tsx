import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames'
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
            'm-1'
        )}>
            <div>
                <TextEditableInline defaultValue={name} />
            </div>
            <div style={{ opacity: 0.5, fontSize: '80%' }}>
                <TextEditableInline defaultValue={helpText} />
            </div>
        </ListGroup.Item>
    )
}

export default QuestionView
