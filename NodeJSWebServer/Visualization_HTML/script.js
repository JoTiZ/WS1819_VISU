var url = "/HeatMapConvertedData/ALL_DATA.txt";

var allData;

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
          //alert(allData);
        }
     }

function loadDataAgain(url)
{
  var newData
  var jsonFile = new XMLHttpRequest();
      jsonFile.open("GET",url,true);
      jsonFile.send();

      jsonFile.onreadystatechange = function() {
          if (jsonFile.readyState== 4 && jsonFile.status == 200) {
            newData = jsonFile.responseText;
            heatMapAll(newData)
          }
       }


}

window.onload = function () {
  heatMapAll(allData);
  uncheckAll();

}


function uncheckAll()
{
  document.getElementById("BreakAndEnterCommercial").checked = false;
  document.getElementById("BreakAndEnterResidentialOther").checked = false;
  document.getElementById("Mischief").checked = false;
  document.getElementById("OtherTheft").checked = false;
  document.getElementById("TheftFromVehicle").checked = false;
  document.getElementById("TheftOfBicycle").checked = false;
  document.getElementById("TheftOfVehicle").checked = false;
  document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked = false;
  document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked = false;
}

function uncheckAll2()
{
  document.getElementById("radioAll").checked = false;
  document.getElementById("radio2003").checked = false;
  document.getElementById("radio2004").checked = false;
  document.getElementById("radio2005").checked = false;
  document.getElementById("radio2006").checked = false;
  document.getElementById("radio2007").checked = false;
  document.getElementById("radio2008").checked = false;
  document.getElementById("radio2009").checked = false;
  document.getElementById("radio2010").checked = false;
  document.getElementById("radio2011").checked = false;
  document.getElementById("radio2012").checked = false;
  document.getElementById("radio2013").checked = false;
  document.getElementById("radio2014").checked = false;
  document.getElementById("radio2015").checked = false;
  document.getElementById("radio2016").checked = false;
  document.getElementById("radio2017").checked = false;
  document.getElementById("radio2018").checked = false;
  document.getElementById("BreakAndEnterCommercial").checked = false;
  document.getElementById("BreakAndEnterResidentialOther").checked = false;
  document.getElementById("Mischief").checked = false;
  document.getElementById("OtherTheft").checked = false;
  document.getElementById("TheftFromVehicle").checked = false;
  document.getElementById("TheftOfBicycle").checked = false;
  document.getElementById("TheftOfVehicle").checked = false;
  document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked = false;
  document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked = false;
}

function radioFunction()
{
  if(document.getElementById("radioAll").checked == true)
  {
    document.getElementById("map").style.visibility='visible';
    loadDataAgain("/HeatMapConvertedData/ALL_DATA.txt");
    uncheckAll();
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2003").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2003.txt");
  }
  else if (document.getElementById("radio2004").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2004.txt");
  }
  else if (document.getElementById("radio2005").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2005.txt");
  }
  else if (document.getElementById("radio2006").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2006.txt");
  }
  else if (document.getElementById("radio2007").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2007.txt");
  }
  else if (document.getElementById("radio2008").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2008.txt");
  }
  else if (document.getElementById("radio2009").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2009.txt");
  }
  else if (document.getElementById("radio2010").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2010.txt");
  }
  else if (document.getElementById("radio2011").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2011.txt");
  }
  else if (document.getElementById("radio2012").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2012.txt");
  }
  else if (document.getElementById("radio2013").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2013.txt");
  }
  else if (document.getElementById("radio2014").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2014.txt");
  }
  else if (document.getElementById("radio2015").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2015.txt");
  }
  else if (document.getElementById("radio2016").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2016.txt");
  }
  else if (document.getElementById("radio2017").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2017.txt");
  }
  else if (document.getElementById("radio2018").checked == true
  && document.getElementById("BreakAndEnterCommercial").checked == false
  && document.getElementById("BreakAndEnterResidentialOther").checked == false
  && document.getElementById("Mischief").checked == false
  && document.getElementById("OtherTheft").checked == false
  && document.getElementById("TheftFromVehicle").checked == false
  && document.getElementById("TheftOfBicycle").checked == false
  && document.getElementById("TheftOfVehicle").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == false
  && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == false)  {
    loadDataAgain("/HeatMapConvertedData/Years/2018.txt");
  }


  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2003").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2003Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Mischief.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Other_Theft.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2003").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2003Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2004").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2004Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Mischief.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Other_Theft.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2004").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2004Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2005").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2005Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Mischief.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Other_Theft.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2005").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2005Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2006").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2006Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Mischief.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Other_Theft.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2006").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2006Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2007").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2007Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Mischief.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Other_Theft.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2007").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2007Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2008").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2008Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Mischief.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Other_Theft.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2008").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2008Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2009").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2009Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Mischief.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Other_Theft.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2009").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2009Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2010").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2010Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Mischief.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Other_Theft.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2010").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2010Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2011").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2011Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Mischief.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Other_Theft.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2011").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2012").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2012Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Mischief.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Other_Theft.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2012Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2012").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2011Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2013").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2013Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Mischief.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Other_Theft.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2013").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2013Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2014").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2014Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Mischief.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Other_Theft.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2014").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2014Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2015").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2015Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Mischief.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Other_Theft.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2015").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2015Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2016").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2016Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Mischief.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Other_Theft.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2016").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2016Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2017").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2017Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Mischief.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Other_Theft.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2017").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2017Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////
  else if (document.getElementById("radio2018").checked == true && document.getElementById("BreakAndEnterCommercial").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Break_and_Enter_Commercial.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("BreakAndEnterResidentialOther").checked == true)  {
      loadDataAgain("/HeatMapConvertedData/2018Break_and_Enter_Residential_Other.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("Mischief").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Mischief.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("OtherTheft").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Other_Theft.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("TheftFromVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Theft_from_Vehicle.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("TheftOfBicycle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Theft_of_Bicycle.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("TheftOfVehicle").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Theft_of_Vehicle.txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithFatality").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Vehicle_Collision_or_Pedestrian_Struck_(with_Fatality).txt");
  }
  else if (document.getElementById("radio2018").checked == true && document.getElementById("VehicleCollisionOrPedestrianStruckWithInjury").checked == true)  {
    loadDataAgain("/HeatMapConvertedData/2018Vehicle_Collision_or_Pedestrian_Struck_(with_Injury).txt");
  }
  ////////////////////////////////////////////////////////////////////////////////

}

///////////////////////////////////////////////////////////////////////////////////
function heatMapAll(allData)
{
  document.getElementById('map').innerHTML = "<div id='map2' style='width: 100%; height: 100%; left: 0%; top: 0%;'></div>";
  //alert(allData);
//var myobj = JSON.parse('[{"lat": 49.2510882, "lng":-123.1804479, "count": 1},{"lat": 49.2719256, "lng":-123.135107, "count": 1}]');
var myobj = JSON.parse(allData);

//alert(myobj);
  var testData = {
    max: 8,
    data:myobj


  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;


}
