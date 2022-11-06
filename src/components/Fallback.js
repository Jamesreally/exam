import React from 'react';
import {ErrorBoundary} from 'react-error-boundary'
const Fallback=({error})=>{
    return(
        <div className="content"><h3>Ooops! Something Went Wrong</h3>
        <p>{error.message}</p>
        </div>
    )
} 
export default Fallback;