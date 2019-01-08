var url = "/dataStackDiagram.txt";

var allData;
var allDataObjects = [];
var currentData = [];

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
	jsonFile.setRequestHeader("Content-Type", "application/json");
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
		  allDataObjects = JSON.parse(allData);
		  currentData = allDataObjects;
        }
     }
	 //alert(allData);


window.onload = function () {
  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;
  chartOne();
  
} 


function radioCrimeFunction(){
	var radios = document.getElementsByName("crime");
	var selectedCrime;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedCrime = radios[i].value;
		}
	}
		
	for (var i = 0; i < allDataObjects.length; i++){
		if (selectedCrime === allDataObjects[i]["name"]){
			currentData = allDataObjects[i];
		}
	}

	//console.log(allDataObjects[0]["name"]);
	console.log(currentData);
	chartOne();
	
}

function radioNeighborhoodFunction(){
	var radios = document.getElementsByName("neighborhood");
	var selectedNeighborhood;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedNeighborhood = radios[i].value;
		}
	}
	
	
	//No neighborhood in data

	//console.log(allDataObjects[0]["name"]);
	console.log(selectedNeighborhood);
	chartOne();
	
}




function chartOne()
{
	
  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	title:{
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Arial",
  		text: "Crimes in Vancouver"
  	},
    legend:{
  fontSize: 15
},
  	axisX:{
      titleFontSize: 20,
      titleFontWeight: "bold",
      titleFontFamily: "Arial",
      labelFontSize: 20,
      labelFontWeight: "bold",
      labelFontFamily: "Arial",
  		title: "Years"
  	},
  	axisY:{
      titleFontSize: 20,
      titleFontWeight: "bold",
      titleFontFamily: "Arial",
      labelFontSize: 20,
      labelFontWeight: "bold",
      labelFontFamily: "Arial",
  		title:"Numbers of Crimes",
  	},
  	toolTip:{
  		shared: true
  	},
  	data: currentData

  });
  chart.render();
}
