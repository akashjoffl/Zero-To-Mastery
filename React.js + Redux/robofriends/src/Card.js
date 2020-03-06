import React from 'react';

const Card = ({ name, email, id }) => { // ES6 Destructing 
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}?200*200`} // template string randomizing URL
            /> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;