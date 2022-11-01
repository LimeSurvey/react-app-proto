import SideBarLeft from './SideBarLeft'

/**
 * Local state for side-bar-left
 *
 * This file is a simple container to keep track of local state
 * for the side-bar-left component.
 */

// Initialise local state
let sideBarLeft = new SideBarLeft({open: true})

export const getSideBarLeft = () => {
    console.log('getSideBarLeft')
    return sideBarLeft
}

export const setSideBarLeft = (newData:Partial<SideBarLeft>) => {
    console.log('setSideBarLeft')
    sideBarLeft = new SideBarLeft({...sideBarLeft, ...newData})
}