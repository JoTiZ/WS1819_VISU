var url = "/dataScatterPlot.txt";

var allData;

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
	jsonFile.setRequestHeader("Content-Type", "application/json");
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
        }
     }
	 //alert(allData);

window.onload = function () {
  chartThree();

}

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chartThree()
{
  var data = JSON.parse(allData);
  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;  
	
  var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
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
		minimum: 25000,
		maximum: 55000,
		valueFormatString: "##.###"
	},
	data: data
});
chart.render();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
