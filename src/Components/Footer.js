// Footer.js
import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Text } = Typography;
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', padding: '20px 50px', backgroundColor: '#f0f2f5' }}>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text type="secondary">© 2024 Your Company. All Rights Reserved.</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
