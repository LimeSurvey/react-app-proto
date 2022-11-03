import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../Query'
import SideBarLeft from './SideBarLeft'

const queryKey = 'sideBarLeft'

const sideBarLeftInit = new SideBarLeft({ open: true })

export const useApi = () => {
    const { data, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: () => sideBarLeftInit,
        placeholderData: new SideBarLeft(),
        staleTime: Infinity,
        cacheTime: Infinity
    })

    // update side-bar-left object state
    const update = (options: Partial<SideBarLeft>) => {
        return queryClient.setQueryData(
            [queryKey],
            new SideBarLeft({ ...data, ...options })
        )
    }

    // toggled side-bar-left visibility
    const toggleVisibility = () => {
        if (data) {
            data.toggleOpen()
            update(data)
        }
    }

    return {
        data,
        refetch,
        update,
        toggleVisibility
    }
}


export default useApi;