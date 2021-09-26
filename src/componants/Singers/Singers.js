import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch('./singersdata.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    return (
        <div className="singer-container">
            <div className="singers">
                {
                    singers.map(singer => <Singer
                        key={singer.key}
                        singer={singer}
                    ></Singer>)
                }
            </div>
            <div>
                <h3>Selected Singer</h3>
            </div>
        </div>


    );
};

export default Singers;