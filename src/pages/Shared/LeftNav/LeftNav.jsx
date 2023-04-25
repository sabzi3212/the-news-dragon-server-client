import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error => console.error(error))

    },[])

    return (
        <div>
            <h2>All Categories</h2>
            {
                categories.map(category => <ListGroup key={category.id}>
                   <Link className='text-decoration-none' to={`/category/${category.id}`}><ListGroupItem>{category.name}</ListGroupItem></Link>
                </ListGroup>)
            }

        </div>
    );
};

export default LeftNav;