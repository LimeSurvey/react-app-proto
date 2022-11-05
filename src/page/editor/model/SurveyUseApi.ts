import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../../../model/Query'
import Survey from './Survey'
import * as survey from '../../../data/survey.json'

const queryKey = 'survey'

const surveyInit = new Survey(survey);

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