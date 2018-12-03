window.onload = function () {
  slider();
  chartThree();


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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chartThree()
{
  var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	zoomEnabled: true,

	axisX: {
		title:"Jahreszahl",
		minimum: 2002,
		maximum: 2019,
		valueFormatString:"####"
	},
	axisY:{
		title: "Anzahl aller Verbrechen",
		minimum: 25000,
		maximum: 55000,
		valueFormatString: "##.###"
	},
	data: [{
		type: "scatter",
		toolTipContent: "<b>Jahr: </b>{x} <br/><b>Anz. Verbrechen: </b>{y}",
		dataPoints: [
			{ x: 2003, y: 49931 },
			{ x: 2004, y: 49277 },
			{ x: 2005, y: 44671 },
			{ x: 2006, y: 42317 },
			{ x: 2007, y: 37685 },
			{ x: 2008, y: 35415 },
			{ x: 2009, y: 32166 },
			{ x: 2010, y: 29708 },
			{ x: 2011, y: 28583 },
			{ x: 2012, y: 29226 },
			{ x: 2013, y: 29070 },
			{ x: 2014, y: 32665 },	
			{ x: 2015, y: 34333 },
			{ x: 2016, y: 37834 },
			{ x: 2017, y: 36974 },
			{ x: 2018, y: 28236}
		]
	}]
});
chart.render();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
