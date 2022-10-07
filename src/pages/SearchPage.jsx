import React from 'react';
import { Link } from 'react-router-dom';
import cjvegle from "../images/cjvegle.png";
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./SearchPage.css";
import Results from './Results';


function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__header">
            <Link to="/">
                <img src={cjvegle} alt="" className='logo' />
            </Link>
            <div className="searchPage__headerBody">
                <Search hidebuttons/>
            <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                    <SearchIcon/>
                    <Link to="#">All</Link>
                </div>
                <div className="searchPage__option">
                    <DescriptionIcon/>
                    <Link to="#">News</Link>
                </div>
                <div className="searchPage__option">
                    <ImageIcon/>
                    <Link to="#">Images</Link>
                </div>
                <div className="searchPage__option">
                    <LocalOfferIcon/>
                    <Link to="#">Shopping</Link>
                </div>
                <div className="searchPage__option">
                    <RoomIcon/>
                    <Link to="#">Maps</Link>
                </div>
                <div className="searchPage__option">
                    <MoreVertIcon/>
                    <Link to="#">More</Link>
                </div>
            </div>
            </div>
            <div className="searchPage__optionRight">
                <div className="searchPage__options"> 
                    <Link to="#">Settings</Link>
                </div>
                <div className="searchPage__options"> 
                    <Link to="#">Tools</Link>
                </div>
            </div>
        </div>
        <Results/>
    </div>
  );
};

export default SearchPage;