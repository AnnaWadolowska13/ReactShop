import { useState, useEffect } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";


function ShopingList(props) {
  const [shopingList, setShopingList] = useState([]);
  const liShopingList = shopingList.map((item) =>
    <li key={item.key} data-id={item.key} onContextMenu={removeProduct}> {item.nazwa} </li>)

  function removeProduct(event) {
    event.preventDefault();
    let list = [...shopingList];
    // console.log(typeof event.target.dataset.id)
    // console.log(typeof list[0].key)
    let idToRemove = event.target.dataset.id;
    let updateList = list.filter((product) => product.key !== idToRemove )
    console.log(updateList)
    setShopingList(updateList);
  }
  

  useEffect(() => {
    if (props.newProduct) {
      setShopingList((shopingList) => [...shopingList, props.newProduct]);
    }
    
  }, [props.newProduct])
  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {shopingList.length === 0 ? <p>lista pusta </p> : liShopingList}
      </header>
    </div>
  );
}

export default ShopingList;
