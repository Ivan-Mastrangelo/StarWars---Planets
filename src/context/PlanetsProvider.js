import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchApi from '../service/requestApi';

function PlanetsProvider({ children }) {
  const [staticPlanets, setStaticPlanets] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [usedFilters, setUsedFilters] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [filtersKeys, setFiltersKeys] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [selects, setSelects] = useState({
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });

  useEffect(() => {
    (async () => {
      const { results } = await fetchApi();
      setStaticPlanets(results);
    })();
  }, []);

  const filterByNumericValues = useCallback((toFilter) => {
    const { column, comparison, value } = toFilter;
    if (comparison === 'maior que') {
      setPlanetList((planets) => planets
        .filter((planet) => planet[column] > Number(value)));
    }
    if (comparison === 'menor que') {
      setPlanetList((planets) => planets
        .filter((planet) => planet[column] < Number(value)));
    }
    if (comparison === 'igual a') {
      setPlanetList((planets) => planets
        .filter((planet) => planet[column] === value));
    }
  }, []);

  useEffect(() => {
    setPlanetList(staticPlanets);
    usedFilters.forEach((el) => filterByNumericValues(el));
  }, [staticPlanets, usedFilters, filterByNumericValues]);

  const data = {
    planetList,
    nameFilter,
    setNameFilter,
    filtersKeys,
    setFiltersKeys,
    filterByNumericValues,
    selects,
    setSelects,
    usedFilters,
    setUsedFilters,
    setPlanetList,
    isDisable,
    setIsDisable,
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
