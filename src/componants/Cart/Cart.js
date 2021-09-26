import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { selectedSinger } = props;

    let total = 0;
    let name = ' ';
    for (const singer of selectedSinger) {
        total = total + singer.pricePerShow;
        name = name + singer.name + ', ';
    }

    return (
        <div className="cart">
            <h2 className="check-out"> Check Out</h2>
            <div className="cart-items">
                <h3>Singers Added - {selectedSinger.length}</h3>
                <h3>Total cost : {total} BDT</h3>
                <h4>Selected Singers : {name}</h4>
                <p className="btn">
                    <button className="my-button"> Pay Now</button>
                </p>
            </div>

        </div>
    );
};

export default Cart;