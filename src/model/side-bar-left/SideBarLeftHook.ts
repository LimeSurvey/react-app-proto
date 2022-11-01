import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import SideBarLeft from './SideBarLeft'
import { getSideBarLeft, setSideBarLeft } from './SideBarLeftState'


export const useQuerySideBarLeftState = () => useQuery(['sideBarLeft'], getSideBarLeft)

// @ts-ignore - react-query useMutation typing is broken
export const useMutationSideBarLeftState = () => useMutation<SideBarLeft, unknown, Partial<SideBarLeft>>(
    // @ts-ignore - react-query useMutation typing is broken
    (newData) => {
        setSideBarLeft(newData)
    }
)

export default useQuerySideBarLeftState