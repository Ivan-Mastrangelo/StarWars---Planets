import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';

const quatro = 4;

function FiltersBar() {
  const {
    setNameFilter,
    nameFilter,
    filtersKeys,
    setFiltersKeys,
    selects,
    setSelects,
    usedFilters,
    setUsedFilters,
    isDisable,
    setIsDisable,
  } = useContext(planetsContext);

  useEffect(() => {
    setFiltersKeys((prev) => ({ ...prev, column: selects.column[0] }));
  }, [selects, setFiltersKeys]);

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
  };

  const submitFilters = (e) => {
    e.preventDefault();
    selectedColumn(filtersKeys.column);
    setUsedFilters([...usedFilters, filtersKeys]);
    if (usedFilters.length === quatro) setIsDisable(true);
    console.log(usedFilters);
  };

  const restoreSelect = (select) => {
    if (select !== undefined) {
      const newColumn = [...selects.column];
      newColumn.push(select);
      setSelects({ column: newColumn });
    }
  };

  const cleanFilters = (value) => {
    restoreSelect(value);
    const usedFiltersRemaining = usedFilters.filter((el) => el.column !== value);
    setUsedFilters(usedFiltersRemaining);
    console.log(usedFiltersRemaining);
    if (usedFiltersRemaining.length > 0) setIsDisable(false);
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
          disabled={ isDisable }
          type="button"
          onClick={ submitFilters }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
      <div data-testid="filter" className="appliedFilters">
        {
          usedFilters[0] !== undefined && usedFilters.map((el, i) => (
            <div key={ i } className="eachFilter">
              <span>{`${el.column} ${el.comparison} ${el.value} `}</span>
              <button
                className="button2"
                type="button"
                value={ el.column }
                onClick={ () => cleanFilters(el.column) }
                data-testid="filter"
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </form>
  );
}

export default FiltersBar;
