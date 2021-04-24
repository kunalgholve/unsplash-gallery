import React, {useState,useEffect} from 'react';
import Header from "./components/Heading";
import Loader from './components/Loader';
import Usimage from './components/Usimage';
import axios from 'axios';



function App() {

  const [images,setImages]=useState([]);

  useEffect(() => {
    const key=process.env.REACT_APP_ACCESSKEY;
    const api =`https://api.unsplash.com/photos/random?client_id=wUxxdBErwqTq5o7ewYWOKcYfxExTxCcJNW0bz1-j6mY&count=100`;

      axios
        .get(`${api}`)
        .then(res => setImages([...images,...res.data])) 

  },[])


  return (
    <div className="App">
      <Header />
      <Loader />
      {
        images.map(image =>( 
          <Usimage GlobalStyle url={image.urls.thumb} key={image.id} />
        ))
      }
    </div>
  );
}

export default App;
