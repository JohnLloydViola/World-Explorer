import {Link} from 'react-router-dom'
import style from './CountryDetails.module.css'
import arrowBack from '../../assets/images/arrowBack.png'

function CountryDetails({country}) {
  return(
    <>
    <Link className={style.linkStyle} to={'/'}><img className={style.arrowImage} src={arrowBack}></img>Back</Link>

    <div className={style.container}>
      <div className={style.imageSection}>
        <img className={style.countryImage} src={country.flags.png} ></img>
      </div>

      <div className={style.informationSection}>
        <h1 className={style.countryTitle}>{country.name}</h1>

        <div className={style.informationContainer}>
          <div>
            <p>Native Name: {country.nativeName}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital || "none"}</p>
          </div>

          <div className={style.secondSectionText} >
            <p>Top Level Domain: {country.topLevelDomain}</p>
            <p>Currencies: {country.currencies[0].name}</p>
            <p>Languages: {country.languages.map((languages) => languages.name).join(", ")}</p>
          </div>
        </div>

        <div className={style.borderCountries}>
          <p>Border Countries: {}</p>
        </div>
      </div>
    </div>
    </>
  );

}

export default CountryDetails;