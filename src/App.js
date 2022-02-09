import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';

import styles from './App.module.scss';

import products from "./common/consts/produkty";
import { useState } from 'react';

function App() {
  const [productsList, setProductList] = useState(products);
  const [productToShopingList, setProductShopingList] = useState();
  function handlerClicker(product) {
    console.log(product)
    setProductShopingList(product);
  }
  return (
    <div className={styles.appWrapper}>
      <AddProducts productsList={productsList} addProduct={setProductList} /> 
      {/* dać potem innna funckje ktora po dodaniu nowego produktu wywola set ale tez filtry */}
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList products={productsList} clicker={handlerClicker}/>
        <ShopingList newProduct={productToShopingList }/>
      </div>
    </ div>
  );
}

export default App;
