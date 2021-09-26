import React from 'react';
import './Singer.css';

const Singer = (props) => {
    const { img, name, age, religion, country, pricePerShow } = props.singer;
    return (
        <div className="card">
            <p className="image"><img src={img} alt="" /></p>
            <div className="details">
                <h3>Name : {name}</h3>
                <h5>Age : {age}</h5>
                <h5>Religion : {religion}</h5>
                <p>Region : {country}</p>
                <h3>Charge Per Show BDT {pricePerShow}</h3>
            </div>
            <p className="btn">
                <button
                    className="my-button"
                    onClick={() => props.handleAddToCart(props.singer)}
                >Add For Show</button>
            </p>
        </div>
    );
};

export default Singer;