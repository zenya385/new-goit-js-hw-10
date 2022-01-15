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
    console.log(countryInfo);
    return;
  }

  fetchCountries(inputCountry)
    .then(countries => {
      console.log(countries);
      if (countries.length === 1) {
        renderMarkup(countryInfo, renderCountry(countries));
        renderMarkup(countriesList, '');
        return;
      }
      if (countries.length > 1 && countries.length <= 10) {
        renderMarkup(countriesList, renderCountries(countries));
        renderMarkup(countryInfo, '');
        return;
      }
      if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        countriesList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
      }
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

function renderMarkup(where, what) {
  where.innerHTML = what;
}
