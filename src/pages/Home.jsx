import React from 'react';
import "./Home.css";
import AppsIcon from '@mui/icons-material/Apps';
import Button from '@mui/material/Button';
import cjvegle from "../images/cjvegle.png";
import Search from './Search';
import { Footer } from './Footer';

function Home() {
  return (
    <div className='home'>
        <div className="home__header">
            <div className="home__headerLeft">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home__headerRight">
                <p>Cmail</p>
                <p>Images</p>
                <AppsIcon/>
                <Button variant="contained">Login</Button>
            </div>
        </div>
            <div className="home__body">
                <img src={cjvegle} alt="" />
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
            <Footer/>
    </div>
  ); 
};

export default Home;