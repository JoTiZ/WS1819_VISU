var url = "/dataStackedBarDiagram.txt";
var allData;
var allObjects = [];
var recentObjects = [];
var checkedYearBoxes = [];
//var checkedCrimeBoxes = [];
var checkedHoodBoxes = [];
//chart-variables with length 24
var breakAndEnterCommercial = [24];
var breakAndEnterResidentialOther = [24];
var michief = [24];
var otherTheft = [24];
var theftFromVehicle = [24];
var theftOfBicycle = [24];
var theftOfVehicle = [24];
var vehicleCollisionOrPedestrianStruckWithFatality = [24];
var vehicleCollisionOrPedestrianStruckWithInjury = [24];

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
          allObjects = JSON.parse(allData);
          console.log(allObjects);
          console.log("##INFO## ==> all data is now live & parsed");
        }
     }

window.onload = function () {
  recheckAllBoxes();
  chartTwoInit();
  console.log("##INFO## ==> init chart generated");
}



var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  //document.getElementById("myDiv").style.display = "block";
  //document.getElementById("chartContainer").style.display = "non";
  chartTwoInit();
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
  //document.getElementById("BreakAndEnterCommercial").checked = true;
  //document.getElementById("BreakAndEnterResidentialOther").checked = true;
  //document.getElementById("Mischief").checked = true;
  //document.getElementById("OtherTheft").checked = true;
  //document.getElementById("TheftFromVehicle").checked = true;
  //document.getElementById("TheftOfBicycle").checked = true;
  //document.getElementById("TheftOfVehicle").checked = true;
  //document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked = true;
  //document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked = true;
  document.getElementById("Arbutus Ridge").checked = true;
  document.getElementById("Central Business District").checked = true;
  document.getElementById("Dunbar-Southlands").checked = true;
  document.getElementById("Fairview").checked = true;
  document.getElementById("Grandview-Woodland").checked = true;
  document.getElementById("Hastings-Sunrise").checked = true;
  document.getElementById("Kensington-Cedar Cottage").checked = true;
  document.getElementById("Kerrisdale").checked = true;
  document.getElementById("Killarney").checked = true;
  document.getElementById("Kitsilano").checked = true;
  document.getElementById("Marpole").checked = true;
  document.getElementById("Mount Pleasant").checked = true;
  document.getElementById("Musqueam").checked = true;
  document.getElementById("Oakridge").checked = true;
  document.getElementById("Renfrew-Collingwood").checked = true;
  document.getElementById("Riley Park").checked = true;
  document.getElementById("Shaughnessy").checked = true;
  document.getElementById("South Cambie").checked = true;
  document.getElementById("Stanley Park").checked = true;
  document.getElementById("Strathcona").checked = true;
  document.getElementById("Sunset").checked = true;
  document.getElementById("Victoria-Fraserview").checked = true;
  document.getElementById("West End").checked = true;
  document.getElementById("West Point Grey").checked = true;

  console.log("##INFO## ==> rechecked all boxes");
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

