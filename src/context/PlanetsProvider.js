import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchApi from '../service/requestApi';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await fetchApi();
      setPlanetList(results);
    })();
  }, []);
  // configuração com async await aprendida com o instrutor Arthur no horário da mentoria.

  return (
    <planetsContext.Provider value={ { data: planetList } }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.children).isRequired,
};

export default PlanetsProvider;
