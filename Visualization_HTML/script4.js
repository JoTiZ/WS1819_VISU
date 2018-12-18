window.onload = function () {
  chartThree();

}

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chartThree()
{
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
	data: [{
		type: "scatter",
		toolTipContent: "<b>Year: </b>{x} <br/><b>Number of crimes: </b>{y}",
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
