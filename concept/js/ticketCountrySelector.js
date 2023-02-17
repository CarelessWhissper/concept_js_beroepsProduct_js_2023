const url = "https://restcountries.com/v3.1/all";

async function getCountries() {
  const reponse = await fetch(url);
  const countries = await reponse.json();
  const select = document.getElementById("countries");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.text = `${country.name.common} - ${country.capital}`;

    select.add(option);
  });
}
const startDate = document.querySelector('#startDate');
const endDate = document.querySelector('#endDate');

// Bind datepicker to startDate and endDate inputs
startDate.addEventListener('focus', showDatepicker);
endDate.addEventListener('focus', showDatepicker);