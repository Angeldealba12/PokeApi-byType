import { useState } from "react";

const SearchBox = ({ onSearch }) => {
    const [value, setValue] = useState("");

    return (
        <div className="search-box">
            <div className="logo"></div>
            <input value={value} 
            onChange={(e) => 
                setValue(e.target.value)} />
            <button 
            onClick={() => {
                onSearch(value)
                }}>Search</button>
        </div>
    );
};

export default SearchBox;
