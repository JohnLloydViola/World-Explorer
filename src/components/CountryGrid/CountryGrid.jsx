import style from './CountryGrid.module.css'
import CountryCard from './CountryCard/CountryCard';
import {useState, useEffect} from 'react'

function CountryGrid({input, selectedRegion}) {
  const [data, setData] = useState([]);

  useEffect( () => {
    async function fetchCountries() {
      try {
        const response = await fetch('/data/CountryData.json');
        if(!response.ok) {
          throw new Error('failed to load data');
        }
        const data = await response.json();
        setData(data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  },[]);

  const filteredCountries = data.filter((country) => {
    const matchSearch = country.name
      .toLowerCase()
      .includes(input.toLowerCase().trim());

    const matchRegion =
      selectedRegion === "" ||
      country.region === selectedRegion;

      return matchSearch && matchRegion;
  });

  return(
    <div className={style.container}>
      {filteredCountries.length === 0 ? (
        <p>No countries found.</p>
      ) : (
        filteredCountries.map( (country) => 
          <CountryCard key={country.name} country={country} />
        )
      )
      }
    </div>
  );

}

export default CountryGrid;