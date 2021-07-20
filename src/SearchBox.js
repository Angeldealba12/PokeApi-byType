import { useState } from "react";

const SearchBox = ({ onSearch }) => {
    const [value, setValue] = useState("");

    return (
        <div>
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
