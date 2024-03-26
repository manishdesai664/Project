import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import ProductList from './auth/ProductList';
import CreateProduct from './auth/CreateProduct';
import UpdateProduct from './auth/UpdateProduct';
import DeleteProduct from './auth/DeleteProduct';
import ProductItem from './auth/ProductItem';


function App() {
  return (
    <div className="App">
      <CreateProduct/>
      <DeleteProduct/>
      <Login/>
      <ProductList/>
      <UpdateProduct/>
      <ProductItem/>
    </div>
  );
}

export default App;
