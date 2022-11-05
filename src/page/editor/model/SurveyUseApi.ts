import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../../../model/Query'
import Survey from './Survey'

const queryKey = 'survey'

const surveyInit = new Survey({
    "id": 1,
    "title": {
        "en": "Test Survey 1"
    },
    "questionGroups": [
        {
            "id": 1,
            "name": {
                "en": "Question Group 1",
                "fr": "La baguette"
            },
            "questions": [
                {
                    "id": 1,
                    "name": {
                        "en": "Question 1",
                        "fr": "La baguette 1"
                    },
                    "type": "S",
                    "helpText": {
                        "en": "Some help",
                        "fr": "Some baguette"
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": null,
            "questions": [
                {
                    "id": 4,
                    "name": {
                        "en": "Question 4",
                        "fr": "La baguette 4"
                    },
                    "type": "A",
                    "helpText": null,
                    "subQuestions": [
                        {
                            "id": 5,
                            "name": {
                                "en": "Mo",
                                "fr": "Mueh"
                            }
                        },
                        {
                            "id": 7,
                            "name": {
                                "en": "Mo 2",
                                "fr": "Mueh 2"
                            }
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": null,
                    "answerOptions": [
                        {
                            "id": 1,
                            "answer": {
                                "en": "Male",
                                "fr": "Le male"
                            }
                        }
                    ]
                }
            ]
        }
    ]
});

export const useApi = () => {
    const { data, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: () => surveyInit,
        staleTime: Infinity,
        cacheTime: Infinity
    })

    // update side-bar-left object state
    const update = (options: Partial<Survey>) => {
        return queryClient.setQueryData(
            [queryKey],
            new Survey({ ...data, ...options })
        )
    }

    return {
        data,
        refetch,
        update
    }
}

export default useApi;