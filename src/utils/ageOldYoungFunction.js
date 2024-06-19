export function ageOldYoungFunction (value) {
    if (['до 25', '25 - 29', '30 - 34'].includes(value)) {
        return 'до 35 лет' 
    } else {
        return '35 лет и старше'
    }
} 

//