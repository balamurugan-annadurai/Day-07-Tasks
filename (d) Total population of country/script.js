function reqListener() {
    let countryArray = JSON.parse(this.responseText);
    
    let populationArray = countryArray.map((country)=>(country.population));
    let countriesPopulation = populationArray.reduce(function(country1,country2){
          let sum = country1+ country2;
          return sum;
    })
    console.log(countriesPopulation);
  
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();