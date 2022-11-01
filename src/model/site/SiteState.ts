
import Site from './Site'

// Initialise local state
let site = new Site({name: 'LimeSurvey'})

export const getSite = () => {
    return site
}

export const setSite = (newData:Partial<Site>) => {
    site = new Site({...site, ...newData})
}
