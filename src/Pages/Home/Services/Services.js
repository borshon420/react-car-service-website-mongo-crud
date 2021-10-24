import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [cars, setCar] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setCar(data))
    
    },[])
    return (
        <div id="services">
            <h1 className="text-primary mt-5 mb-5">Our Services</h1>
            <div className="service-container">
            {
                cars.map(car => <Service
                key={car.id}
                car={car}
                ></Service>)
            }

            </div>
        </div>
    );
};

export default Services;