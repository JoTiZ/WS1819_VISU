var url = "/scatterPlotAllData.txt";

var allDataStart = '[{\n'+
  ' "type": "scatter",\n'+
' "toolTipContent": "<b>Year: </b>{x} <br/><b>Number of crimes: </b>{y}",\n'+
' "dataPoints": [\n';
var allDataEnd=' ]}]';
var allData;
var allConvertedData;
var completeData;
var allDataObjects;
var currentData;

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
	jsonFile.setRequestHeader("Content-Type", "application/json");
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {

      allData = jsonFile.responseText;
      var lines = allData.split('\n');

      var counter2003= 0;
      var counter2004= 0;
      var counter2005= 0;
      var counter2006= 0;
      var counter2007= 0;
      var counter2008= 0;
      var counter2009= 0;
      var counter2010= 0;
      var counter2011= 0;
      var counter2012= 0;
      var counter2013= 0;
      var counter2014= 0;
      var counter2015= 0;
      var counter2016= 0;
      var counter2017= 0;
      var counter2018= 0;

      for(var i = 0;i < lines.length;i++)
      {
        if(lines[i].includes("2003"))
        {counter2003++;}
        else if(lines[i].includes("2004"))
        {counter2004++;}
        else if(lines[i].includes("2005"))
        {counter2005++;}
        else if(lines[i].includes("2006"))
        {counter2006++;}
        else if(lines[i].includes("2007"))
        {counter2007++;}
        else if(lines[i].includes("2008"))
        {counter2008++;}
        else if(lines[i].includes("2009"))
        {counter2009++;}
        else if(lines[i].includes("2010"))
        {counter2010++;}
        else if(lines[i].includes("2011"))
        {counter2011++;}
        else if(lines[i].includes("2012"))
        {counter2012++;}
        else if(lines[i].includes("2013"))
        {counter2013++;}
        else if(lines[i].includes("2014"))
        {counter2014++;}
        else if(lines[i].includes("2015"))
        {counter2015++;}
        else if(lines[i].includes("2016"))
        {counter2016++;}
        else if(lines[i].includes("2017"))
        {counter2017++;}
        else if(lines[i].includes("2018"))
        {counter2018++;}
      }

      //alert(counter2003);
      allConvertedData ='{"x": 2003, "y":'+counter2003+'},\n'
      allConvertedData = allConvertedData + '{"x": 2004, "y":'+counter2004+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2005, "y":'+counter2005+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2006, "y":'+counter2006+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2007, "y":'+counter2007+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2008, "y":'+counter2008+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2009, "y":'+counter2009+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2010, "y":'+counter2010+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2011, "y":'+counter2011+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2012, "y":'+counter2012+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2013, "y":'+counter2013+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2014, "y":'+counter2014+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2015, "y":'+counter2015+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2016, "y":'+counter2016+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2017, "y":'+counter2017+'},'+'\n'
      allConvertedData = allConvertedData + '{"x": 2018, "y":'+counter2018+'}'+'\n'

      completeData = allDataStart + allConvertedData + allDataEnd;
      //console.log(completeData);
		  allDataObjects = JSON.parse(completeData);
		  currentData = allDataObjects;
      maximum = Math. max(counter2003, counter2004, counter2005, counter2006,counter2007,counter2008,counter2009,counter2010,counter2011,counter2012,counter2013,counter2014,counter2015,counter2016,counter2017,counter2018);
      maximum +=10000;
      chartThree(currentData,maximum);
      //console.log(currentData);
        }
     }

window.onload = function () {

  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;

}

