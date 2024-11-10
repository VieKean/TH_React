// /Route.js
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import Car from './Components/Car';
import Hello from './Components/Hello';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import ProductListByCategory from './Components/ProductListByCategory';
import PrivateRoute from './Components/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/car",
        element: <PrivateRoute element={<Car />} />
      },
      {
        path: "/hello",
        element: <PrivateRoute element={<Hello />} />
      },
      {
        path: "/category",
        element: <PrivateRoute element={<CategoryList />} />
      },
      {
        path: "/product",
        element: <PrivateRoute element={<ProductList />} />
      },
      {
        path: "/product/:id",
        element: <PrivateRoute element={<ProductDetail />} />
      },
      {
        path: "/category/:id",
        element: <PrivateRoute element={<ProductListByCategory />} />
      },
    ]
  },
  {
    path: "*",
    element: <div>Không tìm thấy web theo yêu cầu</div>
  }
]);
