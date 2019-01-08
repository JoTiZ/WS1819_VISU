var url = "/dataStackDiagram.txt";

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




function chartOne()
{
  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;
	
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
  	data: allDataObjects

  });
  chart.render();
}
