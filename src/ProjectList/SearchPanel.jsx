import {useEffect, useState} from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const SearchPanel = ({param, setParam}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/managers`).then(async res => {
            if (res.ok) {
                setUsers(await res.json());
            }
        })
    }, [])

    return <form action="">
        <input type="text" value={param.name} onChange={evt => setParam({
            ...param,
            name: evt.target.value
        })} />
        <select value={param.personId} onChange={evt => setParam({
            ...param,
            personId: evt.target.value
        })}>
            <option value={''}>负责人</option>
            {
                users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
            }
        </select>
    </form>
}