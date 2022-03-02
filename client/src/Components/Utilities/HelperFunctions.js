
export const toSnakeCase = str => str.toLowerCase().replace( /[\s-]/g, '_' )

export const spliceStrings = (string, index, splice) => string.slice(0, index).concat(splice).concat(string.slice(index))

export const capitalizeString = string => {
    let capitalizedString = ''
    let space = true
    for (let i = 0; i < string.length; i++){
        if (space){
            capitalizedString += string[i].toUpperCase()
            space = false
            continue
        }
        if (string[i] === ' ') {
            space = true
        }
        capitalizedString += string[i]
    }
    return capitalizedString
}