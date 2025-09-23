import axios from "axios";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";


 export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {

  const {logout}=useContext(AuthContext)

      // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent

        const token=localStorage.getItem('ac-token');

        config.headers.Authorization=`Bearer ${token}`



        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      },

      
);


// Add a response interceptor
axiosSecure.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error


    const status=error.status;

    if(status == 401 || status == 403){
      
               await logout();

    }


    return Promise.reject(error);
  });

  return axiosSecure

};

export default useAxiosSecure;
