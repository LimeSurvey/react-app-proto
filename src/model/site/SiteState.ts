
import Site from './Site'

// Initialise local state
let site = new Site({name: 'LimeSurvey'})

export const getSite = (): Site => {
    console.log('getSite')
    return site
}

export const setSite = (newData: Partial<Site>): Site => {
    console.log('setSite')
    site = new Site({...site, ...newData})
    return site
}
