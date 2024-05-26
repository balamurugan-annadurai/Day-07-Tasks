function reqListener() {
    let countryArray = JSON.parse(this.responseText);
    // console.log(countryArray)
    let resultArray = countryArray.filter(function(country){
        let returnValue = country.population < 200000 ? true : false;
        return returnValue;
    }) 

    console.log(resultArray);

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();