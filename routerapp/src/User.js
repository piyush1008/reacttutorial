import React from 'react';
import { useParams,useLocation,useHistory } from 'react-router-dom';

function User() {
    const {fname}=useParams();
    const location=useLocation();
    const hist=useHistory();
    console.log(hist);
    return (
        <>
            <h1> Heello {fname} page</h1>
            <h1> My current Location is {location.pathname}</h1>
            
        </>
    )
};

export default User;
