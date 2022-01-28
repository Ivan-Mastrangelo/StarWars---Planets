import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FiltersBar from './components/FilterBar';

function App() {
  return (
    <PlanetsProvider>
      <FiltersBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
