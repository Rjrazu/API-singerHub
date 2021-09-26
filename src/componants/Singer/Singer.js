import React from 'react';
import './Singer.css';

const Singer = (props) => {
    const { img, name, age, religion, country, pricePerShow } = props.singer;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Age : {age}</h5>
            <h5>Religion : {religion}</h5>
            <p>Region : {country}</p>
            <h3>Charge Per Show Tk. {pricePerShow}</h3>
            <button>Add For Show</button>
        </div>
    );
};

export default Singer;