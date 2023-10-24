
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInUser(email, password);
      console.log(result);
      setLoginError('');
      setSuccess('Login Successful');
    } catch (error) {
      console.error(error);
      setLoginError('Invalid email or password. Please try again.');
      setSuccess('');
    }
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log('Please provide an email', emailRef.current.value);
      return;
    }
    // Handle forgot password logic (send reset email)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please Check Your Email');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };


return (
    <div>
      <div>
    <video autoPlay muted loop className="video ">
        <source src="/Blue .mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content lg:flex-cols-reverse">
  <div className="text-start lg:text-left">
    <h1 className="text-5xl text-indigo-600 font-mono font-bold">Login!</h1>
  </div>
  <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
    

    <form onSubmit={handleLogin} className="card-body bg-cyan-300 rounded-full"> 



      <div className="form-control">
        <label className="label">
          <span className="label-text text-white ml-20 px-5 font-mono">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input bg-yellow-800 input-bordered"
          required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ml-10 text-white font-mono">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">


                  <a onClick={handleForgetPassword} href="#" className="label-text-alt text-red-600 link link-hover">
                 


                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="font-serif text-start">
                  Do not have an account? Please\
                  
                  <Link className="font-serif" to="/register">
                    <button className="btn btn-link text-blue-700 font-bold">Register</button>
                  </Link>

                  first.
                </p>





                <p className="   font-mono py-5 font-semibold text-orange-800 text-center items-center" >Or Login With</p>




                <p>
        <button onClick={handleGoogleSignIn}
          className="btn bg-black  font-mono px-52 py-2 font-lg text-orange-300 text-left items-start"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
      </p>
              </div>
            </form>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-700">{success}</p>}
          </div>
        </div>
      </div>


      

    </div>
  );
};

export default Login;
