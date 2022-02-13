import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';

import styles from './App.module.scss';

import products from "./common/consts/produkty";
import { useState } from 'react';
import { useEffect } from 'react';
// import { useEffect } from 'react';


function App() {
  const [productsList, setProductList] = useState(products);
  const [productsDisplayList, setDisplayList] = useState(products);
  const [basketList, setBasketList] = useState([]);
  const [filters, setFilters] = useState({
            productType: 'all',
            productName: "",
            foodProduct: false,
        });

  const productsTypes = [...new Set(productsList.map((product) => product.kategoria))];
  
  function addNewProduct(product) {
    let list = [...productsList];
    if (list.find((item) => item.nazwa === product.nazwa)) {
      alert("produkt juz istnieje na liscie");
    } else {
      list.push(product);
      setProductList(list);
    }
  }
  function addProductToBusket(product) {
    let list = [...basketList, product];
    setBasketList(list);
  }

  function removeProductFromBusket(product) {
    let idToRemove = product.dataset.id;
    let updateList = basketList.filter((product) => product.key !== idToRemove )
    setBasketList(updateList);
  }
  function updateBusketList(product) {
    let id = product.dataset.id;
    const updateList = basketList.map((item) => item.key === id ? {...item, lineThrough: !item.lineThrough} : item)
    setBasketList(updateList);
    // console.log(event.target.textContent)
  }
  useEffect(() => {
    let filteredList = [...productsList];
    if (filters.productName) {
        filteredList = filteredList.filter((item) => item.nazwa.toLowerCase().includes(filters.productName.toLowerCase()));
    }
    if (filters.productType !== 'all') {
        filteredList = filteredList.filter((item) => item.kategoria === filters.productType);
    }
    if (filters.foodProduct) {
        filteredList = filteredList.filter((item) => item.produktSpozywczy === true);
    }
    setDisplayList(filteredList);
  }, [productsList, filters])


  return (
    <div className={styles.appWrapper}>
      <AddProducts newProduct={addNewProduct} /> 
      <ProductsFilters categoryList={productsTypes} filter={setFilters}/>
      <div className={styles.columnsWrapper}>
        <ProductsList products={productsDisplayList} clicker={addProductToBusket}/>
        <ShopingList basketList={basketList} removeProduct={removeProductFromBusket} updateList={updateBusketList}/>
      </div>
    </ div>
  );
}

export default App;
