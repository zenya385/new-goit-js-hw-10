export default function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`,
  ).then(r => {
    if (!r.ok) {
      throw new Error(r.status);
    }
    console.log(r.status);
    return response.json();
  });
}
