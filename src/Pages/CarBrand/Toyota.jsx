// import axios from 'axios';

import { useLoaderData } from "react-router-dom";

// import { useState, useEffect } from 'react';
import CarCard from './../CarCard/CarCard';
import Footer from "../Footer/Footer";



const Toyota = () => {

// //

//   const [toyotaData, setToyotaData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/car');
//         setToyotaData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const specificBrand = 'Toyota'; 
//   const specificBrandData = toyotaData.find((item) => item.brandName === specificBrand);


// //

const cars = useLoaderData();


    return (
        <div>
        <div>
            
        <div className="carousel w-full">
 <div id="slide1" className="carousel-item relative w-full">
   <img src="https://i.ibb.co/XJTwNFg/Toyota-Ads-1.png" className="w-full" />

   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     <a href="#slide4" className="btn btn-circle">❮</a> 
     <a href="#slide2" className="btn btn-circle">❯</a>
   </div>
 </div> 
 <div id="slide2" className="carousel-item relative w-full">
   <img src="https://i.ibb.co/Yfqnqsv/Toyota-Ads-2.png" className="w-full" />

   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     <a href="#slide1" className="btn btn-circle">❮</a> 
     <a href="#slide3" className="btn btn-circle">❯</a>
   </div>
 </div> 
 <div id="slide3" className="carousel-item relative w-full">
   <img src="https://i.ibb.co/jDh3xVM/Toyota-Ads-3.png" className="w-full" />

   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     <a href="#slide2" className="btn btn-circle">❮</a> 
     <a href="#slide4" className="btn btn-circle">❯</a>
   </div>
 </div>     
       </div>
    
       <h1 className='text-5xl text-center p-3 text-purple-600 font-bold  ml-3 mr-3 gap-3 shadow-xl m-5 mb-5 font-mono'>The<span className='text-orange-950 font-bold font-serif'>Wheels Of </span>Abrar</h1>

    
     <div className="grid grid-cols-1 lg:grid-cols-2 ml-3 mr-3 gap-5 shadow-xl m-5 mb-5 rounded-md">
     {
        cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
      }
  
     </div>



    {/* <div>
      {specificBrandData ? (
        <div>
          <h2>{specificBrandData.brandName}</h2>
          {specificBrandData.types.map((type) => (
            <div key={type._id}>
              <h3>{type.name}</h3>
              <p>Rating: {type.rating}</p>
              <p>Price: {type.price}</p>
              <p>Type: {type.type}</p>
              <p>{type.shortDescription}</p>
              <img src={type.image} alt={type.name} style={{ width: '200px', height: '150px' }} />
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No data found for {specificBrand}.</p>
      )}
    </div> */}
            
           <Footer></Footer>
        </div>
       </div>
    );
};

export default Toyota;