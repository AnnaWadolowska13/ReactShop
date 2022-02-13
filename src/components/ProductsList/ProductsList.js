import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { v4 as uuidv4 } from 'uuid';

function ProductsList(props) {
  const productsList = props.products;

  function handleClick(event) {
    let chosenProduct = productsList.find(product => product.nazwa === event.target.textContent)
    chosenProduct = {
      ...chosenProduct,
      key: uuidv4(), // generate key
      lineThrough: false
    };
    props.clicker(chosenProduct);
  }
  function getProductsList() {
    return (
      <ul>
        {productsList.map((product) => <li key={product.nazwa}  onClick={handleClick}>{ `${product.nazwa}` }</li>)}
      </ul>
    )
  }
  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        {productsList.length === 0 ? <p>lista pusta </p> : getProductsList()}
      </header>
    </div>
  );
}

export default ProductsList;
