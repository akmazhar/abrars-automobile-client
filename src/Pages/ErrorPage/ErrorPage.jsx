
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      
        
        <div className="py-10 shadow-lg my-56">
           
            <div>
            <h1 className="text-5xl font-bold text-center text-red-600"> 404 </h1>
            <h2 className="text-3xl font-bold text-center text-slate-500"> Opps! This page could not be found. </h2>
            <p className="text-center py-5 font-semibold text-black-700"> The link may be broken, or the page may have<br></br> been removed.
    Check to see if the link <br></br>you are trying to open is correct.
</p>
            </div>
            <Link className="flex justify-center" to={'/'}>
                <button className="px-7 py-4 bg-green-700 hover:bg-green-800 text-center text-white text-xl">Go Home Please</button>
            </Link>
        </div>
        
    );
};

export default ErrorPage;