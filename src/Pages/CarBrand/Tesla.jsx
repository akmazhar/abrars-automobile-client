
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CarCard from '../CarCard/CarCard';

const Tesla = () => {

  
  const cars = useLoaderData();

    return (
            <div>
            <div>
                
            <div className="carousel w-full">
     <div id="slide1" className="carousel-item relative w-full">
       <img src="https://i.ibb.co/w6x8v07/Tesla-Ads-1.png" className="w-full" />
    
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide4" className="btn btn-circle">❮</a> 
         <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
     </div> 
     <div id="slide2" className="carousel-item relative w-full">
       <img src="https://i.ibb.co/6XmLvS5/Tesla-Ads-2.png" className="w-full" />
    
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide1" className="btn btn-circle">❮</a> 
         <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
     </div> 
     <div id="slide3" className="carousel-item relative w-full">
       <img src="https://i.ibb.co/BLfzG5n/Tesla-Ads-3.png" className="w-full" />
    
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
    
          
            </div>
           </div>
    );
};

export default Tesla;