import maybe from 'helpers/maybe'
import Input from 'components/Input'

import Questions from './index'

const Question = ({
  question: {
    name: maybeName,
    type = '',
    helpText: maybeHelptext,
    subquestions = [],
  } = {},
  question,
  update,
}) => {
  const handleUpdate = (change) => {
    update({
      ...question,
      ...change,
    })
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <Input
          value={maybe(maybeName)}
          label='Name (en)'
          update={(value) =>
            handleUpdate({
              name: { ...question.name, en: value },
            })
          }
        />
      </div>
      <div className='card-body'>
        <Input
          value={type}
          label='Type'
          update={(value) =>
            handleUpdate({
              type: value,
            })
          }
        />
        <Input
          value={maybe(maybeHelptext)}
          label='Help text (en)'
          update={(value) =>
            handleUpdate({
              helpText: { ...question.helpText, en: value },
            })
          }
        />
        <Questions
          questions={subquestions}
          update={(subquestions) => handleUpdate({ subquestions })}
        />
      </div>
    </div>
  )
}

export default Question
