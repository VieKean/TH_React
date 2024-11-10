import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, message, Spin } from 'antd';

const { Title } = Typography;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    const { username, password } = values;

    try {
      const response = await axios.post('http://localhost:8088/api/v1/login', { username, password });
      
      // Giả sử phản hồi chứa token và dữ liệu vai trò của người dùng
      const { token, isAdmin } = response.data;

      // Lưu token và trạng thái vai trò vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);  // tùy chọn, dựa trên nhu cầu
      
      navigate('/'); // Điều hướng đến trang chính
    } catch (error) {
      setLoading(false);
      console.error('Login failed:', error);
      message.error('Đăng nhập thất bại. Vui lòng kiểm tra thông tin và thử lại.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Đăng nhập</Title>
      <Form
        name="login-form"
        onFinish={handleLogin}
        initialValues={{
          username,
          password,
        }}
        layout="vertical"
      >
        <Form.Item
          label="Tên người dùng"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
        >
          <Input
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            {loading ? <Spin /> : 'Đăng nhập'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
