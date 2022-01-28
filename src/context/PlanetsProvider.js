import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchApi from '../service/requestApi';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [options, setOptions] = useState('population');
  const [compare, setCompare] = useState('Maior que');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    (async () => {
      const { results } = await fetchApi();
      setPlanetList(results);
    })();
  }, []);
  // configuração com async await aprendida com o instrutor Arthur no horário da mentoria.

  const data = {
    planetList,
    nameFilter,
    setNameFilter,
    options,
    setOptions,
    compare,
    setCompare,
    amount,
    setAmount,
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
