/* eslint-disable jsx-a11y/img-redundant-alt */
import "../styles/search-results.css";
const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="unavailable">No results!</p>;
  } else {
    return (
      <div className="container">
        {results.map((image) => (
          <img className="card-image" src={image[0]} alt="spaceImage" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
