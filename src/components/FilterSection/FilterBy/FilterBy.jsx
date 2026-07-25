import style from './FilterBy.module.css'

function FilterBy({selectedRegion, setSelectedRegion}) {

  function handleSelectChange(event) {
    setSelectedRegion(event.target.value)
  }

  return(
    <div>

      <select value={selectedRegion} onChange={handleSelectChange}>
        <option value='Filter By Region' disabled>Filter By Region</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
      </select>

    </div>
  );

}

export default FilterBy;