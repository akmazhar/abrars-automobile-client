

const Footer = () => {

  return (


   <div className='footer'>
    
    <footer className="footer p-10 bg-black text-base-content">
    <img className="ml-30" src="/llogo.png" alt=""></img>
  <nav className='flex'>
    <header className="mb-10 mr-10 mt-10 footer-title font-bold text-yellow-100 text-xl">Here We Are</header> 
    <ul className='text-white placeholder:text-base'>
      
      <li><a className="link link-hover font-serif">- Branding</a></li>
      <li><a className="link link-hover font-serif">- Design</a> </li>
      <li> <a className="link link-hover font-serif">- Marketing</a> </li>
      <li> <a className="link link-hover font-serif">- Advertisement</a></li>
      <li><a className="link link-hover font-serif">- Company</a></li>
      <li><a className="link link-hover font-serif">- Contact</a> </li>
      
    </ul>
     
     <ul>
     <header className="ml-48 grid grid-flow-col footer-title text-yellow-100 font-bold text-xl">Social </header> 
     

     
     <div className="grid grid-col-3 gap-4 ml-44 shadow-lg"></div>
     <li className='ml-80'><a href='https://twitter.com/akm_azhar' alt=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current bg-white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> </li>
     <li className='ml-72'><a href='https://www.youtube.com/watch?v=C8-eClpeH80' alt=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current bg-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> </li>
     <li className='ml-64'><a href='https://www.facebook.com/akmazharabrartinni/' alt=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current bg-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></li>
     
     </ul>
     <ul>
     <form className='ml-36 mt-3'>
    <fieldset className="form-control w-80"> 
      <div className="relative">
        <input type="text" placeholder="Enter your email address" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
     <p className='ml-36 mt-3 font-serif'><a className='text-yellow-500 text-xl'>The Wheels Of Abrar Enterprise.</a> <br/><a className='text-white text-base'>Providing Your Reliable Dream Ride since 2022 <br/> &copy; {new Date().getFullYear()} - All Right Reserved by A K M Azhar</a></p>
     </ul>
    
    </nav>
   </footer>

   </div>
 
   
  );
};

export default Footer;

