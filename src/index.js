import './css/styles.css';

fetch('https://restcountries.com/v3.1/all')
  .then(r => r.json())
  .then(console.log);
