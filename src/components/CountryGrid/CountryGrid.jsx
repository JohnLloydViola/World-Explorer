import style from './CountryGrid.module.css'
import CountryCard from './CountryCard/CountryCard';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function CountryGrid({input, selectedRegion}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('/data/CountryData.json');

        if(!response.ok) {
          throw new Error('failed to load data');
        }

        const data = await response.json();

        setData(data);
        setLoading(false);

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

      { loading ? ("Loading") :
      (
        filteredCountries.length === 0 ? (
        <p>No countries found.</p>
        ) : (
          filteredCountries.map((country) => 
            <>
            <Link className={style.linkStyle} key={country.name} to={`/country-details/${country.alpha3Code}`}>
              <CountryCard country={country} />
            </Link>
            </>
          )
        )
      )
      }
    </div>
  );

}

export default CountryGrid;