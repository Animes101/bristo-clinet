import { axiosSecure } from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    //tan stack query
     const { refetch, isPending, error, data : users=[] } = useQuery({
    queryKey: ['users'],
    queryFn:async () =>{
        const res=await axiosSecure.get(`/users`)

        return  res.data
    }, 
    
  })         
   return {isPending, error, users, refetch}
 
}

export default useCart