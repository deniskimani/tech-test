/* eslint-disable jsx-a11y/img-redundant-alt */
import "../styles/search-results.css";
const SearchResults = ({ results, input }) => {
  if (!results.length) {
    if (!input) {
      return <p className="unavailable">Please type something in search box</p>;
    } else {
      return (
        <p className="unavailable">
          No results for <span>{input}</span>!
        </p>
      );
    }
  } else {
    return (
      <div className="container">
        <p className="available">
          Search results for <span>{input}</span>
        </p>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
