import React from 'react';
import './Details.css'

const Details = (props) => {
    const { name, capital, flag, alpha3Code, region, subregion, population, area, nativeName } = props.details;

    return (
        <div className="details">
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <h4>Capital: {capital}</h4>
            <h5>Alpha3Code: {alpha3Code}</h5>
            <h5>Region: {region}</h5>
            <h5>Sub Region: {subregion}</h5>
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5>Native Name: {nativeName}</h5>

        </div>
    );
};

export default Details;