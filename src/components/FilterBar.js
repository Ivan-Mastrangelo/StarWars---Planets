import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FiltersBar() {
  const {
    setNameFilter,
    nameFilter,
    options,
    setOptions,
    compare,
    setCompare,
    amount,
    setAmount,
  } = useContext(planetsContext);

  submitFilters((e) => {
    e.preventDefault();
  });

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
      <label htmlFor="options">
        <select
          id="options"
          data-testid="column-filter"
          value={ options }
          onChange={ (e) => { setOptions(e.target.value); } }
        >
          Filtrar por
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="compare">
        <select
          id="compare"
          data-testid="comparison-filter"
          value={ compare }
          onChange={ (e) => { setCompare(e.target.value); } }
        >
          Grau de comparação
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="amount">
        <input
          type="number"
          id="amount"
          data-testid="value-filter"
          value={ amount }
          onChange={ (e) => { setAmount(e.target.value); } }
        />
        Quantidade
      </label>
      <button
        type="submit"
        onClick={ submitFilters }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default FiltersBar;
