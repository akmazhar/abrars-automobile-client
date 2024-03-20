import { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const accepted = e.target.terms.checked;

    // Reset error and success messages
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password should be at least six characters.');
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Password should contain at least one lowercase letter.');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password should contain at least one uppercase letter.');
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegisterError('Password should contain at least one special character.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        setRegisterError('');
        setSuccess('User Created Successfully');

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            window.location.reload();
            setSuccess('User Created Successfully');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError('Failed to create user. Please try again.');
        setSuccess('');
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
      <div className='flex gap-20 items-center bg-lime-300 rounded-s-full'>
       {/* <div>
        <div className="card flex-shrink-0 w-80 max-w-lg shadow-3xl shadow-red-600">
        <img className='w-80 ml-48 ga' src="https://i.ibb.co/m9BTq7Q/l.png" alt="" />
        </div>
        </div> */}
      <div className='grid md:grid-cols-2 items-start'>
      <div>
      <div className="hero man-w-screen bg-black rounded-3xl ml-80 mr-48 max-auto mt-2 mb-2">
      <div className="hero-content">
       
        
      <div className="text-left lg:text-left">
          <h1 className="text-5xl text-black font-mono font-bold">HurryUp! </h1>
          <img src="https://i.ibb.co/m9BTq7Q/l.png" alt="" />
        </div> 
        <div>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
                <label className="label">
                  <span className="label-text text-base  text-white font-serif">Your Name</span>
                </label>
                <input
                      type="text"
                      placeholder="User Name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
    
                  <label className="label">
                    <span className="label-text text-base  text-white  font-serif">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
    
                  <label className="label">
                    <span className="label-text text-base  text-white  font-serif">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base  text-white font-serif">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />

                    {/* <span className="relative  -right-60" onClick={() => setShaowPassword(!showPassword)}>
                    {
                      showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                    }
                    </span>  */}
    
                    <label className="label">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="label-text-alt link text-center font-mono text-lg font-bold text-red-600 link-hover"
                          >
                            Forgot password?
                          </a>
                        </li>
                        <li>
                          <input
                            className="font-sans"
                            type="checkbox"
                            name="terms"
                            id="terms"
                          />
                          <label className="textarea bg-black text-white font-serif text-center" htmlFor="terms">
                            Our <a href="#">Terms & Condition</a>
                          </label>
                        </li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-control">
                    <button className="btn bg-green-700 text-white font-semibold">
                      Submit
                    </button>
                  </div>
    
              </form>
              {registerError && <p className="text-red-700">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>} 

                    <p className="font-serif text-white text-center"> Already have an account?
                    <Link className="font-serif border-black bg-black" to="/login">  <button className="btn text-pink-600 border-black bg-black font-bold">Login</button> </Link> </p>
                    <p className="font-serif font-semibold text-green-600 text-center items-center mb-2">Or / Login With</p> <p>
                  <button onClick={handleGoogleSignIn}  className="btn bg-black border-yellow-300 mb-2 px-16 py-1 text-orange-500 ml-14">
                 <FcGoogle className='w-8 h-6'></FcGoogle>
                 </button>
                 </p>
                 </div>
                </div>
               {/* <ToastContainer></ToastContainer>  */}  
             </div>     
            </div>
          </div>
     
        </div>
      
  );
};

export default Register;