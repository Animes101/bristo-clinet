import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/others/authentication.png";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthProvider";


const Register = () => {

  const {createUser}=useContext(AuthContext)
  const navigate=useNavigate();

const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    const {email, password}=data;

    createUser(email,password)

    .then(result=> {
      return navigate('/')
    })


    
  }

  console.log(watch("example"))


  return (
   <div
         className="min-h-screen flex items-center justify-center"
         style={{
           backgroundImage: `url(${bgImg})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       >
         <div   className="hero bg-base-200 bg-opacity-70 rounded-xl shadow-xl border-2 p-6">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-left max-w-md">
               <h1 className="text-5xl font-bold">Signup now!</h1>
               <p className="py-6">
                 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                 excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                 et a id nisi.
               </p>
             </div>
   
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <div className="card-body">
                 <form onSubmit={handleSubmit(onSubmit)} style={{
           backgroundImage: `url(${bgImg})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }} className="fieldset">
                   <label className="label">Email</label>
                   <input type="email" className="input bg-transparent" {...register("email", { required: true })} placeholder="Email" />
                   <label className="label">Password</label>
                   <input
                     type="password"
                     className="input bg-transparent"
                     {...register("password", { required: true })} placeholder="Password"
                   />
                   <div>
                     <a className="link link-hover">Forgot password?</a>
                   </div>
                   <button className="btn btn-neutral mt-4">Login</button>
                   <Link to={"/login"} className="link link-hover">
                     Go to signup
                   </Link>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
  );
};

export default Register;
