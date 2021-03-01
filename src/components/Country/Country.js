import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, capital, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    const handleDetails = props.handleDetails;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h3>{name}</h3>
            <p><small>Capital: {capital}</small></p>
            <p>population: {population}</p>
            <button className="btn" onClick={() => handleDetails(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;