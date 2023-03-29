import './css/styles.css';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
//===========================================================
const DEBOUNCE_DELAY = 300;
const inputRefs = document.querySelector('input#search-box');
const listRefs = document.querySelector('.country-list');
const infoRefs = document.querySelector('.country-info');
//===========================================================
let searchQuery = '';
inputRefs.addEventListener('input', debounce(fetchInput, DEBOUNCE_DELAY));

function fetchInput() {
  searchQuery = inputRefs.value.trim();
  if (searchQuery !== '') {
    fetchCountries(searchQuery)
      .then(countre => MarkupGenerator(countre))
      .catch(error => console.log(error));
  } else {
    infoRefs.innerHTML = '';
    listRefs.innerHTML = '';
  }
}

function MarkupGenerator(country) {
  if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    //===========================================================
  } else if (country.length >= 2 && country.length <= 10) {
    infoRefs.innerHTML = '';
    listMarkupGenerator(country);
    //===========================================================
  } else if (country.length === 1) {
    listRefs.innerHTML = '';
    infoMarkupGenerator(country);
    //===========================================================
  }
}

function infoMarkupGenerator(country) {
  const {
    name: { official },
    flags: { svg },
    capital,
    population,
    languages,
  } = country[0];

  const language = Object.values(languages).join(', ');

  const infoMarkup = `
<h1><span><img src="${svg}" alt="" width="32" height="24"></span> ${official}</h1> 
<p class = "text">Capital: ${capital}</p>
<p class = "text">Population: ${population}</p>
<p class = "text">languages: ${language}</p>
 `;
  infoRefs.innerHTML = infoMarkup;
}

function listMarkupGenerator(country) {
  const listMatkup = country
    .map(({ name: { official }, flags: { svg } }) => {
      return `<li class = "country-item"><span class = "centering"><img src="${svg}" alt="" width="32" height="24">  </span> <span class = "centering, text"> ${official}</span></li> `;
    })
    .join('');

  listRefs.innerHTML = listMatkup;
}
