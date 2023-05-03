import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h2>Terms and Condition</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quisquam vero error deserunt repellat fuga alias laborum eum excepturi expedita?</p>
           <p>Go back to <Link to='/register'>Register</Link></p> 
        </div>
    );
};

export default Terms;