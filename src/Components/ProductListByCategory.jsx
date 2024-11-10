import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Spin, Typography, Empty } from 'antd';

const { Title, Paragraph } = Typography;

function ProductListByCategory() {
  const { id } = useParams();  // Get category ID from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8088/api/v1/listProductsByCategory/${id}`)
      .then(response => {
        setProducts(response.data.result);  
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>
        Products in this Category
      </Title>

      {products.length === 0 ? (
        <Empty description="No products available in this category" />
      ) : (
        <Row gutter={16}>
          {products.map(product => (
            <Col span={8} key={product.product_id} style={{ marginBottom: '20px' }}>
              {/* Move the Link here to wrap the whole Card */}
              <Link to={`/product/${product.product_id}`}>
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.image_url} />}
                >
                  <Card.Meta
                    title={product.name}
                    description={`Price: $${product.price}`}
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

export default ProductListByCategory;
