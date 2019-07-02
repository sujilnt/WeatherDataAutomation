const fetch = require('node-fetch');
const getAllOptimisedSite= async ()=>{
	const prefixname="https://spreadsheets.google.com/feeds/list/";
	const sheetId="1fF5DgLQZ6fcULMbPlgI4PKtsv9kbKYb1pb0oIxXjE1o";
	const postFix="/od6/public/values?alt=json";
	const url=`${prefixname}${sheetId}${postFix}`;
	const  siteName =  await fetch(url).then((body)=> body.json()).then((data)=>{
		return data["feed"].entry;
	}).catch((error)=>{
		return error;
	});
	return siteName;
};
module.exports={
	getAllOptimisedSite:getAllOptimisedSite,
};
