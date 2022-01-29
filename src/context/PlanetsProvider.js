import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchApi from '../service/requestApi';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filtersKeys, setFiltersKeys] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    (async () => {
      const { results } = await fetchApi();
      setPlanetList(results);
    })();
  }, []);
  // configuração com async await aprendida com o instrutor Arthur no horário da mentoria.

  const filterByNumericValues = (toFilter) => {
    const { column, comparison, value } = toFilter;
    if (comparison === 'maior que') {
      setPlanetList(planetList.filter((planet) => planet[column] > Number(value)));
    }
    if (comparison === 'menor que') {
      setPlanetList(planetList.filter((planet) => planet[column] < Number(value)));
    }
    if (comparison === 'igual a') {
      setPlanetList(planetList.filter((planet) => planet[column] === value));
    }
  };

  const data = {
    planetList,
    nameFilter,
    setNameFilter,
    // options,
    // setOptions,
    // compare,
    // setCompare,
    // amount,
    // setAmount,
    filtersKeys,
    setFiltersKeys,
    filterByNumericValues,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
