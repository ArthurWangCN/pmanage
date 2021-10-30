export const cleanObject = (obj) => {
    let result = {...obj};
    Object.keys(obj).map(key => {
        const value = obj[key];
        if (value === '') {
            delete result[key];
        }
    })
    return result;
}