
import { axiosSecure } from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useCart = () => {


  const {user}=useContext(AuthContext);
    //tan stack query
     const { refetch, isPending, error, data : cart=[] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn:async () =>{
        const res=await axiosSecure.get(`/carts?email=${user?.email}`,{
          headers:{
            Authorization:`bear ar ${localStorage.getItem('ac-token')}`
          }
        })

        return  res.data
    }, 
    
  })         
   return {isPending, error, cart, refetch}
 
}

export default useCart