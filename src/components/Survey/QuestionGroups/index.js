import { Fragment } from 'react'

import Caption from 'components/Caption'

import QuestionGroup from './QuestionGroup'

const QuestionGroups = ({ questionGroups = [], update }) => {
  const handleUpdate = (index, questionGroup) =>
    update([
      ...questionGroups.slice(0, index),
      questionGroup,
      ...questionGroups.slice(index + 1),
    ])

  return questionGroups.map((questionGroup, index) => (
    <Fragment key={`questionGroup-${questionGroup.id}`}>
      <Caption>Question group {index}</Caption>
      <QuestionGroup
        questionGroup={questionGroup}
        update={(questionGroup) => handleUpdate(index, questionGroup)}
      />
    </Fragment>
  ))
}

export default QuestionGroups
