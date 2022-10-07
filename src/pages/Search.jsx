import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import mic from "../images/cjvegle_mic.png";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';


function Search({hidebuttons}) {
  const navigate = useNavigate();
  const [term, setTerm ] = useState('');


  const redirectURL = () => {
    if(term){
      navigate(`/search/${term}`);
    }
  };

  return (
    <form className='search'>
        <div className="search__input">
            <SearchIcon onClick={redirectURL} className="search__icon"/>
            <input 
            onChange={(e)=> setTerm(e.target.value)}
            value={term}
            />
            <img src={mic} alt="" className="search__mic" />
        
        </div>

        {
          !hidebuttons && 
        <div className="search__buttons">
            <Button onClick={redirectURL} type="submit" variant="outlined">Cjvegle Search</Button>
            <Button variant="outlined">I´m Feeling lucky</Button>
        </div>
        }
    </form>
  );
};

export default Search;