import React from 'react'

import classNames from 'classnames'
import AnswerOption from '../../../model/survey/AnswerOption'

function AnswerOptionView(props: { answerOption: AnswerOption }) {

    const answerOption = props.answerOption
    const id = answerOption && answerOption.id ? answerOption.id : '-- no question answer --'
    const answer = answerOption && answerOption.answer ? answerOption.answer['en'] : null

    return (
        <div id={'anwer-option-' + id} className={classNames(
            'justify-content-center',
            'p-2',
            'm-1'
        )}>
            {answer}
        </div>
    )
}

export default AnswerOptionView
