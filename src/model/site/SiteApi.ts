import { UseQueryResult, UseMutationResult } from '@tanstack/react-query'
import Site from './Site'

/**
 * Site Get-Api
 *
 * @param UseQueryResult<Site>,
 * @param UseMutationResult<Site, unknown, Partial<Site>
 * @returns object
 */
export const siteGetApi = (
    useQueryResult: UseQueryResult<Site>,
    useMutationResult: UseMutationResult<Site, unknown, Partial<Site>>
) => {

    const { data, refetch } = siteGetApiReadOnly(useQueryResult);
    const { mutateAsync } = useMutationResult;

    const update = (data: Partial<Site>) =>
        mutateAsync(data).then(() => refetch())

    return {
        data,
        refetch,
        update
    }
}

export const siteGetApiReadOnly = (
    useQueryResult: UseQueryResult<Site>
) => {
    const { data, refetch } = useQueryResult;

    return {
        data,
        refetch
    }
}

export default siteGetApi
