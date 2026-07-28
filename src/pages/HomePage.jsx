import FilterSection from "../components/FilterSection/FilterSection"
import CountryGrid from "../components/CountryGrid/CountryGrid"
import {useState} from 'react'

function HomePage() {
  const [input, setInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return(
    <>
      <FilterSection input={input} 
      setInput={setInput} 
      selectedRegion={selectedRegion} 
      setSelectedRegion={setSelectedRegion} />

      <CountryGrid input={input} selectedRegion={selectedRegion} />
    </>

  );

}

export default HomePage;