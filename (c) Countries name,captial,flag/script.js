function reqListener() {
    let countryArray = JSON.parse(this.responseText);
    countryArray.forEach(function(country){
        console.log("Name:",country.name.common);
        console.log("Capital:",country.capital);
        console.log("Flag:",country.flag); 

        console.log("\n");
    });


  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();