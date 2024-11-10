// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Spin, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8088/api/v1/listProducts/${id}`)
      .then(response => {
        setProduct(response.data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }} />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card
            hoverable
            cover={<img alt={product.ten} src={product.image} />}
            style={{ width: '100%' }}
          >
            <Title level={3}>{product.ten}</Title>
            <Paragraph>{product.description}</Paragraph>
            <Paragraph strong>Price: ${product.price}</Paragraph>
            <Button type="primary">Add to Cart</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
