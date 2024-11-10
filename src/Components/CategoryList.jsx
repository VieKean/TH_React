// CategoryList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Spin, Typography, Empty } from 'antd';

const { Title } = Typography;

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/listCategories')
      .then(response => {
        setCategories(response.data.result);  
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Categories
      </Title>

      {categories.length === 0 ? (
        <Empty description="No categories available" />
      ) : (
        <Row gutter={16}>
          {categories.map(category => (
            <Col span={6} key={category.category_id} style={{ marginBottom: '20px' }}>
              <Link to={`/category/${category.category_id}`}>
                <Card
                  hoverable
                  cover={<img alt={category.name} src="https://via.placeholder.com/150" />}
                >
                  <Card.Meta
                    title={category.name}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CategoryList;
