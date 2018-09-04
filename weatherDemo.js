const fs = require('fs');
const {weatherFunc} = require("weather-data-automation");
const m = JSON.parse(fs.readFileSync('data.json').toString());
const NO_OF_OPERATION = 4;
let count =0;
m.forEach((weatherData)=>{
    if(weatherData["Done"] ==="TRUE"){
        //console.log("weatherData is present.");
        return 0;
    }else{
        if(count< NO_OF_OPERATION){
            weatherFunc({
                siteName:weatherData.SiteName,
                postCode:weatherData.PostCode,
                emailId: "you email",
                password: "password",
                location: "Europe/London",
                url:"https://optimisedbuildings.dexcell.com/login.htm",
                clientNameSelector:".selection_container[id='3786']",
                //launchSettings:{ devtools: true,// add any customised settings according pupeeteer}
            },count);
            weatherData["Done"] = "TRUE";
            count+=1;
        }
    }

});
fs.writeFile('data.json', JSON.stringify(m),(err,data) =>{
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});
