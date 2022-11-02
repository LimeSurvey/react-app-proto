import { UseQueryResult, UseMutationResult } from '@tanstack/react-query'
import SideBarLeft from './SideBarLeft'

/**
 * Side Bar Left Get-Api
 *
 * This function takes the return data of hooks used in the left-side-bar
 * component and returns the data and actions for working with them.
 *
 * This api file keeps the state manipulation logic out of the react-component.
 * allowing for reuse of actions across multiple react-components.
 *
 * Because of the way react-hooks work, hooks must be invoked directly inside the
 * react-component. For this reason, we invoke the hooks inside the react-component
 * and pass them to this getActions() function.
 *
 * @param UseQueryResult<SideBarLeft>,
 * @param UseMutationResult<SideBarLeft, unknown, Partial<SideBarLeft>>
 * @returns object
 */
export const sideBarLeftGetApi = (
    useQueryResult: UseQueryResult<SideBarLeft>,
    useMutationResult: UseMutationResult<SideBarLeft, unknown, Partial<SideBarLeft>>
) => {

    const {
        data,
        refetch
    } = sideBarLeftGetApiReadOnly(useQueryResult);

    const { mutateAsync } = useMutationResult;

    // update side-bar-left object state
    const update = (options: Partial<SideBarLeft>) =>
        mutateAsync(options).then(() => refetch())

    // toggled side-bar-left visibility
    const toggleVisibility = (sideBarLeft: SideBarLeft) => {
        sideBarLeft.toggleOpen()
        update(sideBarLeft)
    }

    return {
        data,
        refetch,
        update,
        toggleVisibility
    }
}

/**
 * Side Bar Left Get-Api read-only
 *
 * Use this subset of the api if you only need to read data.
 *
 * @param DefinedUseQueryResult<SideBarLeft>
 * @returns object
 */
export const sideBarLeftGetApiReadOnly = (
    useQueryResult: UseQueryResult<SideBarLeft>
) => {
    const { data, refetch } = useQueryResult;

    return {
        data,
        refetch
    }
}

export default sideBarLeftGetApi
