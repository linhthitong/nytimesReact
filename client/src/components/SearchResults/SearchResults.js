import React from "react";
import "./style.css";

const SearchResults = props => (
    <ul className="list-group search-results">
      {props.results.map((result, index) => (
        <li key={result} className="list-group-item" data-id={index}>
          <a href={result['web_url']}><strong>{result['web_url']}</strong></a>
         <p>{result.snippet}</p>
        </li>
      ))}
    </ul>
  );
  
  
export default SearchResults;
