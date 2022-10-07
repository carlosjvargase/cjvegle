import React, { useState, useEffect } from 'react';
import "./Results.css";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';



const Results = () => {
    const {term} = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    
    const searchQuery = async () => {
        try {
            const res = await axios.get(`https://google-search3.p.rapidapi.com/api/v1/search/q=${term}&num=100`,{
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'c96cec2082msha1dde288b7868d9p126d7ajsn1b663c50181a',
                },
            }
        );
            console.log(res);
            setLoading(false);
            setResults(res.data.results);
        } catch (error) {
            setLoading(false);
            setError('Something happened, Try again');
        } 
    };
    useEffect(()=>{
        searchQuery();
    },[term]);

  return (
    <div className='result'>
        {loading ? (<Loading/>) : error ? (<h1>{error}</h1>) : results?.length <=0 ? (<h1>No Results</h1>): (results?.map((result) => (
            <>
            <a href={result?.link} target="_blank" rel="noreferrer">{result?.title}</a>
            <p>{result?.description}</p>
            </>
        )))}
    </div>
  );
};

export default Results;