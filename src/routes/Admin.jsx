import React, { useContext } from 'react'
import useAdmin from '../hooks/useAdmin'
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const Admin = ({ children}) => {
    const {isAdmin,isPending }=useAdmin();
    const {user, loading }=useContext(AuthContext)

    if(isPending || loading ){
        return <p>Loading ..................</p>
    }
    
    if(user && isAdmin){
       return children
    }

    return <Navigate to="/login"></Navigate>
  
}

export default Admin