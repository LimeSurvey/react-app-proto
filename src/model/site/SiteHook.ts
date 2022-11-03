import { useQuery, useMutation } from '@tanstack/react-query'
import { queryClient } from '../Query'
import Site from './Site'
import { getSite, setSite } from './SiteState'

const queryKey = 'site'

export const useQuerySite = () => useQuery({
    queryKey: [queryKey],
    queryFn: getSite,
    cacheTime: Infinity
})

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSite = () => useMutation<Site, unknown, Partial<Site>>({
    // @ts-ignore - react-query useMutation typing is broken
    mutationFn: setSite,
    onSuccess: (data: Site) => {
        // Update react-query cache from returned data
        queryClient.setQueryData([queryKey], data)
    }

})

export default useQuerySite