import { axiosSecure } from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useCart = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, isPending, error, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email && !loading, 
  });

  return { isPending, error, cart, refetch };
  
};

export default useCart;
