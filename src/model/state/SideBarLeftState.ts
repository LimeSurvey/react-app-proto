import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

export type SideBarLeftState = {
    open: boolean
}

export type SideBarLeftStateOptions = {
    open?: boolean
}

// This is the actual state store that is kept in memory
let sideBarLeftStateData:SideBarLeftState = {
    open: true
};

export const useQuerySideBarLeftState = () => useQuery(['sideBarLeft'], () => {
    return sideBarLeftStateData
})

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSideBarLeftState = () => useMutation<SideBarLeft, unknown, SideBarLeftOptions>(
    // @ts-ignore - react-query useMutation typing is broken
    (newData) => {
        sideBarLeftStateData = {...sideBarLeftStateData, ...newData}
        return sideBarLeftStateData
    }
)

export default useQuerySideBarLeftState;