import style from './FilterBy.module.css'

function FilterBy({selectedRegion, setSelectedRegion}) {

  function handleSelectChange(event) {
    setSelectedRegion(event.target.value)
  }

  return(
    <div>

      <select value={selectedRegion} onChange={handleSelectChange}>
        <option value=''>All</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>

    </div>
  );

}

export default FilterBy;