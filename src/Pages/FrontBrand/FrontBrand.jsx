

const FrontBrand = () => {

    return (

    <div>
      <div className=" p-10 shadow-2xl">
      <img className="w-3/5 ml-48 " src="https://i.ibb.co/5K5QKXG/Screenshot-2023-10-24-020055.png" alt="" />
      <img className="w-3/5 ml-48 items-center hover:scale-110 transition-all tracking-widest justify-center" src="https://i.ibb.co/ystKCMG/y.jpg" alt="" />
      </div>
   <div>
    <br/>
   <div className="stats shadow-3xl mt-10 ml-48 bg-cyan-700 p-10 mb-5 hover:scale-110 transition-all tracking-widest justify-center ">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
   
    <div className="stat-value text-black ml-5 mt-5">8K</div>
    <div className="stat-title text-white font-sans font-semibold text-center font-lg">Our Employee</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-value font-sans text-yellow-500 ml-5 mt-5">$ 2.6 M</div>
    <div className="stat-title font-sans text-white text-bold">Yearly Income</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-20 rounded-full">
          <img src="https://i.ibb.co/fN6DQJh/2.png" />
        </div>
      </div>
    </div>
    <div className="stat-value text-center mt-5">96%</div>
    <div className="stat-title text-semi-bold text-white font-serif">Sales Statistics </div>
  </div>
  
</div>
   </div>

    </div>
  );
}

export default FrontBrand;