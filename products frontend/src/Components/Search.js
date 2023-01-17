import { Select } from "@chakra-ui/react"
import React from "react";

const Search = (props) => {
  return (
    <div>

      <br></br>
      <label>
        <h1></h1> <br></br>
        <div className="search">
       <Select marginLeft="35%" marginRight="35%" color="secondary" variant="flushed" width="large" placeholder="Filter"  onChange={(e) => props.updateFilter(e.target.value)}>
        {props.movies.map(movie => {
          <option value="All">All</option>
          return <option value={movie} key={movie.id}> {movie} </option>
        })}
        </Select>
        </div> 
        </label>
    </div>
  );
};

export default Search;