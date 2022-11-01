import { DefinedUseQueryResult, UseMutationResult } from '@tanstack/react-query'
import SideBarLeft from './SideBarLeft'

/**
 * Side Bar Left Get-Api
 *
 * This function takes the return data of hooks used in the left-side-bar
 * component and returns the data and actions for working with them.
 *
 * The idea behind this actions file is to move the state manipulation logic
 * out of the react-component.
 *
 * Because of the way react-hooks work, hooks must be invoked directly inside the
 * react-component. For this reason, we invoke the hooks in the in react-component
 * and immediately pass them to this getActions() function.
 *
 * @param DefinedUseQueryResult<SideBarLeft>,
 * @param UseMutationResult<SideBarLeft, unknown, Partial<SideBarLeft>>
 * @returns object
 */
export const getApi = (
    useQueryResult: DefinedUseQueryResult<SideBarLeft>,
    useMutationResult: UseMutationResult<SideBarLeft, unknown, Partial<SideBarLeft>>
) => {

    const {
        sideBarLeft,
        sideBarLeftDataRefetch
     } = getApiReadOnly(useQueryResult);

    const { mutateAsync: sideBarLeftMutateSync } = useMutationResult;

    // update side-bar-left object state
    const updateSideBarLeft = (options: Partial<SideBarLeft>) =>
        sideBarLeftMutateSync(options).then(() => sideBarLeftDataRefetch())

    // toggled side-bar-left visibility
    const toggleSideBarLeftVisibility = (origValue: Partial<SideBarLeft>|undefined) => {
        const openPrev = origValue !== undefined ? origValue.open : true;
        updateSideBarLeft({open: !openPrev})
    }

    return {
        sideBarLeft,
        sideBarLeftDataRefetch,
        updateSideBarLeft,
        toggleSideBarLeftVisibility
    }
}

/**
 * Side Bar Left Get-Api read-only
 *
 * Use this if you don't need to modify any data.
 */
export const getApiReadOnly = (
    useQueryResult: DefinedUseQueryResult<SideBarLeft>
) => {
    // returned data from
    const { data: sideBarLeft, refetch: sideBarLeftDataRefetch } = useQueryResult;

    return {
        sideBarLeft,
        sideBarLeftDataRefetch
    }
}

export default getApi;