function loadDataAgain(selectedNeighborhood,selectedCrime)
{
  var url = "/scatterPlotAllData.txt";
  var jsonFile = new XMLHttpRequest();
      jsonFile.open("GET",url,true);
  	jsonFile.setRequestHeader("Content-Type", "application/json");
      jsonFile.send();

      jsonFile.onreadystatechange = function() {
          if (jsonFile.readyState== 4 && jsonFile.status == 200) {

        allData = jsonFile.responseText;
        var lines = allData.split('\n');

        var counter2003= 0;
        var counter2004= 0;
        var counter2005= 0;
        var counter2006= 0;
        var counter2007= 0;
        var counter2008= 0;
        var counter2009= 0;
        var counter2010= 0;
        var counter2011= 0;
        var counter2012= 0;
        var counter2013= 0;
        var counter2014= 0;
        var counter2015= 0;
        var counter2016= 0;
        var counter2017= 0;
        var counter2018= 0;

        for(var i = 0;i < lines.length;i++)
        {
          if(selectedNeighborhood == "All Neighborhoods" && selectedCrime=="All Crimes")
          {
            if(lines[i].includes("2003"))
            {counter2003++;}
            else if(lines[i].includes("2004"))
            {counter2004++;}
            else if(lines[i].includes("2005"))
            {counter2005++;}
            else if(lines[i].includes("2006"))
            {counter2006++;}
            else if(lines[i].includes("2007"))
            {counter2007++;}
            else if(lines[i].includes("2008"))
            {counter2008++;}
            else if(lines[i].includes("2009"))
            {counter2009++;}
            else if(lines[i].includes("2010"))
            {counter2010++;}
            else if(lines[i].includes("2011"))
            {counter2011++;}
            else if(lines[i].includes("2012"))
            {counter2012++;}
            else if(lines[i].includes("2013"))
            {counter2013++;}
            else if(lines[i].includes("2014"))
            {counter2014++;}
            else if(lines[i].includes("2015"))
            {counter2015++;}
            else if(lines[i].includes("2016"))
            {counter2016++;}
            else if(lines[i].includes("2017"))
            {counter2017++;}
            else if(lines[i].includes("2018"))
            {counter2018++;}
          }
          else if(selectedNeighborhood == "All Neighborhoods" && selectedCrime!="All Crimes" && lines[i].includes(selectedCrime))
          {
            if(lines[i].includes("2003"))
            {counter2003++;}
            else if(lines[i].includes("2004"))
            {counter2004++;}
            else if(lines[i].includes("2005"))
            {counter2005++;}
            else if(lines[i].includes("2006"))
            {counter2006++;}
            else if(lines[i].includes("2007"))
            {counter2007++;}
            else if(lines[i].includes("2008"))
            {counter2008++;}
            else if(lines[i].includes("2009"))
            {counter2009++;}
            else if(lines[i].includes("2010"))
            {counter2010++;}
            else if(lines[i].includes("2011"))
            {counter2011++;}
            else if(lines[i].includes("2012"))
            {counter2012++;}
            else if(lines[i].includes("2013"))
            {counter2013++;}
            else if(lines[i].includes("2014"))
            {counter2014++;}
            else if(lines[i].includes("2015"))
            {counter2015++;}
            else if(lines[i].includes("2016"))
            {counter2016++;}
            else if(lines[i].includes("2017"))
            {counter2017++;}
            else if(lines[i].includes("2018"))
            {counter2018++;}
          }
          else if(selectedNeighborhood != "All Neighborhoods" && selectedCrime=="All Crimes" && lines[i].includes(selectedNeighborhood))
          {
            if(lines[i].includes("2003"))
            {counter2003++;}
            else if(lines[i].includes("2004"))
            {counter2004++;}
            else if(lines[i].includes("2005"))
            {counter2005++;}
            else if(lines[i].includes("2006"))
            {counter2006++;}
            else if(lines[i].includes("2007"))
            {counter2007++;}
            else if(lines[i].includes("2008"))
            {counter2008++;}
            else if(lines[i].includes("2009"))
            {counter2009++;}
            else if(lines[i].includes("2010"))
            {counter2010++;}
            else if(lines[i].includes("2011"))
            {counter2011++;}
            else if(lines[i].includes("2012"))
            {counter2012++;}
            else if(lines[i].includes("2013"))
            {counter2013++;}
            else if(lines[i].includes("2014"))
            {counter2014++;}
            else if(lines[i].includes("2015"))
            {counter2015++;}
            else if(lines[i].includes("2016"))
            {counter2016++;}
            else if(lines[i].includes("2017"))
            {counter2017++;}
            else if(lines[i].includes("2018"))
            {counter2018++;}
          }
          else if(lines[i].includes(selectedNeighborhood) && lines[i].includes(selectedCrime))
          {
            if(lines[i].includes("2003"))
            {counter2003++;}
            else if(lines[i].includes("2004"))
            {counter2004++;}
            else if(lines[i].includes("2005"))
            {counter2005++;}
            else if(lines[i].includes("2006"))
            {counter2006++;}
            else if(lines[i].includes("2007"))
            {counter2007++;}
            else if(lines[i].includes("2008"))
            {counter2008++;}
            else if(lines[i].includes("2009"))
            {counter2009++;}
            else if(lines[i].includes("2010"))
            {counter2010++;}
            else if(lines[i].includes("2011"))
            {counter2011++;}
            else if(lines[i].includes("2012"))
            {counter2012++;}
            else if(lines[i].includes("2013"))
            {counter2013++;}
            else if(lines[i].includes("2014"))
            {counter2014++;}
            else if(lines[i].includes("2015"))
            {counter2015++;}
            else if(lines[i].includes("2016"))
            {counter2016++;}
            else if(lines[i].includes("2017"))
            {counter2017++;}
            else if(lines[i].includes("2018"))
            {counter2018++;}
        }
      }

        //alert(counter2003);
        allConvertedData ='{"x": 2003, "y":'+counter2003+'},\n'
        allConvertedData = allConvertedData + '{"x": 2004, "y":'+counter2004+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2005, "y":'+counter2005+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2006, "y":'+counter2006+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2007, "y":'+counter2007+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2008, "y":'+counter2008+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2009, "y":'+counter2009+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2010, "y":'+counter2010+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2011, "y":'+counter2011+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2012, "y":'+counter2012+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2013, "y":'+counter2013+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2014, "y":'+counter2014+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2015, "y":'+counter2015+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2016, "y":'+counter2016+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2017, "y":'+counter2017+'},'+'\n'
        allConvertedData = allConvertedData + '{"x": 2018, "y":'+counter2018+'}'+'\n'

        completeData = allDataStart + allConvertedData + allDataEnd;
        console.log(completeData);
  		  allDataObjects = JSON.parse(completeData);
  		  currentData = allDataObjects;
        maximum = Math. max(counter2003, counter2004, counter2005, counter2006,counter2007,counter2008,counter2009,counter2010,counter2011,counter2012,counter2013,counter2014,counter2015,counter2016,counter2017,counter2018);
        maximum +=(maximum/10);
        chartThree(currentData,maximum);
        //console.log(currentData);
          }
       }
}

