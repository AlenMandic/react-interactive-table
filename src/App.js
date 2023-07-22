import { useState } from 'react';

function FilterableProductTable() {

  const [inputValue, setInputValue] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  // handle filtering based on input text
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

 //handle filtering based on checkbox
 const handleCheckBox = () => {
  setCheckBox(!checkBox)  // by default checkbox is false, so unchecked. Here we just toggle through checked and unchecked.
}

  return (
    <div className="main-product-wrapper">

      <div className="searchbar">
        <h1>Our available groceries</h1>
        <input type="text" id="text" placeholder="Search..." value={inputValue} onChange={handleInputChange}
        ></input>
        <div className="stock">
          <input type="checkbox" id="checkbox" checked={checkBox} onChange={handleCheckBox}></input>
          <p className="text" id="check-text">Only show products in stock</p>
        </div>
      </div>

      <ProductTable />
      <div className="product-wrapper">
        <ProductCategoryRow type={'Fruits'} />
        <ProductList inputValue = {inputValue} type = {'Fruits'} checkBox = {checkBox} />

        <ProductCategoryRow type={'Vegetables'} />
        <ProductList inputValue = {inputValue} type = {'Vegetables'} checkBox = {checkBox} />
      </div>
    </div>
  )
}

function ProductTable() {
  return (
    <div className="product-table">
      <div className="title-info">
        <h2>Name</h2>
        <h2>Price</h2>
      </div>
    </div>
  )
}

function ProductCategoryRow(props) {
  return (
    <div className="category-title">
      <h2>{props.type}</h2>
    </div>
  )
}

function ProductList(props) {

 const { inputValue } = props;
 const { type } = props;
 const { checkBox } = props

 const itemList = 
 !checkBox ? 
 (
    <ul className="product-list">
    {ourProductData.map((item, index) => {

      return (item.category === type) && (inputValue === '' || item.name.toLowerCase().includes(inputValue)) ? (
        <li className={item.stocked.toString()} key={`${item.name}-${item.category}-${index}`}>
          <p className="text-name">{item.name}</p>
          <p className="text">{item.price}</p>
        </li>
      ) : '';
    })}
  </ul>
) : (
  <ul className="product-list">
  {ourProductData.map((item, index) => {

    return (item.category === type) && (inputValue === '' || item.name.toLowerCase().includes(inputValue)) && (item.stocked === true) ? (
      <li className={item.stocked.toString()} key={`${item.name}-${item.category}-${index}`}>
        <p className="text-name">{item.name}</p>
        <p className="text">{item.price}</p>
      </li>
    ) : '';
  })}
</ul>
)

 return (
<div className="product-table">
 <div>
 {itemList}
 </div>
</div>
 )
}

let ourProductData = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const App = () => {
  return (
    <div className="main-wrapper">
      <FilterableProductTable />
    </div>
  )
}
export default App