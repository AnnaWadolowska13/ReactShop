import commonColumnsStyles from "../../common/styles/Columns.module.scss";


function ShopingList(props) {
  const { basketList } = props;

  const liShopingList = basketList.map((item) =>
    <li key={item.key}
      data-id={item.key}
      onContextMenu={removeProduct}
      onClick={updateList}
      style={{ "textDecoration": `${item.lineThrough ? "line-through" : "auto"}` }}>
      {item.nazwa}
    </li>);
  
  function removeProduct(event) {
    event.preventDefault();
    props.removeProduct(event.target)
  }
  function updateList(event) {
    props.updateList(event.target);
  }
  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {basketList.length === 0 ? <p>lista pusta </p> : liShopingList}
      </header>
    </div>
  );
}

export default ShopingList;
