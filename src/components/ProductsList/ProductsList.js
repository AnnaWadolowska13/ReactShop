import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useState } from "react";

function ProductsList(props) {
  const [basketProductKey, setBasketProductKey] = useState(0);
  const productsList = props.products;
  function handleClick(event) {
    let chosenProduct = productsList.find(product => product.nazwa === event.target.textContent)
    chosenProduct = {
      ...chosenProduct,
      key: basketProductKey,
    };
    setBasketProductKey(basketProductKey + 1)
    props.clicker(chosenProduct)
  }
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {productsList.map((product) => <li key={product.nazwa}  onClick={handleClick}>{ `${product.nazwa}` }</li>)}
        </ul>
      </header>
    </div>
  );
}

export default ProductsList;
