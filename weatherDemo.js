const fs = require('fs');
//const {weatherFunc} = require("weather-data-automation");
const {weatherFunc} = require("./deletelocation");
const m = JSON.parse(fs.readFileSync('params.json').toString());
const NO_OF_OPERATION = 2;
let count =0;
m.forEach((weatherData)=>{
    if(weatherData["Done"] ==="TRUE"){
        //console.log("weatherData is present.");
        return 0;
    }else{
        if(count< NO_OF_OPERATION){
            weatherFunc({
                siteName:weatherData.SiteName,
                emailId: "sujil@optimisedbuildings.com" ,
                password: "optimised1234",
                timezone: "Europe/London",
                location:"united Kingdom",
                url:"https://optimisedbuildings.dexcell.com/login.htm",
                clientNameSelector:".selection_container[id='3786']",
                //launchSettings:{ devtools: true,// add any customised settings according pupeeteer}
            },count);
            weatherData["Done"] = "TRUE";
            count+=1;
        }
    }

});
fs.writeFile('params.json', JSON.stringify(m),(err,data) =>{
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});
