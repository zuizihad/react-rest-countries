import React from 'react';

const Visited = (props) => {
    const visited = props.visitedCountry;

    let totalPopulation = 0;
    for (let i = 0; i < visited.length; i++) {
        const country = visited[i];
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Visisted Country Population: {totalPopulation}</h3>
        </div>
    );
};

export default Visited;