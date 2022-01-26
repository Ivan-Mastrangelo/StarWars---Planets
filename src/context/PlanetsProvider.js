import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const planetsList = [
  {

  },
];

function PlanetsProvider({ children }) {
  return (
    <PlanetsContext.Provider value={ { planetsList } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.children).isRequired,
};

export default PlanetsProvider;
