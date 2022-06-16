import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FiltersBar() {
  const {
    setNameFilter,
    nameFilter,
    filtersKeys,
    setFiltersKeys,
    filterByNumericValues,
    selects,
    setSelects,
    setReset,
  } = useContext(planetsContext);

  const handleSelect = (event) => {
    const { value, name } = event.target;
    setFiltersKeys({ ...filtersKeys, [name]: value });
  };

  // Lógica de exclusão dinâmica das opções de select aprendida com o amigo de turma Renan Souza.
  const selectedColumn = (selected) => {
    const column = selects.column.filter((element) => element !== selected);
    setSelects({
      ...selects,
      column,
    });
    setFiltersKeys({ ...filtersKeys, column });
  };

  const submitFilters = (e) => {
    e.preventDefault();
    filterByNumericValues(filtersKeys);
    selectedColumn(filtersKeys.column);
  };

  const resetColumn = () => {
    const column = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    setSelects({ column });
  };

  const clearFilters = (e) => {
    e.preventDefault();
    resetColumn();
    setReset(Math.random());
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        <input
          className="nameFilter"
          id="nameFilter"
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ (e) => setNameFilter(e.target.value) }
          placeholder="Busca por nome"
        />
      </label>
      <div id="numeric-filter" className="numericFilters">
        <label htmlFor="options">
          Filtrar por
          <select
            className="filtro1"
            id="options"
            name="column"
            data-testid="column-filter"
            value={ filtersKeys.column }
            onChange={ handleSelect }
          >
            { selects.column.map((select) => (
              <option
                key={ select }
                value={ select }
              >
                { select }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="compare">
          Grau de comparação
          <select
            className="filtro2"
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
            className="filtro3"
            type="number"
            id="amount"
            name="value"
            data-testid="value-filter"
            value={ filtersKeys.value }
            onChange={ handleSelect }
          />
        </label>
        <button
          className="button1"
          type="submit"
          onClick={ submitFilters }
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <button
          className="button2"
          type="submit"
          onClick={ clearFilters }
        >
          Refresh
        </button>
      </div>
    </form>
  );
}

export default FiltersBar;
