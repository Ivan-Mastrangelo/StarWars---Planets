import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FiltersBar from './components/FilterBar';
import Header from './components/Header';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FiltersBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
