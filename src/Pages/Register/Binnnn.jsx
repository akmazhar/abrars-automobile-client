
// import { useContext, useState, useRef } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';





const Register = () => {



//   const { createUser, signInWithGoogle } = useContext(AuthContext);
//   const [registerError, setRegisterError] = useState('');
//   const [showPassword, setShaowPassword] = useState(false);
//   const [success, setSuccess] = useState('');
//   const emailRef = useRef(null);

const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    
//reset error////////////////////////////

// setRegisterError('');
// setSuccess('');

//update profile ////////////////////////////

// updateProfile(Result.user, {
// displayName: name,
// photoURL: "https://i.ibb.co/QnqFLDG/j.png"
// })
// .then(()=> console.log('profile updated'))
// .catch()


//     const isStrongPassword = (password) => {
//       return (
//         password.length >= 6 &&
//         /[a-z]/.test(password) &&
//         /[0-9]/.test(password) &&
      
//       );
//     };

    // if (!isStrongPassword(password)) {
    //   setRegisterError(
    //     'Password should be at best six characters with at least one lowercase & one numeric digit.'
    //   );
    //   return;
    // }
   
    //     else if(!accepted){
    //         setRegisterError('Please accept our terms and conditions!');
    //         return;
    //       }        

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     setRegisterError('');
    //     setSuccess('User Created Successfully');
    //     toast.success('User Created Successfully');
    //   })
//       .catch((error) => {
//         console.error(error);
//         setRegisterError('Failed to create user. Please try again.');
//         setSuccess('');
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };




    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-left lg:text-left">
              <h1 className="text-5xl text-green-600 font-mono font-semibold">Register Now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">


              <form onSubmit={handleRegister} className="card-body">
          

              <div className="form-control">
                    <label className="label">
                      <span className="label-text font-mono">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="User Name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
    
                  <label className="label">
                    <span className="label-text font-mono">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
    
                  <label className="label">
                    <span className="label-text font-mono">Email</span>
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
                      <span className="label-text font-mono">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
    
    
    
    
    {/* <span className="absolute top-4 right-48" onClick={() => setShaowPassword(!showPassword)}>
              {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }
              </span> */}
    
    
    
    
                    <label className="label">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="label-text-alt link text-center font-serif text-red-500 link-hover"
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
                          <label className="textarea" htmlFor="terms">
                            Accept our <a href="#">Terms and Condition</a>
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
              {/* {registerError && <p className="text-red-700">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>} */}
              <p className="font-mono text-center">
                Already have an account?

                {/* <Link className="font-serif" to="/login">
                  <button className="btn btn-link text-blue-700 font-bold">Login</button>
                </Link> */}

                <Link className="font-serif" to="/login">
                  <button className="btn btn-link text-blue-700 font-bold">Login</button>
                </Link>
              </p>


               <p>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn font-serif font-semibold text-orange-800 text-sm text-center"
                >
                  Or Login With Google
                </button>
              </p>



                
                {/*<p> <button
                  className="btn font-serif font-semibold text-orange-800 text-sm text-center"
                >
                  Or Login With Google
                </button>
              </p> */}

            </div>
          </div>
          {/* <ToastContainer/> */}
        </div>
  
    );
};

export default Register;