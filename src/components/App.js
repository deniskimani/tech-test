import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState();

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} setInput={setInput} />
      {searchResults && <SearchResults results={searchResults} input={input} />}
    </div>
  );
};

export default App;
