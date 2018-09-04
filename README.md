
# WeatherDataAutomation 

 A node script  or a Web Automation tool that is used to automate adding of weather Data in DEXMA or DEXCELL. 

## Usage

First, install `commands`:

```sh
$ npm i weather-data-automation --save -dev
```

Once installed create a javascript file, Once 
```sh
const {weatherFunc} = require("weather-data-automation");
weatherFunc({
                siteName:, // 
                postCode:weatherData.PostCode,
                emailId: "your email id",
                password: "password of your email id ",
                timezone: "time zones name", //default:Europe/London
                location:" name of the location ", //dafault: united Kingdom
                url:"dexma page url ", //ex:- https://optimisedbuildings.dexcell.com/login.htm
                Its alwyas login page url must be provided
                clientNameSelector:"clientid with selection on HTML ", // ex: .selection_container[id='3786']
                launchSettings:{ devtools: true,// add any customised settings according pupeeteer}
                
               })
               
```
