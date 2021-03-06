// delete each location submeters
const puppeteer = require('puppeteer');

const weatherFunc = (dataObj, count)=>{
	const userDataObj= dataObj;
	const _email= userDataObj.emailId.trim();
	let _siteName= userDataObj.siteName;
	const _password= userDataObj.password.trim();
	const _viewport = userDataObj.viewport || {width: 1200, height: 1000} ;
	const _launchSetting =  userDataObj.launchSettings||{headless: false, devtools: false};
	const _url=userDataObj.url;
	const _appSelector= userDataObj.clientNameSelector;
	let counter=count;
	let debugging= userDataObj.debug;
	
	if(debugging === true){
		console.log(userDataObj);
	}
	puppeteer.launch(_launchSetting).then(async browser => {
		// same as puppeteer
		const page = await browser.newPage();
		await page.goto(_url);   // going to the url the
		if(counter !==  0 ){
			await page.waitFor(15000);
		}
		await page.setViewport(_viewport);
		await page.type("input#username", _email); // user  Id
		await page.type("input[type='password']", _password);
		await page.click("button.btn"); // Click the login button
		await page.waitFor(1000);
		await page.waitForSelector(_appSelector); // waiting for dom element that has morrission url
		await page.click(_appSelector);  // click on the morrission url
		// once selected we goto the setting  in the top menu ..
		await page.waitForSelector("#top-menu");  // wait until menu contains top menu
		await page.click("#config-item");  // clicking on the setting Icon button
		// then select "gateays "  on the left menu .
		await page.waitForSelector(".leftmenu");    // wait until left menu loads.
		await page.click("#locations-item a");  // click on the gateway item
		
		await page.waitForSelector(".icon-inventory");
		await page.click(".icon-inventory");
		await page.waitForSelector(".search-query.search");
		await page.waitFor(2000);
		let _siteNumber = _siteName.substring(0,4);
		await page.type("input.search-query.search", _siteNumber + String.fromCharCode(13));
		await page.waitForSelector(".title a");
		//await page.click(".title a");
		await page.$$eval(".title h1",async (searchTextArr,_siteName) =>{
			let filteredItem = await searchTextArr.filter((data)=>{
				return data.innerHTML.trim() === _siteName.trim();
			});
			const currentELement = filteredItem[0].parentElement.childNodes;
			const atag = Array.from(currentELement).filter((r)=>{
				if( r.innerHTML){
					return r.innerHTML.trim() === "Edit";
				}else{
					return false;
				}
			});
			return atag[0].click();
		},_siteName);
		await page.waitForSelector("#devices-tab");
		await page.click("#devices-tab");
		await page.waitFor(2000);
		await page.waitForSelector("#left");
		await page.waitForSelector(".search-field");
		await page.waitForSelector("#left-query-input");
		await page.type("#left-query-input", _siteNumber);
		await page.waitFor(2000);
		await page.$$eval("#left td", (searchText,_siteNumber)=>{
			let d3= Array.from(searchText).filter((r)=>{
				return r.innerHTML.includes(_siteNumber);
			});
			d3[0].click();
		},_siteNumber);
		await page.click("#assign-btn");
		await page.waitFor(1000);
		await page.click("#save-button");
	});
};
module.exports.weatherFunc=weatherFunc;
