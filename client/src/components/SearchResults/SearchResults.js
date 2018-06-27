import React from "react";
import "./style.css";

const SearchResults = props => (
    <ul className="list-group search-results">
      {props.results.map((result, index) => (
        <li key={result} className="list-group-item" data-id={index}>
          <p><strong>{result.headline.main}</strong></p>
          <p>{result.snippet}</p>
          <a href={result['web_url']}><strong>{result['web_url']}</strong></a>
          <br></br>
        <button type="button" class="btn btn-light">Save Article</button>
        <button type="button" class="btn btn-light">Delete Article</button>
        </li>
      ))}
    </ul>
  );
  
  
export default SearchResults;
