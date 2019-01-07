var url = "/sbd_data.txt";
var allData;
var recentData;
var checkedYearBoxes = [];
var checkedCrimeBoxes = [];

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
        }
     }

window.onload = function () {
  recheckAllBoxes();
  chartTwo();
}

function recheckAllBoxes(){
  document.getElementById("cb2003").checked = true;
  document.getElementById("cb2004").checked = true;
  document.getElementById("cb2005").checked = true;
  document.getElementById("cb2006").checked = true;
  document.getElementById("cb2007").checked = true;
  document.getElementById("cb2008").checked = true;
  document.getElementById("cb2009").checked = true;
  document.getElementById("cb2010").checked = true;
  document.getElementById("cb2011").checked = true;
  document.getElementById("cb2012").checked = true;
  document.getElementById("cb2013").checked = true;
  document.getElementById("cb2014").checked = true;
  document.getElementById("cb2015").checked = true;
  document.getElementById("cb2016").checked = true;
  document.getElementById("cb2017").checked = true;
  document.getElementById("cb2018").checked = true;
  document.getElementById("Break And Enter Commercial").checked = true;
  document.getElementById("Break And Enter Residential/Other").checked = true;
  document.getElementById("Mischief").checked = true;
  document.getElementById("Other Theft").checked = true;
  document.getElementById("Theft From Vehicle").checked = true;
  document.getElementById("Theft Of Bicycle").checked = true;
  document.getElementById("Theft Of Vehicle").checked = true;
  document.getElementById("Vehicle Collision Or Pedestrian Struck With Fatality").checked = true;
  document.getElementById("Vehicle Collision Or Pedestrian Struck With Injury").checked = true
}

function checkFunction(){
  //check witch years are checked
  checkedYearBoxes.length = 0;
  if(document.getElementById("cb2003").checked == true){
    checkedYearBoxes.push("2003");
  }
  if(document.getElementById("cb2004").checked == true){
    checkedYearBoxes.push("2004");
  }
  if(document.getElementById("cb2005").checked == true){
    checkedYearBoxes.push("2005");
  }
  if(document.getElementById("cb2006").checked == true){
    checkedYearBoxes.push("2006");
  }
  if(document.getElementById("cb2007").checked == true){
    checkedYearBoxes.push("2007");
  }
  if(document.getElementById("cb2008").checked == true){
    checkedYearBoxes.push("2008");
  }
  if(document.getElementById("cb2009").checked == true){
    checkedYearBoxes.push("2009");
  }
  if(document.getElementById("cb2010").checked == true){
    checkedYearBoxes.push("2010");
  }
  if(document.getElementById("cb2011").checked == true){
    checkedYearBoxes.push("2011");
  }
  if(document.getElementById("cb2012").checked == true){
    checkedYearBoxes.push("2012");
  }
  if(document.getElementById("cb2013").checked == true){
    checkedYearBoxes.push("2013");
  }
  if(document.getElementById("cb2014").checked == true){
    checkedYearBoxes.push("2014");
  }
  if(document.getElementById("cb2015").checked == true){
    checkedYearBoxes.push("2015");
  }
  if(document.getElementById("cb2016").checked == true){
    checkedYearBoxes.push("2016");
  }
  if(document.getElementById("cb2017").checked == true){
    checkedYearBoxes.push("2017");
  }
  if(document.getElementById("cb2018").checked == true){
    checkedYearBoxes.push("2018");
  }

  //check witch crimes are checked
  checkedCrimeBoxes.length = 0;
  if(document.getElementById("Break And Enter Commercial").checked == true){
    checkedCrimeBoxes.push("Break And Enter Commercial");
  }
  if(document.getElementById("Break And Enter Residential/Other").checked == true){
    checkedCrimeBoxes.push("Break And Enter Residential/Other");
  }
  if(document.getElementById("Mischief").checked == true){
    checkedCrimeBoxes.push("Mischief");
  }
  if(document.getElementById("Other Theft").checked == true){
    checkedCrimeBoxes.push("Other Theft");
  }
  if(document.getElementById("Theft From Vehicle").checked == true){
    checkedCrimeBoxes.push("Theft From Vehicle");
  }
  if(document.getElementById("Theft Of Bicycle").checked == true){
    checkedCrimeBoxes.push("Theft Of Bicycle");
  }
  if(document.getElementById("Theft Of Vehicle").checked == true){
    checkedCrimeBoxes.push("Theft Of Vehicle");
  }
  if(document.getElementById("Vehicle Collision Or Pedestrian Struck With Fatality").checked == true){
    checkedCrimeBoxes.push("Vehicle Collision Or Pedestrian Struck With Fatality");
  }
  if(document.getElementById("Vehicle Collision Or Pedestrian Struck With Injury").checked == true){
    checkedCrimeBoxes.push("Vehicle Collision Or Pedestrian Struck With Injury");
  }
  console.log(checkedYearBoxes);
  console.log(checkedCrimeBoxes);
}

