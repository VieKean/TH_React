import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Typography, Button } from 'antd';
import { HomeOutlined, LoginOutlined, ShoppingCartOutlined, AppstoreAddOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

function AppHeader() {
  const navigate = useNavigate();

  // Kiểm tra xem người dùng có đăng nhập hay không
  const isLoggedIn = localStorage.getItem('token'); // Kiểm tra token trong localStorage

  // Hàm đăng xuất
  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem('token');
    // Điều hướng người dùng về trang đăng nhập
    navigate('/login');
  };

  return (
    <Header style={{ background: '#001529', padding: '0 50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          <Link to="/" style={{ color: 'white' }}>Cửa Hàng</Link>
        </Title>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          {isLoggedIn ? (
            <>
              <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                <Link to="/product">Sản phẩm</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
                <Link to="/category">Loại</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<LogoutOutlined />}>
                <Button type="link" onClick={handleLogout} style={{ color: 'white' }}>
                  Đăng xuất
                </Button>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="2" icon={<LoginOutlined />}>
              <Link to="/login">Đăng nhập</Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </Header>
  );
}

export default AppHeader;
