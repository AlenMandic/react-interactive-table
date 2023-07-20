import { useState } from 'react';

function FilterableProductTable() {

  const [inputValue, setInputValue] = useState("");

  // handle filtering based on input text
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    document.querySelectorAll('.text-name').forEach(child => {
      child.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? child.parentElement.style.display = 'flex' : child.parentElement.style.display = 'none'
    })
  }
 //handle filtering based on checkbox
 const handleCheckBox = () => {
  let our_checkbox = document.querySelector('#checkbox')
  let unStocked = document.querySelectorAll('.false');

  function hideUnstocked() {
    unStocked.forEach(item => item.childNodes[0].style.display='none');
    unStocked.forEach(item => item.childNodes[1].style.display='none');
  }
  function showUnstocked() {
    unStocked.forEach(item => item.childNodes[0].style.display='block');
    unStocked.forEach(item => item.childNodes[1].style.display='block');
  }

  our_checkbox.checked ? hideUnstocked() : showUnstocked();
 }

  return (
    <div className="main-product-wrapper">

      <div className="searchbar">
        <h1>Our available groceries</h1>
        <input type="text" id="text" placeholder="Search..." value={inputValue} onChange={handleInputChange}
        ></input>
        <div className="stock">
          <input type="checkbox" id="checkbox" onClick={handleCheckBox}></input>
          <p className="text" id="check-text">Only show products in stock</p>
        </div>
      </div>

      <ProductTable />
      <div className="product-wrapper">
        <ProductCategoryRow type={'Fruits'} />
        <ul className="product-list">
          {ourProductData.map((fruit) =>
            fruit.category === 'Fruits' ? <li className={fruit.stocked.toString()} key={`${fruit.name}-${fruit.category}`}>
              <p className="text-name">{fruit.name}</p>
              <p className="text">{fruit.price}</p>
            </li> : ''
          )}
        </ul>

        <ProductCategoryRow type={'Vegetables'} />
        <ul className="product-list">
          {ourProductData.map((fruit) =>
            fruit.category === 'Vegetables' ? <li className={fruit.stocked.toString()} key={`${fruit.name}-${fruit.category}`}>
              <p className="text-name">{fruit.name}</p>
              <p className="text">{fruit.price}</p>
            </li> : ''
          )}
        </ul>
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