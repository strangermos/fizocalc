import { ballsData, exempleData, genderData, ageData, categoryData } from './data'

export function fakeFetchExemple() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ballsData)
        }, 1)
    })
}

export function fetchAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(exempleData)
        }, 1)
    })
}

export function genderAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(genderData)
        }, 2)
    })
}

export function ageAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ageData)
        }, 2)
    })
}

export function categoryAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryData)
        }, 2)
    })
}

// export function fetchAssets() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(categoryData)
//         }, 2)
//     })
// }