import qs from "qs";
import { useAuth } from "../context/auth-context";
import * as auth from '../context/auth-provider'

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
    token?:string,
    data?:object
}

export const http = (url: string, {data, token, headers, ...customConfig}:Config={}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === 'GET') {
        url += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    
    return window.fetch(`${apiUrl}/${url}`, config)
        .then(async res => {
            if (res.status === 401) {
                await auth.logout();
                window.location.reload();
                return Promise.reject({message: '请重新登录'})
            }
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                return Promise.reject(data)
            }
        })
}

export const useHttp = () => {
    const { user } = useAuth();
    return (...[url, config]: Parameters<typeof http>) => http(url, {...config, token: user?.token || ''})
}
