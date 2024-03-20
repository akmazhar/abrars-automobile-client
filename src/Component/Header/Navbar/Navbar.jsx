import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";



const Navbar = () => {


  const {user, logOut} = useContext(AuthContext)
  console.log(user);
  const handleLogout = () => {
    logOut()
        .then(() => {
            toast.success('log Out Successfully');
        })
        .catch(error => {
            console.log(error.message)
        })
}
  

  return (
    <div className="bg-black text-white">
      <nav className="flex flex-wrap justify-between items-center py-2 shadow-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Logo />
     
        <div className="w-full md:w-auto ml-80 mr-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-wrap gap-5 mr-5 font-serif font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600" : ""
                }
              >
                Add Product
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600" : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            {
              user ?  <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600" : ""
                }
              >
              <button onClick={handleLogout}>Logout</button>
              </NavLink>
            </li>
            :
            <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-600" : ""
              }
            >
              Login
            </NavLink>
            </li>

            }

           
           
          </ul>

          <li className="list-none">
              {user ? (
              <div className="md:flex gap-2 text-right">

              <button onClick={logOut} className=" bg-black">
              <Link to={"/login"}><img className="bg-black"  src="https://i.ibb.co/g7mYgyV/logout.png" alt="" /></Link>
              </button>
              </div>
              ) : (
              <button className="btn bg-black  h-15">
              <Link to={"/login"}><img className="bg-black  h-15" src="https://i.ibb.co/PjFDNqh/login.png" alt="" /></Link>
              </button>
              )}
              </li>
              <div>
               {
              user?.email ? <p>{user?.photo} {user?.displayName}  {user?.email} </p> : <p>{''}</p>
               }
               </div>
 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
