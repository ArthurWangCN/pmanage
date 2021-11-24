import {useState} from "react";

export const useArray = <T>(initArray:T[]) => {
    const [value, setValue] = useState(initArray);
    const add = (item:T) => {
        setValue([
            ...value,
            item
        ])
    }
    const removeIndex = (index:number) => {
        let temp = [...value];
        temp.splice(index, 1);
        setValue(temp);
    }
    const clear = () => {
        setValue([])
    }
    return {
        value,
        add,
        removeIndex,
        clear
    }
}