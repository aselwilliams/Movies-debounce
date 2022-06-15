import React from "react";
import { DebounceInput } from "react-debounce-input";

function MoviesSearch({ setQuery }) {
  return (
    <div className="mb-4">
      <DebounceInput
        className="form-control"
        placeholder="Type to search with debounce..."
        debounceTimeout={500}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* <input className='form-control' placeholder='Type to search ...' onChange={(e)=>setQuery(e.target.value)}/> */}
    </div>
  );
}

export default MoviesSearch;
