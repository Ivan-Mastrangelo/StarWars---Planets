import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { planetList, nameFilter } = useContext(planetsContext);

  return (
    <table className="content-table">
      <div className="linha" />
      <div className="scroll">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetList.filter((planet) => planet.name.toLowerCase()
              .includes(nameFilter.toLowerCase())) // Filtro construído com auxílio do monitor Vinicius Dionysio
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
          }
        </tbody>
      </div>
      <div className="linha" />
    </table>
  );
}

export default Table;
