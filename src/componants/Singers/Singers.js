import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {

    //  states 

    const [singers, setSingers] = useState([]);
    const [selectedSinger, setSelectedSinger] = useState([]);

    // load json data

    useEffect(() => {
        fetch('./singersdata.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, []);

    // handle Button

    const handleAddToCart = (singer) => {
        const newSelectedSinger = [...selectedSinger, singer];
        setSelectedSinger(newSelectedSinger);
    }

    return (
        <div className="singer-container">
            <div className="singers">
                {
                    singers.map(singer => <Singer
                        key={singer.key}
                        singer={singer}
                        handleAddToCart={handleAddToCart}
                    ></Singer>)
                }
            </div>
            <div>
                {
                    <Cart
                        selectedSinger={selectedSinger}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Singers;