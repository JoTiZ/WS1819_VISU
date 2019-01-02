window.onload = function () {
  chartOne();


}


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  	data: [
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Other Theft",
		 dataPoints:[ 
			 {y: 2582, label: "2003"},
			 {y: 2470, label: "2004"},
			 {y: 1847, label: "2005"},
			 {y: 1497, label: "2006"},
			 {y: 936, label: "2007"},
			 {y: 841, label: "2008"},
			 {y: 833, label: "2009"},
			 {y: 824, label: "2010"},
			 {y: 787, label: "2011"},
			 {y: 813, label: "2012"},
			 {y: 809, label: "2013"},
			 {y: 833, label: "2014"},
			 {y: 837, label: "2015"},
			 {y: 961, label: "2016"},
			 {y: 860, label: "2017"},
			 {y: 860, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Vehicle Collision or Pedestrian Struck (with Fatality)",
		 dataPoints:[ 
			 {y: 24, label: "2003"},
			 {y: 24, label: "2004"},
			 {y: 24, label: "2005"},
			 {y: 24, label: "2006"},
			 {y: 24, label: "2007"},
			 {y: 12, label: "2008"},
			 {y: 0, label: "2009"},
			 {y: 0, label: "2010"},
			 {y: 0, label: "2011"},
			 {y: 0, label: "2012"},
			 {y: 0, label: "2013"},
			 {y: 0, label: "2014"},
			 {y: 0, label: "2015"},
			 {y: 24, label: "2016"},
			 {y: 24, label: "2017"},
			 {y: 24, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Theft from Vehicle",
		 dataPoints:[ 
			 {y: 17744, label: "2003"},
			 {y: 17412, label: "2004"},
			 {y: 15315, label: "2005"},
			 {y: 14409, label: "2006"},
			 {y: 12405, label: "2007"},
			 {y: 11962, label: "2008"},
			 {y: 11600, label: "2009"},
			 {y: 10646, label: "2010"},
			 {y: 10303, label: "2011"},
			 {y: 10512, label: "2012"},
			 {y: 10461, label: "2013"},
			 {y: 11681, label: "2014"},
			 {y: 11909, label: "2015"},
			 {y: 12450, label: "2016"},
			 {y: 12115, label: "2017"},
			 {y: 12112, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Offence Against a Person",
		 dataPoints:[ 
			 {y: 3513, label: "2003"},
			 {y: 3513, label: "2004"},
			 {y: 3513, label: "2005"},
			 {y: 3513, label: "2006"},
			 {y: 3513, label: "2007"},
			 {y: 3513, label: "2008"},
			 {y: 3513, label: "2009"},
			 {y: 3513, label: "2010"},
			 {y: 3513, label: "2011"},
			 {y: 3513, label: "2012"},
			 {y: 3513, label: "2013"},
			 {y: 3513, label: "2014"},
			 {y: 3513, label: "2015"},
			 {y: 3513, label: "2016"},
			 {y: 3513, label: "2017"},
			 {y: 3513, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Theft of Vehicle",
		 dataPoints:[ 
			 {y: 6361, label: "2003"},
			 {y: 6310, label: "2004"},
			 {y: 5907, label: "2005"},
			 {y: 5688, label: "2006"},
			 {y: 5349, label: "2007"},
			 {y: 4696, label: "2008"},
			 {y: 4365, label: "2009"},
			 {y: 4080, label: "2010"},
			 {y: 3990, label: "2011"},
			 {y: 4035, label: "2012"},
			 {y: 4029, label: "2013"},
			 {y: 4429, label: "2014"},
			 {y: 4585, label: "2015"},
			 {y: 5356, label: "2016"},
			 {y: 5245, label: "2017"},
			 {y: 5241, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Mischief",
		 dataPoints:[ 
			 {y: 6391, label: "2003"},
			 {y: 6335, label: "2004"},
			 {y: 5882, label: "2005"},
			 {y: 5585, label: "2006"},
			 {y: 5093, label: "2007"},
			 {y: 4886, label: "2008"},
			 {y: 4518, label: "2009"},
			 {y: 3817, label: "2010"},
			 {y: 3407, label: "2011"},
			 {y: 3634, label: "2012"},
			 {y: 3587, label: "2013"},
			 {y: 4644, label: "2014"},
			 {y: 4785, label: "2015"},
			 {y: 5114, label: "2016"},
			 {y: 5026, label: "2017"},
			 {y: 5026, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Break and Enter Commercial",
		 dataPoints:[ 
			 {y: 3197, label: "2003"},
			 {y: 3197, label: "2004"},
			 {y: 3197, label: "2005"},
			 {y: 3197, label: "2006"},
			 {y: 3197, label: "2007"},
			 {y: 3100, label: "2008"},
			 {y: 2816, label: "2009"},
			 {y: 2617, label: "2010"},
			 {y: 2504, label: "2011"},
			 {y: 2580, label: "2012"},
			 {y: 2556, label: "2013"},
			 {y: 2865, label: "2014"},
			 {y: 2980, label: "2015"},
			 {y: 3197, label: "2016"},
			 {y: 3197, label: "2017"},
			 {y: 3197, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Vehicle Collision or Pedestrian Struck (with Injury)",
		 dataPoints:[ 
			 {y: 1803, label: "2003"},
			 {y: 1803, label: "2004"},
			 {y: 1803, label: "2005"},
			 {y: 1803, label: "2006"},
			 {y: 1803, label: "2007"},
			 {y: 1440, label: "2008"},
			 {y: 0, label: "2009"},
			 {y: 0, label: "2010"},
			 {y: 0, label: "2011"},
			 {y: 0, label: "2012"},
			 {y: 0, label: "2013"},
			 {y: 101, label: "2014"},
			 {y: 922, label: "2015"},
			 {y: 1803, label: "2016"},
			 {y: 1803, label: "2017"},
			 {y: 1803, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Break and Enter Residential/Other",
		 dataPoints:[ 
			 {y: 6883, label: "2003"},
			 {y: 6768, label: "2004"},
			 {y: 5816, label: "2005"},
			 {y: 5365, label: "2006"},
			 {y: 4411, label: "2007"},
			 {y: 4113, label: "2008"},
			 {y: 3861, label: "2009"},
			 {y: 3668, label: "2010"},
			 {y: 3577, label: "2011"},
			 {y: 3627, label: "2012"},
			 {y: 3618, label: "2013"},
			 {y: 3905, label: "2014"},
			 {y: 4036, label: "2015"},
			 {y: 4446, label: "2016"},
			 {y: 4280, label: "2017"},
			 {y: 4279, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Homicide",
		 dataPoints:[ 
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
			 {y: 18, label: "2018"}]
		},
 
		{
		 type: "stackedArea", 
		 showInLegend: "true", 
		 name: "Theft of Bicycle",
		 dataPoints:[ 
			 {y: 1418, label: "2003"},
			 {y: 1418, label: "2004"},
			 {y: 1343, label: "2005"},
			 {y: 1208, label: "2006"},
			 {y: 944, label: "2007"},
			 {y: 836, label: "2008"},
			 {y: 643, label: "2009"},
			 {y: 523, label: "2010"},
			 {y: 473, label: "2011"},
			 {y: 495, label: "2012"},
			 {y: 490, label: "2013"},
			 {y: 659, label: "2014"},
			 {y: 775, label: "2015"},
			 {y: 951, label: "2016"},
			 {y: 907, label: "2017"},
			 {y: 907, label: "2018"}]
		}
		
		
]

  });
  chart.render();
}
