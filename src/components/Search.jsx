import React from "react";


const Search = () => {
    return(
        <div className="search">
            <div>
                <img src="public/search.svg" alt="search" />
        
                <input 
                    type="text"                 
                    placeholder="Search for movies, TV shows, genres, etc."
                    value={"Initial Value"} 
                    onChange={console.log('Hello World')}/>
            </div>
        </div>   
    );
}
export default Search;