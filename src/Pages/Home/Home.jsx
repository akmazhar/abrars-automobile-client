import { Link, NavLink } from "react-router-dom";
import Mar from "./Mar";
import Banner from './../../Component/Banner/Banner';
import FrontBrand from "../FrontBrand/FrontBrand";
import moment from "moment/moment";
import { useEffect, useState } from "react";


const Home = () => {

  const [brandCard, setBrandCard] = useState([]);
    useEffect(()=>{
        fetch('/apidata.json')
        .then(res => res.json())
        .then(data => setBrandCard(data))
    },[])

  return (
    <div>
         <Banner></Banner>

  <div>
  <div className="items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div className="card lg:card-side bg-base-10 shadow-2xl">
  <figure><img className="justify-center items-center hover:scale-110 transition-all w-full aos-init aos-animate" src="https://i.ibb.co/DbYjxz0/The-Wheels.jpg" alt="" /></figure>
  <div className="card-body shadow-xl">
  <h3 className='bg-blue-900 rounded-tl-full text-3xl text-center  p-3 text-white font-mono'>Experience Luxury Behind <br/><span className='text-red-600 font-extrabold text-6xl font-serif'>The Wheels</span>...</h3>
  </div>
  </div>
 </div>
   <div>
   <p className='text-3xl text-center p-5 font-mono text-white bg-black h-20 w-2/5 rounded-2xl justify-center ml-96'>{moment().format('llll')}</p>
   </div>
 <div className="items-center justify-center">
      <video autoPlay muted loop className="video w-1/2 h-1/2 mb-10 ml-96 ">
      <source src="/y.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
  </div>
   <div className="mt-1 w-full shadow-gray-600 shadow-3xl"> 
  
   <div data-aos="flip-left" className="grid md:grid-cols-2 lg:grid-cols-3 relative lg:-top-20 grid-cols-1 gap-4 text-center bg-base-200 mx-auto w-full md:w-3/4 lg:w-7/12 p-10 aos-init aos-animate">
                    {
                        brandCard?.map(brand => <div key={brand.id}>
                            <Link to={`/${brand.brand_name}`}>
                        <div data-aos="flip-left" className="mx-auto w-full aos-init aos-animate shadow-2xl shadow-green-700 rounded-s-3xl">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src={brand?.image} alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-[#0d0a52]">{brand?.brand_name}</h3>
                        </div>
                    </Link>
                        </div>)
                    }
                </div>


            </div> 
            <Mar></Mar>
            <FrontBrand></FrontBrand>
          </div>  

          );
        };

export default Home;