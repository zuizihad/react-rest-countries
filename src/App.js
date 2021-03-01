
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Visited from './components/Visited/Visited';
import Details from './components/CountryDetails/Details';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.log(error))
  }, [])

  const handleDetails = (country) => {
    setDetails(country);
  }

  const handleAddCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  }
  return (
    <div className="">
      <h2 style={{ textAlign: 'center' }}>ultra nation: {countries.length}</h2>
      <h2 style={{ textAlign: 'center' }}>Visisted Country: {visitedCountry.length}</h2>
      {
        <Visited visitedCountry={visitedCountry}></Visited>
      }
      <div className="container">
        <div className="country-list">
          {
            countries.map(country => <Country country={country} handleDetails={handleDetails} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
          }
        </div>
        <div className="country-details">
          {<Details details={details}></Details>}
        </div>
      </div>
    </div>
  );
}

export default App;
