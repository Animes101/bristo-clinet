import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from './useAxiosSecure';

const useAdmin = () => {
   const { user } = useContext(AuthContext);

  const { refetch, isPending, error, data: isAdmin} = useQuery({
    queryKey: ['admin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data;
    },


  });

  return { isPending, error, isAdmin, refetch };

}

export default useAdmin