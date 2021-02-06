fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        // const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick = "displayCountryDetail('${country.name}') "> Detail</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

    // for (let i = 0; i< countries.length ; i++){
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';

    //     // const name = document.createElement('h3');
    //     // name.innerText = country.name;
    //     // const capital = document.createElement('p');
    //     // capital.innerText = country.capital;

    //     // countryDiv.appendChild(name);
    //     // countryDiv.appendChild(capital);
    //     // countriesDiv.appendChild(countryDiv);

    //     const countryInfo = `
    //         <h3 class = "country-name">${country.name}</h3>
    //         <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);    
    // }
}


const displayCountryDetail = name =>{
    const url = ` https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));


    // console.log(url)
}
 const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML =`
    <h1> ${country.name}</h1>
    <p>${country.capital}</p>
    <p>Population: ${country.population} </P>
    <img src = "${country.flag}" >
    `
 }