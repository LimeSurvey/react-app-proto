import React from 'react'

import classNames from 'classnames'
import SubQuestionType from '../model/survey/SubQuestion'

function SubQuestion(props: { subQuestion: SubQuestionType, children?: React.ReactNode }) {

    const subQuestion = props.subQuestion
    const id = subQuestion && subQuestion.id ? subQuestion.id : ''
    const name = subQuestion && subQuestion.name ? subQuestion.name['en'] : null
    const helpText = subQuestion && subQuestion.helpText ? subQuestion.helpText['en'] : null

    return (
        <div id={'subQuestion-' + id} className={classNames(
            'd-flex',
            'justify-content-center',
            'p-2',
            'm-1'
        )}>
            {name}
            {helpText}
        </div>
    )
}

export default SubQuestion