function loadNeededData(){
  recentData = JSON.parse('{"year": 2003, "yeeep": "bla"}');
  //recentData = JSON.parse('{"foo": 1}');
  console.log(recentData);
}

function chartTwo()
{
  loadNeededData();
  var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	axisX: {
		labelFontSize: 15,
		labelWrap: true,
		prefix: " ",
		interval: 1
	},
	axisY: {
		prefix: " ",
		labelFontSize: 15,
		titel: "count"
	},
	toolTip: {
		shared: true
	},
	legend:{
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
  legend:{
    fontSize: 15,
   },
  data: [
  { // TYPE OF CRIME:: "Break and Enter Commercial"
	type: "stackedBar",
	name: "Break and Enter Commercial",
	markerSize: 5,
	showInLegend: "true",
	xValueFormatString: "",
	yValueFormatString: "",
    dataPoints: [
		{ label: "Arbutus Ridge", x: 24, y: 341},
		{ label: "Central Business District", x: 23, y: 10081},
		{ label: "Dunbar-Southlands", x: 22, y: 305},
		{ label: "Fairview", x: 21, y: 3518 },
		{ label: "Grandview-Woodland", x: 20, y: 2286 },
		{ label: "Hastings-Sunrise", x: 19, y: 991 },
		{ label: "Kensington-Cedar Cottage", x: 18, y: 1357 },
		{ label: "Kerrisdale", x: 17, y: 359 },
		{ label: "Killarney", x: 16, y: 333 },
		{ label: "Kitsilano", x: 15, y: 2231 },
		{ label: "Marpole", x: 14, y: 1150 },
		{ label: "Mount Pleasant", x: 13, y: 3026 },
		{ label: "Musqueam", x: 12, y: 18 },
		{ label: "Oakridge", x: 11, y: 356 },
		{ label: "Renfrew-Collingwood", x: 10, y: 1295 },
		{ label: "Riley Park", x: 9, y: 911 },
		{ label: "Shaughnessy", x: 8, y: 141 },
		{ label: "South Cambie", x: 7, y: 342 },
		{ label: "Stanley Park", x: 6, y: 82 },
		{ label: "Strathcona", x: 5, y: 2360},
		{ label: "Sunset", x: 4, y: 1152 },
		{ label: "Victoria-Fraserview", x: 3, y: 405 },
		{ label: "West End", x: 2, y: 3040 },
		{ label: "West Point Grey", x: 1, y: 350 }
	]},
	{ // TYPE OF CRIME:: "Break and Enter Residential/Other"
		type: "stackedBar",
		name: "Break and Enter Residential/Other",
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
		  { x: 24, y: 1765},     // Arbutus Ridge
			{ x: 23, y: 3664},     // Central Business District
			{ x: 22, y: 1978},     // Dunbar-Southlands
      { x: 21, y: 3919},    // Fairview
      { x: 20, y: 4730 },    // Grandview-Woodland
			{ x: 19, y: 3357 },    // Hastings-Sunrise
			{ x: 18, y: 4318 },    // Kensington-Cedar Cottage
      { x: 17, y: 1948 },    // Kerrisdale
      { x: 16, y: 2210 },    // Killarney
			{ x: 15, y: 4584 },    // Kitsilano
			{ x: 14, y: 2656 },    // Marpole
      { x: 13, y: 3448 },    // Mount Pleasant
      { x: 12, y: 91 },     // Musqueam
			{ x: 11, y: 2253 },    // Oakridge
			{ x: 10, y: 4488 },    // Renfrew-Collingwood
      { x: 9, y: 2869 },     // Riley Park
      { x: 8, y: 1936 },     // Shaughnessy
			{ x: 7, y: 1167 },    // South Cambie
      { x: 6, y: 67 },     // Stanley Park
      { x: 5, y: 2163},       // Strathcona
      { x: 4, y: 2674 },      // Sunset
			{ x: 3, y: 2606 },      // Victoria-Fraserview
			{ x: 2, y: 3572 },      // West End
      { x: 1, y: 1372 }       // West Point Grey
		]
	},
	{ // TYPE OF CRIME:: "Mischief"
		type: "stackedBar",
		name: "Mischief",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 996 },     // Arbutus Ridge
			{ x: 23, y: 18827 },     // Central Business District
			{ x: 22, y: 1423 },     // Dunbar-Southlands
      { x: 21, y: 3501 },    // Fairview
      { x: 20, y: 5353 },    // Grandview-Woodland
			{ x: 19, y: 3150 },    // Hastings-Sunrise
			{ x: 18, y: 4087 },    // Kensington-Cedar Cottage
      { x: 17, y: 1130 },    // Kerrisdale
      { x: 16, y: 1893 },    // Killarney
			{ x: 15, y: 4046 },    // Kitsilano
			{ x: 14, y: 2080 },    // Marpole
      { x: 13, y: 4518 },    // Mount Pleasant
      { x: 12, y: 108 },     // Musqueam
			{ x: 11, y: 955 },    // Oakridge
			{ x: 10, y: 4231 },    // Renfrew-Collingwood
      { x: 9, y: 1954 },     // Riley Park
      { x: 8, y: 691 },     // Shaughnessy
			{ x: 7, y: 654 },    // South Cambie
      { x: 6, y: 255 },     // Stanley Park
      { x: 5, y: 5165 },       // Strathcona
      { x: 4, y: 3443 },      // Sunset
			{ x: 3, y: 1896 },      // Victoria-Fraserview
			{ x: 2, y: 5877 },      // West End
      { x: 1, y: 968 }       // West Point Grey
		]
	},
