import { FormEvent } from "react"
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd"

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
	const { login, user } = useAuth();

	const handleSubmit = (values: { username: string, password: string }) => {
		console.log(values);
		
		login(values);
	}

	return <Form onFinish={handleSubmit}>
		<Form.Item name="username" rules={[{required:true,message:'请输入用户名'}]}>
			<Input type="text" id='username' />
		</Form.Item>
		<Form.Item name="password" rules={[{required:true,message:'请输入密码'}]}>
			<Input type="password" id='password' />
		</Form.Item>
		<Form.Item>
			<Button htmlType={"submit"} type="primary">登录</Button>
		</Form.Item>
	</Form>
}