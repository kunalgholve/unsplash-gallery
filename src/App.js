import React, {useState,useEffect} from 'react'; 
import Header from "./components/Heading";
import Loader from './components/Loader';
import Usimage from './components/Usimage';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component'; 

const Loading=styled.div`
  text-align: center;
`

const wrapperImage = styled.section`

 display:grid;
 margin:4rem auto;
 max-width:70rem;
 grid-gap:5rem;
 grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
 grid-auto-rows:300px; 
 `;
function App() {

  const [images,setImages]=useState([]);

  useEffect(() => {
     fetchImages();

  },[])

   const fetchImages = () =>{
    const key=process.env.REACT_APP_ACCESSKEY;
    const api =`https://api.unsplash.com/photos/random?client_id=wUxxdBErwqTq5o7ewYWOKcYfxExTxCcJNW0bz1-j6mY&count=100`;

      axios
        .get(`${api}`)
        .then(res => setImages([...images,...res.data]))
   }

  return (
    <div className="App">
     <Loading> <Header /></Loading>
        <InfiniteScroll 
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loading><Loader/></Loading>}
        >
      <wrapperImage>
      {
        images.map(image =>( 
          <Usimage GlobalStyle url={image.urls.thumb} key={image.id} />
        ))
      }
      </wrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
