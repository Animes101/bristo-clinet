import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate=useNavigate();
  const {logout}=useContext(AuthContext)
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("ac-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  // Add a response interceptor
axiosSecure.interceptors.response.use((response)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },(error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log(error)
    const status=error.response.status

    console.log(status)

     if(status === 403){


      logout()
      navigate('/login')

     }
    return Promise.reject(error);

  });


  return axiosSecure;
};

export default useAxiosSecure;
