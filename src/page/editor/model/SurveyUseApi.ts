import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../../../model/Query'
import Survey from './survey/Survey'
import QuestionGroup from './survey/QuestionGroup'
import Question from './survey/Question'
import * as surveyInitData from '../../../data/survey.json'

const queryKey = 'survey'

const surveyInit = new Survey(surveyInitData);

export const useApi = () => {
    const { data: survey, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: () => surveyInit,
        staleTime: Infinity,
        cacheTime: Infinity
    })

    const update = (newData: Partial<Survey>) => {
        return queryClient.setQueryData(
            [queryKey],
            new Survey({ ...survey, ...newData })
        )
    }

    return {
        data: survey,
        refetch,
        update,

        updateQuestionGroup: (id: number, newData: Partial<QuestionGroup>) => {
            if (survey) {
                const questionGroup = survey.getQuestionGroup(id)
                if (questionGroup) {
                    survey.updateQuestionGroup(id, newData)
                    update(survey)
                }
            }
        },

        updateQuestion: (id: number, newData: Partial<Question>) => {
            if (survey) {
                const questionGroup = survey.getQuestionGroupByQuestionId(id)
                if (questionGroup) {
                    const question = questionGroup.getQuestion(id)
                    if (question) {
                        questionGroup.updateQuestion(id, newData)
                        survey.updateQuestionGroup(id, questionGroup)
                        update(survey)
                    }
                }
            }
        },

        updateTitle: (newTitle: string, lang: string = 'en') => {
            if (survey) {
                let title = survey.title ?? {}
                title[lang] = newTitle;
                update({ title })
            }
        }
    }
}

export default useApi;