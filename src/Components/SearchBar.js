import React from 'react';

const SearchBar = ({changeFilterChoice, filterChoice, changeSortChoice, sortChoice}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortChoice === "Alphabetically" ? true : false} onChange={(event) => changeSortChoice(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="year" checked={sortChoice === "year" ? true : false} onChange={(event) => changeSortChoice(event)}/>
        Release Year
      </label>
      <br/>

      <label>
        <strong>Filter by Genre:</strong>
        <select onChange={(event) => changeFilterChoice(event)}>
        <option selected={filterChoice === "None"} value="None">None</option>
          <option selected={filterChoice === "Drama"} value="Drama">Drama</option>
          <option selected={filterChoice === "Crime"} value="Crime">Crime</option>
          <option selected={filterChoice === "Thriller"} value="Thriller">Thriller</option>
          <option selected={filterChoice === "Action"} value="Action">Action</option>
        </select>
      </label>


      // <label>
      //   <strong>Filter by year range:</strong>
      //   <strong>From:</strong>
      //   <select onChange={(event) => changeFilterChoice(event)}>
      //   <option selected={filterChoice === "1950"} value="1950">1950</option>
      //     <option selected={filterChoice === "1960"} value="1960">1960</option>
      //     <option selected={filterChoice === "1970"} value="1970">1970</option>
      //     <option selected={filterChoice === "1980"} value="1980">1980</option>
      //     <option selected={filterChoice === "1990"} value="1990">1990</option>
      //     <option selected={filterChoice === "2000"} value="2000">2000</option>
      //     <option selected={filterChoice === "2010"} value="2010">2010</option>
      //   </select>
      //   <strong>To:</strong>
      //   <select onChange={(event) => changeFilterChoice(event)}>
      //   <option selected={filterChoice === "1950"} value="1950">1950</option>
      //     <option selected={filterChoice === "1960"} value="1960">1960</option>
      //     <option selected={filterChoice === "1970"} value="1970">1970</option>
      //     <option selected={filterChoice === "1980"} value="1980">1980</option>
      //     <option selected={filterChoice === "1990"} value="1990">1990</option>
      //     <option selected={filterChoice === "2000"} value="2000">2000</option>
      //     <option selected={filterChoice === "2010"} value="2010">2010</option>
      //     <option selected={filterChoice === "2019"} value="2019">2019</option>
      //   </select>
      // </label>


    </div>
  );
}


export default SearchBar;
