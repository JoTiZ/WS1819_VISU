breakAndEnterResidentialOther/* ///////////////////////////////////////////////////////////////////////////////// */
/* VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES   */
/* ///////////////////////////////////////////////////////////////////////////////// */
var url = "/dataStackedBarDiagram.txt";
var myVar;
var allData;
var allObjects = [];
var recentObjects = [];
var checkedYearBoxes = [];
var checkedHoodBoxes = [];
var dataPoints;
var recentChartData = "";
//chart-variables with length 24
var breakAndEnterCommercial = [];
var breakAndEnterResidentialOther = [];
var michief = [];
var otherTheft = [];
var theftFromVehicle = [];
var theftOfBicycle = [];
var theftOfVehicle = [];
var vehicleCollisionOrPedestrianStruckWithFatality = [];
var vehicleCollisionOrPedestrianStruckWithInjury = [];

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
          allObjects = JSON.parse(allData);
          console.log("##INFO## ==> all data is now live & parsed");
        }
     }

/* ///////////////////////////////////////////////////////////////////////////////// */
/* FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS   */
/* ///////////////////////////////////////////////////////////////////////////////// */
window.onload = function (){
  recheckAllBoxes();
  chartTwoInit();
  console.log("##INFO## ==> init chart generated");
}

function myFunction(){
  myVar = setTimeout(showPage, 3000);
}

function showPage(){
  document.getElementById("loader").style.display = "none";
  recheckAllBoxes();
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
  loadRecentObjectData();
}

function loadRecentObjectData(){
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
  loadRecentChartData();
}

