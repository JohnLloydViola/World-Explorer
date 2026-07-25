import style from './FilterSection.module.css'
import SearchIcon from '../../assets/images/SearchIcon.png'
import FilterBy from './FilterBy/FilterBy'
import {useState} from 'react'

function FilterSection() {
  const [input, setInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Filter By Region');

  function inputHandler(event) {
    setInput(event.target.value )
  }
  return(
    <>
    <div className={style.container}>
      <div>
        <div className={style.inputContainer} >
          <img className={style.inputImage} src={SearchIcon}></img>
          <input type='text' value={input} onChange={inputHandler} placeholder='Search for a country...'></input>
        </div>
        <FilterBy selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
    
    </div>
    </>
  );

}

export default FilterSection;