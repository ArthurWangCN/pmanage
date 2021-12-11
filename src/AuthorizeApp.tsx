import { useAuth } from "./context/auth-context"

export const AuthorizeApp = () => {
    const {logout} = useAuth()
    return <div>
        <p>欢迎！</p>
        <button onClick={logout}>登出</button>
    </div>
}