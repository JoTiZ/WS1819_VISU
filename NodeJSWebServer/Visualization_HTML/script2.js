var url = "/dataStackDiagram.txt";

var allData;

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
        }
     }


window.onload = function () {
  chartOne();


} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chartOne()
{
  var data = JSON.parse(allData);

	
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
  	data: data

  });
  chart.render();
}