/*	{ // TYPE OF CRIME:: "Offence Against a Person" !!!!NO DATA - PRIVACY!!!!
		type: "stackedBar",
		name: "Offence Against a Person",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 341 },     // Arbutus Ridge
			{ x: 23, y: 181 },     // Central Business District
			{ x: 22, y: 305 },     // Dunbar-Southlands
      { x: 21, y: 318 },    // Fairview
      { x: 20, y: 286 },    // Grandview-Woodland
			{ x: 19, y: 991 },    // Hastings-Sunrise
			{ x: 18, y: 157 },    // Kensington-Cedar Cottage
      { x: 17, y: 359 },    // Kerrisdale
      { x: 16, y: 333 },    // Killarney
			{ x: 15, y: 231 },    // Kitsilano
			{ x: 14, y: 115 },    // Marpole
      { x: 13, y: 306 },    // Mount Pleasant
      { x: 12, y: 18 },     // Musqueam
			{ x: 11, y: 356 },    // Oakridge
			{ x: 10, y: 125 },    // Renfrew-Collingwood
      { x: 9, y: 911 },     // Riley Park
      { x: 8, y: 141 },     // Shaughnessy
			{ x: 7, y: 342 },    // South Cambie
      { x: 6, y: 82 },     // Stanley Park
      { x: 5, y: 4 },       // Strathcona
      { x: 4, y: 7 },      // Sunset
			{ x: 3, y: 5 },      // Victoria-Fraserview
			{ x: 2, y: 2 },      // West End
      { x: 1, y: 6 }       // West Point Grey
		]
	},*/
  { // TYPE OF CRIME:: "Other Theft"
		type: "stackedBar",
		name: "Other Theft",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 357 },     // Arbutus Ridge
			{ x: 23, y: 21914 },     // Central Business District
			{ x: 22, y: 282 },     // Dunbar-Southlands
      { x: 21, y: 3675 },    // Fairview
      { x: 20, y: 2816 },    // Grandview-Woodland
			{ x: 19, y: 1511 },    // Hastings-Sunrise
			{ x: 18, y: 3155 },    // Kensington-Cedar Cottage
      { x: 17, y: 274 },    // Kerrisdale
      { x: 16, y: 277 },    // Killarney
			{ x: 15, y: 1907 },    // Kitsilano
			{ x: 14, y: 731 },    // Marpole
      { x: 13, y: 4287 },    // Mount Pleasant
      { x: 12, y: 1 },     // Musqueam
			{ x: 11, y: 1258 },    // Oakridge
			{ x: 10, y: 4699 },    // Renfrew-Collingwood
      { x: 9, y: 468 },     // Riley Park
      { x: 8, y: 26 },     // Shaughnessy
			{ x: 7, y: 799 },    // South Cambie
      { x: 6, y: 13 },     // Stanley Park
      { x: 5, y: 1108 },       // Strathcona
      { x: 4, y: 1511 },      // Sunset
			{ x: 3, y: 582 },      // Victoria-Fraserview
			{ x: 2, y: 6685 },      // West End
      { x: 1, y: 281 }       // West Point Grey
		]
	},
  { // TYPE OF CRIME:: "Theft from Vehicle"
    type: "stackedBar",
    name: "Theft from Vehicle",
    markerSize: 5,
    showInLegend: "true",
    xValueFormatString: " ",
    yValueFormatString: "",
    dataPoints: [
      { x: 24, y: 1988 },     // Arbutus Ridge
      { x: 23, y: 54006 },     // Central Business District
      { x: 22, y: 3149 },     // Dunbar-Southlands
      { x: 21, y: 12779 },    // Fairview
      { x: 20, y: 8215 },    // Grandview-Woodland
      { x: 19, y: 6368 },    // Hastings-Sunrise
      { x: 18, y: 8134 },    // Kensington-Cedar Cottage
      { x: 17, y: 3015 },    // Kerrisdale
      { x: 16, y: 4302 },    // Killarney
      { x: 15, y: 9816 },    // Kitsilano
      { x: 14, y: 4536 },    // Marpole
      { x: 13, y: 10721 },    // Mount Pleasant
      { x: 12, y: 225 },     // Musqueam
      { x: 11, y: 2471 },    // Oakridge
      { x: 10, y: 9222 },    // Renfrew-Collingwood
      { x: 9, y: 4728 },     // Riley Park
      { x: 8, y: 1988 },     // Shaughnessy
      { x: 7, y: 1673 },    // South Cambie
      { x: 6, y: 2979 },     // Stanley Park
      { x: 5, y: 8323 },       // Strathcona
      { x: 4, y: 5702 },      // Sunset
      { x: 3, y: 3688 },      // Victoria-Fraserview
      { x: 2, y: 18479 },      // West End
      { x: 1, y: 2146 }       // West Point Grey
    ]
  },
  { // TYPE OF CRIME:: "Theft of Bicycle"
    type: "stackedBar",
    name: "Theft of Bicycle",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 181 },     // Arbutus Ridge
			{ x: 23, y: 7833 },     // Central Business District
			{ x: 22, y: 260 },     // Dunbar-Southlands
      { x: 21, y: 3727 },    // Fairview
      { x: 20, y: 1542 },    // Grandview-Woodland
			{ x: 19, y: 393 },    // Hastings-Sunrise
			{ x: 18, y: 961 },    // Kensington-Cedar Cottage
      { x: 17, y: 192 },    // Kerrisdale
      { x: 16, y: 186 },    // Killarney
			{ x: 15, y: 2701 },    // Kitsilano
			{ x: 14, y: 266 },    // Marpole
      { x: 13, y: 3064 },    // Mount Pleasant
      { x: 12, y: 9 },     // Musqueam
			{ x: 11, y: 209 },    // Oakridge
			{ x: 10, y: 474 },    // Renfrew-Collingwood
      { x: 9, y: 687 },     // Riley Park
      { x: 8, y: 153 },     // Shaughnessy
			{ x: 7, y: 256 },    // South Cambie
      { x: 6, y: 238 },     // Stanley Park
      { x: 5, y: 1155 },       // Strathcona
      { x: 4, y: 279 },      // Sunset
			{ x: 3, y: 149 },      // Victoria-Fraserview
			{ x: 2, y: 3255 },      // West End
      { x: 1, y: 406 }       // West Point Grey
		]
	},
  { // TYPE OF CRIME:: "Theft of Vehicle"
    type: "stackedBar",
    name: "Theft of Vehicle",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 511 },     // Arbutus Ridge
			{ x: 23, y: 4229 },     // Central Business District
			{ x: 22, y: 645 },     // Dunbar-Southlands
      { x: 21, y: 2111 },    // Fairview
      { x: 20, y: 3291 },    // Grandview-Woodland
			{ x: 19, y: 2577 },    // Hastings-Sunrise
			{ x: 18, y: 3029 },    // Kensington-Cedar Cottage
      { x: 17, y: 569 },    // Kerrisdale
      { x: 16, y: 1353 },    // Killarney
			{ x: 15, y: 2438 },    // Kitsilano
			{ x: 14, y: 1664 },    // Marpole
      { x: 13, y: 2766 },    // Mount Pleasant
      { x: 12, y: 43 },     // Musqueam
			{ x: 11, y: 695 },    // Oakridge
			{ x: 10, y: 3142 },    // Renfrew-Collingwood
      { x: 9, y: 1254 },     // Riley Park
      { x: 8, y: 385 },     // Shaughnessy
			{ x: 7, y: 449 },    // South Cambie
      { x: 6, y: 77 },     // Stanley Park
      { x: 5, y: 1784 },       // Strathcona
      { x: 4, y: 2344 },      // Sunset
			{ x: 3, y: 1424 },      // Victoria-Fraserview
			{ x: 2, y: 2775 },      // West End
      { x: 1, y: 467 }       // West Point Grey
		]
	},
  { // TYPE OF CRIME:: "Vehicle Collision or Pedestrian Struck (with Fatality)"
    type: "stackedBar",
    name: "Vehicle Collision or Pedestrian Struck (with Fatality)",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 4 },     // Arbutus Ridge
			{ x: 23, y: 44 },     // Central Business District
			{ x: 22, y: 4 },     // Dunbar-Southlands
      { x: 21, y: 14 },    // Fairview
      { x: 20, y: 9 },    // Grandview-Woodland
			{ x: 19, y: 18 },    // Hastings-Sunrise
			{ x: 18, y: 14 },    // Kensington-Cedar Cottage
      { x: 17, y: 7 },    // Kerrisdale
      { x: 16, y: 12 },    // Killarney
			{ x: 15, y: 14 },    // Kitsilano
			{ x: 14, y: 10 },    // Marpole
      { x: 13, y: 19 },    // Mount Pleasant
      { x: 12, y: 1 },     // Musqueam
			{ x: 11, y: 6 },    // Oakridge
			{ x: 10, y: 13 },    // Renfrew-Collingwood
      { x: 9, y: 5 },     // Riley Park
      { x: 8, y: 7 },     // Shaughnessy
			{ x: 7, y: 2 },    // South Cambie
      { x: 6, y: 6 },     // Stanley Park
      { x: 5, y: 22 },       // Strathcona
      { x: 4, y: 18 },      // Sunset
			{ x: 3, y: 10 },      // Victoria-Fraserview
			{ x: 2, y: 8 },      // West End
      { x: 1, y: 5 }       // West Point Grey
		]
	},
  { // TYPE OF CRIME:: "Vehicle Collision or Pedestrian Struck (with Injury)"
    type: "stackedBar",
    name: "Vehicle Collision or Pedestrian Struck (with Injury)",
    markerSize: 5,
		showInLegend: "true",
		xValueFormatString: " ",
		yValueFormatString: "",
		dataPoints: [
      { x: 24, y: 314 },     // Arbutus Ridge
			{ x: 23, y: 3468 },     // Central Business District
			{ x: 22, y: 298 },     // Dunbar-Southlands
      { x: 21, y: 1256 },    // Fairview
      { x: 20, y: 1322 },    // Grandview-Woodland
			{ x: 19, y: 1364 },    // Hastings-Sunrise
			{ x: 18, y: 1673 },    // Kensington-Cedar Cottage
      { x: 17, y: 485 },    // Kerrisdale
      { x: 16, y: 622 },    // Killarney
			{ x: 15, y: 1128 },    // Kitsilano
			{ x: 14, y: 1035 },    // Marpole
      { x: 13, y: 1749 },    // Mount Pleasant
      { x: 12, y: 64 },     // Musqueam
			{ x: 11, y: 452 },    // Oakridge
			{ x: 10, y: 1542 },    // Renfrew-Collingwood
      { x: 9, y: 737 },     // Riley Park
      { x: 8, y: 627 },     // Shaughnessy
			{ x: 7, y: 250 },    // South Cambie
      { x: 6, y: 229 },     // Stanley Park
      { x: 5, y: 1251 },       // Strathcona
      { x: 4, y: 1419 },      // Sunset
			{ x: 3, y: 863 },      // Victoria-Fraserview
			{ x: 2, y: 1285 },      // West End
      { x: 1, y: 326 }       // West Point Grey
		]
	}
]
});
chart.render();
}


function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
