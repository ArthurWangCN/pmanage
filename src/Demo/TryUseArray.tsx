import { useArray } from "./utils";
import { useMount } from "../utils";

export const TryUseArray = () => {
    const persons: {name:string, age: number}[] = [
        {name: 'tom', age: 18},
        {name: 'jerry', age: 16}
    ]
    const {value, add ,removeIndex , clear} = useArray(persons);
    useMount(() => {
        // Property 'noExist' does not exist on type '{ name: string; age: number; }[]'.
        // console.log(value.noExist);

        // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
        // add({name: 'ted'});

        // Argument of type 'string' is not assignable to parameter of type 'number'.
        // removeIndex('tom');
    })
    return (
        <div>
            <button onClick={() => add({name: 'john', age: 22})}>add john</button>
            <button onClick={() => removeIndex(0) }>remove 0</button>
            <button onClick={() => clear() }>clear</button>
            {value.map((person:{name:string,age:number}, index:number) => (
                <div key={index}>
                    <span>{index}</span>--
                    <span>{person.name}</span>--
                    <span>{person.age}</span>
                </div>
            ))}
        </div>
    )
}
