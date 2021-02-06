fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then( data => displayCountries(data))

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');

    for (let i = 0; i< countries.length ; i++){
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        // const name = document.createElement('h3');
        // name.innerText = country.name;
        // const capital = document.createElement('p');
        // capital.innerText = country.capital;

        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);
        // countriesDiv.appendChild(countryDiv);

        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);


        
    }
}