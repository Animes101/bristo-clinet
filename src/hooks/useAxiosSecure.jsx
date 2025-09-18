import axios  from 'axios'


export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function(config){

    const token=localStorage.getItem('ac-token')

    config.headers.Authorization=`bearar ${token}`
    return config;

  },function(err){
    return Promise.reject(err)
  })
    return axiosSecure
  
}

export default useAxiosSecure