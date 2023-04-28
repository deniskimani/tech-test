import { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };
  return (
    <div>
      <div className="search-form">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
