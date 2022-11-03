import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../Query'
import Site from './Site'

const queryKey = 'site'

const siteInit = new Site({ name: 'LimeSurvey' })

export const useApi = () => {
    const { data, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: () => siteInit,
        staleTime: Infinity,
        cacheTime: Infinity
    })

    const update = (options: Partial<Site>) => {
        return queryClient.setQueryData(
            [queryKey],
            new Site({ ...data, ...options })
        )
    }

    return {
        data,
        refetch,
        update
    }
}

export default useApi
