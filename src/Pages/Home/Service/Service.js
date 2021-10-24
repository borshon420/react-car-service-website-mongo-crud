import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({car}) => {
    const {name, img, description, price, _id} = car
    return (
        <div className="service pb-3">
            <img style={{width: '100%', height: '300px'}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
            
        </div>
    );
};

export default Service;