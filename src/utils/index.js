import {useEffect, useState} from "react";

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

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, [])
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => { setDebouncedValue(value) }, delay)
        // 每次在上一个useEffect处理完以后再运行 负责一些清理的任务
        return () => clearTimeout(timeout)
    }, [value])
    return debouncedValue
}
