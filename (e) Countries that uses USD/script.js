function reqListener() {
    let countryArray = JSON.parse(this.responseText);      
    let countriesUsingUSD = countryArray.filter(country => {
        return country.currencies && country.currencies.USD;
    }).map((country)=>(country.name.common));

    console.log('Countries using USD:', countriesUsingUSD);
        
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();