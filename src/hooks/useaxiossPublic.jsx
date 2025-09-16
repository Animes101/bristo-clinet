import axios from 'axios'


const useaxiossPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',

  })

  return { axiosPublic }
}

export default useaxiossPublic