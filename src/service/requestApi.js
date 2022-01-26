const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fatchApi = async () => {
  const getPlanets = await fetch(urlAPI);
  const response = await getPlanets.json();
  return response;
};

export default fatchApi;
