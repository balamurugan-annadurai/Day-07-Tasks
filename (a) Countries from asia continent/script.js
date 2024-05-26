function reqListener() {
    let countryArray = JSON.parse(this.responseText);
    let asiaCountries = countryArray.filter(function(country){
        if(country.continents == "Asia"){
            return true;
        }
        else{
            return false;
        }
    })

    console.log(asiaCountries);

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  