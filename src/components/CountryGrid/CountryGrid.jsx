import style from './CountryGrid.module.css'
import CountryCard from './CountryCard/CountryCard';
import {useState, useEffect} from 'react'

function CountryGrid() {
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

  return(
    <div className={style.container}>

      {data.map( (country)=> 
        <CountryCard key={country.name} country = {country}/>
      )

      }
      
    </div>
  );

}

export default CountryGrid;