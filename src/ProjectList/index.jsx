import {SearchPanel} from "./SearchPanel";
import {List} from "./List";
import {useEffect, useState} from "react";
import * as qs from "qs";
import {cleanObject} from "../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param])

    return <div>
        <SearchPanel param={param} setParam={setParam} />
        <List list={list} />
    </div>
}