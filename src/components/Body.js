import React, { useState } from 'react'
import useAPI from '../tools/useAPI'
import Cards from './Cards'
import {  NavLink } from 'react-router-dom';


const Body = () => {
const data = useAPI() 
const [selectedCategory, setSelectedCategory] = useState(null);
const [filteredProduct,setFilteredProduct] = useState();
const [sortBy, setSortBy] = useState('priceLowToHigh');
const [searchInput,setsearchInput] = useState("");
const product = data.map(item=>item.category)
const categories = [...new Set(product),"All"]


const handleCategorySelect = (category) => {
  setSelectedCategory(category);
};


// for filering cards according to categories
const filterCat =(cat)=>{
    if (selectedCategory === "All"){
        return filteredProduct||data
    }else if(selectedCategory === cat.category){       
        return cat.category === selectedCategory
    }
    
}

let filteredProducts = (selectedCategory) ? (filteredProduct||data).filter(filterCat) : filteredProduct;


//search filter function
const filterData =(searchInput,input)=>{
    const filterDatas= input?.filter((datas)=>datas.title.toLowerCase()?.includes(searchInput.toLowerCase()))
return filterDatas
}


//price sorting function
const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };


if (sortBy === 'priceLowToHigh') {
    filteredProducts = [...data].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHighToLow') {
    filteredProducts = [...data].sort((a, b) => b.price - a.price);
  }

return (
    <div>
<div className='search-container'>

<div className='search-input'>
<input className="input" type='text'  placeholder="Search for restaurants..." value={searchInput} onChange={(e)=>{
    setsearchInput(e.target.value);}}/>
    <span className="material-symbols-outlined" onClick={()=>{
        const newdata= filterData(searchInput,data);
        setFilteredProduct(newdata);
      }}>
search
</span>
    </div>


</div>


    <div className="flex justify-center space-x-4 my-4">
      {categories.map((category, index) => (
        <button key={index} className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${selectedCategory === category ? 'bg-blue-600' : ''}`} onClick={() => handleCategorySelect(category)}>
          {category}
        </button>
      ))}

<select className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none" value={sortBy} onChange={handleSortChange}>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
    </div>



    <div className="flex flex-wrap justify-center">
      {(filteredProducts||data).map(item => (
         <NavLink to={"/details/" +item.category+ "/" + item?.id}> <Cards item={item}  /></NavLink> 
      ))}
    </div>
  </div>
);
};
export default Body