import React, { useEffect, useState } from "react";
import { fetchSuggestions } from "../utils/api";
import "./Autocomplete.css";
import ProductDetail from "./ProductDetail";

function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Id, setId] = useState();
  const [suggestions, setSuggestions] = useState([]);

  //* I would refactor the fetcher and would add the .catch to cathc nay possible network and response errors and
  // would also add the .then finally for the loading spinner than would add when requesting data
  // Could later on refactor the code by adding use-debounce which is a great package
  useEffect(() => {
    setTimeout(() => {  
      if(searchTerm !== "" || searchTerm != null){   
      fetchSuggestions(searchTerm).then((_suggestions) => {
        let bucket = []
        for(let i = 0; i < 10; i++){
          if(_suggestions[i] != null || _suggestions[i] !== undefined){
            bucket[i] = _suggestions[i]
          }
        }
        setSuggestions(bucket)    
    }
      )
        };
    }, 3000)
  }, [searchTerm]);

  return (
    <div className="search-container">
      <div className="product-row" role="img" placeholder="Product display">
        {Id ? <ProductDetail productId={Id} /> : ""}
      </div>
      <div className="search-row">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       {searchTerm ? suggestions?.map((item, key) => {
          return (
            <div className="autocomplete-items" role="button" placeholder="Button to product">
              <button index={`button-${key}`} onClick={() => {
                setId(item?.id)
                setSearchTerm("")
              }}>{item?.title}</button>
            </div>
          )
      }) : ""}
      </div>
    </div>
  );
}

export default Autocomplete;
