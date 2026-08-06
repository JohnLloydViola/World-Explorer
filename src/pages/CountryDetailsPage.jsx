import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'
import CountryDetails from "../components/CountryDetails/CountryDetails";
import NotFoundPage from './NotFoundPage'

function CountryDetailsPage() {
  const {countryCode} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    async function fetchCountries() {

      try {
        const response = await fetch('/data/CountryData.json');

        if(!response.ok) {
          throw new Error('Failed to load data');
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  } , [countryCode]);

  const country = data.find((c) => countryCode.toLowerCase() === c.alpha3Code.toLowerCase());
  console.log(country);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (!country) {
    return <Navigate to={'/404'} replace />;
  }
 
  return <CountryDetails country={country} />
}
export default CountryDetailsPage;