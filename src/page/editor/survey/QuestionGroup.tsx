import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames'
import QuestionGroupType from '../model/survey/QuestionGroup'
import TextEditableInline from './../../../component/TextEditableInline/TextEditableInline'
import { useApi as surveyUseApi } from '../model/SurveyUseApi'

export function QuestionGroup(props: { questionGroup: QuestionGroupType, children?: React.ReactNode }) {

    const questionGroup = props.questionGroup
    const id = questionGroup && questionGroup.id ? questionGroup.id : ''
    const name = questionGroup && questionGroup.name ? questionGroup.name['en'] : '< Group ? >'

    const { updateQuestionGroup } = surveyUseApi()

    return (
        <Card id={'question-group-' + id} className={classNames(
            'mb-1'
        )}>
            <Card.Header>
                <TextEditableInline
                    defaultValue={name}
                    onSave={value => {
                        if (questionGroup.id)
                            updateQuestionGroup(questionGroup.id, { name: { en: value } })
                        }
                    }
                />
            </Card.Header>
            <ListGroup variant="flush">
                {props.children}
            </ListGroup>
        </Card>
    )
}

export default QuestionGroup
