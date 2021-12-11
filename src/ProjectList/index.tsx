import {SearchPanel} from "./SearchPanel";
import {List} from "./List";
import {useEffect, useState} from "react";
import * as qs from "qs";
import {cleanObject, useDebounce} from "../utils";
import { useHttp } from "../utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const debouncedParam = useDebounce(param, 1000)

    const [list, setList] = useState([])
    const _http = useHttp();

    useEffect(() => {
        _http('projects', {data: cleanObject(param)}).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debouncedParam])

    return <div>
        <SearchPanel param={param} setParam={setParam} />
        <List list={list} />
    </div>
}