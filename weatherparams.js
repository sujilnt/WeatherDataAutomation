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
		await page.click("#gateways-item a");  // click on the gateway item
		
		await page.waitForSelector(".search-query.search");
		await page.waitFor(2000);
		await page.type("input.search-query.search",_siteName);
		await page.waitForSelector(".search-query.search");
		
		await page.waitForSelector(".title a");
		await page.click(".title a");
		
		await page.waitForSelector("#devices-tab");
		await page.click("#devices-tab");
		await page.waitFor(2000);
		await page.click(".params-popup");
		await page.waitForSelector("#triple");
		page.$$eval('label.checked', checkboxes => {
			checkboxes.forEach(chbox => chbox.click())
		});
		
		//await page.waitForSelector(".pending label.checkbox");
		page.$$eval('label.checkbox', checkboxes =>{
			checkboxes[0].click()
		})
		await page.click("button#save-signals-to-store");
		await page.waitFor(5000);
		await page.close();
		
		//await page.type(String.fromCharCode(13));
		/*
		 // creating new gateway
		 await page.waitForSelector("#new-gateway"); // waiting for the new gateway button
		 await page.waitFor(1000);
		 await page.click("button#new-gateway");  //  clicking on the new gateway button .
		 // selecting weather gateway
		* await page.waitForSelector("button[data-type='weather']");// waiting for the button that represents weather field
		 await page.click("button[data-type='weather']"); // click on the weather icon
		 await page.waitFor(1000);
		 await page.waitForSelector("button#next-button"); // waiting for the next button.
		 await page.click("button#next-button");  // once clicked moved to the next page
		 // moving to next page
		 // filling the names
		 await page.waitForSelector("#name");
		 await page.type("#name", _siteName);
		 
		 await page.waitForSelector(".select2-input");
		 await page.type(".select2-input", _location);
		 await page.click(".select2-result-label");
		 // dropdown code
		 await page.waitForSelector("#postcode");
		 await page.type("#postcode", _post);
		 await page.waitForSelector("#s2id_weatherStationId");
		 await page.click("#s2id_weatherStationId");
		 //await page.waitForSelector("#gmimap1");
		 await page.waitForSelector("#s2id_select-timezone");
		 await page.click("#s2id_select-timezone");
		 await page.waitForSelector("#select-timezone");
		 await page.select("#select-timezone", _time);
		 await page.waitFor(3000);
		 // for button
		 //await page.type(" #s2id_select-timezone > .select2-drop .select2-search .select2-input", _time);
		 //await page.click(".select2-results .select2-result-label");
		 await page.waitForSelector(".submit_ccmbr[type='submit']");
		 await page.click(".submit_ccmbr[type='submit']");
		 
		 await page.waitForSelector("#devices-tab");
		 await page.click("#devices-tab");
		 await page.waitForSelector("a[href$='accept_all_dps=true']");
		 await page.click("a[href$='accept_all_dps=true']");
		 await page.waitFor(2000);
		 await page.close();*/
	});
};
module.exports.weatherFunc=weatherFunc;
