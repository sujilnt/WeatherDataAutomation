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
                emailId: "sujil@optimisedbuildings.com",
                password: "optimised1234",
                location: "Europe/London",
                //launchSettings:{devtools: true,// add anycustomised settings according pupeeteer}
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
