import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {loginUser}=useContext(AuthContext)



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    const {email, password}=data;
    loginUser(email,password)
    .then(result=> console.log(result.user))


  }


  useEffect(() => {
    loadCaptchaEnginge(6); // 6 digit captcha load করবে
  }, []);

  const handleValidateCaptcha = (e) => {
    e.stopPropagation();
    const value = captchaRef.current.value;

    if (validateCaptcha(value) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero bg-base-200 bg-opacity-70 rounded-xl shadow-xl border-2 p-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="fieldset"
              >
                <label className="label">Email</label>
                <input type="email" className="input" {...register("email")} placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" {...register("password")} placeholder="Password" />

                <div>
                  <div>
                    <LoadCanvasTemplate />
                    <input
                      ref={captchaRef}
                      type="text"
                      className="input"
                      name="captcha"
                      placeholder="Captcha"
                    />
                    <button
                      className="btn btn-neutral mt-4"
                      onClick={handleValidateCaptcha}
                    >
                      Validate
                    </button>
                  </div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                {/* Login button captcha validate না হওয়া পর্যন্ত disabled থাকবে */}
                <button className="btn btn-neutral mt-4" disabled={disabled}>
                  Login
                </button>

                <Link to={"/signup"} className="link link-hover">
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

export default Login;
