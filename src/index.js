import './css/styles.css';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputRefs = document.querySelector('input#search-box');
const listRefs = document.querySelector('.country-list');
const infoRefs = document.querySelector('.country-info');
//===========================================================
let searchQuery = '';
inputRefs.addEventListener('input', debounce(fetchInput, DEBOUNCE_DELAY));

function fetchInput() {
  searchQuery = inputRefs.value.trim();
  if (inputRefs.value !== '') {
    console.log(searchQuery);
    fetchCountries(searchQuery)
      .then(countre => MarkupGenerator(countre))
      .catch(error => console.log(error));
  }
}

function MarkupGenerator(country) {
  listMarkupGenerator(country);
  //   infoMarkupGenerator(country);
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
<p>Capital: ${capital}</p>
<p>Population: ${population}</p>
<p>languages: ${language}</p>
 `;
  infoRefs.innerHTML = infoMarkup;
}

function listMarkupGenerator(country) {
  console.log(country[0]);

  const listMatkup = country
    .map(({ name: { official }, flags: { svg } }) => {
      console.log(official);
      return `<li class = "country-item"><span class = "centering"><img src="${svg}" alt="" width="32" height="24">  </span> <span class = "centering, text"> ${official}</span></li> `;
    })

    .join('');

  console.log(listMatkup);
  listRefs.innerHTML = listMatkup;
}
