import { NavLink } from "react-router-dom";
import Mar from "./Mar";
import Banner from './../../Component/Banner/Banner';
import FrontBrand from "../FrontBrand/FrontBrand";
import moment from "moment/moment";


const Home = () => {
  return (
    <div>
         <Banner></Banner>
      
        
       
  <div>
  <div className="ml-20 mr-20 mt-1 mb-6 items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
 <div className="card lg:card-side bg-base-10 shadow-2xl">
  <figure><img className="justify-center items-center hover:scale-110 transition-all w-full aos-init aos-animate" src="https://i.ibb.co/DbYjxz0/The-Wheels.jpg" alt="" /></figure>
  <div className="card-body shadow-xl">
  <h3 className='bg-blue-900 rounded-tl-full text-3xl text-center  p-3 text-white font-mono'>Experience Luxury Behind <br/><span className='text-red-600 font-extrabold text-6xl font-serif'>The Wheels</span>...</h3>
  </div>
  </div>
 </div>
   <div>
   <p className='text-3xl text-center p-5 font-serif text-white bg-black h-20 w-2/5 rounded-2xl justify-center ml-96'>{moment().format('llll')}</p>
   </div>
 <div className="items-center justify-center">
      <video autoPlay muted loop className="video w-1/2 h-1/2 mb-10 ml-96 ">
      <source src="/h.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
  </div>
   <div className="mt-1 w-full shadow-gray-600 shadow-3xl"> 
   <div data-aos="fade-up" className="relative lg:-top-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center bg-base-100 shadow-2xl rounded-xl mx-auto w-full md:w-3/4 lg:w-7/12 p-10 aos-init aos-animate">
        <NavLink to="/bmw">
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/9Y3BJ4B/BMW-LOGO.png" alt=''/>
            <p className="text-xl font-bold tracking-widest">B M W</p>
          </div>
        </NavLink>
        <NavLink to='/ford'>
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/wyPjqX2/FORD-LOGO.png" alt=''/>
            <p className="text-xl font-bold tracking-widest">FORD</p>
          </div>
        </NavLink>
        <NavLink to='/honda' target="_link">
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/z4pTFck/HONDA-LOGO.png" alt=''/>
            <p className="text-2xl text-yellow-400 font-bold tracking-widest">HONDA</p>
          </div>
        </NavLink>
        <NavLink to='/mercedes' target="_link">
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/72FjJzC/Mercedes-Benz-LOGO.png" alt=''/>
            <p className="text-2xl text-blue-700 font-bold tracking-widest">Mercedes-Benz</p>
          </div>
        </NavLink>
        <NavLink to='/tesla' target="_link">
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/yRmJPKJ/TESLA-LOGO.png" alt=''/>
            <p className="text-2xl text-red font-bold tracking-widest">T E S L A</p>
          </div>
        </NavLink>
        <NavLink to='/toyota' target="_link">
          <div className="flex flex-col items-center gap-4">
            <img className="h-32 w-32 hover:scale-110 transition-all" src="https://i.ibb.co/3sxQS81/TOYOTA-LOGO.png" alt=''/>
            <p className="text-2xl font-bold text-lime-700 tracking-widest">TOYOTA</p>
          </div>
        </NavLink>
      </div>
    </div> 
    
    <Mar></Mar>
   
    <FrontBrand></FrontBrand>
   </div>
   
   

   

  );
};

export default Home;