function radioNeighborhoodFunction(){
	var radios = document.getElementsByName("neighborhood");
	var selectedNeighborhood;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedNeighborhood = radios[i].value;

		}
	}

  var radios = document.getElementsByName("crime");
	var selectedCrime;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedCrime = radios[i].value;

		}
	}
//alert(selectedNeighborhood);
//alert(selectedCrime);
loadDataAgain(selectedNeighborhood,selectedCrime)

}

function chartThree(currentData,maximum)
{
  //alert(currentData);
  document.getElementById('chartContainer').innerHTML = "<div id='map2' style='width: 100%; height: 100%; left: 0%; top: 0%;'></div>";

  var chart = new CanvasJS.Chart("map2", {
	animationEnabled: false,
	zoomEnabled: true,
  title:{
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    text: "Crimes in Vancouver"
  },
  legend:{
fontSize: 15
},

	axisX: {
    titleFontSize: 20,
    titleFontWeight: "bold",
    titleFontFamily: "Arial",
    labelFontSize: 20,
    labelFontWeight: "bold",
    labelFontFamily: "Arial",
		title:"Year",
		minimum: 2002,
		maximum: 2019,
		valueFormatString:"####"
	},
	axisY:{
    titleFontSize: 20,
    titleFontWeight: "bold",
    titleFontFamily: "Arial",
    labelFontSize: 20,
    labelFontWeight: "bold",
    labelFontFamily: "Arial",
		title: "Number of crimes",
		minimum: 0,
		maximum: maximum,
		valueFormatString: "##.###"
	},
	data: currentData
});
chart.render();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
