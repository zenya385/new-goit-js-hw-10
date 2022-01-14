import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries.js';
import renderCountries from './renderCountries';
import renderCountry from './renderCountry';

// const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('#search-box');
const countriList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputCountry.addEventListener('input', () => {});

fetchCountries('country')
  .then(data => {
    Notiflix.Notify.success(`✅ Too many matches found. Please enter a more specific name.`);
  })
  .catch(error => {
    Notiflix.Notify.failure('❌ Oops, there is no country with that name');
  });
