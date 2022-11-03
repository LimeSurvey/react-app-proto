import { useQuery, useMutation } from '@tanstack/react-query'
import { queryClient } from '../Query'
import SideBarLeft from './SideBarLeft'
import { getSideBarLeft, setSideBarLeft } from './SideBarLeftState'

const queryKey = 'sideBarLeft'

export const useQuerySideBarLeft = () => useQuery({
    queryKey: [queryKey],
    queryFn: getSideBarLeft,
    placeholderData: new SideBarLeft(),
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60,
})

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSideBarLeft = () => useMutation<SideBarLeft, unknown, Partial<SideBarLeft>>({
    // @ts-ignore - react-query useMutation typing is broken
    mutationFn: setSideBarLeft,
    onSuccess: (data: SideBarLeft) => {
        // Update react-query cache from returned data
        queryClient.setQueryData([queryKey], data)
    }
})

export default useQuerySideBarLeft