var url = "/dataScatterPlot.txt";

var allData;
var allDataObjects = [];

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
	jsonFile.setRequestHeader("Content-Type", "application/json");
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
		  allDataObjects = JSON.parse(allData);
        }
     }
	 //alert(allData);

window.onload = function () {
  chartThree();

}

function radioCrimeFunction(){
	var radios = document.getElementsByName("crime");
	var selectedCrime;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedCrime = radios[i].value;
		}
	}
	alert(selectedCrime);
	
}

function radioNeighborhoodFunction(){
	var radios = document.getElementsByName("neighborhood");
	var selectedNeighborhood;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedNeighborhood = radios[i].value;
		}
	}
	alert(selectedNeighborhood);
	
}


function chartThree()
{

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
	data: allDataObjects
});
chart.render();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
