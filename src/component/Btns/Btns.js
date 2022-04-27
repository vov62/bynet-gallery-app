import React from 'react'

const Btns = ({ setQuery }) => {

    const filtered = (param) => {
        setQuery(param)
    };

    return (
        <div className="btns">
            <button className='btn' onClick={() => filtered('science')}>SCIENCE</button>
            <button className='btn' onClick={() => filtered('food')}>FOOD</button>
            <button className='btn' onClick={() => filtered('music')}>MUSIC</button>
        </div>
    )
}

export default Btns