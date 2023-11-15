import React, {useState} from "react";

const Searchbar = ({onSearch}) => {
    const [query, setQuery] = useState ("")
    function search(event){
        event.preventDefault()
        onSearch(event.target.value);
        setQuery(event.target.value);
    }

  return (
    <div>
        <input 
          className="search-bar"
          type="text" 
          placeholder="search by description"
          onChange={search}
          value={query}
        />
        <button className="button">SEARCH</button>
    </div>
  )
}

export default Searchbar;