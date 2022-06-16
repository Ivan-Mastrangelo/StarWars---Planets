import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchApi from '../service/requestApi';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [reset, setReset] = useState('');
  const [filtersKeys, setFiltersKeys] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [selects, setSelects] = useState({
    column: [
      '',
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
      setPlanetList(results);
    })();
  }, [reset]);
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
  }; // Lógica para os fitros aprendida com o amigo de turma Renan Souza.

  const data = {
    planetList,
    nameFilter,
    setNameFilter,
    filtersKeys,
    setFiltersKeys,
    filterByNumericValues,
    selects,
    setSelects,
    setReset,
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
