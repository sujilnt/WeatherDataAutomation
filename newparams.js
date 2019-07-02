const fs = require('fs');
const data = [
	"029 ROTHERHAM CATCLIFFE PFS [kWh] [Rotherham Catcliffe]",
	"032 HEYWOOD DAWSON STREET PFS [kWh] [Heywood Dawson Street]",
	"033 WAKEFIELD DEWSBURY ROAD PFS [kWh] [Wakefield Dewsbury Road]",
	"036 LEEDS GUISELEY PFS [kWh] [Leeds Guiseley]",
	"049 TELFORD WELLINGTON PFS [kWh] [Telford Wellington]",
	"050 STOKE FESTIVAL PARK PFS [kWh] [Stoke Festival Park]",
	"053 ROCHDALE KINGSWAY PFS [kWh] [Rochdale Kingsway]",
	"056 SKIPTON BROUGHTON ROAD PFS [kWh] [Skipton Broughton Road]",
	"058 STOCKTON THORNABY - PFS [kWh] [Stockton Thornaby]",
	"061 ROTHERHAM PARKGATE PFS [kWh] [Rotherham Parkgate]",
	"062 LINCOLN TRITTON ROAD PFS [kWh] [Lincoln Triton Road]",
	"063 WALSALL WALLOWS LANE PFS [kWh] [Walsall Wallows Lane]",
	"065 HARROGATE STARBECK PFS [kWh] [Harrogate Starbeck]",
	"067 NOTTINGHAM NETHERFIELD PFS [kWh] [Nottingham Netherfield]",
	"081 IPSWICH SPROUGHTON ROAD PFS [kWh] [Ipswich Sproughton Road]",
	"092 LONDON ENFIELD PFS [kWh] [London Enfield]",
	"093 DENTON PFS [kWh] [Denton]",
	"099 MILTON KEYNES WESTCROFT PFS [kWh] [Milton Keynes Westcroft]",
	"102 SUNDERLAND DOXFORD PARK PFS [kWh] [Sunderland Doxford Park]",
	"104 NELSON PENDLE STREET PFS [kWh] [Nelson Pendle Street]",
	"106 BANBURY SWAN CLOSE PFS [kWh] [Banbury Swan Close]",
	"113 LONDON ERITH PFS [kWh] [London Erith]",
	"114 RETFORD IDLE VALLEY ROAD PFS [kWh] [Retford Idle Valley Road]",
	"124 DARLINGTON MORTON PARK PFS [kWh] [Darlington Morton Park]",
	"131 CHESTER LIVERPOOL ROAD PFS [kWh] [Chester Liverpool Rd]",
	"132 HARTLEPOOL PFS [kWh] [Hartlepool]",
	"135 FALKIRK PFS [kWh] [Falkirk]",
	"137 LEEDS SWINNOW ROAD PFS [kWh] [Leeds Swinnow Rd]",
	"147 EDINBURGH GRANTON PFS [kWh] [Granton Waterfront Broadway]",
	"149 WHITEFIELD PFS [kWh] [Whitefield Stanley Road]",
	"153 WEDNESBURY PFS [kWh] [Wednesbury Holyhead Road]",
	"160 ABERDEEN KING STREET PFS [kWh] [Aberdeen King St]",
	"161 AIRDRIE GARTLEA ROAD PFS [kWh] [Airdrie Gartlea Rd]",
	"162 ALLOA CLACKAMANNAN ROAD PFS [kWh] [Alloa Clackmannan Rd]",
	"163 ALNESS PFS [kWh] [Alness]",
	"164 ARBROATH HUME STREET PFS [kWh] [Arbroath Hume St]",
	"165 AYR CASTLEHILL ROAD PFS [kWh] [Ayr Castlehill Rd]",
	"167 BELLSHILL JOHN STREET PFS [kWh] [Bellshill John St]",
	"169 DUMBARTON GLASGOW ROAD PFS [kWh] [Dumbarton Glasgow Rd]",
	"170 DUMFRIES BROOMS ROAD PFS [kWh] [Dumfries Brooms Rd]",
	"171 EAST KILBRIDE LINDSAYFIELD PFS [kWh] [East Kilbride Lindsayfield]",
	"173 EDINBURGH FERRY ROAD PFS [kWh] [Edinburgh Ferry Road]",
	"175 EDINBURGH MOREDUN PFS [kWh] [Edinburgh Moredun]",
	"177 EDINBURGH SOUTH GYLE PFS [kWh] [Edinburgh South Gyle]",
	"178 FORT WILLIAM AN AIRD PFS [kWh] [Fort William]",
	"179 GLASGOW ANNIESLAND PFS [kWh] [Glasgow Anniesland]",
	"180 GLASGOW BAILLIESTON PFS [kWh] [Glasgow Baillieston]",
	"182 GLASGOW CAMBUSLANG PFS [kWh] [Glasgow Cambuslang]",
	"183 GLASGOW NEWLANDS PFS [kWh] [Glasgow Newlands]",
	"184 GLENROTHES FLEMINGTON ROAD PFS [kWh] [Glenrothes Flemington Rd]",
	"185 GREENOCK RUE END STREET PFS [kWh] [Greenock Rue End St]",
	"187 HAWICK MART STREET PFS [kWh] [Hawick Mart St]",
	"188 INVERNESS MILBURN ROAD PFS [kWh] [Inverness Millburn Rd]",
	"189 INVERURIE BLACKHALL ROAD PFS [kWh] [Inverurie ]",
	"194 PETERHEAD QUEEN STREET PFS [kWh] [Peterhead Queen St]",
	"197 STIRLING MUNRO ROAD PFS [kWh] [Stirling Munroe Rd]",
	"198 STRANRAER LONDON ROAD PFS [kWh] [Stranraer London Rd]",
	"199 TROON DUKES ROAD PFS [kWh] [Troon Academy St]",
	"200 WISHAW KIRK ROAD PFS [kWh] [Wishaw Kirk Rd]",
	"206 NEWCASTLE U TYNE COWGATE PFS [kWh] [Newcastle UT Cowgate]",
	"208 BUXTON BAKEWELL ROAD PFS [kWh] [Buxton Bakewell Rd]",
	"209 CHAPEL EN LE FRITH MARKET SQ PFS [kWh] [Chapel en le Frith Market St]",
	"212 HARWOOD LEA GATE PFS [kWh] [Harwood Lee Gate]",
	"221 WHITEHAVEN FLATT WALKS PFS [kWh] [Whitehaven]",
	"223 WORKINGTON DERWENT RETAIL PARK PFS [kWh] [Workington Derwent Retail Pk]",
	"224 BRIDLINGTON BESSINGBY ROAD PFS [kWh] [Bridlington Bessingby Rd]",
	"225 CHESTERFIELD CHATSWORTH ROAD PFS [kWh] [Chesterfield Chatsworth Rd]",
	"231 BELPER CHAPEL STREET PFS [kWh] [Belper Chapel Street]",
	"233 HINCKLEY STOKE ROAD PFS [kWh] [Hinckley Stoke Rd]",
	"238 NOTTINGHAM GAMSTON PFS [kWh] [Nottingham Gamston]",
	"243 BURNTWOOD HIGH STREET PFS [kWh] [Burntwood High St]",
	"245 CASTLE BROMWICH HURST LANE PFS [kWh] [Castle Bromwich Hurst Lane]",
	"247 EVESHAM FOUR POOLS ESTATE PFS [kWh] [Evesham Four Pool Estate]",
	"250 KINGSWINFORD STALLINGS LANE PFS [kWh] [Dudley Kingswinford]",
	"251 LEEK BARNFIELD CLOSE PFS [kWh] [Leek Barnfield Close]",
	"253 LICHFIELD BEACON STREET PFS [kWh] [Lichfield Beacon St]",
	"262 STONE MILL STREET PFS [kWh] [Stone Mill St]",
	"266 BRECON FREE STREET PFS [kWh] [Brecon Free St]",
	"267 CAERNARFON NORTH ROAD PFS [kWh] [Caernarfon North Rd]",
	"276 CANVEY ISLAND NORTHWICK ROAD PFS [kWh] [Canvey Island Northwick Rd]",
	"279 CROMER HOLT ROAD PFS [kWh] [Cromer Holt Rd]",
	"280 DISS VICTORIA ROAD PFS [kWh] [Diss Victoria Rd]",
	"283 FELIXSTOWE CAVENDISH PARK PFS [kWh] [Felixstowe Cavendish Pk Est]",
	"285 HARWICH ICONFIELD PARK PFS [kWh] [Harwich Iconfield Pk]",
	"287 MALDON LIMEBROOK WAY PFS [kWh] [Maldon Limebrook Way]",
	"288 PETERBOROUGH LINCOLN ROAD PFS [kWh] [Peterborough Lincoln Rd]",
	"289 SKEGNESS WAINFLEET ROAD PFS [kWh] [Skegness Wainfleet Rd]",
	"295 CHATHAM PRINCES AVENUE PFS [kWh] [Chatham Princes Avenue]",
	"301 LEIGHTON BUZZARD LAKE ST PFS [kWh] [Leighton Buzzard Lake St]",
	"303 LONDON CAMDEN TOWN PFS [kWh] [London Camden Town]",
	"306 LONDON PECKHAM PFS [kWh] [London Peckham]",
	"307 LONDON QUEENSBURY PFS [kWh] [London Queensbury]",
	"315 MAIDSTONE SUTTON ROAD PFS [kWh] [Maidstone Sutton Rd]",
	"317 ST ALBANS HATFIELD ROAD PFS [kWh] [St Albans Hatfield Rd]",
	"321 BIDEFORD KINGLSEY ROAD PFS [kWh] [Bideford Kingsley Rd]",
	"327 GLASTONBURY STREET ROAD PFS [kWh] [Glastonbury Street Rd]",
	"330 PAIGNTON TOTNES ROAD PFS [kWh] [Paignton Totnes Rd]",
	"331 PENZANCE LONG ROCK PFS [kWh] [Penzance Long Rock]",
	"333 PLYMSTOCK POMPHLETT ROAD PFS [kWh] [Plymstock Pomphlett Rd]",
	"336 TAVISTOCK PLYMOUTH ROAD PFS [kWh] [Tavistock Plymouth Rd]",
	"338 TIVERTON KENNEDY WAY PFS [kWh] [Tiverton Kennedy Way]",
	"339 TOTNES CORONATION ROAD PFS [kWh] [Totnes Coronation Rd]",
	"345 BASINGSTOKE THORNEYCROFT PFS [kWh] [Basingstoke Thorneycroft]",
	"347 BRIDPORT ASKER MEADOWS PFS [kWh] [Bridport Asker Meadows]",
	"351 FARNBOROUGH PFS [kWh] [Farnborough Southwood]",
	"353 HASTINGS QUEENS ROAD PFS [kWh] [Hastings Queens Road]",
	"354 HORNDEAN LAKESMERE ROAD PFS [kWh] [Horndean Lakesmere Rd]",
	"361 SANDOWN LAKE IOW PFS [kWh] [Sandown Lake]",
	"367 WOKING GOLDSWORTH ROAD PFS [kWh] [Woking Goldsworth Rd]",
	"381 MORPETH STANLEY TERRACE PFS [kWh] [Morpeth]",
	"383 CHORLTON CUMHARDY WILBRAHAM RD PFS [kWh] [Chorlton Cum Hardy Wilbraham Rd]",
	"388 BOREHAMWOOD PFS [kWh] [Borehamwood]",
	"391 OPENSHAW PFS [kWh] [Openshaw]",
	"425 HOLYHEAD PENRHOS PFS [kWh] [Holyhead Penrhos]",
	"429 FLEET PFS [kWh] [Fleet Elvethom Heath]",
	"442 WILLENHALL PFS [kWh] [Willenhall]",
	"472 MANSFIELD WOODHOUSE PFS [kWh] [Mansfield Woodhouse]",
	"540 OSWESTRY PFS [kWh] [Oswestry ]",
	"553 ALDERSHOT PFS [kWh] [Aldershot]",
	"560 TEIGNMOUTH PFS [kWh] [Teignmouth]",
	"567 BLAYDON PFS [kWh] [Blaydon-On-Tyne]",
	"573 BARGOED PFS [kWh] [Bargoed]",
	"583 BROUGH WELTON ROAD PFS [kWh] [Brough Welton Rd]",
	"693 GIFFNOCK FENWICK 2 PFS [kWh] [Glasgow Giffnock]"
];


/*const d1= data.map((row)=>{
	const firstValue = row.split("] ")[1];
	const lastName= firstValue.substring(1,firstValue.length-1);
	return {
		"SiteName": lastName,
		"Done": "True"
	}
});*/
const d2= data.map((row)=>{
	const firstValue = row.split("PFS")[0]+"PFS" ;
	const lastName= firstValue.substring(0,firstValue.length);
	return {
		"SiteName": lastName,
		"Done": ""
	}
});


fs.writeFile('params.json', JSON.stringify(d2),(err,data) =>{
	if (err) console.log(err);
	console.log("Successfully Written to File.");
});

































































































































































































































































































































































































































































































































































































































































































































