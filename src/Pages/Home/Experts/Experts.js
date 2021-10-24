import React from 'react';
import driver1 from '../../../images/driver/1.jpg';
import driver2 from '../../../images/driver/2.jpg';
import driver3 from '../../../images/driver/3.jpg';
import driver4 from '../../../images/driver/4.jpg';
import driver5 from '../../../images/driver/5.jpg';
import driver6 from '../../../images/driver/6.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: driver1,
        name: 'Ayton Senna',
        expertize: '-Formula Expert-'
    },
    {
        id: 2,
        img: driver2,
        name: 'Michael Schumacher',
        expertize: '-Level 1 Expert-'
    },
    {
        id: 3,
        img: driver3,
        name: 'Lewis Hamilton',
        expertize: '-Dark Expert-'
    },
    {
        id: 4,
        img: driver4,
        name: 'Alain Prost',
        expertize: '-Hiking Rar Expert-'
    },
    {
        id: 5,
        img: driver5,
        name: 'Niki Lauda',
        expertize: '-Formula Expert-'
    },
    {
        id: 6,
        img: driver6,
        name: 'Jim Clark',
        expertize: '-Formula Expert-'
    }
]

const Experts = () => {
    return (
        <div className="container" id="experts">
            <h1 className="text-primary mb-5 mt-5">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;