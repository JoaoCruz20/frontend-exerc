import React, { useEffect, useState } from "react";
import { fetchSuggestions } from "./utils/api";
import "./Autocomplete.css";

function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions(searchTerm).then((_suggestions) => {
      let bucket = []
      for(let i = 0; i < 10; i++){
        if(_suggestions[i] != null || _suggestions[i] !== undefined){
          bucket[i] = _suggestions[i]
        }
      }
      setSuggestions(bucket)
  });
  }, [searchTerm]);

  console.log(suggestions)

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       {searchTerm ? suggestions?.map((item, key) => {
          return (
            <div className="autocomplete-items">
              <p>{item?.title}</p>
            </div>
          )
      }) : ""}
    </div>
  );
}

export default Autocomplete;
