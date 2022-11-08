import { useQuery, useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../model/Query'
import { lsApi, getObjectData } from '../../../model/axios'
import Survey from './survey/Survey'
import QuestionGroup from './survey/QuestionGroup'
import Question from './survey/Question'

const queryKey = ['survey', 1]

const surveyInit = new Survey()

export const useApi = () => {

    const query = useQuery({
        queryKey,
        queryFn: () =>
            lsApi.get('/survey/1')
                .then<Survey>(response => response.data),
        cacheTime: 5000,
        staleTime: 5000
    })

    const survey = query.isSuccess && query.data
        ? new Survey(query.data)
        : surveyInit

    const updateMutation = useMutation<Survey>({
        mutationKey: queryKey,
        mutationFn: (newSurvey) => {
            return lsApi.put('/survey/1', newSurvey)
                .then<Survey>(response => response.data)
        },
        onSuccess: (result) => {
            return queryClient.setQueryData<Survey>(
                queryKey,
                new Survey(result)
            )
        }
    })

    const update = (newData: Partial<Survey>) => {
        updateMutation.mutate(
            getObjectData({...survey, ...newData})
        )
    }

    return {
        surveyQuery: query,
        survey,
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
                title[lang] = newTitle
                update({ title })
            }
        }
    }
}

export default useApi;