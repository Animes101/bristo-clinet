import React from 'react'
import { axiosSecure } from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    //tan stack query
     const { isPending, error, data : cart=[] } = useQuery({
    queryKey: ['carts'],
    queryFn:async () =>{
        const res=await axiosSecure.get('/carts')

        return  res.data
    }, 
    
  })

  return {isPending, error, cart}
 
}

export default useCart