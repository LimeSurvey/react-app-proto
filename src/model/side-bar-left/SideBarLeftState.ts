import SideBarLeft from './SideBarLeft'

// Initialise local state
let sideBarLeft = new SideBarLeft({open: true})

export const getSideBarLeft = () => {
    return sideBarLeft
}

export const setSideBarLeft = (newData:Partial<SideBarLeft>) => {
    sideBarLeft = new SideBarLeft({...sideBarLeft, ...newData})
}