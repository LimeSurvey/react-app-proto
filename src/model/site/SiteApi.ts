import { UseQueryResult, UseMutationResult } from '@tanstack/react-query'
import Site from './Site'

/**
 * Site Get-Api
 *
 * @param UseQueryResult<Site>,
 * @param UseMutationResult<Site, unknown, Partial<Site>
 * @returns object
 */
export const getApi = (
    useQueryResult: UseQueryResult<Site>,
    useMutationResult: UseMutationResult<Site, unknown, Partial<Site>>
) => {
    const { data, refetch } = getApiReadOnly(useQueryResult)
    const { mutate } = useMutationResult

    const update = (data: Partial<Site>) => mutate(data)

    return {
        data,
        refetch,
        update
    }
}

export const getApiReadOnly = (
    useQueryResult: UseQueryResult<Site>
) => {
    const { data, refetch } = useQueryResult

    return {
        data,
        refetch
    }
}

export default getApi
