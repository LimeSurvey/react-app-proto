import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames'
import QuestionGroupType from '../../../model/survey/QuestionGroup'

export function QuestionGroup(props: { questionGroup: QuestionGroupType, children?: React.ReactNode }) {

    const questionGroup = props.questionGroup
    const id = questionGroup && questionGroup.id ? questionGroup.id : '-- no question group name --'
    const name = questionGroup && questionGroup.name ? questionGroup.name['en'] : null

    return (
        <Card id={'question-group-' + id} className={classNames(
            'justify-content-center',
            'p-2',
            'm-1'
        )}>
            <Card.Header>{name}</Card.Header>
            <ListGroup variant="flush">
                {props.children}
            </ListGroup>
        </Card>
    )
}

export default QuestionGroup
