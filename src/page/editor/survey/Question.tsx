import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames'
import Question from '../../../model/survey/Question'

function QuestionView(props: { question: Question, children?: React.ReactNode }) {

    const question = props.question
    const id = question && question.id ? question.id : '-- no question name --'
    const name = question && question.name ? question.name['en'] : null
    const helpText = question && question.helpText ? question.helpText['en'] : null

    return (
        <ListGroup.Item id={'question-' + id} className={classNames(
            'justify-content-center',
            'p-2',
            'm-1'
        )}>

            <h4>{name}</h4>
            <p>{helpText}</p>
        </ListGroup.Item>
    )
}

export default QuestionView
