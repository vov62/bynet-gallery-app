import React, { useState, useEffect } from 'react';
import './App.css';
import Btns from './component/Btns/Btns';
import GalleryData from './component/GalleryData/GalleryData';
import axios from 'axios';
import Spinner from './component/Spinner';


function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios(`https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6&category=${query}`);
      const { hits } = response.data;
      // console.log(hits);
      setData(hits)
    } catch (err) {
      console.error('failed to fetch')
    }
  }

  useEffect(() => {
    fetchData()
  }, [query]);


  return (
    <>
      <div className="container">
        <header>
          <div className="header">
            <h1>Our Gallery</h1>
            <Btns setQuery={setQuery} />
          </div>
          <main>
            <GalleryData data={data} query={query} />
          </main>
        </header>
      </div>
    </>
  );
}

export default App;