/*
  //check witch crimes are checked
  checkedCrimeBoxes.length = 0;
  if(document.getElementById("BreakAndEnterCommercial").checked == true){
    checkedCrimeBoxes.push("BreakAndEnterCommercial");
  }
  if(document.getElementById("BreakAndEnterResidentialOther").checked == true){
    checkedCrimeBoxes.push("BreakAndEnterResidentialOther");
  }
  if(document.getElementById("Mischief").checked == true){
    checkedCrimeBoxes.push("Mischief");
  }
  if(document.getElementById("OtherTheft").checked == true){
    checkedCrimeBoxes.push("OtherTheft");
  }
  if(document.getElementById("TheftFromVehicle").checked == true){
    checkedCrimeBoxes.push("TheftFromVehicle");
  }
  if(document.getElementById("TheftOfBicycle").checked == true){
    checkedCrimeBoxes.push("TheftOfBicycle");
  }
  if(document.getElementById("TheftOfVehicle").checked == true){
    checkedCrimeBoxes.push("TheftOfVehicle");
  }
  if(document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true){
    checkedCrimeBoxes.push("VehicleCollisionOrPedestrianStruckWithFatality");
  }
  if(document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true){
    checkedCrimeBoxes.push("VehicleCollisionOrPedestrianStruckWithInjury");
  }
*/
  //check witch hoods are checked
  checkedHoodBoxes.length = 0;
  if(document.getElementById("Arbutus Ridge").checked == true){
    checkedHoodBoxes.push("Arbutus Ridge");
  }
  if(document.getElementById("Central Business District").checked == true){
    checkedHoodBoxes.push("Central Business District");
  }
  if(document.getElementById("Dunbar-Southlands").checked == true){
    checkedHoodBoxes.push("Dunbar-Southlands");
  }
  if(document.getElementById("Fairview").checked == true){
    checkedHoodBoxes.push("Fairview");
  }
  if(document.getElementById("Grandview-Woodland").checked == true){
    checkedHoodBoxes.push("Grandview-Woodland");
  }
  if(document.getElementById("Hastings-Sunrise").checked == true){
    checkedHoodBoxes.push("Hastings-Sunrise");
  }
  if(document.getElementById("Kensington-Cedar Cottage").checked == true){
    checkedHoodBoxes.push("Kensington-Cedar Cottage");
  }
  if(document.getElementById("Kerrisdale").checked == true){
    checkedHoodBoxes.push("Kerrisdale");
  }
  if(document.getElementById("Killarney").checked == true){
    checkedHoodBoxes.push("Killarney");
  }
  if(document.getElementById("Kitsilano").checked == true){
    checkedHoodBoxes.push("Kitsilano");
  }
  if(document.getElementById("Marpole").checked == true){
    checkedHoodBoxes.push("Marpole");
  }
  if(document.getElementById("Mount Pleasant").checked == true){
    checkedHoodBoxes.push("Mount Pleasant");
  }
  if(document.getElementById("Musqueam").checked == true){
    checkedHoodBoxes.push("Musqueam");
  }
  if(document.getElementById("Oakridge").checked == true){
    checkedHoodBoxes.push("Oakridge");
  }
  if(document.getElementById("Renfrew-Collingwood").checked == true){
    checkedHoodBoxes.push("Renfrew-Collingwood");
  }
  if(document.getElementById("Riley Park").checked == true){
    checkedHoodBoxes.push("Riley Park");
  }
  if(document.getElementById("Shaughnessy").checked == true){
    checkedHoodBoxes.push("Shaughnessy");
  }
  if(document.getElementById("South Cambie").checked == true){
    checkedHoodBoxes.push("South Cambie");
  }
  if(document.getElementById("Stanley Park").checked == true){
    checkedHoodBoxes.push("Stanley Park");
  }
  if(document.getElementById("Strathcona").checked == true){
    checkedHoodBoxes.push("Strathcona");
  }
  if(document.getElementById("Sunset").checked == true){
    checkedHoodBoxes.push("Sunset");
  }
  if(document.getElementById("Victoria-Fraserview").checked == true){
    checkedHoodBoxes.push("Victoria-Fraserview");
  }
  if(document.getElementById("West End").checked == true){
    checkedHoodBoxes.push("West End");
  }
  if(document.getElementById("West Point Grey").checked == true){
    checkedHoodBoxes.push("West Point Grey");
  }
  console.log("##INFO## ==> checkbox state changed");
  loadNeededObjectData();
}

function loadNeededObjectData(){
  //filter for recent used objects (year & typeofcrime)
  var tmpYearArray = [];
  //var tmpCrimeArray = [];
  var tmpHoodArray = [];
  recentObjects.length = 0;

  //find the checked years
  for(var j = 0; j <= checkedYearBoxes.length; j++){
    for (var i = 0; i < allObjects.length; i++){
      if (allObjects[i].year == checkedYearBoxes[j]){
        tmpYearArray.push(allObjects[i]);
      }
    }
  }
  //find the checked type of checkedHoodBoxes
  for(var j = 0; j <= checkedHoodBoxes.length; j++){
      for(var i = 0; i < tmpYearArray.length; i++){
        if(tmpYearArray[i].hood == checkedHoodBoxes[j]){
          recentObjects.push(tmpYearArray[i]);
        }
      }
  }
  console.log("##INFO## ==> new dataset created: " + recentObjects.length + " objects active");
}

//function for init loading or all checked
function chartTwoInit(){
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
		itemclick: toggleDataSeries,
    fontSize: 14
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

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}


}
