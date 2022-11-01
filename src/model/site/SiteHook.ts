import { useQuery, useMutation } from '@tanstack/react-query'
import { getSite, setSite } from './SiteState'

export const useQuerySiteState = () => useQuery(['site'], getSite)

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSiteState = () => useMutation<Site, unknown, Partial<Site>>(
    // @ts-ignore - react-query useMutation typing is broken
    (newData) => {
        setSite(newData)
    }
)

export default useQuerySiteState