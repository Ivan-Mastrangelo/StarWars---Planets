import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FiltersBar() {
  const {
    setNameFilter,
    nameFilter,
    filtersKeys,
    setFiltersKeys,
    filterByNumericValues,
  } = useContext(planetsContext);

  const handleSelect = (event) => {
    const { value, name } = event.target;
    setFiltersKeys({ ...filtersKeys, [name]: value });
  };

  const submitFilters = (e) => {
    e.preventDefault();
    filterByNumericValues(filtersKeys);
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
          onChange={ (e) => setNameFilter(e.target.value) }
        />
      </label>
      <div id="numeric-filter">
        <label htmlFor="options">
          Filtrar por
          <select
            id="options"
            name="column"
            data-testid="column-filter"
            value={ filtersKeys.column }
            onChange={ handleSelect }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="compare">
          Grau de comparação
          <select
            id="compare"
            name="comparison"
            data-testid="comparison-filter"
            value={ filtersKeys.comparison }
            onChange={ handleSelect }
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>
        <label htmlFor="amount">
          Quantidade
          <input
            type="number"
            id="amount"
            name="value"
            data-testid="value-filter"
            value={ filtersKeys.value }
            onChange={ handleSelect }
          />
        </label>
        <button
          type="submit"
          onClick={ submitFilters }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default FiltersBar;
