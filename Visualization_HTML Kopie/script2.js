window.onload = function () {
  slider();
  chartOne();


}

function slider()
{
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo"); //STILL NOT WORKING
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
      output.innerHTML = this.value;
  }
}

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chartOne()
{
  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	title:{
  		text: "Products Sold by XYZ Ltd. in 2016"
  	},
  	axisX:{
  		title: "Seasons",
  		minimum: -0.02,
  		maximum: 3.02
  	},
  	axisY:{
  		title:"Sales"
  	},
  	toolTip:{
  		shared: true
  	},
  	data: [{
  		type: "stackedArea100",
  		name: "Mosquito Repellents",
  		showInLegend: "true",
  		dataPoints: [
  			{ y: 83450 , label: "Spring" },
  			{ y: 51240, label: "Summer" },
  			{ y: 64120, label: "Autumn" },
  			{ y: 71450, label: "Fall" }
  		]
  	},
  	{
  		type: "stackedArea100",
  		name: "Liquid Soap",
  		showInLegend: "true",
  		dataPoints: [
  			{ y: 20140 , label: "Spring" },
  			{ y: 30170, label: "Summer" },
  			{ y: 24410, label: "Autumn" },
  			{ y: 38120, label: "Fall" }
  		]
  	},
  	{
  		type: "stackedArea100",
  		name: "Napkins",
  		showInLegend: "true",
  		dataPoints: [
  			{ y: 45120 , label: "Spring" },
  			{ y: 50350, label: "Summer" },
  			{ y: 48410, label: "Autumn" },
  			{ y: 53120, label: "Fall" }
  		]
  	},
  	{
  		type: "stackedArea100",
  		name: "Sanitizer",
  		showInLegend: "true",
  		dataPoints: [
  			{ y: 11050, label: "Spring" },
  			{ y: 16100, label: "Summer" },
  			{ y: 15010, label: "Autumn" },
  			{ y: 23100, label: "Fall" }
  		]
  	}]
  });
  chart.render();
}
