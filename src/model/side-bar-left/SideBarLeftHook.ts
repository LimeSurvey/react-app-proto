import { useQuery, useMutation } from '@tanstack/react-query'
import SideBarLeft from './SideBarLeft'
import { getSideBarLeft, setSideBarLeft } from './SideBarLeftState'

export const useQuerySideBarLeft = () => useQuery({
    queryKey: ['sideBarLeft'],
    queryFn: getSideBarLeft,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60,
    //initialData: new SideBarLeft()
})

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSideBarLeft = () => useMutation<SideBarLeft, unknown, Partial<SideBarLeft>>(
    // @ts-ignore - react-query useMutation typing is broken
    (newData) => {
        setSideBarLeft(newData)
    }
)

export default useQuerySideBarLeft