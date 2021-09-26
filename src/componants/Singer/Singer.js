import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Singer.css';

const Singer = (props) => {
    const { img, name, age, religion, country, pricePerShow } = props.singer;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="card">
            <p className="image"><img src={img} alt="" /></p>
            <div className="details">
                <h3>Name : {name}</h3>
                <h4>Age : {age}</h4>
                <h4>Religion : {religion}</h4>
                <p>Region : {country}</p>
                <h3>Take {pricePerShow} BDT Per Concert</h3>
            </div>
            <p className="btn">
                <button
                    className="my-button"
                    onClick={() => props.handleAddToCart(props.singer)}
                >{shoppingCart} Add For Concert</button>
            </p>
        </div>
    );
};

export default Singer;