import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
import renderCountries from './renderCountries';
import renderCountry from './renderCountry';

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchCountry.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry(e) {
  e.preventDefault();
  const inputCountry = e.target.value.trim();
  if (!inputCountry) {
    countriesList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(inputCountry)
    .then(countries => {
      if (countries.length === 1) {
        // Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
      if (countries.length === 1) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
      if (countries.length === 1) {
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('❌ Oops, there is no country with that name');
    });
}
