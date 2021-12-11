interface User {
    id: string,
    name: string,
    token: string
}

const tokenKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(tokenKey);

export const handleUserResponse = (data: {user: User}) => {
    window.localStorage.setItem(tokenKey, data.user.token || '')
    return data.user
}

// 登录
export const login = (param: {username: string, password:string}) => {
    return fetch(`${apiUrl}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
    }).then(async (res: Response) => {
        if (res.ok) {
            return handleUserResponse(await res.json());
        } else {
            return Promise.reject(res)
        }
    })
}

// 注册
export const register = (param: {username: string, password:string}) => {
    return fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
    }).then(async (res: Response) => {
        return handleUserResponse(await res.json())
    })
}

// 登出
export const logout = async () => {
    window.localStorage.removeItem(tokenKey)
}
