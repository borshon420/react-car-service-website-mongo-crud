import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                const remainig = services.filter(service => service._id !== id)
            setServices(remainig)
            alert('Successfully deleted')
            }
            
        })
    }
    return (
        <div>
            <h1>This is manage services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button></div>)
            }
        </div>
    );
};

export default ManageServices;