import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';

import styles from './App.module.scss';

import products from "./common/consts/produkty";
import { useState } from 'react';


function App() {
  const [productsList, setProductList] = useState(products);
  const [productsDisplayList, setDisplayList] = useState(products);
  const [productToShopingList, setNewProductInBasket] = useState();
  function handlerClicker(product) {
    console.log(product)
    setNewProductInBasket(product);
  }

  return (
    <div className={styles.appWrapper}>
      <AddProducts productsList={productsList} addProduct={setProductList} /> 
      {/* dać potem innna funckje ktora po dodaniu nowego produktu wywola set ale tez filtry */}
      <ProductsFilters productsList={productsList} filterProducts={setDisplayList}/>
      <div className={styles.columnsWrapper}>
        <ProductsList products={productsDisplayList} clicker={handlerClicker}/>
        <ShopingList newProduct={productToShopingList}/>
      </div>
    </ div>
  );
}

export default App;
