import style from './FilterSection.module.css'
import SearchIcon from '../../assets/images/SearchIcon.png'
import FilterBy from './FilterBy/FilterBy'

function FilterSection({input, setInput, selectedRegion, setSelectedRegion}) {
  function inputHandler(event) {
    setInput(event.target.value )
  }
  return(
    <>
    <div className={style.container}>
      <div>
        <div className={style.inputContainer} >
          <img className={style.searchImage} src={SearchIcon}></img>
          <input type='text' value={input} onChange={inputHandler} placeholder='Search for a country...'></input>
        </div>

        <FilterBy selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
    </div>
    </>
  );

}

export default FilterSection;