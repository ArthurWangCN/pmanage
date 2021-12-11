import {useState} from "react";
import {useMount} from "../utils";
import { useHttp } from "../utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

interface SearchPanelProps {
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void
}

interface Users {
    id: string,
    name: string
}

export const SearchPanel = ({param, setParam}: SearchPanelProps) => {

    const [users, setUsers] = useState<Users[]>([])
    const _http = useHttp()

    useMount(() => {
        _http('managers').then(async res => {
            if (res.ok) {
                setUsers(await res.json());
            }
        })
    })

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
