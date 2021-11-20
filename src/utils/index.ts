import {useEffect, useState} from "react";

export const cleanObject = (obj: object) => {
    let result = {...obj};
    Object.keys(obj).map(key => {
        // @ts-ignore
        const value = obj[key];
        if (value === '') {
            // @ts-ignore
            delete result[key];
        }
    })
    return result;
}

export const useMount = (callback: ()=>void) => {
    useEffect(() => {
        callback();
    }, [])
}

export const useDebounce = (value: any, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => { setDebouncedValue(value) }, delay)
        // 每次在上一个useEffect处理完以后再运行 负责一些清理的任务
        return () => clearTimeout(timeout)
    }, [value])
    return debouncedValue
}
