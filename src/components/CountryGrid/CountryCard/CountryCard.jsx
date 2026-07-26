import style from './CountryCard.module.css'

function CountryCard({country}) {
  return(
    <div className={style.cardContainer}>
      <img src={country.flags.png} alt={`${country.name} flag`}></img>
      <div className={style.description}>
        <p>{country.name}</p>
        <p>Population: {country.population.toLocaleString()} </p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital || 'none'} </p>
      </div>
    </div>
  );

}

export default CountryCard;