function loadRecentChartData(){
  console.log("##INFO## ==> loadRecentChartData started");
  //reset all 24-Arrays
  breakAndEnterCommercial = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  breakAndEnterResidentialOther = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  michief = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  otherTheft = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  theftFromVehicle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  theftOfBicycle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  theftOfVehicle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  vehicleCollisionOrPedestrianStruckWithFatality = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  vehicleCollisionOrPedestrianStruckWithInjury = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for(var i = 0; i < recentObjects.length; i++) { //search all current selected objects
    //get type of crime of current entry from recentObjects[i]
    if(recentObjects[i].type == "BreakAndEnterCommercial"){ //BreakAndEnterCommercial
      if(recentObjects[i].hood == "Arbutus Ridge"){
        breakAndEnterCommercial[0] = breakAndEnterCommercial[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        breakAndEnterCommercial[1] = breakAndEnterCommercial[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        breakAndEnterCommercial[2] = breakAndEnterCommercial[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        breakAndEnterCommercial[3] = breakAndEnterCommercial[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        breakAndEnterCommercial[4] = breakAndEnterCommercial[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        breakAndEnterCommercial[5] = breakAndEnterCommercial[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        breakAndEnterCommercial[6] = breakAndEnterCommercial[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        breakAndEnterCommercial[7] = breakAndEnterCommercial[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        breakAndEnterCommercial[8] = breakAndEnterCommercial[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        breakAndEnterCommercial[9] = breakAndEnterCommercial[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        breakAndEnterCommercial[10] = breakAndEnterCommercial[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        breakAndEnterCommercial[11] = breakAndEnterCommercial[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        breakAndEnterCommercial[12] = breakAndEnterCommercial[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        breakAndEnterCommercial[13] = breakAndEnterCommercial[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        breakAndEnterCommercial[14] = breakAndEnterCommercial[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        breakAndEnterCommercial[15] = breakAndEnterCommercial[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        breakAndEnterCommercial[16] = breakAndEnterCommercial[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        breakAndEnterCommercial[17] = breakAndEnterCommercial[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        breakAndEnterCommercial[18] = breakAndEnterCommercial[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        breakAndEnterCommercial[19] = breakAndEnterCommercial[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        breakAndEnterCommercial[20] = breakAndEnterCommercial[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        breakAndEnterCommercial[21] = breakAndEnterCommercial[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        breakAndEnterCommercial[22] = breakAndEnterCommercial[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        breakAndEnterCommercial[23] = breakAndEnterCommercial[23] + 1;
      }
    } else if (recentObjects[i].type  == "BreakAndEnterResidentialOther"){ //breakAndEnterResidentialOther
      if(recentObjects[i].hood == "Arbutus Ridge"){
        breakAndEnterResidentialOther[0] = breakAndEnterResidentialOther[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        breakAndEnterResidentialOther[1] = breakAndEnterResidentialOther[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        breakAndEnterResidentialOther[2] = breakAndEnterResidentialOther[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        breakAndEnterResidentialOther[3] = breakAndEnterResidentialOther[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        breakAndEnterResidentialOther[4] = breakAndEnterResidentialOther[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        breakAndEnterResidentialOther[5] = breakAndEnterResidentialOther[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        breakAndEnterResidentialOther[6] = breakAndEnterResidentialOther[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        breakAndEnterResidentialOther[7] = breakAndEnterResidentialOther[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        breakAndEnterResidentialOther[8] = breakAndEnterResidentialOther[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        breakAndEnterResidentialOther[9] = breakAndEnterResidentialOther[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        breakAndEnterResidentialOther[10] = breakAndEnterResidentialOther[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        breakAndEnterResidentialOther[11] = breakAndEnterResidentialOther[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        breakAndEnterResidentialOther[12] = breakAndEnterResidentialOther[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        breakAndEnterResidentialOther[13] = breakAndEnterResidentialOther[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        breakAndEnterResidentialOther[14] = breakAndEnterResidentialOther[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        breakAndEnterResidentialOther[15] = breakAndEnterResidentialOther[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        breakAndEnterResidentialOther[16] = breakAndEnterResidentialOther[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        breakAndEnterResidentialOther[17] = breakAndEnterResidentialOther[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        breakAndEnterResidentialOther[18] = breakAndEnterResidentialOther[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        breakAndEnterResidentialOther[19] = breakAndEnterResidentialOther[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        breakAndEnterResidentialOther[20] = breakAndEnterResidentialOther[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        breakAndEnterResidentialOther[21] = breakAndEnterResidentialOther[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        breakAndEnterResidentialOther[22] = breakAndEnterResidentialOther[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        breakAndEnterResidentialOther[23] = breakAndEnterResidentialOther[23] + 1;
      }
    } else if (recentObjects[i].type  == "Mischief"){ //michief
      if(recentObjects[i].hood == "Arbutus Ridge"){
        michief[0] = michief[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        michief[1] = michief[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        michief[2] = michief[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        michief[3] = michief[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        michief[4] = michief[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        michief[5] = michief[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        michief[6] = michief[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        michief[7] = michief[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        michief[8] = michief[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        michief[9] = michief[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        michief[10] = michief[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        michief[11] = michief[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        michief[12] = michief[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        michief[13] = michief[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        michief[14] = michief[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        michief[15] = michief[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        michief[16] = michief[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        michief[17] = michief[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        michief[18] = michief[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        michief[19] = michief[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        michief[20] = michief[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        michief[21] = michief[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        michief[22] = michief[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        michief[23] = michief[23] + 1;
      }
    } else if (recentObjects[i].type  == "OtherTheft"){ //otherTheft
      if(recentObjects[i].hood == "Arbutus Ridge"){
        otherTheft[0] = otherTheft[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        otherTheft[1] = otherTheft[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        otherTheft[2] = otherTheft[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        otherTheft[3] = otherTheft[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        otherTheft[4] = otherTheft[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        otherTheft[5] = otherTheft[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        otherTheft[6] = otherTheft[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        otherTheft[7] = otherTheft[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        otherTheft[8] = otherTheft[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        otherTheft[9] = otherTheft[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        otherTheft[10] = otherTheft[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        otherTheft[11] = otherTheft[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        otherTheft[12] = otherTheft[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        otherTheft[13] = otherTheft[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        otherTheft[14] = otherTheft[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        otherTheft[15] = otherTheft[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        otherTheft[16] = otherTheft[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        otherTheft[17] = otherTheft[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        otherTheft[18] = otherTheft[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        otherTheft[19] = otherTheft[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        otherTheft[20] = otherTheft[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        otherTheft[21] = otherTheft[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        otherTheft[22] = otherTheft[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        otherTheft[23] = otherTheft[23] + 1;
      }
    } else if (recentObjects[i].type  == "TheftFromVehicle"){ //theftFromVehicle
      if(recentObjects[i].hood == "Arbutus Ridge"){
        theftFromVehicle[0] = theftFromVehicle[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        theftFromVehicle[1] = theftFromVehicle[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        theftFromVehicle[2] = theftFromVehicle[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        theftFromVehicle[3] = theftFromVehicle[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        theftFromVehicle[4] = theftFromVehicle[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        theftFromVehicle[5] = theftFromVehicle[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        theftFromVehicle[6] = theftFromVehicle[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        theftFromVehicle[7] = theftFromVehicle[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        theftFromVehicle[8] = theftFromVehicle[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        theftFromVehicle[9] = theftFromVehicle[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        theftFromVehicle[10] = theftFromVehicle[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        theftFromVehicle[11] = theftFromVehicle[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        theftFromVehicle[12] = theftFromVehicle[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        theftFromVehicle[13] = theftFromVehicle[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        theftFromVehicle[14] = theftFromVehicle[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        theftFromVehicle[15] = theftFromVehicle[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        theftFromVehicle[16] = theftFromVehicle[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        theftFromVehicle[17] = theftFromVehicle[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        theftFromVehicle[18] = theftFromVehicle[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        theftFromVehicle[19] = theftFromVehicle[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        theftFromVehicle[20] = theftFromVehicle[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        theftFromVehicle[21] = theftFromVehicle[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        theftFromVehicle[22] = theftFromVehicle[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        theftFromVehicle[23] = theftFromVehicle[23] + 1;
      }
    } else if (recentObjects[i].type  == "TheftOfBicycle"){ //theftOfBicycle
      if(recentObjects[i].hood == "Arbutus Ridge"){
        theftOfBicycle[0] = theftOfBicycle[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        theftOfBicycle[1] = theftOfBicycle[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        theftOfBicycle[2] = theftOfBicycle[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        theftOfBicycle[3] = theftOfBicycle[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        theftOfBicycle[4] = theftOfBicycle[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        theftOfBicycle[5] = theftOfBicycle[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        theftOfBicycle[6] = theftOfBicycle[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        theftOfBicycle[7] = theftOfBicycle[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        theftOfBicycle[8] = theftOfBicycle[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        theftOfBicycle[9] = theftOfBicycle[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        theftOfBicycle[10] = theftOfBicycle[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        theftOfBicycle[11] = theftOfBicycle[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        theftOfBicycle[12] = theftOfBicycle[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        theftOfBicycle[13] = theftOfBicycle[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        theftOfBicycle[14] = theftOfBicycle[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        theftOfBicycle[15] = theftOfBicycle[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        theftOfBicycle[16] = theftOfBicycle[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        theftOfBicycle[17] = theftOfBicycle[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        theftOfBicycle[18] = theftOfBicycle[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        theftOfBicycle[19] = theftOfBicycle[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        theftOfBicycle[20] = theftOfBicycle[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        theftOfBicycle[21] = theftOfBicycle[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        theftOfBicycle[22] = theftOfBicycle[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        theftOfBicycle[23] = theftOfBicycle[23] + 1;
      }
    } else if (recentObjects[i].type  == "TheftOfVehicle"){  //theftOfVehicle
      if(recentObjects[i].hood == "Arbutus Ridge"){
        theftOfVehicle[0] = theftOfVehicle[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        theftOfVehicle[1] = theftOfVehicle[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        theftOfVehicle[2] = theftOfVehicle[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        theftOfVehicle[3] = theftOfVehicle[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        theftOfVehicle[4] = theftOfVehicle[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        theftOfVehicle[5] = theftOfVehicle[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        theftOfVehicle[6] = theftOfVehicle[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        theftOfVehicle[7] = theftOfVehicle[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        theftOfVehicle[8] = theftOfVehicle[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        theftOfVehicle[9] = theftOfVehicle[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        theftOfVehicle[10] = theftOfVehicle[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        theftOfVehicle[11] = theftOfVehicle[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        theftOfVehicle[12] = theftOfVehicle[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        theftOfVehicle[13] = theftOfVehicle[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        theftOfVehicle[14] = theftOfVehicle[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        theftOfVehicle[15] = theftOfVehicle[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        theftOfVehicle[16] = theftOfVehicle[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        theftOfVehicle[17] = theftOfVehicle[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        theftOfVehicle[18] = theftOfVehicle[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        theftOfVehicle[19] = theftOfVehicle[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        theftOfVehicle[20] = theftOfVehicle[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        theftOfVehicle[21] = theftOfVehicle[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        theftOfVehicle[22] = theftOfVehicle[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        theftOfVehicle[23] = theftOfVehicle[23] + 1;
      }
    } else if (recentObjects[i].type  == "VehicleCollisionOrPedestrianStruckWithFatality"){ //vehicleCollisionOrPedestrianStruckWithFatality
      if(recentObjects[i].hood == "Arbutus Ridge"){
        vehicleCollisionOrPedestrianStruckWithFatality[0] = vehicleCollisionOrPedestrianStruckWithFatality[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        vehicleCollisionOrPedestrianStruckWithFatality[1] = vehicleCollisionOrPedestrianStruckWithFatality[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        vehicleCollisionOrPedestrianStruckWithFatality[2] = vehicleCollisionOrPedestrianStruckWithFatality[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        vehicleCollisionOrPedestrianStruckWithFatality[3] = vehicleCollisionOrPedestrianStruckWithFatality[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        vehicleCollisionOrPedestrianStruckWithFatality[4] = vehicleCollisionOrPedestrianStruckWithFatality[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        vehicleCollisionOrPedestrianStruckWithFatality[5] = vehicleCollisionOrPedestrianStruckWithFatality[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        vehicleCollisionOrPedestrianStruckWithFatality[6] = vehicleCollisionOrPedestrianStruckWithFatality[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        vehicleCollisionOrPedestrianStruckWithFatality[7] = vehicleCollisionOrPedestrianStruckWithFatality[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        vehicleCollisionOrPedestrianStruckWithFatality[8] = vehicleCollisionOrPedestrianStruckWithFatality[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        vehicleCollisionOrPedestrianStruckWithFatality[9] = vehicleCollisionOrPedestrianStruckWithFatality[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        vehicleCollisionOrPedestrianStruckWithFatality[10] = vehicleCollisionOrPedestrianStruckWithFatality[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        vehicleCollisionOrPedestrianStruckWithFatality[11] = vehicleCollisionOrPedestrianStruckWithFatality[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        vehicleCollisionOrPedestrianStruckWithFatality[12] = vehicleCollisionOrPedestrianStruckWithFatality[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        vehicleCollisionOrPedestrianStruckWithFatality[13] = vehicleCollisionOrPedestrianStruckWithFatality[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        vehicleCollisionOrPedestrianStruckWithFatality[14] = vehicleCollisionOrPedestrianStruckWithFatality[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        vehicleCollisionOrPedestrianStruckWithFatality[15] = vehicleCollisionOrPedestrianStruckWithFatality[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        vehicleCollisionOrPedestrianStruckWithFatality[16] = vehicleCollisionOrPedestrianStruckWithFatality[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        vehicleCollisionOrPedestrianStruckWithFatality[17] = vehicleCollisionOrPedestrianStruckWithFatality[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        vehicleCollisionOrPedestrianStruckWithFatality[18] = vehicleCollisionOrPedestrianStruckWithFatality[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        vehicleCollisionOrPedestrianStruckWithFatality[19] = vehicleCollisionOrPedestrianStruckWithFatality[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        vehicleCollisionOrPedestrianStruckWithFatality[20] = vehicleCollisionOrPedestrianStruckWithFatality[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        vehicleCollisionOrPedestrianStruckWithFatality[21] = vehicleCollisionOrPedestrianStruckWithFatality[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        vehicleCollisionOrPedestrianStruckWithFatality[22] = vehicleCollisionOrPedestrianStruckWithFatality[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        vehicleCollisionOrPedestrianStruckWithFatality[23] = vehicleCollisionOrPedestrianStruckWithFatality[23] + 1;
      }
    } else if (recentObjects[i].type  == "VehicleCollisionOrPedestrianStruckWithInjury"){ //vehicleCollisionOrPedestrianStruckWithInjury
      if(recentObjects[i].hood == "Arbutus Ridge"){
        vehicleCollisionOrPedestrianStruckWithInjury[0] = vehicleCollisionOrPedestrianStruckWithInjury[0] + 1;
      }else if(recentObjects[i].hood == "Central Business District") {
        vehicleCollisionOrPedestrianStruckWithInjury[1] = vehicleCollisionOrPedestrianStruckWithInjury[1] + 1;
      }else if(recentObjects[i].hood == "Dunbar-Southlands") {
        vehicleCollisionOrPedestrianStruckWithInjury[2] = vehicleCollisionOrPedestrianStruckWithInjury[2] + 1;
      }else if(recentObjects[i].hood == "Fairview") {
        vehicleCollisionOrPedestrianStruckWithInjury[3] = vehicleCollisionOrPedestrianStruckWithInjury[3] + 1;
      }else if(recentObjects[i].hood == "Grandview-Woodland") {
        vehicleCollisionOrPedestrianStruckWithInjury[4] = vehicleCollisionOrPedestrianStruckWithInjury[4] + 1;
      }else if(recentObjects[i].hood == "Hastings-Sunrise") {
        vehicleCollisionOrPedestrianStruckWithInjury[5] = vehicleCollisionOrPedestrianStruckWithInjury[5] + 1;
      }else if(recentObjects[i].hood == "Kensington-Cedar Cottage") {
        vehicleCollisionOrPedestrianStruckWithInjury[6] = vehicleCollisionOrPedestrianStruckWithInjury[6] + 1;
      }else if(recentObjects[i].hood == "Kerrisdale") {
        vehicleCollisionOrPedestrianStruckWithInjury[7] = vehicleCollisionOrPedestrianStruckWithInjury[7] + 1;
      }else if(recentObjects[i].hood == "Killarney") {
        vehicleCollisionOrPedestrianStruckWithInjury[8] = vehicleCollisionOrPedestrianStruckWithInjury[8] + 1;
      }else if(recentObjects[i].hood == "Kitsilano") {
        vehicleCollisionOrPedestrianStruckWithInjury[9] = vehicleCollisionOrPedestrianStruckWithInjury[9] + 1;
      }else if(recentObjects[i].hood == "Marpole") {
        vehicleCollisionOrPedestrianStruckWithInjury[10] = vehicleCollisionOrPedestrianStruckWithInjury[10] + 1;
      }else if(recentObjects[i].hood == "Mount Pleasant") {
        vehicleCollisionOrPedestrianStruckWithInjury[11] = vehicleCollisionOrPedestrianStruckWithInjury[11] + 1;
      }else if(recentObjects[i].hood == "Musqueam") {
        vehicleCollisionOrPedestrianStruckWithInjury[12] = vehicleCollisionOrPedestrianStruckWithInjury[12] + 1;
      }else if(recentObjects[i].hood == "Oakridge") {
        vehicleCollisionOrPedestrianStruckWithInjury[13] = vehicleCollisionOrPedestrianStruckWithInjury[13] + 1;
      }else if(recentObjects[i].hood == "Renfrew-Collingwood") {
        vehicleCollisionOrPedestrianStruckWithInjury[14] = vehicleCollisionOrPedestrianStruckWithInjury[14] + 1;
      }else if(recentObjects[i].hood == "Riley Park") {
        vehicleCollisionOrPedestrianStruckWithInjury[15] = vehicleCollisionOrPedestrianStruckWithInjury[15] + 1;
      }else if(recentObjects[i].hood == "Shaughnessy") {
        vehicleCollisionOrPedestrianStruckWithInjury[16] = vehicleCollisionOrPedestrianStruckWithInjury[16] + 1;
      }else if(recentObjects[i].hood == "South Cambie") {
        vehicleCollisionOrPedestrianStruckWithInjury[17] = vehicleCollisionOrPedestrianStruckWithInjury[17] + 1;
      }else if(recentObjects[i].hood == "Stanley Park") {
        vehicleCollisionOrPedestrianStruckWithInjury[18] = vehicleCollisionOrPedestrianStruckWithInjury[18] + 1;
      }else if(recentObjects[i].hood == "Strathcona") {
        vehicleCollisionOrPedestrianStruckWithInjury[19] = vehicleCollisionOrPedestrianStruckWithInjury[19] + 1;
      }else if(recentObjects[i].hood == "Sunset") {
        vehicleCollisionOrPedestrianStruckWithInjury[20] = vehicleCollisionOrPedestrianStruckWithInjury[20] + 1;
      }else if(recentObjects[i].hood == "Victoria-Fraserview") {
        vehicleCollisionOrPedestrianStruckWithInjury[21] = vehicleCollisionOrPedestrianStruckWithInjury[21] + 1;
      }else if(recentObjects[i].hood == "West End") {
        vehicleCollisionOrPedestrianStruckWithInjury[22] = vehicleCollisionOrPedestrianStruckWithInjury[22] + 1;
      }else if(recentObjects[i].hood == "West Point Grey") {
        vehicleCollisionOrPedestrianStruckWithInjury[23] = vehicleCollisionOrPedestrianStruckWithInjury[23] + 1;
      }
    }
  }

  /*
  console.log(breakAndEnterCommercial);
  console.log(breakAndEnterResidentialOther);
  console.log(michief);
  console.log(otherTheft);
  console.log(theftFromVehicle);
  console.log(theftOfBicycle);
  console.log(theftOfVehicle);
  console.log(vehicleCollisionOrPedestrianStruckWithFatality);
  console.log(vehicleCollisionOrPedestrianStruckWithInjury);
  */
  redrawChart();
}

function prepareDataPoints(){
  var tmp;
  var allHoodsSet = true;

  if(breakAndEnterCommercial.includes(0) && breakAndEnterResidentialOther.includes(0) &&
    michief.includes(0) && otherTheft .includes(0) && theftFromVehicle.includes(0) &&
    theftOfBicycle.includes(0) && theftOfVehicle.includes(0) &&
    vehicleCollisionOrPedestrianStruckWithFatality.includes(0) &&
    vehicleCollisionOrPedestrianStruckWithInjury.includes(0)){
      allHoodsSet = false;
  }

  if(allHoodsSet){
    //preparations for BreakAndEnterCommercial
    tmp = '[{ "type": "stackedBar", "name": "Break and Enter Commercial", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + breakAndEnterCommercial[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + breakAndEnterCommercial[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + breakAndEnterCommercial[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + breakAndEnterCommercial[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + breakAndEnterCommercial[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + breakAndEnterCommercial[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + breakAndEnterCommercial[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + breakAndEnterCommercial[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + breakAndEnterCommercial[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + breakAndEnterCommercial[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + breakAndEnterCommercial[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + breakAndEnterCommercial[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + breakAndEnterCommercial[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + breakAndEnterCommercial[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + breakAndEnterCommercial[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + breakAndEnterCommercial[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + breakAndEnterCommercial[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + breakAndEnterCommercial[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + breakAndEnterCommercial[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + breakAndEnterCommercial[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + breakAndEnterCommercial[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + breakAndEnterCommercial[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + breakAndEnterCommercial[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + breakAndEnterCommercial[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for BreakAndEnterResidentialOther
    tmp = '{ "type": "stackedBar", "name": "Break and Enter Residential / Other", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + breakAndEnterResidentialOther[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + breakAndEnterResidentialOther[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + breakAndEnterResidentialOther[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + breakAndEnterResidentialOther[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + breakAndEnterResidentialOther[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + breakAndEnterResidentialOther[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + breakAndEnterResidentialOther[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + breakAndEnterResidentialOther[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + breakAndEnterResidentialOther[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + breakAndEnterResidentialOther[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + breakAndEnterResidentialOther[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + breakAndEnterResidentialOther[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + breakAndEnterResidentialOther[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + breakAndEnterResidentialOther[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + breakAndEnterResidentialOther[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + breakAndEnterResidentialOther[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + breakAndEnterResidentialOther[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + breakAndEnterResidentialOther[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + breakAndEnterResidentialOther[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + breakAndEnterResidentialOther[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + breakAndEnterResidentialOther[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + breakAndEnterResidentialOther[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + breakAndEnterResidentialOther[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + breakAndEnterResidentialOther[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for michief
    tmp = '{ "type": "stackedBar", "name": "Michief", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + michief[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + michief[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + michief[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + michief[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + michief[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + michief[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + michief[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + michief[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + michief[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + michief[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + michief[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + michief[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + michief[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + michief[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + michief[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + michief[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + michief[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + michief[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + michief[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + michief[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + michief[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + michief[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + michief[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + michief[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for otherTheft
    tmp = '{ "type": "stackedBar", "name": "Other Theft", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + otherTheft[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + otherTheft[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + otherTheft[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + otherTheft[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + otherTheft[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + otherTheft[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + otherTheft[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + otherTheft[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + otherTheft[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + otherTheft[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + otherTheft[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + otherTheft[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + otherTheft[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + otherTheft[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + otherTheft[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + otherTheft[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + otherTheft[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + otherTheft[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + otherTheft[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + otherTheft[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + otherTheft[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + otherTheft[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + otherTheft[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + otherTheft[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for theftFromVehicle
    tmp = '{ "type": "stackedBar", "name": "Theft From Vehicle", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + theftFromVehicle[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + theftFromVehicle[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + theftFromVehicle[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + theftFromVehicle[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + theftFromVehicle[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + theftFromVehicle[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + theftFromVehicle[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + theftFromVehicle[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + theftFromVehicle[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + theftFromVehicle[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + theftFromVehicle[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + theftFromVehicle[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + theftFromVehicle[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + theftFromVehicle[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + theftFromVehicle[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + theftFromVehicle[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + theftFromVehicle[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + theftFromVehicle[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + theftFromVehicle[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + theftFromVehicle[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + theftFromVehicle[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + theftFromVehicle[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + theftFromVehicle[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + theftFromVehicle[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for theftOfBicycle
    tmp = '{ "type": "stackedBar", "name": "Theft Of Bicycle", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + theftOfBicycle[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + theftOfBicycle[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + theftOfBicycle[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + theftOfBicycle[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + theftOfBicycle[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + theftOfBicycle[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + theftOfBicycle[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + theftOfBicycle[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + theftOfBicycle[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + theftOfBicycle[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + theftOfBicycle[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + theftOfBicycle[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + theftOfBicycle[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + theftOfBicycle[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + theftOfBicycle[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + theftOfBicycle[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + theftOfBicycle[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + theftOfBicycle[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + theftOfBicycle[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + theftOfBicycle[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + theftOfBicycle[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + theftOfBicycle[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + theftOfBicycle[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + theftOfBicycle[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for theftOfVehicle
    tmp = '{ "type": "stackedBar", "name": "Theft Of Vehicle", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + theftOfVehicle[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + theftOfVehicle[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + theftOfVehicle[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + theftOfVehicle[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + theftOfVehicle[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + theftOfVehicle[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + theftOfVehicle[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + theftOfVehicle[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + theftOfVehicle[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + theftOfVehicle[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + theftOfVehicle[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + theftOfVehicle[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + theftOfVehicle[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + theftOfVehicle[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + theftOfVehicle[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + theftOfVehicle[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + theftOfVehicle[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + theftOfVehicle[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + theftOfVehicle[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + theftOfVehicle[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + theftOfVehicle[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + theftOfVehicle[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + theftOfVehicle[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + theftOfVehicle[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for vehicleCollisionOrPedestrianStruckWithFatality
    tmp = '{ "type": "stackedBar", "name": "Vehicle Collision Or Pedestrian Struck With Fatality", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + vehicleCollisionOrPedestrianStruckWithFatality[23] + '}]';
    tmp += '},';
    recentChartData += tmp;

    //preparations for vehicleCollisionOrPedestrianStruckWithInjury
    tmp = '{ "type": "stackedBar", "name": "Vehicle Collision Or Pedestrian Struck With Injury", "markerSize": 5, "showInLegend": "true", "xValueFormatString": "",  "yValueFormatString": "", "dataPoints":';
    tmp += '[{ "label": "Arbutus Ridge", "x": 24, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[0] + '},';
    tmp += '{ "label": "Central Business District", "x": 23, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[1] + '},';
    tmp += '{ "label": "Dunbar-Southlands", "x": 22, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[2] + '},';
    tmp += '{ "label": "Fairview", "x": 21, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[3] + '},';
    tmp += '{ "label": "Grandview-Woodland", "x": 20, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[4] + '},';
    tmp += '{ "label": "Hastings-Sunrise", "x": 19, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[5] + '},';
    tmp += '{ "label": "Kensington-Cedar Cottage", "x": 18, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[6] + '},';
    tmp += '{ "label": "Kerrisdale", "x": 17, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[7] + '},';
    tmp += '{ "label": "Killarney", "x": 16, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[8] + '},';
    tmp += '{ "label": "Kitsilano", "x": 15, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[9] + '},';
    tmp += '{ "label": "Marpole", "x": 14, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[10] + '},';
    tmp += '{ "label": "Mount Pleasant", "x": 13, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[11] + '},';
    tmp += '{ "label": "Musqueam", "x": 12, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[12] + '},';
    tmp += '{ "label": "Oakridge", "x": 11, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[13] + '},';
    tmp += '{ "label": "Renfrew-Collingwood", "x": 10, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[14] + '},';
    tmp += '{ "label": "Riley Park", "x": 9, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[15] + '},';
    tmp += '{ "label": "Shaughnessy", "x": 8, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[16] + '},';
    tmp += '{ "label": "South Cambie", "x": 7, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[17] + '},';
    tmp += '{ "label": "Stanley Park", "x": 6, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[18] + '},';
    tmp += '{ "label": "Strathcona", "x": 5, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[19] + '},';
    tmp += '{ "label": "Sunset", "x": 4, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[20] + '},';
    tmp += '{ "label": "Victoria-Fraserview", "x": 3, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[21] + '},';
    tmp += '{ "label": "West End", "x": 2, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[22] + '},';
    tmp += '{ "label": "West Point Grey", "x": 1, "y": ' + vehicleCollisionOrPedestrianStruckWithInjury[23] + '}]';
    recentChartData += tmp;

    recentChartData += '}]';
  }else{
    //error :p
  }
  dataPoints = JSON.parse(recentChartData);
  recentChartData = "";
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

function redrawChart(){
  prepareDataPoints();
  var chart = new CanvasJS.Chart("chartContainer",
  {
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
    data:  dataPoints
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
