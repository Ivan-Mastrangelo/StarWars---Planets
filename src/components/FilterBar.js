import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FiltersBar() {
  const { setNameFilter, nameFilter } = useContext(planetsContext);

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        Busca por nome
        <input
          id="nameFilter"
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default FiltersBar;
