import { useQuery, useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const useSurvey = (id) => {
  const [survey, setSurvey] = useState({ questionGroups: [] })
  const { data } = useQuery(['surveys', id], async () => {
    const res = await fetch('/data/survey.json')
    return await res.json()
  })

  // const persistCurrentState = async () =>
  //   fetch('/data/survey.json', {
  //     method: 'POST',
  //     body: JSON.stringify(survey),
  //   })

  const persistCurrentState = () => console.log(JSON.stringify(survey, null, 2))

  const { mutate } = useMutation(persistCurrentState)

  useEffect(() => {
    if (!data) return

    setSurvey(data)
  }, [data])

  return { survey, update: setSurvey, save: mutate }
}

export default useSurvey
