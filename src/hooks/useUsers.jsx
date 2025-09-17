
import { useQuery } from '@tanstack/react-query'
import { axiosSecure } from './useAxiosSecure'


const useUsers = () => {

    //tan stack query
     const { refetch, isPending, error, data : users=[] } = useQuery({
    queryKey: ['users'],
    queryFn:async () =>{
        const res=await axiosSecure.get(`/users` )

        return  res.data
    }, 
    
  })         
   return {isPending, error, users, refetch}
 
}

export default useUsers