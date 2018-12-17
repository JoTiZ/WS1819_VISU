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
  		title: "Years",
  		minimum: -0.02,
  		maximum: 3.02
  	},
  	axisY:{
  		title:"Numbers of Crimes"
  	},
  	toolTip:{
  		shared: true
  	},
  	data: [{
  		type: "stackedArea100",
		showinLegend: "true";
  		name: "Other Theft", 
		datapoints:[ 
			{y: 2582, label: "2003"},
			{y: 2581, label: "2004"},
			{y: 2541, label: "2005"},
			{y: 2511, label: "2006"},
			{y: 1979, label: "2007"},
			{y: 1601, label: "2008"},
			{y: 1032, label: "2009"},
			{y: 550, label: "2010"},
			{y: 500, label: "2011"},
			{y: 535, label: "2012"},
			{y: 533, label: "2013"},
			{y: 1091, label: "2014"},
			{y: 1460, label: "2015"},
			{y: 2029, label: "2016"},
			{y: 1878, label: "2017"},
			{y: 496, label: "2018"}
		]
  	},
  	{
  		type: "stackedArea100",
  		showInLegend: "true",
  		name: "Vehicle Collision or Pedestrian Struck (with Fatality)", 
		datapoints:[ 
			{y: 24, label: "2003"},
			{y: 24, label: "2004"},
			{y: 0, label: "2005"},
			{y: 0, label: "2006"},
			{y: 0, label: "2007"},
			{y: 0, label: "2008"},
			{y: 0, label: "2009"},
			{y: 0, label: "2010"},
			{y: 0, label: "2011"},
			{y: 0, label: "2012"},
			{y: 0, label: "2013"},
			{y: 0, label: "2014"},
			{y: 0, label: "2015"},
			{y: 0, label: "2016"},
			{y: 0, label: "2017"},
			{y: 0, label: "2018"}
		]
		
  	},
  	{
  		type: "stackedArea100",
  		showInLegend: "true",
  		name: "Theft from Vehicle", 
		datapoints:[ 
			{y: 17744, label: "2003"},
			{y: 17577, label: "2004"},
			{y: 16822, label: "2005"},
			{y: 16399, label: "2006"},
			{y: 13900, label: "2007"},
			{y: 12800, label: "2008"},
			{y: 11173, label: "2009"},
			{y: 10089, label: "2010"},
			{y: 9637, label: "2011"},
			{y: 9875, label: "2012"},
			{y: 9823, label: "2013"},
			{y: 11455, label: "2014"},
			{y: 12223, label: "2015"},
			{y: 13958, label: "2016"},
			{y: 13545, label: "2017"},
			{y: 9509, label: "2018"}
		]
		
  	},
  	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Offence Against a Person", 
		datapoints:[ 
			{y: 3510, label: "2003"},
			{y: 3490, label: "2004"},
			{y: 3419, label: "2005"},
			{y: 3380, label: "2006"},
			{y: 3305, label: "2007"},
			{y: 3259, label: "2008"},
			{y: 3203, label: "2009"},
			{y: 3144, label: "2010"},
			{y: 2885, label: "2011"},
			{y: 3032, label: "2012"},
			{y: 2998, label: "2013"},
			{y: 3210, label: "2014"},
			{y: 3242, label: "2015"},
			{y: 3306, label: "2016"},
			{y: 3296, label: "2017"},
			{y: 2787, label: "2018"}
		]
	},
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Theft of Vehicle", 
		datapoints:[ 
			{y: 6361, label: "2003"},
			{y: 6298, label: "2004"},
			{y: 5443, label: "2005"},
			{y: 4225, label: "2006"},
			{y: 3862, label: "2007"},
			{y: 3659, label: "2008"},
			{y: 3283, label: "2009"},
			{y: 2984, label: "2010"},
			{y: 2874, label: "2011"},
			{y: 2929, label: "2012"},
			{y: 2902, label: "2013"},
			{y: 3332, label: "2014"},
			{y: 3530, label: "2015"},
			{y: 3871, label: "2016"},
			{y: 3812, label: "2017"},
			{y: 2840, label: "2018"}
		]
	},
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Mischief", 
		datapoints:[ 
			{y: 6391, label: "2003"},
			{y: 6312, label: "2004"},
			{y: 5903, label: "2005"},
			{y: 5668, label: "2006"},
			{y: 5274, label: "2007"},
			{y: 5062, label: "2008"},
			{y: 4802, label: "2009"},
			{y: 4618, label: "2010"},
			{y: 4516, label: "2011"},
			{y: 4586, label: "2012"},
			{y: 4565, label: "2013"},
			{y: 4836, label: "2014"},
			{y: 4971, label: "2015"},
			{y: 5283, label: "2016"},
			{y: 5202, label: "2017"},
			{y: 4487, label: "2018"}
		]
		
	},
	
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Break and Enter Commercial", 
		datapoints:[ 
			{y: 3197, label: "2003"},
			{y: 3197, label: "2004"},
			{y: 3197, label: "2005"},
			{y: 3197, label: "2006"},
			{y: 3197, label: "2007"},
			{y: 3127, label: "2008"},
			{y: 2857, label: "2009"},
			{y: 2633, label: "2010"},
			{y: 2540, label: "2011"},
			{y: 2607, label: "2012"},
			{y: 2597, label: "2013"},
			{y: 2901, label: "2014"},
			{y: 3026, label: "2015"},
			{y: 3197, label: "2016"},
			{y: 3197, label: "2017"},
			{y: 2504, label: "2018"}
		]
		
	},
	
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Vehicle Collision or Pedestrian Struck (with Injury)", 
		datapoints:[ 
			{y: 1803, label: "2003"},
			{y: 1649, label: "2004"},
			{y: 0, label: "2005"},
			{y: 0, label: "2006"},
			{y: 0, label: "2007"},
			{y: 0, label: "2008"},
			{y: 0, label: "2009"},
			{y: 0, label: "2010"},
			{y: 0, label: "2011"},
			{y: 0, label: "2012"},
			{y: 0, label: "2013"},
			{y: 0, label: "2014"},
			{y: 0, label: "2015"},
			{y: 0, label: "2016"},
			{y: 0, label: "2017"},
			{y: 0, label: "2018"},]
		
	},
	
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Break and Enter Residential/Other", 
		datapoints:[ 
			{y: 6883, label: "2003"},
			{y: 6713, label: "2004"},
			{y: 5910, label: "2005"},
			{y: 5501, label: "2006"},
			{y: 4732, label: "2007"},
			{y: 4471, label: "2008"},
			{y: 4380, label: "2009"},
			{y: 4254, label: "2010"},
			{y: 4195, label: "2011"},
			{y: 4226, label: "2012"},
			{y: 4216, label: "2013"},
			{y: 4404, label: "2014"},
			{y: 4445, label: "2015"},
			{y: 4754, label: "2016"},
			{y: 4608, label: "2017"},
			{y: 4177, label: "2018"}
		]
		
	},
	
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Homicide", 
		datapoints:[ 
			{y: 18, label: "2003"},
			{y: 18, label: "2004"},
			{y: 18, label: "2005"},
			{y: 18, label: "2006"},
			{y: 18, label: "2007"},
			{y: 18, label: "2008"},
			{y: 18, label: "2009"},
			{y: 18, label: "2010"},
			{y: 18, label: "2011"},
			{y: 18, label: "2012"},
			{y: 18, label: "2013"},
			{y: 18, label: "2014"},
			{y: 18, label: "2015"},
			{y: 18, label: "2016"},
			{y: 18, label: "2017"},
			{y: 18, label: "2018"},]
		
	},
	
	{
  		type: "stackedArea100",
  		showInLegend: "true",
		name: "Theft of Bicycle", 
		datapoints:[ 
			{y: 1418, label: "2003"},
			{y: 1418, label: "2004"},
			{y: 1418, label: "2005"},
			{y: 1418, label: "2006"},
			{y: 1418, label: "2007"},
			{y: 1418, label: "2008"},
			{y: 1418, label: "2009"},
			{y: 1418, label: "2010"},
			{y: 1418, label: "2011"},
			{y: 1418, label: "2012"},
			{y: 1418, label: "2013"},
			{y: 1418, label: "2014"},
			{y: 1418, label: "2015"},
			{y: 1418, label: "2016"},
			{y: 1418, label: "2017"},
			{y: 1418, label: "2018"},]
		
	}

  		
  	}]

  });
  chart.render();
}