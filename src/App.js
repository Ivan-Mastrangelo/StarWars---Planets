import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FiltersBar from './components/FilterBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FiltersBar />
      <Table />
      <Footer />
    </PlanetsProvider>
  );
}

export default App;
