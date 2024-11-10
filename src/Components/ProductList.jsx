import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin } from 'antd';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/listProducts')
      .then(response => {
        setProducts(response.data.result);  
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }} />;
  }

  // Định nghĩa các cột trong bảng
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link to={`/product/${record.product_id}`} style={{ color: '#1890ff' }}>
          {text}
        </Link>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `$${text}`,
    },
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image_url',
      render: (text) => <img src={text} alt="Product" style={{ width: '50px', height: '50px' }} />,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Product List</h1>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="product_id"
        pagination={{ pageSize: 2 }}
      />
    </div>
  );
}

export default ProductList;
