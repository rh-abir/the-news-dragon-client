import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loding} = useContext(AuthContext)
    const location = useLocation()
    console.log('user in private route', user)
    if(loding){
        return  <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;


/**
 * ------------------
 *          STEPS
 * ------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. ELse redirect the user to the login page
 * 4. setup the private router
 * 5. handle loading 
*/