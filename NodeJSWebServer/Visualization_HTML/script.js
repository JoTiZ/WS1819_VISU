var url = "http://localhost:8000/HeatMapConvertedData/ALL_DATA.txt";

var allData;

var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
          allData = jsonFile.responseText;
          console.log(JSON.stringify(allData));
          alert(jsonFile.responseText);
        }
     }

window.onload = function () {
  heatMapAll();
  heatMap2003();
  heatMap2004();
  heatMap2005();
  heatMap2006();
  heatMap2007();
  heatMap2008();
  heatMap2009();
  heatMap2010();
  heatMap2011();
  heatMap2012();
  heatMap2013();
  heatMap2014();
  heatMap2015();
  heatMap2016();
  heatMap2017();
  heatMap2018();
  hideMaps();

}

function hideMaps()
{
  document.getElementById("map2003").style.visibility='hidden';
  document.getElementById("map2004").style.visibility='hidden';
  document.getElementById("map2005").style.visibility='hidden';
  document.getElementById("map2006").style.visibility='hidden';
  document.getElementById("map2007").style.visibility='hidden';
  document.getElementById("map2008").style.visibility='hidden';
  document.getElementById("map2009").style.visibility='hidden';
  document.getElementById("map2010").style.visibility='hidden';
  document.getElementById("map2011").style.visibility='hidden';
  document.getElementById("map2012").style.visibility='hidden';
  document.getElementById("map2013").style.visibility='hidden';
  document.getElementById("map2014").style.visibility='hidden';
  document.getElementById("map2015").style.visibility='hidden';
  document.getElementById("map2016").style.visibility='hidden';
  document.getElementById("map2017").style.visibility='hidden';
  document.getElementById("map2018").style.visibility='hidden';
}

function radioFunction()
{
  document.getElementById("map").style.visibility='hidden';
  hideMaps();
  if(document.getElementById("radioAll").checked == true)
  {
    document.getElementById("map").style.visibility='visible';
  }
  else if (document.getElementById("radio2003").checked == true) {
    document.getElementById("map2003").style.visibility='visible';
  }
  else if (document.getElementById("radio2004").checked == true) {
    document.getElementById("map2004").style.visibility='visible';
  }
  else if (document.getElementById("radio2005").checked == true) {
    document.getElementById("map2005").style.visibility='visible';
  }
  else if (document.getElementById("radio2006").checked == true) {
    document.getElementById("map2006").style.visibility='visible';
  }
  else if (document.getElementById("radio2007").checked == true) {
    document.getElementById("map2007").style.visibility='visible';
  }
  else if (document.getElementById("radio2008").checked == true) {
    document.getElementById("map2008").style.visibility='visible';
  }
  else if (document.getElementById("radio2009").checked == true) {
    document.getElementById("map2009").style.visibility='visible';
  }
  else if (document.getElementById("radio2010").checked == true) {
    document.getElementById("map2010").style.visibility='visible';
  }
  else if (document.getElementById("radio2011").checked == true) {
    document.getElementById("map2011").style.visibility='visible';
  }
  else if (document.getElementById("radio2012").checked == true) {
    document.getElementById("map2012").style.visibility='visible';
  }
  else if (document.getElementById("radio2013").checked == true) {
    document.getElementById("map2013").style.visibility='visible';
  }
  else if (document.getElementById("radio2014").checked == true) {
    document.getElementById("map2014").style.visibility='visible';
  }
  else if (document.getElementById("radio2015").checked == true) {
    document.getElementById("map2015").style.visibility='visible';
  }
  else if (document.getElementById("radio2016").checked == true) {
    document.getElementById("map2016").style.visibility='visible';
  }
  else if (document.getElementById("radio2017").checked == true) {
    document.getElementById("map2017").style.visibility='visible';
  }
  else if (document.getElementById("radio2018").checked == true) {
    document.getElementById("map2018").style.visibility='visible';
  }

}

///////////////////////////////////////////////////////////////////////////////////
function heatMapAll()
{


  var testData = {
    max: 8,
   data:'[{lat: 49.2510882, lng:-123.1804479, count: 1},{lat: 49.2823675, lng:-123.1144553, count: 1},{lat: 49.2800609, lng:-123.084779, count: 1}]'


  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2003()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2510882, lng:-123.1804479, count: 1},
{lat: 49.2823675, lng:-123.1144553, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2719256, lng:-123.135107, count: 1},
{lat: 49.2364312, lng:-123.1958769, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2823675, lng:-123.1144553, count: 1},
{lat: 49.2364132, lng:-123.1938683, count: 1},
{lat: 49.2406114, lng:-123.0344415, count: 1},
{lat: 49.2789896, lng:-123.1213297, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2487968, lng:-123.1068367, count: 1},
{lat: 49.2375074, lng:-123.0683263, count: 1},
{lat: 49.2375868, lng:-123.0680934, count: 1},
{lat: 49.284715, lng:-123.1228242, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2549079, lng:-123.0898779, count: 1},
{lat: 49.2662022, lng:-123.0918792, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2719256, lng:-123.135107, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2790856, lng:-123.121183, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2365265, lng:-123.0350986, count: 1},
{lat: 49.2661192, lng:-123.092833, count: 1},
{lat: 49.2526511, lng:-123.0825432, count: 1},
{lat: 49.2539049, lng:-123.1144215, count: 1},
{lat: 49.2366775, lng:-123.0679439, count: 1},
{lat: 49.2639851, lng:-123.160219, count: 1},
{lat: 49.2322995, lng:-123.1614927, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2172222, lng:-123.0942284, count: 1},
{lat: 49.2527454, lng:-123.0833952, count: 1},
{lat: 49.2639851, lng:-123.160219, count: 1},
{lat: 49.2561378, lng:-123.1236591, count: 1},
{lat: 49.267734, lng:-123.067654, count: 1},
{lat: 49.2678144, lng:-123.0674411, count: 1},
{lat: 49.2165202, lng:-123.0929305, count: 1},
{lat: 49.2400886, lng:-123.0331801, count: 1},
{lat: 49.267731, lng:-123.0673017, count: 1},
{lat: 49.2882682, lng:-123.1370736, count: 1},
{lat: 49.2584256, lng:-123.1001404, count: 1},
{lat: 49.2544735, lng:-123.0835813, count: 1},
{lat: 49.2401381, lng:-123.0330651, count: 1},
{lat: 49.2171607, lng:-123.0953802, count: 1},
{lat: 49.2544735, lng:-123.0835813, count: 1},
{lat: 49.2678114, lng:-123.0670888, count: 1},
{lat: 49.2322995, lng:-123.1614927, count: 1},
{lat: 49.2171607, lng:-123.0953802, count: 1},
{lat: 49.2366613, lng:-123.0713282, count: 1},
{lat: 49.2355823, lng:-123.1938739, count: 1},
{lat: 49.2199826, lng:-123.0948033, count: 1},
{lat: 49.2355823, lng:-123.1938739, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2583236, lng:-123.0987356, count: 1},
{lat: 49.2793351, lng:-123.0940302, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2355823, lng:-123.1938739, count: 1},
{lat: 49.2355823, lng:-123.1938739, count: 1},
{lat: 49.2217573, lng:-123.0940257, count: 1},
{lat: 49.2217573, lng:-123.0940257, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2818199, lng:-123.1064357, count: 1},
{lat: 49.28241, lng:-123.1258353, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2562876, lng:-123.0835071, count: 1},
{lat: 49.226993, lng:-123.1108371, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2562876, lng:-123.0835071, count: 1},
{lat: 49.2693424, lng:-123.0251762, count: 1},
{lat: 49.2765719, lng:-123.1343584, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2157048, lng:-123.0362499, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2539516, lng:-123.1127989, count: 1},
{lat: 49.2578091, lng:-123.0822316, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2581726, lng:-123.03228, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.257816, lng:-123.0832756, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2530245, lng:-123.114687, count: 1},
{lat: 49.2218747, lng:-123.0684485, count: 1},
{lat: 49.2833161, lng:-123.1131054, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.218133, lng:-123.0770536, count: 1},
{lat: 49.2564033, lng:-123.1908622, count: 1},
{lat: 49.2844316, lng:-123.1246776, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2300979, lng:-123.0938046, count: 1},
{lat: 49.2761436, lng:-123.1340113, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.218133, lng:-123.0770536, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2492147, lng:-123.1603315, count: 1},
{lat: 49.2596389, lng:-123.0821697, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2156318, lng:-123.1099041, count: 1},
{lat: 49.264998, lng:-123.1186521, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2451717, lng:-123.1174793, count: 1},
{lat: 49.2531086, lng:-123.0327957, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.231, lng:-123.0937883, count: 1},
{lat: 49.2451717, lng:-123.1174793, count: 1},
{lat: 49.2451717, lng:-123.1174793, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2760729, lng:-123.1339282, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2426102, lng:-123.0940489, count: 1},
{lat: 49.2435406, lng:-123.0940233, count: 1},
{lat: 49.2597319, lng:-123.0831488, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.249303, lng:-123.0698366, count: 1},
{lat: 49.2205613, lng:-123.0337581, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2783803, lng:-123.0656128, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2493825, lng:-123.1599001, count: 1},
{lat: 49.2650955, lng:-123.0666109, count: 1},
{lat: 49.2451647, lng:-123.1172269, count: 1},
{lat: 49.2642007, lng:-123.067759, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2869536, lng:-123.1133922, count: 1},
{lat: 49.2581726, lng:-123.03228, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2570034, lng:-123.1229715, count: 1},
{lat: 49.2455748, lng:-123.0939497, count: 1},
{lat: 49.2466736, lng:-123.0922778, count: 1},
{lat: 49.2641995, lng:-123.0675115, count: 1},
{lat: 49.2574492, lng:-123.0998956, count: 1},
{lat: 49.2823675, lng:-123.1144553, count: 1},
{lat: 49.2574492, lng:-123.0998956, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2605272, lng:-123.0832457, count: 1},
{lat: 49.2466024, lng:-123.093918, count: 1},
{lat: 49.2466024, lng:-123.093918, count: 1},
{lat: 49.2614114, lng:-123.0828817, count: 1},
{lat: 49.2816602, lng:-123.1156072, count: 1},
{lat: 49.2641955, lng:-123.0666625, count: 1},
{lat: 49.2641953, lng:-123.0666271, count: 1},
{lat: 49.2574417, lng:-123.0993352, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2322995, lng:-123.1614927, count: 1},
{lat: 49.2500712, lng:-123.1222294, count: 1},
{lat: 49.277766, lng:-123.1157443, count: 1},
{lat: 49.2476378, lng:-123.0938833, count: 1},
{lat: 49.2614135, lng:-123.0832348, count: 1},
{lat: 49.2293824, lng:-123.1041214, count: 1},
{lat: 49.2574417, lng:-123.0993352, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.209031, lng:-123.1405789, count: 1},
{lat: 49.2201222, lng:-123.0323906, count: 1},
{lat: 49.2432981, lng:-123.1039082, count: 1},
{lat: 49.209031, lng:-123.1405789, count: 1},
{lat: 49.2546283, lng:-123.0928245, count: 1},
{lat: 49.209031, lng:-123.1405789, count: 1},
{lat: 49.2813131, lng:-123.0974655, count: 1},
{lat: 49.26321, lng:-123.0669885, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2860946, lng:-123.1170598, count: 1},
{lat: 49.2789779, lng:-123.1311305, count: 1},
{lat: 49.2543787, lng:-123.1274383, count: 1},
{lat: 49.2368285, lng:-123.1223345, count: 1},
{lat: 49.2789272, lng:-123.1226167, count: 1},
{lat: 49.263208, lng:-123.0667586, count: 1},
{lat: 49.2712491, lng:-123.1005541, count: 1},
{lat: 49.2342389, lng:-123.0359758, count: 1},
{lat: 49.2478266, lng:-123.0457786, count: 1},
{lat: 49.2632895, lng:-123.0666802, count: 1},
{lat: 49.2713002, lng:-123.0388669, count: 1},
{lat: 49.2703384, lng:-123.0350915, count: 1},
{lat: 49.2498965, lng:-123.1785705, count: 1},
{lat: 49.261466, lng:-123.0917679, count: 1},
{lat: 49.2556423, lng:-123.1012413, count: 1},
{lat: 49.209031, lng:-123.1405789, count: 1}]



  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2003', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2004()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2553938, lng:-123.0708611, count: 1},
{lat: 49.2719256, lng:-123.135107, count: 1},
{lat: 49.2553938, lng:-123.0708611, count: 1},
{lat: 49.2661204, lng:-123.0912784, count: 1},
{lat: 49.2593413, lng:-123.1002564, count: 1},
{lat: 49.259258, lng:-123.1001705, count: 1},
{lat: 49.2593382, lng:-123.0999916, count: 1},
{lat: 49.2165202, lng:-123.0929305, count: 1},
{lat: 49.2070673, lng:-123.1049052, count: 1},
{lat: 49.2593345, lng:-123.0996826, count: 1},
{lat: 49.2662022, lng:-123.0918792, count: 1},
{lat: 49.284715, lng:-123.1228242, count: 1},
{lat: 49.2846658, lng:-123.1227492, count: 1},
{lat: 49.2342718, lng:-123.0360448, count: 1},
{lat: 49.2794186, lng:-123.0940934, count: 1},
{lat: 49.2623904, lng:-123.0821617, count: 1},
{lat: 49.2165376, lng:-123.0940355, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.284396, lng:-123.122337, count: 1},
{lat: 49.2171607, lng:-123.0953802, count: 1},
{lat: 49.2843714, lng:-123.1222995, count: 1},
{lat: 49.2843714, lng:-123.1222995, count: 1},
{lat: 49.2342718, lng:-123.0360448, count: 1},
{lat: 49.2171607, lng:-123.0953802, count: 1},
{lat: 49.2550068, lng:-123.0582216, count: 1},
{lat: 49.2550068, lng:-123.0582216, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2182934, lng:-123.0945055, count: 1},
{lat: 49.2182934, lng:-123.0945055, count: 1},
{lat: 49.2584178, lng:-123.0995875, count: 1},
{lat: 49.2584178, lng:-123.0995875, count: 1},
{lat: 49.2217573, lng:-123.0940257, count: 1},
{lat: 49.2217573, lng:-123.0940257, count: 1},
{lat: 49.2825407, lng:-123.1258531, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2236396, lng:-123.092876, count: 1},
{lat: 49.28241, lng:-123.1258353, count: 1},
{lat: 49.2583236, lng:-123.0987356, count: 1},
{lat: 49.2583236, lng:-123.0987356, count: 1},
{lat: 49.2765719, lng:-123.1343584, count: 1},
{lat: 49.2580874, lng:-123.0336354, count: 1},
{lat: 49.2245356, lng:-123.0940366, count: 1},
{lat: 49.2245356, lng:-123.0940366, count: 1},
{lat: 49.2269453, lng:-123.1107106, count: 1},
{lat: 49.2254741, lng:-123.0936348, count: 1},
{lat: 49.2580874, lng:-123.0336354, count: 1},
{lat: 49.2574662, lng:-123.1011697, count: 1},
{lat: 49.2682857, lng:-123.1622568, count: 1},
{lat: 49.2273807, lng:-123.0938563, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2282919, lng:-123.0938386, count: 1},
{lat: 49.2291858, lng:-123.0938226, count: 1},
{lat: 49.2814154, lng:-123.1196558, count: 1},
{lat: 49.2844316, lng:-123.1246776, count: 1},
{lat: 49.2546034, lng:-123.0339201, count: 1},
{lat: 49.2546034, lng:-123.0339201, count: 1},
{lat: 49.2546034, lng:-123.0339201, count: 1},
{lat: 49.2574662, lng:-123.1011697, count: 1},
{lat: 49.2165335, lng:-123.0937738, count: 1},
{lat: 49.2895941, lng:-123.1383753, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.276179, lng:-123.1340529, count: 1},
{lat: 49.2462503, lng:-123.1943664, count: 1},
{lat: 49.2761436, lng:-123.1340113, count: 1},
{lat: 49.2761436, lng:-123.1340113, count: 1},
{lat: 49.2595651, lng:-123.0963275, count: 1},
{lat: 49.2226744, lng:-123.0907045, count: 1},
{lat: 49.2309822, lng:-123.0925688, count: 1},
{lat: 49.2761083, lng:-123.1339697, count: 1},
{lat: 49.2760729, lng:-123.1339282, count: 1},
{lat: 49.2426102, lng:-123.0940489, count: 1},
{lat: 49.2759497, lng:-123.1337698, count: 1},
{lat: 49.2759497, lng:-123.1337698, count: 1},
{lat: 49.2759497, lng:-123.1337698, count: 1},
{lat: 49.2759497, lng:-123.1337698, count: 1},
{lat: 49.2759497, lng:-123.1337698, count: 1},
{lat: 49.2317486, lng:-123.0770355, count: 1},
{lat: 49.2796612, lng:-123.1261987, count: 1},
{lat: 49.2882682, lng:-123.1370736, count: 1},
{lat: 49.257539, lng:-123.1004533, count: 1},
{lat: 49.2455748, lng:-123.0939497, count: 1},
{lat: 49.2127039, lng:-123.1286716, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2575315, lng:-123.099893, count: 1},
{lat: 49.2853561, lng:-123.1338937, count: 1},
{lat: 49.2853561, lng:-123.1338937, count: 1},
{lat: 49.2480972, lng:-123.1041109, count: 1},
{lat: 49.2845627, lng:-123.1247019, count: 1},
{lat: 49.2202676, lng:-123.0658703, count: 1},
{lat: 49.2581726, lng:-123.03228, count: 1},
{lat: 49.25662, lng:-123.1012081, count: 1},
{lat: 49.2566113, lng:-123.1004559, count: 1},
{lat: 49.254643, lng:-123.0937418, count: 1},
{lat: 49.2565378, lng:-123.1012103, count: 1},
{lat: 49.254643, lng:-123.0937418, count: 1},
{lat: 49.2585888, lng:-123.0944569, count: 1},
{lat: 49.255553, lng:-123.0937114, count: 1},
{lat: 49.2573564, lng:-123.0935218, count: 1},
{lat: 49.2585888, lng:-123.0944569, count: 1},
{lat: 49.2572823, lng:-123.0937135, count: 1},
{lat: 49.2597224, lng:-123.0928094, count: 1},
{lat: 49.2565363, lng:-123.1010798, count: 1},
{lat: 49.2556423, lng:-123.1012413, count: 1},
{lat: 49.2585888, lng:-123.0944569, count: 1},
{lat: 49.2614731, lng:-123.0929197, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.2784103, lng:-123.128231, count: 1},
{lat: 49.2791032, lng:-123.0335127, count: 1},
{lat: 49.2556423, lng:-123.1012413, count: 1},
{lat: 49.2701246, lng:-123.1030674, count: 1},
{lat: 49.2741129, lng:-123.0564846, count: 1},
{lat: 49.2193386, lng:-123.116957, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2614906, lng:-123.0960412, count: 1},
{lat: 49.2452167, lng:-123.1944403, count: 1},
{lat: 49.2556245, lng:-123.0997314, count: 1},
{lat: 49.2392803, lng:-123.0344079, count: 1},
{lat: 49.2451372, lng:-123.1162173, count: 1},
{lat: 49.2748299, lng:-123.1259212, count: 1},
{lat: 49.2748299, lng:-123.1259212, count: 1},
{lat: 49.2801732, lng:-123.1274502, count: 1},
{lat: 49.2547457, lng:-123.1009939, count: 1},
{lat: 49.2547457, lng:-123.1009939, count: 1},
{lat: 49.2452145, lng:-123.1938093, count: 1},
{lat: 49.2165376, lng:-123.0940355, count: 1},
{lat: 49.2592953, lng:-123.1034183, count: 1},
{lat: 49.2529859, lng:-123.1281246, count: 1},
{lat: 49.2393251, lng:-123.0342807, count: 1},
{lat: 49.2804325, lng:-123.1270611, count: 1},
{lat: 49.2758923, lng:-123.1243483, count: 1},
{lat: 49.2640461, lng:-123.1553549, count: 1},
{lat: 49.2758923, lng:-123.1243483, count: 1},
{lat: 49.2647474, lng:-123.1552037, count: 1},
{lat: 49.2836492, lng:-123.1306487, count: 1},
{lat: 49.2717786, lng:-123.1615311, count: 1},
{lat: 49.2799044, lng:-123.0771161, count: 1},
{lat: 49.2799044, lng:-123.0771161, count: 1},
{lat: 49.2801578, lng:-123.0307771, count: 1},
{lat: 49.2792591, lng:-123.0307967, count: 1},
{lat: 49.2267794, lng:-123.0683159, count: 1},
{lat: 49.2391761, lng:-123.0339183, count: 1},
{lat: 49.2547397, lng:-123.1002268, count: 1},
{lat: 49.2579996, lng:-123.0935979, count: 1},
{lat: 49.229949, lng:-123.1214671, count: 1},
{lat: 49.2756822, lng:-123.1186337, count: 1},
{lat: 49.2579996, lng:-123.0935979, count: 1},
{lat: 49.2760345, lng:-123.1183563, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2384536, lng:-123.0324361, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2579996, lng:-123.0935979, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2911745, lng:-123.1295807, count: 1},
{lat: 49.2579996, lng:-123.0935979, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2800609, lng:-123.084779, count: 1},
{lat: 49.2316672, lng:-123.0756443, count: 1},
{lat: 49.2814785, lng:-123.1100445, count: 1},
{lat: 49.2814785, lng:-123.1100445, count: 1},
{lat: 49.2814785, lng:-123.1100445, count: 1},
{lat: 49.2814785, lng:-123.1100445, count: 1},
{lat: 49.2814785, lng:-123.1100445, count: 1},
{lat: 49.2811299, lng:-123.1105261, count: 1},
{lat: 49.2288185, lng:-123.1493668, count: 1},
{lat: 49.2863038, lng:-123.1181964, count: 1},
{lat: 49.2861506, lng:-123.1371462, count: 1},
{lat: 49.2765789, lng:-123.0329506, count: 1},
{lat: 49.2538308, lng:-123.1007504, count: 1},
{lat: 49.2811229, lng:-123.1085181, count: 1},
{lat: 49.2811229, lng:-123.1085181, count: 1},
{lat: 49.2889118, lng:-123.1167881, count: 1},
{lat: 49.2889118, lng:-123.1167881, count: 1},
{lat: 49.2754371, lng:-123.0696001, count: 1},
{lat: 49.229949, lng:-123.1214671, count: 1},
{lat: 49.2756515, lng:-123.069597, count: 1},
{lat: 49.2756515, lng:-123.069597, count: 1},
{lat: 49.2882682, lng:-123.1370736, count: 1},
{lat: 49.2700765, lng:-123.1004925, count: 1},
{lat: 49.2700765, lng:-123.1004925, count: 1},
{lat: 49.2548232, lng:-123.0661898, count: 1},
{lat: 49.2755518, lng:-123.0694727, count: 1},
{lat: 49.2755518, lng:-123.0694727, count: 1},
{lat: 49.2700765, lng:-123.1004925, count: 1},
{lat: 49.2927763, lng:-123.1481254, count: 1},
{lat: 49.2927763, lng:-123.1481254, count: 1},
{lat: 49.2767939, lng:-123.1475807, count: 1},
{lat: 49.2799056, lng:-123.1305597, count: 1},
{lat: 49.2798576, lng:-123.1304851, count: 1},
{lat: 49.2743011, lng:-123.1208707, count: 1},
{lat: 49.2743011, lng:-123.1208707, count: 1},
{lat: 49.2979541, lng:-123.1308045, count: 1},
{lat: 49.2235968, lng:-123.0897347, count: 1},
{lat: 49.2496665, lng:-123.049564, count: 1}]




  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2004', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2005()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.282375, lng:-123.1016644, count: 1},
{lat: 49.2212803, lng:-123.1437052, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2629974, lng:-123.1062358, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2822844, lng:-123.1012873, count: 1},
{lat: 49.2822844, lng:-123.1012873, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2605902, lng:-123.1232357, count: 1},
{lat: 49.2789978, lng:-123.0726323, count: 1},
{lat: 49.2822791, lng:-123.1010491, count: 1},
{lat: 49.2568946, lng:-123.1171894, count: 1},
{lat: 49.2568946, lng:-123.1171894, count: 1},
{lat: 49.2823551, lng:-123.100759, count: 1},
{lat: 49.2606028, lng:-123.1238847, count: 1},
{lat: 49.2606028, lng:-123.1238847, count: 1},
{lat: 49.2272095, lng:-123.0851369, count: 1},
{lat: 49.2813576, lng:-123.1021365, count: 1},
{lat: 49.2813576, lng:-123.1021365, count: 1},
{lat: 49.2265167, lng:-123.0852811, count: 1},
{lat: 49.2282086, lng:-123.1600978, count: 1},
{lat: 49.2865206, lng:-123.1106591, count: 1},
{lat: 49.2624157, lng:-123.1226997, count: 1},
{lat: 49.2624157, lng:-123.1226997, count: 1},
{lat: 49.2624157, lng:-123.1226997, count: 1},
{lat: 49.2624157, lng:-123.1226997, count: 1},
{lat: 49.2774782, lng:-123.0655431, count: 1},
{lat: 49.2814398, lng:-123.1021325, count: 1},
{lat: 49.2814398, lng:-123.1021325, count: 1},
{lat: 49.285168, lng:-123.1201303, count: 1},
{lat: 49.286621, lng:-123.1106942, count: 1},
{lat: 49.2773774, lng:-123.0861519, count: 1},
{lat: 49.2866273, lng:-123.1107158, count: 1},
{lat: 49.2773934, lng:-123.087183, count: 1},
{lat: 49.2773934, lng:-123.087183, count: 1},
{lat: 49.2773934, lng:-123.087183, count: 1},
{lat: 49.2773934, lng:-123.087183, count: 1},
{lat: 49.2866273, lng:-123.1107158, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2142953, lng:-123.0960849, count: 1},
{lat: 49.2142953, lng:-123.0960849, count: 1},
{lat: 49.2142205, lng:-123.0964861, count: 1},
{lat: 49.2142255, lng:-123.0967512, count: 1},
{lat: 49.2845352, lng:-123.1248567, count: 1},
{lat: 49.2845352, lng:-123.1248567, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.281421, lng:-123.1012334, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2840217, lng:-123.1139242, count: 1},
{lat: 49.2070142, lng:-123.1248279, count: 1},
{lat: 49.2066512, lng:-123.1252488, count: 1},
{lat: 49.2066512, lng:-123.1252488, count: 1},
{lat: 49.2066146, lng:-123.1253365, count: 1},
{lat: 49.2766687, lng:-123.0989566, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2284224, lng:-123.1522171, count: 1},
{lat: 49.2809851, lng:-123.1225268, count: 1},
{lat: 49.2809851, lng:-123.1225268, count: 1},
{lat: 49.2813279, lng:-123.1007169, count: 1},
{lat: 49.2813279, lng:-123.1007169, count: 1},
{lat: 49.2569559, lng:-123.1151949, count: 1},
{lat: 49.226935, lng:-123.0800795, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2806399, lng:-123.1188332, count: 1},
{lat: 49.2149609, lng:-123.0971267, count: 1},
{lat: 49.281325, lng:-123.100575, count: 1},
{lat: 49.279436, lng:-123.0996765, count: 1},
{lat: 49.2264992, lng:-123.0623634, count: 1},
{lat: 49.2255778, lng:-123.025945, count: 1},
{lat: 49.279436, lng:-123.0996765, count: 1},
{lat: 49.2804226, lng:-123.1191599, count: 1},
{lat: 49.2804226, lng:-123.1191599, count: 1},
{lat: 49.2804226, lng:-123.1191599, count: 1},
{lat: 49.2804226, lng:-123.1191599, count: 1},
{lat: 49.2558377, lng:-123.1151756, count: 1},
{lat: 49.2558377, lng:-123.1151756, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.279672, lng:-123.1202885, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2846466, lng:-123.1109234, count: 1},
{lat: 49.2550757, lng:-123.117191, count: 1},
{lat: 49.211161, lng:-123.0875575, count: 1},
{lat: 49.2665784, lng:-123.1216451, count: 1},
{lat: 49.2548771, lng:-123.1152261, count: 1},
{lat: 49.2548771, lng:-123.1152261, count: 1},
{lat: 49.2666536, lng:-123.1223924, count: 1},
{lat: 49.2666536, lng:-123.1223924, count: 1},
{lat: 49.2804659, lng:-123.1014778, count: 1},
{lat: 49.2666471, lng:-123.1224084, count: 1},
{lat: 49.2666278, lng:-123.1224562, count: 1},
{lat: 49.2672262, lng:-123.1212107, count: 1},
{lat: 49.2267958, lng:-123.0698121, count: 1},
{lat: 49.2673226, lng:-123.1218328, count: 1},
{lat: 49.2673226, lng:-123.1218328, count: 1},
{lat: 49.2057448, lng:-123.119368, count: 1},
{lat: 49.254191, lng:-123.116733, count: 1},
{lat: 49.2673353, lng:-123.1219146, count: 1},
{lat: 49.280451, lng:-123.100864, count: 1},
{lat: 49.2804487, lng:-123.1007697, count: 1},
{lat: 49.2532574, lng:-123.1161716, count: 1},
{lat: 49.2844399, lng:-123.1018401, count: 1},
{lat: 49.266136, lng:-123.0945131, count: 1},
{lat: 49.2820226, lng:-123.1209311, count: 1},
{lat: 49.2820226, lng:-123.1209311, count: 1},
{lat: 49.2820226, lng:-123.1209311, count: 1},
{lat: 49.2404299, lng:-123.1014098, count: 1},
{lat: 49.2840256, lng:-123.0977673, count: 1},
{lat: 49.266136, lng:-123.0945131, count: 1},
{lat: 49.2839419, lng:-123.0932446, count: 1},
{lat: 49.2846689, lng:-123.1129493, count: 1},
{lat: 49.2523935, lng:-123.117523, count: 1},
{lat: 49.2520765, lng:-123.1153481, count: 1},
{lat: 49.2520765, lng:-123.1153481, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2796768, lng:-123.1076865, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2282901, lng:-123.0939412, count: 1},
{lat: 49.2282064, lng:-123.0939428, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2800277, lng:-123.1179064, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2183137, lng:-123.0769932, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2183137, lng:-123.0769932, count: 1},
{lat: 49.2798324, lng:-123.1183796, count: 1},
{lat: 49.2794823, lng:-123.1187332, count: 1},
{lat: 49.2625291, lng:-123.0992743, count: 1},
{lat: 49.2795792, lng:-123.1187634, count: 1},
{lat: 49.2832402, lng:-123.0617252, count: 1},
{lat: 49.2795597, lng:-123.1187929, count: 1},
{lat: 49.2794239, lng:-123.1188219, count: 1},
{lat: 49.2794239, lng:-123.1188219, count: 1},
{lat: 49.2838601, lng:-123.0995728, count: 1},
{lat: 49.2506614, lng:-123.1171106, count: 1},
{lat: 49.2165807, lng:-123.0960903, count: 1},
{lat: 49.228765, lng:-123.1283108, count: 1}]





  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2005', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2006()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2637424, lng:-123.1481418, count: 1},
{lat: 49.2464879, lng:-123.0567172, count: 1},
{lat: 49.2872702, lng:-123.1418223, count: 1},
{lat: 49.2319336, lng:-123.0891437, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2771548, lng:-123.1261922, count: 1},
{lat: 49.2725931, lng:-123.1581222, count: 1},
{lat: 49.2204722, lng:-123.1289743, count: 1},
{lat: 49.2462261, lng:-123.1250766, count: 1},
{lat: 49.2462261, lng:-123.1250766, count: 1},
{lat: 49.2462261, lng:-123.1250766, count: 1},
{lat: 49.2820537, lng:-123.0893775, count: 1},
{lat: 49.2462261, lng:-123.1250766, count: 1},
{lat: 49.2726021, lng:-123.1587223, count: 1},
{lat: 49.2468946, lng:-123.0689621, count: 1},
{lat: 49.2685515, lng:-123.1843051, count: 1},
{lat: 49.2831824, lng:-123.1012355, count: 1},
{lat: 49.217154, lng:-123.055322, count: 1},
{lat: 49.2771548, lng:-123.1261922, count: 1},
{lat: 49.2832656, lng:-123.1012801, count: 1},
{lat: 49.2832656, lng:-123.1012801, count: 1},
{lat: 49.2755785, lng:-123.1304985, count: 1},
{lat: 49.2831887, lng:-123.1015728, count: 1},
{lat: 49.283279, lng:-123.1020028, count: 1},
{lat: 49.2466713, lng:-123.101131, count: 1},
{lat: 49.2461625, lng:-123.1011706, count: 1},
{lat: 49.2324916, lng:-123.1019277, count: 1},
{lat: 49.2325121, lng:-123.1028252, count: 1},
{lat: 49.2813475, lng:-123.0996871, count: 1},
{lat: 49.2685507, lng:-123.1842297, count: 1},
{lat: 49.2778028, lng:-123.1271936, count: 1},
{lat: 49.2750187, lng:-123.100384, count: 1},
{lat: 49.2807253, lng:-123.1188918, count: 1},
{lat: 49.2750187, lng:-123.100384, count: 1},
{lat: 49.2639254, lng:-123.0775639, count: 1},
{lat: 49.2827611, lng:-123.1176182, count: 1},
{lat: 49.2750187, lng:-123.100384, count: 1},
{lat: 49.2750187, lng:-123.100384, count: 1},
{lat: 49.2507407, lng:-123.1255319, count: 1},
{lat: 49.2507663, lng:-123.1268313, count: 1},
{lat: 49.2860429, lng:-123.0597637, count: 1},
{lat: 49.2857924, lng:-123.0597705, count: 1},
{lat: 49.2495094, lng:-123.0745409, count: 1},
{lat: 49.2494474, lng:-123.0743981, count: 1},
{lat: 49.2331218, lng:-123.0501128, count: 1},
{lat: 49.2517249, lng:-123.125439, count: 1},
{lat: 49.2227027, lng:-123.1468084, count: 1},
{lat: 49.2516585, lng:-123.1263239, count: 1},
{lat: 49.2219892, lng:-123.146835, count: 1},
{lat: 49.2828106, lng:-123.1349164, count: 1},
{lat: 49.2638879, lng:-123.0309509, count: 1},
{lat: 49.276003, lng:-123.1002594, count: 1},
{lat: 49.276003, lng:-123.1002594, count: 1},
{lat: 49.276003, lng:-123.1002594, count: 1},
{lat: 49.2745246, lng:-123.1221366, count: 1},
{lat: 49.272992, lng:-123.11979, count: 1},
{lat: 49.2184234, lng:-123.1018268, count: 1},
{lat: 49.2865606, lng:-123.0573591, count: 1},
{lat: 49.2865606, lng:-123.0573591, count: 1},
{lat: 49.2865606, lng:-123.0573591, count: 1},
{lat: 49.28656, lng:-123.0576688, count: 1},
{lat: 49.2813475, lng:-123.0996871, count: 1},
{lat: 49.281081, lng:-123.1192719, count: 1},
{lat: 49.2204983, lng:-123.1451974, count: 1},
{lat: 49.294078, lng:-123.1374084, count: 1},
{lat: 49.2541205, lng:-123.0898947, count: 1},
{lat: 49.2329841, lng:-123.024898, count: 1},
{lat: 49.2652747, lng:-123.0897825, count: 1},
{lat: 49.2463493, lng:-123.0763021, count: 1},
{lat: 49.2654126, lng:-123.1456467, count: 1},
{lat: 49.2761112, lng:-123.1014993, count: 1},
{lat: 49.2761112, lng:-123.1014993, count: 1},
{lat: 49.2870876, lng:-123.1253152, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2096006, lng:-123.0594164, count: 1},
{lat: 49.2209697, lng:-123.0995947, count: 1},
{lat: 49.2345237, lng:-123.1820946, count: 1},
{lat: 49.2720161, lng:-123.0617872, count: 1},
{lat: 49.2181729, lng:-123.101962, count: 1},
{lat: 49.2839272, lng:-123.0995677, count: 1},
{lat: 49.2211858, lng:-123.0659314, count: 1},
{lat: 49.2795337, lng:-123.1002209, count: 1},
{lat: 49.2328393, lng:-123.0248997, count: 1},
{lat: 49.2820282, lng:-123.0307048, count: 1},
{lat: 49.2332644, lng:-123.0270675, count: 1},
{lat: 49.2652747, lng:-123.0897825, count: 1},
{lat: 49.2740885, lng:-123.1214876, count: 1},
{lat: 49.2643315, lng:-123.0237836, count: 1},
{lat: 49.2740885, lng:-123.1214876, count: 1},
{lat: 49.2642237, lng:-123.0237858, count: 1},
{lat: 49.2463931, lng:-123.0972594, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2758909, lng:-123.1242573, count: 1},
{lat: 49.294078, lng:-123.1374084, count: 1},
{lat: 49.2525328, lng:-123.1247326, count: 1},
{lat: 49.2525328, lng:-123.1247326, count: 1},
{lat: 49.2367756, lng:-123.1394661, count: 1},
{lat: 49.2345407, lng:-123.1279928, count: 1},
{lat: 49.2467516, lng:-123.1038665, count: 1},
{lat: 49.2838228, lng:-123.0545211, count: 1},
{lat: 49.2776174, lng:-123.096963, count: 1},
{lat: 49.2740652, lng:-123.0696202, count: 1},
{lat: 49.2837738, lng:-123.0932521, count: 1},
{lat: 49.2579255, lng:-123.0868758, count: 1},
{lat: 49.276502, lng:-123.1251896, count: 1},
{lat: 49.2835085, lng:-123.0577084, count: 1},
{lat: 49.2834587, lng:-123.0577106, count: 1},
{lat: 49.2675492, lng:-123.1355516, count: 1},
{lat: 49.2206708, lng:-123.1453157, count: 1},
{lat: 49.2464267, lng:-123.09026, count: 1},
{lat: 49.2597657, lng:-123.0930511, count: 1},
{lat: 49.2804718, lng:-123.1017138, count: 1},
{lat: 49.280384, lng:-123.1312142, count: 1},
{lat: 49.2719794, lng:-123.0388615, count: 1},
{lat: 49.280384, lng:-123.1312142, count: 1},
{lat: 49.2345407, lng:-123.1279928, count: 1},
{lat: 49.2656785, lng:-123.1127286, count: 1},
{lat: 49.2652587, lng:-123.1127591, count: 1},
{lat: 49.2733155, lng:-123.1502476, count: 1},
{lat: 49.280384, lng:-123.1312142, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.280384, lng:-123.1312142, count: 1},
{lat: 49.2461896, lng:-123.0902636, count: 1},
{lat: 49.24882, lng:-123.1015265, count: 1},
{lat: 49.2907777, lng:-123.1365272, count: 1},
{lat: 49.2460306, lng:-123.0901404, count: 1},
{lat: 49.2914794, lng:-123.1354762, count: 1},
{lat: 49.2652747, lng:-123.0897825, count: 1},
{lat: 49.2345407, lng:-123.1279928, count: 1},
{lat: 49.2914794, lng:-123.1354762, count: 1},
{lat: 49.2814032, lng:-123.1003817, count: 1},
{lat: 49.281325, lng:-123.100575, count: 1},
{lat: 49.2760976, lng:-123.1277622, count: 1},
{lat: 49.2377457, lng:-123.1852581, count: 1},
{lat: 49.2721424, lng:-123.0744162, count: 1},
{lat: 49.2717566, lng:-123.1567442, count: 1},
{lat: 49.2475039, lng:-123.1488337, count: 1},
{lat: 49.2475039, lng:-123.1488337, count: 1},
{lat: 49.2471837, lng:-123.1488388, count: 1},
{lat: 49.24733, lng:-123.1368991, count: 1},
{lat: 49.2766815, lng:-123.0986551, count: 1},
{lat: 49.252571, lng:-123.1270113, count: 1},
{lat: 49.2595269, lng:-123.0640372, count: 1},
{lat: 49.2873681, lng:-123.1331699, count: 1},
{lat: 49.2813279, lng:-123.1007169, count: 1},
{lat: 49.2813279, lng:-123.1007169, count: 1},
{lat: 49.2738246, lng:-123.0597855, count: 1},
{lat: 49.2847992, lng:-123.0616164, count: 1},
{lat: 49.2810922, lng:-123.1125074, count: 1},
{lat: 49.2478978, lng:-123.178542, count: 1},
{lat: 49.2814112, lng:-123.1007603, count: 1},
{lat: 49.2767157, lng:-123.0997467, count: 1},
{lat: 49.2817262, lng:-123.1134753, count: 1},
{lat: 49.2534285, lng:-123.1246823, count: 1},
{lat: 49.2445961, lng:-123.0601332, count: 1},
{lat: 49.2534285, lng:-123.1246823, count: 1},
{lat: 49.2446462, lng:-123.060454, count: 1},
{lat: 49.2446462, lng:-123.060454, count: 1},
{lat: 49.2534285, lng:-123.1246823, count: 1},
{lat: 49.2270612, lng:-123.0601408, count: 1},
{lat: 49.2813467, lng:-123.101616, count: 1},
{lat: 49.2848979, lng:-123.1183454, count: 1},
{lat: 49.2814389, lng:-123.1020852, count: 1},
{lat: 49.285796, lng:-123.1332183, count: 1},
{lat: 49.2334599, lng:-123.0587693, count: 1},
{lat: 49.2323568, lng:-123.0292026, count: 1},
{lat: 49.2271064, lng:-123.0621508, count: 1},
{lat: 49.2271064, lng:-123.0621508, count: 1},
{lat: 49.2814398, lng:-123.1021325, count: 1},
{lat: 49.2721081, lng:-123.0758905, count: 1},
{lat: 49.2814398, lng:-123.1021325, count: 1},
{lat: 49.2891952, lng:-123.0593401, count: 1},
{lat: 49.2891952, lng:-123.0593401, count: 1},
{lat: 49.2823645, lng:-123.1011879, count: 1},
{lat: 49.2823645, lng:-123.1011879, count: 1},
{lat: 49.2823022, lng:-123.1020973, count: 1},
{lat: 49.2887071, lng:-123.0597331, count: 1},
{lat: 49.2829844, lng:-123.1153966, count: 1},
{lat: 49.2534391, lng:-123.1251501, count: 1},
{lat: 49.2535622, lng:-123.1269648, count: 1},
{lat: 49.245855, lng:-123.0458033, count: 1},
{lat: 49.2636722, lng:-123.1018585, count: 1},
{lat: 49.2637557, lng:-123.1019249, count: 1},
{lat: 49.2848118, lng:-123.1183883, count: 1},
{lat: 49.2829844, lng:-123.1153966, count: 1},
{lat: 49.2646752, lng:-123.1028117, count: 1}]






  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2006', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2007()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2598658, lng:-123.1387905, count: 1},
{lat: 49.2637033, lng:-123.1482636, count: 1},
{lat: 49.2247411, lng:-123.1009019, count: 1},
{lat: 49.2603545, lng:-123.1387747, count: 1},
{lat: 49.2605355, lng:-123.1387689, count: 1},
{lat: 49.2673447, lng:-123.1000032, count: 1},
{lat: 49.2672685, lng:-123.1004777, count: 1},
{lat: 49.2256069, lng:-123.1015364, count: 1},
{lat: 49.2637918, lng:-123.0371019, count: 1},
{lat: 49.2275672, lng:-123.0998365, count: 1},
{lat: 49.2638164, lng:-123.1501131, count: 1},
{lat: 49.2638164, lng:-123.1501131, count: 1},
{lat: 49.2598255, lng:-123.1010288, count: 1},
{lat: 49.259906, lng:-123.1010263, count: 1},
{lat: 49.2422852, lng:-123.1697314, count: 1},
{lat: 49.2683542, lng:-123.1692415, count: 1},
{lat: 49.2475993, lng:-123.0995261, count: 1},
{lat: 49.2864488, lng:-123.1277773, count: 1},
{lat: 49.286411, lng:-123.1277193, count: 1},
{lat: 49.2475231, lng:-123.0999756, count: 1},
{lat: 49.2502837, lng:-123.1001168, count: 1},
{lat: 49.2593187, lng:-123.1150773, count: 1},
{lat: 49.2520972, lng:-123.0999153, count: 1},
{lat: 49.2520281, lng:-123.1008204, count: 1},
{lat: 49.2505773, lng:-123.0417555, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2132872, lng:-123.0390584, count: 1},
{lat: 49.2538308, lng:-123.1007504, count: 1},
{lat: 49.2547457, lng:-123.1009939, count: 1},
{lat: 49.2647312, lng:-123.1492727, count: 1},
{lat: 49.28609, lng:-123.1272263, count: 1},
{lat: 49.28609, lng:-123.1272263, count: 1},
{lat: 49.2136496, lng:-123.0379676, count: 1},
{lat: 49.2547457, lng:-123.1009939, count: 1},
{lat: 49.2581933, lng:-123.0417244, count: 1},
{lat: 49.2591465, lng:-123.1387903, count: 1},
{lat: 49.2565378, lng:-123.1012103, count: 1},
{lat: 49.2656367, lng:-123.0388917, count: 1},
{lat: 49.2171659, lng:-123.038806, count: 1},
{lat: 49.2703695, lng:-123.0436596, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2360618, lng:-123.0432224, count: 1},
{lat: 49.2610721, lng:-123.1009382, count: 1},
{lat: 49.2171385, lng:-123.0399109, count: 1},
{lat: 49.2620468, lng:-123.1006654, count: 1},
{lat: 49.2620468, lng:-123.1006654, count: 1},
{lat: 49.2596825, lng:-123.171712, count: 1},
{lat: 49.2744861, lng:-123.1219816, count: 1},
{lat: 49.2834466, lng:-123.1041612, count: 1},
{lat: 49.2683842, lng:-123.1713604, count: 1},
{lat: 49.2640941, lng:-123.1717127, count: 1},
{lat: 49.2202011, lng:-123.0401552, count: 1},
{lat: 49.2646583, lng:-123.1499808, count: 1},
{lat: 49.2201188, lng:-123.0401946, count: 1},
{lat: 49.2640936, lng:-123.171682, count: 1},
{lat: 49.2640925, lng:-123.1716207, count: 1},
{lat: 49.2838042, lng:-123.1065136, count: 1},
{lat: 49.2566118, lng:-123.105696, count: 1},
{lat: 49.2835708, lng:-123.1035206, count: 1},
{lat: 49.2845646, lng:-123.044064, count: 1},
{lat: 49.2693222, lng:-123.1041248, count: 1},
{lat: 49.2673261, lng:-123.1041988, count: 1},
{lat: 49.2823303, lng:-123.1037688, count: 1},
{lat: 49.2220482, lng:-123.1054512, count: 1},
{lat: 49.2602031, lng:-123.1045773, count: 1},
{lat: 49.2586681, lng:-123.0736381, count: 1},
{lat: 49.2804402, lng:-123.1038882, count: 1},
{lat: 49.2587344, lng:-123.0832988, count: 1},
{lat: 49.2663041, lng:-123.1483853, count: 1},
{lat: 49.2586327, lng:-123.0832997, count: 1},
{lat: 49.2832262, lng:-123.1035131, count: 1},
{lat: 49.2832255, lng:-123.1034789, count: 1},
{lat: 49.2832255, lng:-123.1034789, count: 1},
{lat: 49.2832255, lng:-123.1034789, count: 1},
{lat: 49.2122821, lng:-123.1071595, count: 1},
{lat: 49.2201185, lng:-123.0409863, count: 1},
{lat: 49.2657911, lng:-123.1713176, count: 1},
{lat: 49.2825947, lng:-123.104886, count: 1},
{lat: 49.2816667, lng:-123.105138, count: 1},
{lat: 49.2835556, lng:-123.1047384, count: 1},
{lat: 49.2835556, lng:-123.1047384, count: 1},
{lat: 49.2836349, lng:-123.1047057, count: 1},
{lat: 49.2836349, lng:-123.1047057, count: 1},
{lat: 49.2836349, lng:-123.1047057, count: 1},
{lat: 49.221127, lng:-123.0411175, count: 1},
{lat: 49.221127, lng:-123.0411175, count: 1},
{lat: 49.283453, lng:-123.1066531, count: 1},
{lat: 49.283453, lng:-123.1066531, count: 1},
{lat: 49.2365637, lng:-123.1716311, count: 1},
{lat: 49.2837118, lng:-123.1065502, count: 1},
{lat: 49.2835432, lng:-123.1064873, count: 1},
{lat: 49.2837096, lng:-123.1064212, count: 1},
{lat: 49.2837096, lng:-123.1064212, count: 1},
{lat: 49.283765, lng:-123.1063992, count: 1},
{lat: 49.2838574, lng:-123.1063626, count: 1},
{lat: 49.284055, lng:-123.0991065, count: 1},
{lat: 49.288058, lng:-123.1154753, count: 1},
{lat: 49.288058, lng:-123.1154753, count: 1},
{lat: 49.2672428, lng:-123.1488345, count: 1},
{lat: 49.2238734, lng:-123.0392529, count: 1},
{lat: 49.2238904, lng:-123.0400748, count: 1},
{lat: 49.261023, lng:-123.0410684, count: 1},
{lat: 49.2610325, lng:-123.0420853, count: 1},
{lat: 49.2672461, lng:-123.1491892, count: 1},
{lat: 49.2611691, lng:-123.0441036, count: 1},
{lat: 49.2841026, lng:-123.1088478, count: 1},
{lat: 49.2763853, lng:-123.0439774, count: 1},
{lat: 49.2763853, lng:-123.0439774, count: 1},
{lat: 49.283199, lng:-123.1042978, count: 1},
{lat: 49.2832182, lng:-123.1042969, count: 1},
{lat: 49.2587759, lng:-123.0930082, count: 1},
{lat: 49.2593742, lng:-123.1290706, count: 1},
{lat: 49.2247491, lng:-123.040244, count: 1},
{lat: 49.2680957, lng:-123.148584, count: 1},
{lat: 49.2832928, lng:-123.1041679, count: 1},
{lat: 49.2833505, lng:-123.1041654, count: 1},
{lat: 49.2834274, lng:-123.104162, count: 1},
{lat: 49.2834274, lng:-123.104162, count: 1},
{lat: 49.2834274, lng:-123.104162, count: 1},
{lat: 49.2834274, lng:-123.104162, count: 1},
{lat: 49.2276592, lng:-123.0384826, count: 1},
{lat: 49.2742276, lng:-123.1217434, count: 1},
{lat: 49.2167266, lng:-123.0456072, count: 1},
{lat: 49.2173792, lng:-123.0469166, count: 1},
{lat: 49.2575585, lng:-123.0444558, count: 1},
{lat: 49.2754131, lng:-123.0414762, count: 1},
{lat: 49.2611227, lng:-123.0984666, count: 1},
{lat: 49.2610393, lng:-123.0983826, count: 1},
{lat: 49.2610393, lng:-123.0983826, count: 1},
{lat: 49.2589674, lng:-123.1268203, count: 1},
{lat: 49.2581223, lng:-123.0415338, count: 1},
{lat: 49.2601663, lng:-123.0993742, count: 1},
{lat: 49.2602504, lng:-123.0992455, count: 1},
{lat: 49.2583448, lng:-123.1002436, count: 1},
{lat: 49.2326602, lng:-123.1499006, count: 1},
{lat: 49.2585916, lng:-123.0620489, count: 1},
{lat: 49.2722402, lng:-123.0424746, count: 1},
{lat: 49.2360618, lng:-123.0432224, count: 1},
{lat: 49.236101, lng:-123.0436519, count: 1},
{lat: 49.2344885, lng:-123.1519445, count: 1},
{lat: 49.2292376, lng:-123.0407892, count: 1},
{lat: 49.2363213, lng:-123.0453724, count: 1},
{lat: 49.2547397, lng:-123.1002268, count: 1},
{lat: 49.2694113, lng:-123.09929, count: 1},
{lat: 49.2597382, lng:-123.1361837, count: 1},
{lat: 49.2310968, lng:-123.0401428, count: 1},
{lat: 49.2689386, lng:-123.100055, count: 1},
{lat: 49.2595245, lng:-123.1386656, count: 1},
{lat: 49.2713141, lng:-123.0427873, count: 1},
{lat: 49.2581434, lng:-123.0435883, count: 1},
{lat: 49.2672707, lng:-123.1006593, count: 1},
{lat: 49.2689398, lng:-123.1497485, count: 1},
{lat: 49.2801654, lng:-123.0439469, count: 1},
{lat: 49.2237817, lng:-123.1014282, count: 1},
{lat: 49.267611, lng:-123.037515, count: 1},
{lat: 49.2065177, lng:-123.0476901, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2675303, lng:-123.0381182, count: 1},
{lat: 49.2685119, lng:-123.0371297, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.268512, lng:-123.0373151, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.2811971, lng:-123.0437749, count: 1},
{lat: 49.264528, lng:-123.0993152, count: 1},
{lat: 49.2034128, lng:-123.1329207, count: 1},
{lat: 49.2637083, lng:-123.0992582, count: 1},
{lat: 49.262927, lng:-123.1000689, count: 1},
{lat: 49.2697967, lng:-123.1486603, count: 1},
{lat: 49.2647055, lng:-123.0437673, count: 1},
{lat: 49.2628386, lng:-123.0998296, count: 1},
{lat: 49.2628386, lng:-123.0998296, count: 1},
{lat: 49.2628386, lng:-123.0998296, count: 1},
{lat: 49.2822191, lng:-123.098033, count: 1},
{lat: 49.2822191, lng:-123.098033, count: 1},
{lat: 49.2822191, lng:-123.098033, count: 1},
{lat: 49.2656571, lng:-123.0441702, count: 1},
{lat: 49.270677, lng:-123.1487187, count: 1},
{lat: 49.278605, lng:-123.0993865, count: 1},
{lat: 49.2785222, lng:-123.0993395, count: 1},
{lat: 49.2785222, lng:-123.0993395, count: 1},
{lat: 49.2666985, lng:-123.0417526, count: 1},
{lat: 49.2302403, lng:-123.0445771, count: 1},
{lat: 49.2706947, lng:-123.149797, count: 1},
{lat: 49.2445701, lng:-123.0387584, count: 1},
{lat: 49.2310693, lng:-123.0458085, count: 1},
{lat: 49.2785954, lng:-123.098691, count: 1},
{lat: 49.2785056, lng:-123.0981472, count: 1},
{lat: 49.2329181, lng:-123.0459144, count: 1},
{lat: 49.2329181, lng:-123.0459144, count: 1},
{lat: 49.2544329, lng:-123.148605, count: 1},
{lat: 49.2813047, lng:-123.0995774, count: 1},
{lat: 49.2813742, lng:-123.0987585, count: 1},
{lat: 49.2813711, lng:-123.0985545, count: 1},
{lat: 49.2813711, lng:-123.0985545, count: 1},
{lat: 49.2684414, lng:-123.0440977, count: 1},
{lat: 49.2684414, lng:-123.0440977, count: 1},
{lat: 49.2812863, lng:-123.0983943, count: 1}]







  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2007', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2008()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2413839, lng:-123.1863208, count: 1},
{lat: 49.274094, lng:-123.0360266, count: 1},
{lat: 49.27349, lng:-123.123737, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2869898, lng:-123.1229104, count: 1},
{lat: 49.2452704, lng:-123.1861943, count: 1},
{lat: 49.2645201, lng:-123.0988025, count: 1},
{lat: 49.2748276, lng:-123.1258293, count: 1},
{lat: 49.2617658, lng:-123.1398605, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2614922, lng:-123.0826334, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2764952, lng:-123.1283834, count: 1},
{lat: 49.2844132, lng:-123.1133248, count: 1},
{lat: 49.2616706, lng:-123.1387002, count: 1},
{lat: 49.2754525, lng:-123.1267731, count: 1},
{lat: 49.2479914, lng:-123.1780414, count: 1},
{lat: 49.2795565, lng:-123.1298372, count: 1},
{lat: 49.2393313, lng:-123.0525817, count: 1},
{lat: 49.2616706, lng:-123.1387002, count: 1},
{lat: 49.2685252, lng:-123.0540496, count: 1},
{lat: 49.2763269, lng:-123.0715101, count: 1},
{lat: 49.2869898, lng:-123.1229104, count: 1},
{lat: 49.2811489, lng:-123.0635378, count: 1},
{lat: 49.2376384, lng:-123.0375012, count: 1},
{lat: 49.2436588, lng:-123.1292657, count: 1},
{lat: 49.246126, lng:-123.1866035, count: 1},
{lat: 49.2685252, lng:-123.0540973, count: 1},
{lat: 49.2810573, lng:-123.1278767, count: 1},
{lat: 49.2804335, lng:-123.1376509, count: 1},
{lat: 49.259323, lng:-123.1595658, count: 1},
{lat: 49.2757996, lng:-123.1185412, count: 1},
{lat: 49.2587448, lng:-123.1763836, count: 1},
{lat: 49.25784, lng:-123.1851214, count: 1},
{lat: 49.2654864, lng:-123.0973225, count: 1},
{lat: 49.2811973, lng:-123.0475305, count: 1},
{lat: 49.2605625, lng:-123.1761353, count: 1},
{lat: 49.2641883, lng:-123.0774264, count: 1},
{lat: 49.2654864, lng:-123.0973225, count: 1},
{lat: 49.2654864, lng:-123.0973225, count: 1},
{lat: 49.2605659, lng:-123.1763475, count: 1},
{lat: 49.2564766, lng:-123.1851286, count: 1},
{lat: 49.2740527, lng:-123.121789, count: 1},
{lat: 49.2634236, lng:-123.0941485, count: 1},
{lat: 49.2877904, lng:-123.124206, count: 1},
{lat: 49.2556876, lng:-123.0248938, count: 1},
{lat: 49.2869898, lng:-123.1229104, count: 1},
{lat: 49.2396963, lng:-123.0354234, count: 1},
{lat: 49.2867199, lng:-123.1362789, count: 1},
{lat: 49.2406411, lng:-123.0377376, count: 1},
{lat: 49.2654111, lng:-123.0978633, count: 1},
{lat: 49.2111998, lng:-123.0810994, count: 1},
{lat: 49.2791047, lng:-123.0338192, count: 1},
{lat: 49.2490214, lng:-123.1852018, count: 1},
{lat: 49.2713281, lng:-123.1836729, count: 1},
{lat: 49.257201, lng:-123.1650771, count: 1},
{lat: 49.2654111, lng:-123.0978633, count: 1},
{lat: 49.275958, lng:-123.1260988, count: 1},
{lat: 49.2471251, lng:-123.1852619, count: 1},
{lat: 49.275958, lng:-123.1260988, count: 1},
{lat: 49.2589891, lng:-123.1407718, count: 1},
{lat: 49.2461666, lng:-123.1852554, count: 1},
{lat: 49.2729715, lng:-123.0567819, count: 1},
{lat: 49.2760544, lng:-123.1257766, count: 1},
{lat: 49.2588817, lng:-123.1388526, count: 1},
{lat: 49.2545186, lng:-123.0444914, count: 1},
{lat: 49.2757193, lng:-123.118254, count: 1},
{lat: 49.2729715, lng:-123.0567819, count: 1},
{lat: 49.2412454, lng:-123.0359857, count: 1},
{lat: 49.2751082, lng:-123.1187422, count: 1},
{lat: 49.2806777, lng:-123.1268769, count: 1},
{lat: 49.2764206, lng:-123.1252241, count: 1},
{lat: 49.2574067, lng:-123.1857397, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2264523, lng:-123.0591862, count: 1},
{lat: 49.2869898, lng:-123.1229104, count: 1},
{lat: 49.2404693, lng:-123.1852467, count: 1},
{lat: 49.2811163, lng:-123.0482193, count: 1},
{lat: 49.2634112, lng:-123.1839209, count: 1},
{lat: 49.2869898, lng:-123.1229104, count: 1},
{lat: 49.2635019, lng:-123.184492, count: 1},
{lat: 49.2357004, lng:-123.1853025, count: 1},
{lat: 49.2713053, lng:-123.0376536, count: 1},
{lat: 49.2435826, lng:-123.1392968, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2812318, lng:-123.0953093, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.2454001, lng:-123.0534549, count: 1},
{lat: 49.2688483, lng:-123.1399379, count: 1},
{lat: 49.2615637, lng:-123.1323424, count: 1},
{lat: 49.2865606, lng:-123.0573591, count: 1},
{lat: 49.2784774, lng:-123.1303769, count: 1},
{lat: 49.2865606, lng:-123.0573591, count: 1},
{lat: 49.2785151, lng:-123.1306099, count: 1},
{lat: 49.2607327, lng:-123.1321151, count: 1},
{lat: 49.2346251, lng:-123.0387948, count: 1},
{lat: 49.2596938, lng:-123.1330645, count: 1},
{lat: 49.2846702, lng:-123.1312957, count: 1},
{lat: 49.2355806, lng:-123.0261599, count: 1},
{lat: 49.2685855, lng:-123.1836369, count: 1},
{lat: 49.2790959, lng:-123.0240154, count: 1},
{lat: 49.2070122, lng:-123.134009, count: 1},
{lat: 49.2070122, lng:-123.134009, count: 1},
{lat: 49.2565863, lng:-123.0757437, count: 1},
{lat: 49.2070122, lng:-123.134009, count: 1},
{lat: 49.2070122, lng:-123.134009, count: 1},
{lat: 49.2787534, lng:-123.1309687, count: 1},
{lat: 49.283911, lng:-123.0249831, count: 1},
{lat: 49.2838307, lng:-123.0252214, count: 1},
{lat: 49.2414852, lng:-123.0240114, count: 1},
{lat: 49.2635578, lng:-123.1335147, count: 1},
{lat: 49.2847992, lng:-123.0616164, count: 1},
{lat: 49.2869021, lng:-123.1284733, count: 1},
{lat: 49.2869021, lng:-123.1284733, count: 1},
{lat: 49.2655268, lng:-123.1068191, count: 1},
{lat: 49.2847916, lng:-123.057767, count: 1},
{lat: 49.2655268, lng:-123.1068191, count: 1},
{lat: 49.2634489, lng:-123.131746, count: 1},
{lat: 49.2518483, lng:-123.0496694, count: 1},
{lat: 49.2090177, lng:-123.0255029, count: 1},
{lat: 49.2408278, lng:-123.0247255, count: 1},
{lat: 49.2647379, lng:-123.1456712, count: 1},
{lat: 49.250133, lng:-123.1497177, count: 1},
{lat: 49.2898976, lng:-123.1235081, count: 1},
{lat: 49.2847795, lng:-123.0565253, count: 1},
{lat: 49.2747868, lng:-123.1162436, count: 1},
{lat: 49.2518235, lng:-123.0445092, count: 1},
{lat: 49.2364518, lng:-123.0240626, count: 1},
{lat: 49.2787534, lng:-123.1309687, count: 1},
{lat: 49.2504795, lng:-123.1503551, count: 1},
{lat: 49.2811165, lng:-123.0483176, count: 1},
{lat: 49.2747868, lng:-123.1162436, count: 1},
{lat: 49.2889487, lng:-123.1251533, count: 1},
{lat: 49.2506527, lng:-123.1506739, count: 1},
{lat: 49.2829528, lng:-123.1213851, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2829952, lng:-123.023889, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2548946, lng:-123.0271087, count: 1},
{lat: 49.2789064, lng:-123.1310228, count: 1},
{lat: 49.2687659, lng:-123.1399245, count: 1},
{lat: 49.2533188, lng:-123.1305595, count: 1},
{lat: 49.2522577, lng:-123.1047755, count: 1},
{lat: 49.2817662, lng:-123.1154478, count: 1},
{lat: 49.282206, lng:-123.0953661, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2528807, lng:-123.1273349, count: 1},
{lat: 49.2528807, lng:-123.1273349, count: 1},
{lat: 49.2532682, lng:-123.1274429, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2514601, lng:-123.0239458, count: 1},
{lat: 49.2869415, lng:-123.1283556, count: 1},
{lat: 49.2869415, lng:-123.1283556, count: 1},
{lat: 49.2743992, lng:-123.1525921, count: 1},
{lat: 49.2645212, lng:-123.0237801, count: 1},
{lat: 49.2525594, lng:-123.1008743, count: 1},
{lat: 49.2881208, lng:-123.0376063, count: 1},
{lat: 49.2430526, lng:-123.0608021, count: 1},
{lat: 49.2642237, lng:-123.0237858, count: 1},
{lat: 49.2637033, lng:-123.1482636, count: 1},
{lat: 49.2812748, lng:-123.0954065, count: 1},
{lat: 49.2860269, lng:-123.1313752, count: 1},
{lat: 49.286003, lng:-123.1311571, count: 1},
{lat: 49.2103553, lng:-123.025081, count: 1},
{lat: 49.210436, lng:-123.025111, count: 1},
{lat: 49.2524512, lng:-123.089955, count: 1},
{lat: 49.2524512, lng:-123.089955, count: 1},
{lat: 49.248779, lng:-123.0536117, count: 1},
{lat: 49.2815017, lng:-123.1074674, count: 1},
{lat: 49.2821805, lng:-123.1384812, count: 1},
{lat: 49.2635768, lng:-123.0237981, count: 1},
{lat: 49.2826673, lng:-123.1379415, count: 1},
{lat: 49.2789779, lng:-123.1311305, count: 1},
{lat: 49.2848644, lng:-123.0391773, count: 1},
{lat: 49.2831111, lng:-123.0953298, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2373829, lng:-123.0324837, count: 1},
{lat: 49.2792062, lng:-123.1316505, count: 1},
{lat: 49.2825374, lng:-123.136595, count: 1},
{lat: 49.2308563, lng:-123.1035616, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2811791, lng:-123.0240321, count: 1},
{lat: 49.2575235, lng:-123.1050725, count: 1},
{lat: 49.2308563, lng:-123.1035616, count: 1},
{lat: 49.2782118, lng:-123.0245962, count: 1},
{lat: 49.2772855, lng:-123.1318428, count: 1},
{lat: 49.2106659, lng:-123.0586774, count: 1},
{lat: 49.2793354, lng:-123.1316686, count: 1},
{lat: 49.2658489, lng:-123.1385438, count: 1},
{lat: 49.2853246, lng:-123.1337647, count: 1},
{lat: 49.2777828, lng:-123.1310858, count: 1},
{lat: 49.265818, lng:-123.138545, count: 1},
{lat: 49.2461404, lng:-123.0244017, count: 1},
{lat: 49.283893, lng:-123.1405403, count: 1},
{lat: 49.2462286, lng:-123.0260746, count: 1}]








  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2008', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2009()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2803332, lng:-123.1049924, count: 1},
{lat: 49.2632661, lng:-123.0751211, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2725745, lng:-123.1357534, count: 1},
{lat: 49.2725745, lng:-123.1357534, count: 1},
{lat: 49.2387658, lng:-123.037006, count: 1},
{lat: 49.238725, lng:-123.0371457, count: 1},
{lat: 49.277546, lng:-123.0954739, count: 1},
{lat: 49.2633491, lng:-123.0751902, count: 1},
{lat: 49.2633491, lng:-123.0751902, count: 1},
{lat: 49.2562387, lng:-123.1786566, count: 1},
{lat: 49.2668471, lng:-123.2119615, count: 1},
{lat: 49.2794161, lng:-123.0939596, count: 1},
{lat: 49.2725745, lng:-123.1357534, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2246538, lng:-123.0382444, count: 1},
{lat: 49.2665343, lng:-123.166349, count: 1},
{lat: 49.2662419, lng:-123.1663582, count: 1},
{lat: 49.2056861, lng:-123.1171378, count: 1},
{lat: 49.2840485, lng:-123.1120002, count: 1},
{lat: 49.2725745, lng:-123.1357534, count: 1},
{lat: 49.2774141, lng:-123.0352846, count: 1},
{lat: 49.2793383, lng:-123.0941974, count: 1},
{lat: 49.2719256, lng:-123.135107, count: 1},
{lat: 49.2561352, lng:-123.0887116, count: 1},
{lat: 49.2547121, lng:-123.0530521, count: 1},
{lat: 49.2641633, lng:-123.0751063, count: 1},
{lat: 49.2641633, lng:-123.0751063, count: 1},
{lat: 49.2641633, lng:-123.0751063, count: 1},
{lat: 49.2641633, lng:-123.0751063, count: 1},
{lat: 49.2656633, lng:-123.0338174, count: 1},
{lat: 49.2774167, lng:-123.0357666, count: 1},
{lat: 49.2774186, lng:-123.036104, count: 1},
{lat: 49.2793596, lng:-123.0953344, count: 1},
{lat: 49.2847803, lng:-123.1182512, count: 1},
{lat: 49.2793596, lng:-123.0953344, count: 1},
{lat: 49.2120328, lng:-123.0760544, count: 1},
{lat: 49.2794599, lng:-123.1200313, count: 1},
{lat: 49.2749067, lng:-123.069797, count: 1},
{lat: 49.2749067, lng:-123.069797, count: 1},
{lat: 49.2138005, lng:-123.07595, count: 1},
{lat: 49.2137217, lng:-123.0769498, count: 1},
{lat: 49.2847803, lng:-123.1182512, count: 1},
{lat: 49.2749067, lng:-123.069797, count: 1},
{lat: 49.2785193, lng:-123.1220467, count: 1},
{lat: 49.2146656, lng:-123.0767387, count: 1},
{lat: 49.2302925, lng:-123.0628989, count: 1},
{lat: 49.2570622, lng:-123.1220949, count: 1},
{lat: 49.2154299, lng:-123.0762826, count: 1},
{lat: 49.2560375, lng:-123.1271961, count: 1},
{lat: 49.2146278, lng:-123.0770862, count: 1},
{lat: 49.2623934, lng:-123.0825164, count: 1},
{lat: 49.2749067, lng:-123.069797, count: 1},
{lat: 49.2785193, lng:-123.1220467, count: 1},
{lat: 49.2844137, lng:-123.1123809, count: 1},
{lat: 49.2844137, lng:-123.1123809, count: 1},
{lat: 49.235473, lng:-123.0374533, count: 1},
{lat: 49.2077878, lng:-123.0622851, count: 1},
{lat: 49.2433528, lng:-123.0382672, count: 1},
{lat: 49.2172182, lng:-123.0769684, count: 1},
{lat: 49.2433922, lng:-123.0383629, count: 1},
{lat: 49.2555293, lng:-123.127344, count: 1},
{lat: 49.2851599, lng:-123.1199231, count: 1},
{lat: 49.2623934, lng:-123.0825164, count: 1},
{lat: 49.2677661, lng:-123.0615158, count: 1},
{lat: 49.261516, lng:-123.0864258, count: 1},
{lat: 49.2541959, lng:-123.041659, count: 1},
{lat: 49.2785193, lng:-123.1220467, count: 1},
{lat: 49.2541959, lng:-123.041659, count: 1},
{lat: 49.2270062, lng:-123.0391031, count: 1},
{lat: 49.2131453, lng:-123.0932863, count: 1},
{lat: 49.2750096, lng:-123.0321788, count: 1},
{lat: 49.2389721, lng:-123.0618905, count: 1},
{lat: 49.2119671, lng:-123.0798925, count: 1},
{lat: 49.2606385, lng:-123.0865356, count: 1},
{lat: 49.2669358, lng:-123.0739729, count: 1},
{lat: 49.2750087, lng:-123.0326092, count: 1},
{lat: 49.2094414, lng:-123.1067226, count: 1},
{lat: 49.2851599, lng:-123.1199231, count: 1},
{lat: 49.2749249, lng:-123.033313, count: 1},
{lat: 49.2424114, lng:-123.083953, count: 1},
{lat: 49.207821, lng:-123.0607553, count: 1},
{lat: 49.207821, lng:-123.0607553, count: 1},
{lat: 49.2252292, lng:-123.0752341, count: 1},
{lat: 49.2252292, lng:-123.0752341, count: 1},
{lat: 49.2785193, lng:-123.1220467, count: 1},
{lat: 49.2655313, lng:-123.1028603, count: 1},
{lat: 49.2597594, lng:-123.0865851, count: 1},
{lat: 49.2431731, lng:-123.0632868, count: 1},
{lat: 49.2785193, lng:-123.1220467, count: 1},
{lat: 49.2655313, lng:-123.1028603, count: 1},
{lat: 49.2878915, lng:-123.1362953, count: 1},
{lat: 49.2865663, lng:-123.1386578, count: 1},
{lat: 49.2361124, lng:-123.0366787, count: 1},
{lat: 49.2156215, lng:-123.0322363, count: 1},
{lat: 49.2325985, lng:-123.0766976, count: 1},
{lat: 49.2713811, lng:-123.1574622, count: 1},
{lat: 49.2642204, lng:-123.1176232, count: 1},
{lat: 49.2597551, lng:-123.0860339, count: 1},
{lat: 49.2678786, lng:-123.0749405, count: 1},
{lat: 49.2775016, lng:-123.0362968, count: 1},
{lat: 49.2590223, lng:-123.1431444, count: 1},
{lat: 49.2099681, lng:-123.1172424, count: 1},
{lat: 49.2590223, lng:-123.1431444, count: 1},
{lat: 49.2650137, lng:-123.1740579, count: 1},
{lat: 49.2678001, lng:-123.075365, count: 1},
{lat: 49.2557329, lng:-123.1389199, count: 1},
{lat: 49.2448707, lng:-123.0619098, count: 1},
{lat: 49.2448707, lng:-123.0619098, count: 1},
{lat: 49.2705689, lng:-123.1424441, count: 1},
{lat: 49.2658267, lng:-123.1740291, count: 1},
{lat: 49.2367657, lng:-123.0746851, count: 1},
{lat: 49.2448707, lng:-123.0619098, count: 1},
{lat: 49.2367933, lng:-123.0768441, count: 1},
{lat: 49.2448707, lng:-123.0619098, count: 1},
{lat: 49.2638804, lng:-123.0566012, count: 1},
{lat: 49.2800543, lng:-123.1058017, count: 1},
{lat: 49.2694714, lng:-123.0601163, count: 1},
{lat: 49.2693504, lng:-123.094696, count: 1},
{lat: 49.2705416, lng:-123.1415549, count: 1},
{lat: 49.2802796, lng:-123.114677, count: 1},
{lat: 49.2619357, lng:-123.0330774, count: 1},
{lat: 49.2629185, lng:-123.2071033, count: 1},
{lat: 49.2578706, lng:-123.0871754, count: 1},
{lat: 49.2579244, lng:-123.0866602, count: 1},
{lat: 49.2579244, lng:-123.0866602, count: 1},
{lat: 49.2686956, lng:-123.0753464, count: 1},
{lat: 49.2848446, lng:-123.0603648, count: 1},
{lat: 49.2848446, lng:-123.0603648, count: 1},
{lat: 49.2106151, lng:-123.1444859, count: 1},
{lat: 49.2847616, lng:-123.0605744, count: 1},
{lat: 49.2453622, lng:-123.0751525, count: 1},
{lat: 49.265368, lng:-123.1427831, count: 1},
{lat: 49.2641853, lng:-123.0736133, count: 1},
{lat: 49.2464703, lng:-123.0756315, count: 1},
{lat: 49.2646185, lng:-123.1428979, count: 1},
{lat: 49.2570316, lng:-123.0871293, count: 1},
{lat: 49.2848425, lng:-123.0609606, count: 1},
{lat: 49.2563389, lng:-123.0873722, count: 1},
{lat: 49.2859093, lng:-123.1148596, count: 1},
{lat: 49.2614156, lng:-123.1569708, count: 1},
{lat: 49.2646164, lng:-123.142732, count: 1},
{lat: 49.2646055, lng:-123.141861, count: 1},
{lat: 49.2516241, lng:-123.0737998, count: 1},
{lat: 49.2802914, lng:-123.1146945, count: 1},
{lat: 49.2200976, lng:-123.035634, count: 1},
{lat: 49.2200976, lng:-123.035634, count: 1},
{lat: 49.2517341, lng:-123.075668, count: 1},
{lat: 49.2200976, lng:-123.035634, count: 1},
{lat: 49.2666745, lng:-123.0332697, count: 1},
{lat: 49.2806684, lng:-123.1055472, count: 1},
{lat: 49.219501, lng:-123.1756258, count: 1},
{lat: 49.2696715, lng:-123.0747575, count: 1},
{lat: 49.2629205, lng:-123.0390635, count: 1},
{lat: 49.2545207, lng:-123.086237, count: 1},
{lat: 49.2846538, lng:-123.1149398, count: 1},
{lat: 49.2725376, lng:-123.1545563, count: 1},
{lat: 49.2759156, lng:-123.1417543, count: 1},
{lat: 49.2536435, lng:-123.0874728, count: 1},
{lat: 49.2651413, lng:-123.0698017, count: 1},
{lat: 49.2234534, lng:-123.1751002, count: 1},
{lat: 49.2518237, lng:-123.0873594, count: 1},
{lat: 49.2518237, lng:-123.0873594, count: 1},
{lat: 49.2915841, lng:-123.1333694, count: 1},
{lat: 49.2730104, lng:-123.0613786, count: 1},
{lat: 49.2292981, lng:-123.0341336, count: 1},
{lat: 49.2518988, lng:-123.0868602, count: 1},
{lat: 49.2543286, lng:-123.0732294, count: 1},
{lat: 49.2675104, lng:-123.0311223, count: 1},
{lat: 49.2500226, lng:-123.0870723, count: 1},
{lat: 49.2543517, lng:-123.0751642, count: 1},
{lat: 49.2629569, lng:-123.0522073, count: 1},
{lat: 49.2684149, lng:-123.1748017, count: 1},
{lat: 49.2500982, lng:-123.0864993, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2684163, lng:-123.031409, count: 1},
{lat: 49.235371, lng:-123.0264153, count: 1},
{lat: 49.2684253, lng:-123.0333234, count: 1},
{lat: 49.235371, lng:-123.0264153, count: 1},
{lat: 49.2445418, lng:-123.0324196, count: 1},
{lat: 49.2684984, lng:-123.1749781, count: 1},
{lat: 49.2475104, lng:-123.0876633, count: 1},
{lat: 49.2684984, lng:-123.1749781, count: 1},
{lat: 49.2684984, lng:-123.1749781, count: 1},
{lat: 49.2475104, lng:-123.0876633, count: 1},
{lat: 49.2928167, lng:-123.1326299, count: 1},
{lat: 49.2462654, lng:-123.0324237, count: 1},
{lat: 49.2684984, lng:-123.1749781, count: 1},
{lat: 49.2846572, lng:-123.1427816, count: 1},
{lat: 49.2670315, lng:-123.1455844, count: 1},
{lat: 49.256553, lng:-123.0757718, count: 1},
{lat: 49.256553, lng:-123.0757718, count: 1},
{lat: 49.2654854, lng:-123.1027994, count: 1},
{lat: 49.2578287, lng:-123.0755678, count: 1},
{lat: 49.2496046, lng:-123.0313018, count: 1},
{lat: 49.2658907, lng:-123.0968451, count: 1},
{lat: 49.241644, lng:-123.0868011, count: 1},
{lat: 49.2402322, lng:-123.0858185, count: 1},
{lat: 49.2729969, lng:-123.0694849, count: 1},
{lat: 49.2843328, lng:-123.1124349, count: 1}]









  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2009', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2010()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2839819, lng:-123.1008018, count: 1},
{lat: 49.2738062, lng:-123.1191345, count: 1},
{lat: 49.2738074, lng:-123.1190033, count: 1},
{lat: 49.2738074, lng:-123.1190033, count: 1},
{lat: 49.2738074, lng:-123.1190033, count: 1},
{lat: 49.2738074, lng:-123.1190033, count: 1},
{lat: 49.2837633, lng:-123.1021002, count: 1},
{lat: 49.2734207, lng:-123.1205527, count: 1},
{lat: 49.2734055, lng:-123.1235089, count: 1},
{lat: 49.2724327, lng:-123.1221638, count: 1},
{lat: 49.2839707, lng:-123.0952328, count: 1},
{lat: 49.2799271, lng:-123.1105847, count: 1},
{lat: 49.2574916, lng:-123.1030872, count: 1},
{lat: 49.257568, lng:-123.1026466, count: 1},
{lat: 49.2566243, lng:-123.1015212, count: 1},
{lat: 49.2701138, lng:-123.1025269, count: 1},
{lat: 49.2701138, lng:-123.1025269, count: 1},
{lat: 49.2701128, lng:-123.1024576, count: 1},
{lat: 49.2701128, lng:-123.1024576, count: 1},
{lat: 49.2701128, lng:-123.1024576, count: 1},
{lat: 49.2517812, lng:-123.1023927, count: 1},
{lat: 49.2472155, lng:-123.10246, count: 1},
{lat: 49.2459855, lng:-123.1038466, count: 1},
{lat: 49.246041, lng:-123.1028001, count: 1},
{lat: 49.2692996, lng:-123.1023256, count: 1},
{lat: 49.2691017, lng:-123.1015464, count: 1},
{lat: 49.2354693, lng:-123.1019788, count: 1},
{lat: 49.2681996, lng:-123.102657, count: 1},
{lat: 49.2681996, lng:-123.102657, count: 1},
{lat: 49.2681984, lng:-123.1024443, count: 1},
{lat: 49.2681984, lng:-123.1024443, count: 1},
{lat: 49.2681984, lng:-123.1024443, count: 1},
{lat: 49.2682736, lng:-123.1012383, count: 1},
{lat: 49.2345161, lng:-123.1035645, count: 1},
{lat: 49.2316673, lng:-123.1030616, count: 1},
{lat: 49.2302834, lng:-123.1032179, count: 1},
{lat: 49.2302814, lng:-123.1030985, count: 1},
{lat: 49.2293604, lng:-123.1027348, count: 1},
{lat: 49.2285696, lng:-123.1032341, count: 1},
{lat: 49.2275731, lng:-123.1036303, count: 1},
{lat: 49.2276382, lng:-123.1026484, count: 1},
{lat: 49.2256219, lng:-123.1023863, count: 1},
{lat: 49.267276, lng:-123.1010093, count: 1},
{lat: 49.2247902, lng:-123.103644, count: 1},
{lat: 49.2237426, lng:-123.1037547, count: 1},
{lat: 49.2237979, lng:-123.1023079, count: 1},
{lat: 49.2228172, lng:-123.1024668, count: 1},
{lat: 49.2219273, lng:-123.1028949, count: 1},
{lat: 49.2211353, lng:-123.1037527, count: 1},
{lat: 49.2185211, lng:-123.1023508, count: 1},
{lat: 49.2176787, lng:-123.1029684, count: 1},
{lat: 49.2664997, lng:-123.1025433, count: 1},
{lat: 49.2158509, lng:-123.1040933, count: 1},
{lat: 49.2158509, lng:-123.1040933, count: 1},
{lat: 49.2654884, lng:-123.1027653, count: 1},
{lat: 49.2654735, lng:-123.1019124, count: 1},
{lat: 49.2645929, lng:-123.1028162, count: 1},
{lat: 49.2645929, lng:-123.1028162, count: 1},
{lat: 49.262984, lng:-123.1020538, count: 1},
{lat: 49.2823022, lng:-123.1020973, count: 1},
{lat: 49.2823843, lng:-123.1020931, count: 1},
{lat: 49.2823843, lng:-123.1020931, count: 1},
{lat: 49.2823843, lng:-123.1020931, count: 1},
{lat: 49.2823812, lng:-123.1019501, count: 1},
{lat: 49.2823582, lng:-123.100902, count: 1},
{lat: 49.2813576, lng:-123.1021365, count: 1},
{lat: 49.2487466, lng:-123.1020757, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803999, lng:-123.1021433, count: 1},
{lat: 49.2803493, lng:-123.1000662, count: 1},
{lat: 49.2848771, lng:-123.0992715, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2797799, lng:-123.1083821, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2798508, lng:-123.1082911, count: 1},
{lat: 49.2798485, lng:-123.1082752, count: 1},
{lat: 49.2798485, lng:-123.1082752, count: 1},
{lat: 49.2797898, lng:-123.10788, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2792725, lng:-123.1020182, count: 1},
{lat: 49.2793561, lng:-123.1016313, count: 1},
{lat: 49.2794806, lng:-123.1014557, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2794351, lng:-123.1011653, count: 1},
{lat: 49.2795227, lng:-123.1010874, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2794524, lng:-123.1002701, count: 1},
{lat: 49.2795347, lng:-123.1002661, count: 1},
{lat: 49.2794515, lng:-123.1002249, count: 1},
{lat: 49.2840572, lng:-123.0994319, count: 1},
{lat: 49.2833848, lng:-123.0739837, count: 1},
{lat: 49.2422229, lng:-123.108308, count: 1},
{lat: 49.2760387, lng:-123.1019697, count: 1},
{lat: 49.2760387, lng:-123.1019697, count: 1},
{lat: 49.2760306, lng:-123.1015811, count: 1},
{lat: 49.2761112, lng:-123.1014993, count: 1},
{lat: 49.2761112, lng:-123.1014993, count: 1},
{lat: 49.2761112, lng:-123.1014993, count: 1},
{lat: 49.276003, lng:-123.1002594, count: 1},
{lat: 49.2865678, lng:-123.0439977, count: 1},
{lat: 49.2857924, lng:-123.0597705, count: 1},
{lat: 49.2857576, lng:-123.0596458, count: 1},
{lat: 49.2973704, lng:-123.1360033, count: 1},
{lat: 49.2973704, lng:-123.1360033, count: 1},
{lat: 49.2831977, lng:-123.1020546, count: 1},
{lat: 49.2831977, lng:-123.1020546, count: 1},
{lat: 49.2831977, lng:-123.1020546, count: 1},
{lat: 49.283279, lng:-123.1020028, count: 1},
{lat: 49.2832566, lng:-123.1007983, count: 1},
{lat: 49.2767593, lng:-123.1020802, count: 1},
{lat: 49.2787454, lng:-123.1103925, count: 1},
{lat: 49.2787454, lng:-123.1103925, count: 1},
{lat: 49.2787454, lng:-123.1103925, count: 1},
{lat: 49.2777065, lng:-123.1140621, count: 1},
{lat: 49.2835087, lng:-123.0492635, count: 1},
{lat: 49.2461673, lng:-123.1092571, count: 1},
{lat: 49.2838685, lng:-123.0596501, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2776057, lng:-123.1020042, count: 1},
{lat: 49.2777072, lng:-123.1012357, count: 1},
{lat: 49.2621797, lng:-123.1087813, count: 1},
{lat: 49.2621528, lng:-123.1072424, count: 1},
{lat: 49.2621528, lng:-123.1072424, count: 1},
{lat: 49.2620664, lng:-123.1070053, count: 1},
{lat: 49.2602826, lng:-123.1079668, count: 1},
{lat: 49.2603602, lng:-123.1074455, count: 1},
{lat: 49.2603602, lng:-123.1074455, count: 1},
{lat: 49.2594644, lng:-123.1093344, count: 1},
{lat: 49.2594349, lng:-123.1075027, count: 1},
{lat: 49.2593463, lng:-123.1071202, count: 1},
{lat: 49.2584851, lng:-123.1090326, count: 1},
{lat: 49.2585571, lng:-123.1082142, count: 1},
{lat: 49.2584724, lng:-123.1080247, count: 1},
{lat: 49.257661, lng:-123.1087162, count: 1},
{lat: 49.2576417, lng:-123.1073379, count: 1},
{lat: 49.2575576, lng:-123.1071981, count: 1},
{lat: 49.2566504, lng:-123.1072396, count: 1},
{lat: 49.2556858, lng:-123.1087116, count: 1},
{lat: 49.2557608, lng:-123.108327, count: 1},
{lat: 49.255675, lng:-123.1081402, count: 1},
{lat: 49.2546988, lng:-123.1087604, count: 1},
{lat: 49.2547772, lng:-123.108566, count: 1},
{lat: 49.2546704, lng:-123.1073309, count: 1},
{lat: 49.2537976, lng:-123.1091809, count: 1},
{lat: 49.2537615, lng:-123.1073647, count: 1},
{lat: 49.270194, lng:-123.106708, count: 1},
{lat: 49.2528671, lng:-123.1087898, count: 1},
{lat: 49.252771, lng:-123.1080742, count: 1},
{lat: 49.252771, lng:-123.1080742, count: 1},
{lat: 49.2518761, lng:-123.1074323, count: 1},
{lat: 49.250996, lng:-123.1095469, count: 1},
{lat: 49.2510564, lng:-123.107794, count: 1},
{lat: 49.2499363, lng:-123.1081881, count: 1},
{lat: 49.2692672, lng:-123.108825, count: 1},
{lat: 49.2357103, lng:-123.1099961, count: 1},
{lat: 49.2355716, lng:-123.10853, count: 1},
{lat: 49.2684279, lng:-123.1091885, count: 1},
{lat: 49.2348224, lng:-123.1101687, count: 1},
{lat: 49.2348178, lng:-123.1100233, count: 1},
{lat: 49.2332133, lng:-123.1082705, count: 1},
{lat: 49.2322841, lng:-123.1098003, count: 1},
{lat: 49.2323566, lng:-123.1094553, count: 1},
{lat: 49.2295752, lng:-123.110684, count: 1},
{lat: 49.229499, lng:-123.1084193, count: 1},
{lat: 49.228598, lng:-123.1097319, count: 1},
{lat: 49.2277662, lng:-123.1100722, count: 1},
{lat: 49.2267789, lng:-123.1090967, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1}]










  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2010', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2011()
{
  var testData = {
    max: 8,
   data: [{lat: 49.2632583, lng:-123.1154829, count: 1},
{lat: 49.2544123, lng:-123.127334, count: 1},
{lat: 49.2769988, lng:-123.1245186, count: 1},
{lat: 49.2111207, lng:-123.0903584, count: 1},
{lat: 49.2777065, lng:-123.1140621, count: 1},
{lat: 49.2777065, lng:-123.1140621, count: 1},
{lat: 49.2488037, lng:-123.0382837, count: 1},
{lat: 49.2143775, lng:-123.1007714, count: 1},
{lat: 49.2143775, lng:-123.1007714, count: 1},
{lat: 49.2447089, lng:-123.0641104, count: 1},
{lat: 49.2447089, lng:-123.0641104, count: 1},
{lat: 49.2447089, lng:-123.0641104, count: 1},
{lat: 49.2590047, lng:-123.0736352, count: 1},
{lat: 49.2045841, lng:-123.1304047, count: 1},
{lat: 49.2497099, lng:-123.0381846, count: 1},
{lat: 49.2144524, lng:-123.1300324, count: 1},
{lat: 49.250814, lng:-123.1275034, count: 1},
{lat: 49.250814, lng:-123.1275034, count: 1},
{lat: 49.213107, lng:-123.1348452, count: 1},
{lat: 49.2832283, lng:-123.1378611, count: 1},
{lat: 49.2734932, lng:-123.1224378, count: 1},
{lat: 49.2734932, lng:-123.1224378, count: 1},
{lat: 49.2137111, lng:-123.1013965, count: 1},
{lat: 49.2651099, lng:-123.1261249, count: 1},
{lat: 49.2834749, lng:-123.0635126, count: 1},
{lat: 49.2532737, lng:-123.0660914, count: 1},
{lat: 49.260801, lng:-123.1386973, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.260801, lng:-123.1386973, count: 1},
{lat: 49.272971, lng:-123.1003854, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2515299, lng:-123.0381003, count: 1},
{lat: 49.244544, lng:-123.042166, count: 1},
{lat: 49.2126949, lng:-123.1011726, count: 1},
{lat: 49.2774528, lng:-123.1238241, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2621587, lng:-123.107579, count: 1},
{lat: 49.2125951, lng:-123.1005585, count: 1},
{lat: 49.2848422, lng:-123.0621039, count: 1},
{lat: 49.2558846, lng:-123.1364787, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.269321, lng:-123.0334551, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2785971, lng:-123.1220205, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2523747, lng:-123.0380945, count: 1},
{lat: 49.28123, lng:-123.0633934, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2365943, lng:-123.0272554, count: 1},
{lat: 49.2365943, lng:-123.0272554, count: 1},
{lat: 49.2531935, lng:-123.0375351, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2611666, lng:-123.1076809, count: 1},
{lat: 49.2825367, lng:-123.1096706, count: 1},
{lat: 49.2343437, lng:-123.139624, count: 1},
{lat: 49.2086046, lng:-123.1361058, count: 1},
{lat: 49.2343437, lng:-123.139624, count: 1},
{lat: 49.2106922, lng:-123.0992089, count: 1},
{lat: 49.2306316, lng:-123.1396631, count: 1},
{lat: 49.2085907, lng:-123.1353395, count: 1},
{lat: 49.2533235, lng:-123.0857339, count: 1},
{lat: 49.2793225, lng:-123.1133699, count: 1},
{lat: 49.2539659, lng:-123.0387325, count: 1},
{lat: 49.2661831, lng:-123.1384685, count: 1},
{lat: 49.2078201, lng:-123.028558, count: 1},
{lat: 49.2078209, lng:-123.0285658, count: 1},
{lat: 49.2747868, lng:-123.1162436, count: 1},
{lat: 49.2534574, lng:-123.0965274, count: 1},
{lat: 49.2328813, lng:-123.059353, count: 1},
{lat: 49.2661831, lng:-123.1384685, count: 1},
{lat: 49.2721115, lng:-123.0625753, count: 1},
{lat: 49.208535, lng:-123.140534, count: 1},
{lat: 49.208535, lng:-123.140534, count: 1},
{lat: 49.2317499, lng:-123.1020861, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2247629, lng:-123.0546106, count: 1},
{lat: 49.2719652, lng:-123.1819841, count: 1},
{lat: 49.265098, lng:-123.1253587, count: 1},
{lat: 49.2667385, lng:-123.0618629, count: 1},
{lat: 49.2764599, lng:-123.1156062, count: 1},
{lat: 49.2294406, lng:-123.1026123, count: 1},
{lat: 49.2070699, lng:-123.1405857, count: 1},
{lat: 49.2141833, lng:-123.0944982, count: 1},
{lat: 49.2492206, lng:-123.0751898, count: 1},
{lat: 49.2339322, lng:-123.0601279, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.20704, lng:-123.0656693, count: 1},
{lat: 49.2859663, lng:-123.1128568, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.2142428, lng:-123.0976789, count: 1},
{lat: 49.2564158, lng:-123.0384425, count: 1},
{lat: 49.2667791, lng:-123.0812499, count: 1},
{lat: 49.2572476, lng:-123.0368499, count: 1},
{lat: 49.2499333, lng:-123.108047, count: 1},
{lat: 49.273013, lng:-123.073763, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.2597022, lng:-123.1335822, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.2747726, lng:-123.1160701, count: 1},
{lat: 49.2844976, lng:-123.1397393, count: 1},
{lat: 49.2355716, lng:-123.10853, count: 1},
{lat: 49.2655167, lng:-123.0993712, count: 1},
{lat: 49.2764599, lng:-123.1156062, count: 1},
{lat: 49.2071901, lng:-123.1262228, count: 1},
{lat: 49.2764599, lng:-123.1156062, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.233854, lng:-123.0605552, count: 1},
{lat: 49.2915749, lng:-123.0465622, count: 1},
{lat: 49.2087599, lng:-123.0289463, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.26613, lng:-123.0939494, count: 1},
{lat: 49.249195, lng:-123.1696284, count: 1},
{lat: 49.2069778, lng:-123.1372989, count: 1},
{lat: 49.2069778, lng:-123.1372989, count: 1},
{lat: 49.2683364, lng:-123.1683447, count: 1},
{lat: 49.2407161, lng:-123.0633804, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.2070565, lng:-123.1370688, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2335242, lng:-123.1185036, count: 1},
{lat: 49.2730385, lng:-123.0695823, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.2803649, lng:-123.0739926, count: 1},
{lat: 49.2732886, lng:-123.0376984, count: 1},
{lat: 49.2762101, lng:-123.1501251, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2887292, lng:-123.0249035, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2247629, lng:-123.0546106, count: 1},
{lat: 49.2475443, lng:-123.1502867, count: 1},
{lat: 49.2846522, lng:-123.1148462, count: 1},
{lat: 49.2338593, lng:-123.0611024, count: 1},
{lat: 49.2247629, lng:-123.0546106, count: 1},
{lat: 49.2651682, lng:-123.1245894, count: 1},
{lat: 49.2822913, lng:-123.1183292, count: 1},
{lat: 49.2171904, lng:-123.0970208, count: 1},
{lat: 49.2705298, lng:-123.073463, count: 1},
{lat: 49.264124, lng:-123.16852, count: 1},
{lat: 49.2676694, lng:-123.0595048, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2903452, lng:-123.1443274, count: 1},
{lat: 49.2570423, lng:-123.1180615, count: 1},
{lat: 49.2573348, lng:-123.1181753, count: 1},
{lat: 49.2631551, lng:-123.1092515, count: 1},
{lat: 49.277741, lng:-123.1273763, count: 1},
{lat: 49.2192466, lng:-123.0961998, count: 1},
{lat: 49.2761702, lng:-123.147786, count: 1},
{lat: 49.2576736, lng:-123.0834347, count: 1},
{lat: 49.2573468, lng:-123.0834384, count: 1},
{lat: 49.2585204, lng:-123.1219618, count: 1},
{lat: 49.2812303, lng:-123.1261825, count: 1},
{lat: 49.2501539, lng:-123.1726123, count: 1},
{lat: 49.2788407, lng:-123.1159527, count: 1},
{lat: 49.2492022, lng:-123.1357737, count: 1},
{lat: 49.2788407, lng:-123.1159527, count: 1},
{lat: 49.2788407, lng:-123.1159527, count: 1},
{lat: 49.2630311, lng:-123.1076977, count: 1},
{lat: 49.2748379, lng:-123.0656592, count: 1},
{lat: 49.2630311, lng:-123.1076977, count: 1},
{lat: 49.2688635, lng:-123.2058413, count: 1},
{lat: 49.2718661, lng:-123.1350876, count: 1}]











  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2011', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2012()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2839069, lng:-123.1167172, count: 1},
{lat: 49.2839069, lng:-123.1167172, count: 1},
{lat: 49.2596302, lng:-123.1267427, count: 1},
{lat: 49.2644916, lng:-123.1403672, count: 1},
{lat: 49.2708687, lng:-123.0997919, count: 1},
{lat: 49.2644743, lng:-123.1392928, count: 1},
{lat: 49.2706795, lng:-123.098971, count: 1},
{lat: 49.2606287, lng:-123.1267178, count: 1},
{lat: 49.2113946, lng:-123.1124319, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2045841, lng:-123.1304047, count: 1},
{lat: 49.2745706, lng:-123.0618634, count: 1},
{lat: 49.2904861, lng:-123.1286167, count: 1},
{lat: 49.2180863, lng:-123.0485228, count: 1},
{lat: 49.2181557, lng:-123.0488353, count: 1},
{lat: 49.249573, lng:-123.1400401, count: 1},
{lat: 49.2123521, lng:-123.0297856, count: 1},
{lat: 49.2791641, lng:-123.0803, count: 1},
{lat: 49.261923, lng:-123.0415898, count: 1},
{lat: 49.2709463, lng:-123.0735141, count: 1},
{lat: 49.2776189, lng:-123.070922, count: 1},
{lat: 49.2776189, lng:-123.070922, count: 1},
{lat: 49.269551, lng:-123.0414725, count: 1},
{lat: 49.2119671, lng:-123.0297722, count: 1},
{lat: 49.2625227, lng:-123.0890367, count: 1},
{lat: 49.2543686, lng:-123.1432388, count: 1},
{lat: 49.2875642, lng:-123.1259018, count: 1},
{lat: 49.2880996, lng:-123.1344066, count: 1},
{lat: 49.2886528, lng:-123.1311213, count: 1},
{lat: 49.2875642, lng:-123.1259018, count: 1},
{lat: 49.2711808, lng:-123.1689725, count: 1},
{lat: 49.2914889, lng:-123.1293179, count: 1},
{lat: 49.2914889, lng:-123.1293179, count: 1},
{lat: 49.262476, lng:-123.0825504, count: 1},
{lat: 49.2847974, lng:-123.1403006, count: 1},
{lat: 49.2847044, lng:-123.1401546, count: 1},
{lat: 49.283008, lng:-123.0663863, count: 1},
{lat: 49.2776408, lng:-123.0995855, count: 1},
{lat: 49.2777105, lng:-123.0990742, count: 1},
{lat: 49.2754146, lng:-123.0453641, count: 1},
{lat: 49.2747868, lng:-123.1162436, count: 1},
{lat: 49.2769626, lng:-123.1195142, count: 1},
{lat: 49.2701565, lng:-123.1353347, count: 1},
{lat: 49.2730276, lng:-123.0676236, count: 1},
{lat: 49.2866925, lng:-123.1365721, count: 1},
{lat: 49.2723197, lng:-123.1360074, count: 1},
{lat: 49.2719762, lng:-123.1820892, count: 1},
{lat: 49.2702094, lng:-123.1352362, count: 1},
{lat: 49.2603859, lng:-123.1099567, count: 1},
{lat: 49.2748793, lng:-123.1159898, count: 1},
{lat: 49.2794605, lng:-123.1296881, count: 1},
{lat: 49.2603836, lng:-123.1098209, count: 1},
{lat: 49.2730583, lng:-123.0758629, count: 1},
{lat: 49.2884709, lng:-123.1238816, count: 1},
{lat: 49.2586253, lng:-123.1105583, count: 1},
{lat: 49.2576637, lng:-123.1097371, count: 1},
{lat: 49.2856294, lng:-123.0279447, count: 1},
{lat: 49.2613579, lng:-123.0708815, count: 1},
{lat: 49.2586569, lng:-123.0713093, count: 1},
{lat: 49.254741, lng:-123.1108977, count: 1},
{lat: 49.2665187, lng:-123.1084015, count: 1},
{lat: 49.2665196, lng:-123.1084524, count: 1},
{lat: 49.2088075, lng:-123.0285845, count: 1},
{lat: 49.2515791, lng:-123.0706126, count: 1},
{lat: 49.2757073, lng:-123.0674699, count: 1},
{lat: 49.2781201, lng:-123.1246406, count: 1},
{lat: 49.2504051, lng:-123.0712703, count: 1},
{lat: 49.2384191, lng:-123.0723417, count: 1},
{lat: 49.2880403, lng:-123.1278792, count: 1},
{lat: 49.274898, lng:-123.0262093, count: 1},
{lat: 49.2252804, lng:-123.0724975, count: 1},
{lat: 49.2605205, lng:-123.1242457, count: 1},
{lat: 49.2798508, lng:-123.1082911, count: 1},
{lat: 49.2798508, lng:-123.1082911, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2689559, lng:-123.110002, count: 1},
{lat: 49.2181352, lng:-123.0721182, count: 1},
{lat: 49.2171842, lng:-123.0732926, count: 1},
{lat: 49.2171735, lng:-123.0725569, count: 1},
{lat: 49.237011, lng:-123.0476142, count: 1},
{lat: 49.2485219, lng:-123.0818159, count: 1},
{lat: 49.2163654, lng:-123.0738696, count: 1},
{lat: 49.2333976, lng:-123.111237, count: 1},
{lat: 49.2162547, lng:-123.0724528, count: 1},
{lat: 49.2743992, lng:-123.1525921, count: 1},
{lat: 49.2609147, lng:-123.1879634, count: 1},
{lat: 49.2660431, lng:-123.0713485, count: 1},
{lat: 49.2660431, lng:-123.0713485, count: 1},
{lat: 49.2743992, lng:-123.1525921, count: 1},
{lat: 49.2624569, lng:-123.0802765, count: 1},
{lat: 49.2604483, lng:-123.1198764, count: 1},
{lat: 49.2659562, lng:-123.0707538, count: 1},
{lat: 49.2287076, lng:-123.1112055, count: 1},
{lat: 49.2277281, lng:-123.1124317, count: 1},
{lat: 49.2277207, lng:-123.1120689, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2600051, lng:-123.1200265, count: 1},
{lat: 49.2269085, lng:-123.1120962, count: 1},
{lat: 49.226812, lng:-123.1108831, count: 1},
{lat: 49.2237209, lng:-123.102592, count: 1},
{lat: 49.2145467, lng:-123.0730151, count: 1},
{lat: 49.2128856, lng:-123.1341814, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2218139, lng:-123.0814713, count: 1},
{lat: 49.263218, lng:-123.0709453, count: 1},
{lat: 49.2630022, lng:-123.0701506, count: 1},
{lat: 49.262384, lng:-123.0716671, count: 1},
{lat: 49.262384, lng:-123.0716671, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.262384, lng:-123.0716671, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2802596, lng:-123.071894, count: 1},
{lat: 49.2657049, lng:-123.110464, count: 1},
{lat: 49.2803409, lng:-123.07181, count: 1},
{lat: 49.2803409, lng:-123.07181, count: 1},
{lat: 49.2114315, lng:-123.0416842, count: 1},
{lat: 49.2114315, lng:-123.0416842, count: 1},
{lat: 49.2114315, lng:-123.0416842, count: 1},
{lat: 49.279447, lng:-123.0724472, count: 1},
{lat: 49.2793605, lng:-123.0721217, count: 1},
{lat: 49.2475086, lng:-123.1461815, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2716564, lng:-123.0772734, count: 1},
{lat: 49.2798531, lng:-123.1083069, count: 1},
{lat: 49.2630907, lng:-123.1101526, count: 1},
{lat: 49.2605884, lng:-123.0807443, count: 1},
{lat: 49.2630827, lng:-123.1096941, count: 1},
{lat: 49.2718194, lng:-123.0696781, count: 1},
{lat: 49.277606, lng:-123.1274043, count: 1},
{lat: 49.277606, lng:-123.1274043, count: 1},
{lat: 49.2720452, lng:-123.0565962, count: 1},
{lat: 49.2894958, lng:-123.1343884, count: 1},
{lat: 49.2892532, lng:-123.1341887, count: 1},
{lat: 49.2892532, lng:-123.1341887, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2807975, lng:-123.1317475, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2812101, lng:-123.1325442, count: 1},
{lat: 49.2843377, lng:-123.1415457, count: 1},
{lat: 49.2839432, lng:-123.140934, count: 1},
{lat: 49.2418655, lng:-123.0581279, count: 1},
{lat: 49.277606, lng:-123.1274043, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2725745, lng:-123.1357534, count: 1},
{lat: 49.2826085, lng:-123.1096036, count: 1},
{lat: 49.2490127, lng:-123.1108747, count: 1},
{lat: 49.2731177, lng:-123.0795481, count: 1},
{lat: 49.2508397, lng:-123.1440539, count: 1},
{lat: 49.2900687, lng:-123.1407762, count: 1},
{lat: 49.2508295, lng:-123.1427655, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2105586, lng:-123.0272779, count: 1},
{lat: 49.2105586, lng:-123.0272779, count: 1},
{lat: 49.281816, lng:-123.1105631, count: 1},
{lat: 49.2783025, lng:-123.1243676, count: 1},
{lat: 49.2783025, lng:-123.1243676, count: 1},
{lat: 49.2714729, lng:-123.150234, count: 1},
{lat: 49.2715686, lng:-123.1502306, count: 1},
{lat: 49.2582331, lng:-123.0462866, count: 1},
{lat: 49.2881752, lng:-123.1369124, count: 1},
{lat: 49.277606, lng:-123.1274043, count: 1},
{lat: 49.277606, lng:-123.1274043, count: 1},
{lat: 49.2803482, lng:-123.1334139, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.2790774, lng:-123.0308634, count: 1},
{lat: 49.2584625, lng:-123.0566219, count: 1},
{lat: 49.2782591, lng:-123.0308787, count: 1},
{lat: 49.2398729, lng:-123.0266475, count: 1},
{lat: 49.2584625, lng:-123.0566219, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.2666289, lng:-123.0309981, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.2757216, lng:-123.06964, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2811664, lng:-123.0565517, count: 1},
{lat: 49.2701098, lng:-123.1351582, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2865663, lng:-123.1386578, count: 1},
{lat: 49.2729667, lng:-123.1408208, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.2697411, lng:-123.0442775, count: 1},
{lat: 49.2185595, lng:-123.1037805, count: 1},
{lat: 49.2627463, lng:-123.1428155, count: 1},
{lat: 49.2627463, lng:-123.1428155, count: 1},
{lat: 49.261717, lng:-123.1428619, count: 1},
{lat: 49.282002, lng:-123.107194, count: 1},
{lat: 49.261717, lng:-123.1428619, count: 1},
{lat: 49.2778562, lng:-123.1356136, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1}]












  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2012', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2013()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2566253, lng:-123.1015948, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2566253, lng:-123.1015948, count: 1},
{lat: 49.2556548, lng:-123.1022642, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2777215, lng:-123.1272287, count: 1},
{lat: 49.2144524, lng:-123.1300324, count: 1},
{lat: 49.2557311, lng:-123.1017778, count: 1},
{lat: 49.2707831, lng:-123.1526691, count: 1},
{lat: 49.2557284, lng:-123.1015544, count: 1},
{lat: 49.282911, lng:-123.0870056, count: 1},
{lat: 49.2891733, lng:-123.1283901, count: 1},
{lat: 49.2786695, lng:-123.125802, count: 1},
{lat: 49.2445117, lng:-123.0269796, count: 1},
{lat: 49.2735851, lng:-123.2057023, count: 1},
{lat: 49.2514936, lng:-123.023525, count: 1},
{lat: 49.2786695, lng:-123.125802, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2891733, lng:-123.1283901, count: 1},
{lat: 49.2831892, lng:-123.1376223, count: 1},
{lat: 49.2831892, lng:-123.1376223, count: 1},
{lat: 49.2831892, lng:-123.1376223, count: 1},
{lat: 49.2897791, lng:-123.1294053, count: 1},
{lat: 49.2766214, lng:-123.1189772, count: 1},
{lat: 49.2848921, lng:-123.1317301, count: 1},
{lat: 49.278949, lng:-123.1253836, count: 1},
{lat: 49.2773398, lng:-123.1201063, count: 1},
{lat: 49.2124526, lng:-123.0269891, count: 1},
{lat: 49.2623904, lng:-123.0821617, count: 1},
{lat: 49.2624671, lng:-123.0814858, count: 1},
{lat: 49.2765702, lng:-123.1328394, count: 1},
{lat: 49.2765702, lng:-123.1328394, count: 1},
{lat: 49.2909751, lng:-123.1420975, count: 1},
{lat: 49.2730466, lng:-123.0734349, count: 1},
{lat: 49.2765702, lng:-123.1328394, count: 1},
{lat: 49.2078201, lng:-123.028558, count: 1},
{lat: 49.2408818, lng:-123.0265398, count: 1},
{lat: 49.2747868, lng:-123.1162436, count: 1},
{lat: 49.2462293, lng:-123.0262892, count: 1},
{lat: 49.2720501, lng:-123.1819994, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.281129, lng:-123.1162308, count: 1},
{lat: 49.2737498, lng:-123.0733481, count: 1},
{lat: 49.226213, lng:-123.0616169, count: 1},
{lat: 49.2767619, lng:-123.1287071, count: 1},
{lat: 49.2538673, lng:-123.1274166, count: 1},
{lat: 49.273013, lng:-123.073763, count: 1},
{lat: 49.273013, lng:-123.073763, count: 1},
{lat: 49.273013, lng:-123.073763, count: 1},
{lat: 49.273013, lng:-123.073763, count: 1},
{lat: 49.2516612, lng:-123.0275668, count: 1},
{lat: 49.2531186, lng:-123.0415428, count: 1},
{lat: 49.234428, lng:-123.0385801, count: 1},
{lat: 49.2088328, lng:-123.0288418, count: 1},
{lat: 49.277382, lng:-123.0864527, count: 1},
{lat: 49.2088441, lng:-123.0289562, count: 1},
{lat: 49.2384958, lng:-123.1001389, count: 1},
{lat: 49.2384958, lng:-123.1001389, count: 1},
{lat: 49.2386671, lng:-123.1001312, count: 1},
{lat: 49.2634005, lng:-123.1237533, count: 1},
{lat: 49.2732526, lng:-123.0401614, count: 1},
{lat: 49.2634005, lng:-123.1237533, count: 1},
{lat: 49.2634005, lng:-123.1237533, count: 1},
{lat: 49.2838736, lng:-123.1065501, count: 1},
{lat: 49.2729068, lng:-123.0579548, count: 1},
{lat: 49.2730385, lng:-123.0695823, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2730359, lng:-123.146272, count: 1},
{lat: 49.2838736, lng:-123.1065501, count: 1},
{lat: 49.259799, lng:-123.1345113, count: 1},
{lat: 49.2636735, lng:-123.1019284, count: 1},
{lat: 49.2537045, lng:-123.1812477, count: 1},
{lat: 49.2774301, lng:-123.0519498, count: 1},
{lat: 49.2636741, lng:-123.1019634, count: 1},
{lat: 49.2786695, lng:-123.125802, count: 1},
{lat: 49.2610035, lng:-123.1530606, count: 1},
{lat: 49.2644608, lng:-123.1332661, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2658282, lng:-123.1205321, count: 1},
{lat: 49.2658282, lng:-123.1205321, count: 1},
{lat: 49.2715487, lng:-123.1046641, count: 1},
{lat: 49.2071426, lng:-123.0568198, count: 1},
{lat: 49.282494, lng:-123.1043755, count: 1},
{lat: 49.2795724, lng:-123.1224597, count: 1},
{lat: 49.2637676, lng:-123.1025896, count: 1},
{lat: 49.2813475, lng:-123.0996871, count: 1},
{lat: 49.2563265, lng:-123.1524986, count: 1},
{lat: 49.2785931, lng:-123.1260934, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2637887, lng:-123.0363744, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2841428, lng:-123.1170787, count: 1},
{lat: 49.2720126, lng:-123.0773941, count: 1},
{lat: 49.2720126, lng:-123.0773941, count: 1},
{lat: 49.2720126, lng:-123.0773941, count: 1},
{lat: 49.2720126, lng:-123.0773941, count: 1},
{lat: 49.2720126, lng:-123.0773941, count: 1},
{lat: 49.2427982, lng:-123.0495601, count: 1},
{lat: 49.280256, lng:-123.0953444, count: 1},
{lat: 49.2722347, lng:-123.077391, count: 1},
{lat: 49.2575359, lng:-123.1055867, count: 1},
{lat: 49.2891584, lng:-123.1285444, count: 1},
{lat: 49.272338, lng:-123.1644514, count: 1},
{lat: 49.2891584, lng:-123.1285444, count: 1},
{lat: 49.2891584, lng:-123.1285444, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2583812, lng:-123.0776541, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2820226, lng:-123.1209311, count: 1},
{lat: 49.2792598, lng:-123.1269675, count: 1},
{lat: 49.2802535, lng:-123.0951637, count: 1},
{lat: 49.2672707, lng:-123.1006593, count: 1},
{lat: 49.2684022, lng:-123.173755, count: 1},
{lat: 49.2827692, lng:-123.1283875, count: 1},
{lat: 49.2825311, lng:-123.1281997, count: 1},
{lat: 49.2825311, lng:-123.1281997, count: 1},
{lat: 49.2408278, lng:-123.0247255, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2720995, lng:-123.0695458, count: 1},
{lat: 49.2813475, lng:-123.0996871, count: 1},
{lat: 49.2607894, lng:-123.1357832, count: 1},
{lat: 49.2682087, lng:-123.1599109, count: 1},
{lat: 49.2682087, lng:-123.1599109, count: 1},
{lat: 49.2682087, lng:-123.1599109, count: 1},
{lat: 49.2845109, lng:-123.1006617, count: 1},
{lat: 49.2757869, lng:-123.0670793, count: 1},
{lat: 49.2607928, lng:-123.1360019, count: 1},
{lat: 49.2616759, lng:-123.1346109, count: 1},
{lat: 49.2734374, lng:-123.1187565, count: 1},
{lat: 49.288468, lng:-123.1414492, count: 1},
{lat: 49.2773239, lng:-123.1202178, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.278302, lng:-123.124544, count: 1},
{lat: 49.2557925, lng:-123.0416446, count: 1},
{lat: 49.2062484, lng:-123.0504453, count: 1},
{lat: 49.2115987, lng:-123.0295511, count: 1},
{lat: 49.2462001, lng:-123.1922432, count: 1},
{lat: 49.2713866, lng:-123.0996257, count: 1},
{lat: 49.2783025, lng:-123.1243676, count: 1},
{lat: 49.2710293, lng:-123.0980652, count: 1},
{lat: 49.2802066, lng:-123.0440782, count: 1},
{lat: 49.2557925, lng:-123.0416446, count: 1},
{lat: 49.2584625, lng:-123.0566219, count: 1},
{lat: 49.2382312, lng:-123.1488848, count: 1},
{lat: 49.2924392, lng:-123.1410643, count: 1},
{lat: 49.2645929, lng:-123.1028162, count: 1},
{lat: 49.2790142, lng:-123.0245117, count: 1},
{lat: 49.2839069, lng:-123.1167172, count: 1},
{lat: 49.2784376, lng:-123.1241664, count: 1},
{lat: 49.289373, lng:-123.1288689, count: 1},
{lat: 49.2434632, lng:-123.027149, count: 1},
{lat: 49.2257742, lng:-123.1085139, count: 1},
{lat: 49.2270695, lng:-123.1479443, count: 1},
{lat: 49.2836363, lng:-123.1164807, count: 1},
{lat: 49.2505466, lng:-123.0470108, count: 1},
{lat: 49.2408341, lng:-123.0243002, count: 1},
{lat: 49.2535661, lng:-123.1008218, count: 1},
{lat: 49.2751149, lng:-123.0759538, count: 1},
{lat: 49.2851533, lng:-123.1200174, count: 1},
{lat: 49.2558656, lng:-123.0530312, count: 1},
{lat: 49.2712156, lng:-123.1749848, count: 1},
{lat: 49.2787614, lng:-123.1352855, count: 1},
{lat: 49.2634005, lng:-123.1237533, count: 1},
{lat: 49.2634005, lng:-123.1237533, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.2922605, lng:-123.1409854, count: 1},
{lat: 49.2922605, lng:-123.1409854, count: 1},
{lat: 49.2757502, lng:-123.1225915, count: 1},
{lat: 49.2642429, lng:-123.1806756, count: 1},
{lat: 49.2629678, lng:-123.1046507, count: 1},
{lat: 49.2802432, lng:-123.0944048, count: 1},
{lat: 49.2920846, lng:-123.14074, count: 1},
{lat: 49.2920846, lng:-123.14074, count: 1},
{lat: 49.2673018, lng:-123.102651, count: 1},
{lat: 49.2581784, lng:-123.0698013, count: 1},
{lat: 49.2635105, lng:-123.0283512, count: 1},
{lat: 49.2802383, lng:-123.0940433, count: 1},
{lat: 49.2859173, lng:-123.1169584, count: 1},
{lat: 49.2642534, lng:-123.1244871, count: 1},
{lat: 49.2817617, lng:-123.1191314, count: 1},
{lat: 49.2743992, lng:-123.1525921, count: 1}]













  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2013', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2014()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2796239, lng:-123.1205385, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2412686, lng:-123.0272397, count: 1},
{lat: 49.2554217, lng:-123.1761019, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2550606, lng:-123.179279, count: 1},
{lat: 49.2550487, lng:-123.1771937, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2529189, lng:-123.0339265, count: 1},
{lat: 49.259749, lng:-123.0815038, count: 1},
{lat: 49.2837876, lng:-123.1277142, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2726475, lng:-123.0735111, count: 1},
{lat: 49.2742843, lng:-123.1489717, count: 1},
{lat: 49.2884485, lng:-123.1272693, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2813445, lng:-123.0771, count: 1},
{lat: 49.2071907, lng:-123.1423092, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2382936, lng:-123.1583355, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2356468, lng:-123.071485, count: 1},
{lat: 49.2635747, lng:-123.1345331, count: 1},
{lat: 49.2839069, lng:-123.1167172, count: 1},
{lat: 49.2866103, lng:-123.1159223, count: 1},
{lat: 49.2365243, lng:-123.1222197, count: 1},
{lat: 49.2365243, lng:-123.1222197, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.2792776, lng:-123.1208896, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2841737, lng:-123.1284779, count: 1},
{lat: 49.2644887, lng:-123.1350823, count: 1},
{lat: 49.2644072, lng:-123.1351294, count: 1},
{lat: 49.2644982, lng:-123.1356528, count: 1},
{lat: 49.2779822, lng:-123.121081, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2813445, lng:-123.0771, count: 1},
{lat: 49.2574751, lng:-123.0273801, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.2086153, lng:-123.1366849, count: 1},
{lat: 49.2529859, lng:-123.1281246, count: 1},
{lat: 49.265003, lng:-123.0657894, count: 1},
{lat: 49.2653418, lng:-123.1359447, count: 1},
{lat: 49.2537414, lng:-123.1286698, count: 1},
{lat: 49.2669068, lng:-123.1869109, count: 1},
{lat: 49.2071907, lng:-123.1423092, count: 1},
{lat: 49.2369952, lng:-123.1370582, count: 1},
{lat: 49.2585829, lng:-123.0964548, count: 1},
{lat: 49.2787976, lng:-123.1216231, count: 1},
{lat: 49.2655668, lng:-123.1500914, count: 1},
{lat: 49.2787016, lng:-123.1217697, count: 1},
{lat: 49.2550344, lng:-123.129468, count: 1},
{lat: 49.2552559, lng:-123.1296622, count: 1},
{lat: 49.2676096, lng:-123.1267396, count: 1},
{lat: 49.2607585, lng:-123.1830615, count: 1},
{lat: 49.282481, lng:-123.1182307, count: 1},
{lat: 49.289373, lng:-123.1288689, count: 1},
{lat: 49.2577779, lng:-123.1837992, count: 1},
{lat: 49.2873932, lng:-123.1175833, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.278967, lng:-123.1195137, count: 1},
{lat: 49.278967, lng:-123.1195137, count: 1},
{lat: 49.2359866, lng:-123.1107025, count: 1},
{lat: 49.278967, lng:-123.1195137, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2881733, lng:-123.1179906, count: 1},
{lat: 49.2787503, lng:-123.1200154, count: 1},
{lat: 49.2565174, lng:-123.1848425, count: 1},
{lat: 49.2700397, lng:-123.1641999, count: 1},
{lat: 49.2838675, lng:-123.0586441, count: 1},
{lat: 49.2633907, lng:-123.1282288, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.259307, lng:-123.1049922, count: 1},
{lat: 49.2825396, lng:-123.1181426, count: 1},
{lat: 49.2721286, lng:-123.0735258, count: 1},
{lat: 49.2643948, lng:-123.1284498, count: 1},
{lat: 49.2352525, lng:-123.0741375, count: 1},
{lat: 49.2643132, lng:-123.1284962, count: 1},
{lat: 49.2838725, lng:-123.059615, count: 1},
{lat: 49.2838725, lng:-123.059615, count: 1},
{lat: 49.254639, lng:-123.1846148, count: 1},
{lat: 49.2668883, lng:-123.1858583, count: 1},
{lat: 49.2354385, lng:-123.0476361, count: 1},
{lat: 49.2838725, lng:-123.059615, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2799486, lng:-123.1198727, count: 1},
{lat: 49.2537168, lng:-123.1840304, count: 1},
{lat: 49.2563548, lng:-123.1344612, count: 1},
{lat: 49.2354678, lng:-123.0475114, count: 1},
{lat: 49.235399, lng:-123.047509, count: 1},
{lat: 49.2537098, lng:-123.1823926, count: 1},
{lat: 49.2576338, lng:-123.0416684, count: 1},
{lat: 49.2827149, lng:-123.1235837, count: 1},
{lat: 49.2369675, lng:-123.0291824, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2537098, lng:-123.1823926, count: 1},
{lat: 49.2576338, lng:-123.0416684, count: 1},
{lat: 49.2752358, lng:-123.127122, count: 1},
{lat: 49.2755187, lng:-123.127371, count: 1},
{lat: 49.2755187, lng:-123.127371, count: 1},
{lat: 49.266032, lng:-123.1867664, count: 1},
{lat: 49.2369675, lng:-123.0291824, count: 1},
{lat: 49.2519811, lng:-123.1837918, count: 1},
{lat: 49.2576338, lng:-123.0416684, count: 1},
{lat: 49.2546874, lng:-123.1081886, count: 1},
{lat: 49.2361244, lng:-123.1346964, count: 1},
{lat: 49.2220058, lng:-123.0388381, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2480299, lng:-123.184314, count: 1},
{lat: 49.2869677, lng:-123.1335944, count: 1},
{lat: 49.2576338, lng:-123.0416684, count: 1},
{lat: 49.2576338, lng:-123.0416684, count: 1},
{lat: 49.2471637, lng:-123.1844173, count: 1},
{lat: 49.2835353, lng:-123.1339979, count: 1},
{lat: 49.2813791, lng:-123.137043, count: 1},
{lat: 49.2661106, lng:-123.1859952, count: 1},
{lat: 49.284033, lng:-123.1345803, count: 1},
{lat: 49.2355949, lng:-123.0395138, count: 1},
{lat: 49.2733383, lng:-123.1236885, count: 1},
{lat: 49.2733383, lng:-123.1236885, count: 1},
{lat: 49.2634067, lng:-123.1266193, count: 1},
{lat: 49.2733383, lng:-123.1236885, count: 1},
{lat: 49.2776441, lng:-123.1177029, count: 1},
{lat: 49.2776441, lng:-123.1177029, count: 1},
{lat: 49.2462061, lng:-123.1837483, count: 1},
{lat: 49.247967, lng:-123.1190291, count: 1},
{lat: 49.252514, lng:-123.119204, count: 1},
{lat: 49.2462058, lng:-123.1835654, count: 1},
{lat: 49.2768762, lng:-123.1187168, count: 1},
{lat: 49.2729893, lng:-123.1001569, count: 1},
{lat: 49.2729893, lng:-123.1001569, count: 1},
{lat: 49.2353208, lng:-123.0769105, count: 1},
{lat: 49.2903903, lng:-123.1302294, count: 1},
{lat: 49.2634067, lng:-123.1266193, count: 1},
{lat: 49.2573645, lng:-123.0565648, count: 1},
{lat: 49.2371459, lng:-123.1504192, count: 1},
{lat: 49.2634454, lng:-123.1807678, count: 1},
{lat: 49.2573645, lng:-123.0565648, count: 1},
{lat: 49.2573645, lng:-123.0565648, count: 1},
{lat: 49.2357875, lng:-123.0754908, count: 1},
{lat: 49.2660279, lng:-123.1858911, count: 1},
{lat: 49.2366995, lng:-123.1626052, count: 1},
{lat: 49.2368021, lng:-123.1626015, count: 1},
{lat: 49.2811312, lng:-123.125845, count: 1},
{lat: 49.2413712, lng:-123.1832689, count: 1},
{lat: 49.2215123, lng:-123.129632, count: 1},
{lat: 49.2394763, lng:-123.1839442, count: 1},
{lat: 49.267454, lng:-123.1349234, count: 1},
{lat: 49.2725922, lng:-123.0617765, count: 1},
{lat: 49.2385448, lng:-123.1833502, count: 1},
{lat: 49.2503056, lng:-123.0763203, count: 1},
{lat: 49.2595553, lng:-123.119101, count: 1},
{lat: 49.2646568, lng:-123.0929064, count: 1},
{lat: 49.2765103, lng:-123.1000022, count: 1},
{lat: 49.2765103, lng:-123.1000022, count: 1},
{lat: 49.2765103, lng:-123.1000022, count: 1},
{lat: 49.2765103, lng:-123.1000022, count: 1},
{lat: 49.2349844, lng:-123.037783, count: 1},
{lat: 49.2703799, lng:-123.1329314, count: 1},
{lat: 49.223978, lng:-123.1303235, count: 1},
{lat: 49.2490916, lng:-123.1271652, count: 1},
{lat: 49.2897949, lng:-123.1295067, count: 1},
{lat: 49.280184, lng:-123.1196951, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2709939, lng:-123.1337427, count: 1},
{lat: 49.2485423, lng:-123.0740498, count: 1},
{lat: 49.2709939, lng:-123.1337427, count: 1},
{lat: 49.2733138, lng:-123.115286, count: 1},
{lat: 49.234443, lng:-123.0247561, count: 1},
{lat: 49.2709939, lng:-123.1337427, count: 1},
{lat: 49.2583079, lng:-123.1563602, count: 1},
{lat: 49.2709939, lng:-123.1337427, count: 1},
{lat: 49.2493391, lng:-123.1275137, count: 1},
{lat: 49.2709939, lng:-123.1337427, count: 1},
{lat: 49.2546959, lng:-123.1086174, count: 1},
{lat: 49.2351259, lng:-123.0880446, count: 1},
{lat: 49.2622423, lng:-123.11769, count: 1},
{lat: 49.2247684, lng:-123.1294924, count: 1},
{lat: 49.2604098, lng:-123.1664733, count: 1},
{lat: 49.2623611, lng:-123.1192845, count: 1},
{lat: 49.2792514, lng:-123.0872395, count: 1},
{lat: 49.2862936, lng:-123.1296672, count: 1},
{lat: 49.2733138, lng:-123.115286, count: 1},
{lat: 49.2855145, lng:-123.1306953, count: 1},
{lat: 49.2856065, lng:-123.1307328, count: 1},
{lat: 49.2283851, lng:-123.1289793, count: 1},
{lat: 49.2853191, lng:-123.1311696, count: 1},
{lat: 49.2293615, lng:-123.1285776, count: 1},
{lat: 49.2695173, lng:-123.1825148, count: 1},
{lat: 49.26433, lng:-123.1864294, count: 1}]














  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2014', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2015()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2420484, lng:-123.0392696, count: 1},
{lat: 49.2355918, lng:-123.0395294, count: 1},
{lat: 49.2355918, lng:-123.0395294, count: 1},
{lat: 49.2351345, lng:-123.0379349, count: 1},
{lat: 49.2572983, lng:-123.1243137, count: 1},
{lat: 49.2574431, lng:-123.1011379, count: 1},
{lat: 49.2848644, lng:-123.0391773, count: 1},
{lat: 49.2564046, lng:-123.0530258, count: 1},
{lat: 49.25689, lng:-123.1031626, count: 1},
{lat: 49.2561366, lng:-123.0444775, count: 1},
{lat: 49.2061324, lng:-123.0420021, count: 1},
{lat: 49.2059808, lng:-123.0402753, count: 1},
{lat: 49.2568329, lng:-123.0855899, count: 1},
{lat: 49.2568808, lng:-123.0855874, count: 1},
{lat: 49.302602, lng:-123.1295001, count: 1},
{lat: 49.302602, lng:-123.1295001, count: 1},
{lat: 49.2129845, lng:-123.0311245, count: 1},
{lat: 49.2790434, lng:-123.0387136, count: 1},
{lat: 49.2790434, lng:-123.0387136, count: 1},
{lat: 49.2790434, lng:-123.0387136, count: 1},
{lat: 49.2791239, lng:-123.0382776, count: 1},
{lat: 49.2763897, lng:-123.0387553, count: 1},
{lat: 49.2763897, lng:-123.0387553, count: 1},
{lat: 49.2763839, lng:-123.0382785, count: 1},
{lat: 49.2763839, lng:-123.0382785, count: 1},
{lat: 49.2633633, lng:-123.1753431, count: 1},
{lat: 49.2623302, lng:-123.1743022, count: 1},
{lat: 49.2614525, lng:-123.1753331, count: 1},
{lat: 49.2605532, lng:-123.1755558, count: 1},
{lat: 49.2596393, lng:-123.1752384, count: 1},
{lat: 49.2596291, lng:-123.1745693, count: 1},
{lat: 49.2587141, lng:-123.1743982, count: 1},
{lat: 49.2578849, lng:-123.1747064, count: 1},
{lat: 49.2566665, lng:-123.1754836, count: 1},
{lat: 49.2565789, lng:-123.1750449, count: 1},
{lat: 49.250975, lng:-123.1749609, count: 1},
{lat: 49.2510556, lng:-123.1745255, count: 1},
{lat: 49.2509726, lng:-123.1743571, count: 1},
{lat: 49.2490174, lng:-123.174882, count: 1},
{lat: 49.2480652, lng:-123.1746247, count: 1},
{lat: 49.2460818, lng:-123.1743648, count: 1},
{lat: 49.2413321, lng:-123.1743905, count: 1},
{lat: 49.2404006, lng:-123.1749303, count: 1},
{lat: 49.2366626, lng:-123.1749619, count: 1},
{lat: 49.2693139, lng:-123.1749382, count: 1},
{lat: 49.2327432, lng:-123.1744483, count: 1},
{lat: 49.2684974, lng:-123.1748358, count: 1},
{lat: 49.2658267, lng:-123.1740291, count: 1},
{lat: 49.2641465, lng:-123.1748607, count: 1},
{lat: 49.2443065, lng:-123.0405635, count: 1},
{lat: 49.2568649, lng:-123.0835125, count: 1},
{lat: 49.2570917, lng:-123.1132148, count: 1},
{lat: 49.2571407, lng:-123.113085, count: 1},
{lat: 49.2569014, lng:-123.1180669, count: 1},
{lat: 49.2386771, lng:-123.0367819, count: 1},
{lat: 49.2384144, lng:-123.0363614, count: 1},
{lat: 49.2561341, lng:-123.1151617, count: 1},
{lat: 49.2566679, lng:-123.1150048, count: 1},
{lat: 49.2177798, lng:-123.176318, count: 1},
{lat: 49.2177798, lng:-123.176318, count: 1},
{lat: 49.2732026, lng:-123.0358902, count: 1},
{lat: 49.2561206, lng:-123.0779062, count: 1},
{lat: 49.2397253, lng:-123.0370562, count: 1},
{lat: 49.2395031, lng:-123.0362489, count: 1},
{lat: 49.2392716, lng:-123.0359053, count: 1},
{lat: 49.2561865, lng:-123.1097877, count: 1},
{lat: 49.2557531, lng:-123.069537, count: 1},
{lat: 49.2557435, lng:-123.0693948, count: 1},
{lat: 49.2555255, lng:-123.0344842, count: 1},
{lat: 49.2547064, lng:-123.0359809, count: 1},
{lat: 49.2547006, lng:-123.0349867, count: 1},
{lat: 49.2693194, lng:-123.0346649, count: 1},
{lat: 49.251445, lng:-123.0364592, count: 1},
{lat: 49.2505646, lng:-123.0357122, count: 1},
{lat: 49.2496193, lng:-123.0342535, count: 1},
{lat: 49.2487278, lng:-123.0364329, count: 1},
{lat: 49.2470586, lng:-123.0342786, count: 1},
{lat: 49.2453384, lng:-123.0365153, count: 1},
{lat: 49.244472, lng:-123.0355847, count: 1},
{lat: 49.267603, lng:-123.0345217, count: 1},
{lat: 49.2302147, lng:-123.0356952, count: 1},
{lat: 49.2263763, lng:-123.035414, count: 1},
{lat: 49.2254176, lng:-123.0386769, count: 1},
{lat: 49.225496, lng:-123.0381567, count: 1},
{lat: 49.224657, lng:-123.0387181, count: 1},
{lat: 49.2236511, lng:-123.0387534, count: 1},
{lat: 49.2228621, lng:-123.0385748, count: 1},
{lat: 49.2229355, lng:-123.038287, count: 1},
{lat: 49.2212323, lng:-123.0388775, count: 1},
{lat: 49.2172956, lng:-123.0376514, count: 1},
{lat: 49.2172156, lng:-123.0365734, count: 1},
{lat: 49.2656271, lng:-123.0355199, count: 1},
{lat: 49.264671, lng:-123.0348927, count: 1},
{lat: 49.2628656, lng:-123.0345651, count: 1},
{lat: 49.2628652, lng:-123.0344174, count: 1},
{lat: 49.2618565, lng:-123.0363837, count: 1},
{lat: 49.2783125, lng:-123.0356047, count: 1},
{lat: 49.2783056, lng:-123.0342013, count: 1},
{lat: 49.2554987, lng:-123.0678697, count: 1},
{lat: 49.2561068, lng:-123.0899246, count: 1},
{lat: 49.2553404, lng:-123.0583458, count: 1},
{lat: 49.2558781, lng:-123.0583437, count: 1},
{lat: 49.2558781, lng:-123.0583437, count: 1},
{lat: 49.2713854, lng:-123.0359298, count: 1},
{lat: 49.2565042, lng:-123.1202002, count: 1},
{lat: 49.2568102, lng:-123.1201946, count: 1},
{lat: 49.25631, lng:-123.120078, count: 1},
{lat: 49.2349839, lng:-123.0377937, count: 1},
{lat: 49.2570246, lng:-123.1243235, count: 1},
{lat: 49.2316148, lng:-123.0358177, count: 1},
{lat: 49.2315319, lng:-123.0357118, count: 1},
{lat: 49.2316105, lng:-123.0351212, count: 1},
{lat: 49.2561162, lng:-123.0303035, count: 1},
{lat: 49.2557033, lng:-123.0296638, count: 1},
{lat: 49.2749221, lng:-123.0362095, count: 1},
{lat: 49.2564348, lng:-123.1048932, count: 1},
{lat: 49.2552848, lng:-123.0444882, count: 1},
{lat: 49.2553528, lng:-123.0441845, count: 1},
{lat: 49.2059088, lng:-123.0394327, count: 1},
{lat: 49.2552606, lng:-123.033675, count: 1},
{lat: 49.255565, lng:-123.0336737, count: 1},
{lat: 49.2325151, lng:-123.0362432, count: 1},
{lat: 49.2320919, lng:-123.0351839, count: 1},
{lat: 49.2564174, lng:-123.0983815, count: 1},
{lat: 49.3029613, lng:-123.1308766, count: 1},
{lat: 49.2790257, lng:-123.0344934, count: 1},
{lat: 49.2556876, lng:-123.0248938, count: 1},
{lat: 49.2565179, lng:-123.0245752, count: 1},
{lat: 49.263306, lng:-123.1769734, count: 1},
{lat: 49.2605625, lng:-123.1761353, count: 1},
{lat: 49.2596536, lng:-123.1761703, count: 1},
{lat: 49.2596536, lng:-123.1761703, count: 1},
{lat: 49.2596536, lng:-123.1761703, count: 1},
{lat: 49.2579289, lng:-123.1774216, count: 1},
{lat: 49.2527931, lng:-123.1778365, count: 1},
{lat: 49.2509831, lng:-123.1771591, count: 1},
{lat: 49.2479914, lng:-123.1780414, count: 1},
{lat: 49.2479855, lng:-123.1758732, count: 1},
{lat: 49.2703229, lng:-123.1761495, count: 1},
{lat: 49.2702338, lng:-123.1757953, count: 1},
{lat: 49.2432488, lng:-123.1779263, count: 1},
{lat: 49.2423973, lng:-123.1761593, count: 1},
{lat: 49.2404028, lng:-123.1759188, count: 1},
{lat: 49.2395203, lng:-123.1764517, count: 1},
{lat: 49.239432, lng:-123.1759238, count: 1},
{lat: 49.2693278, lng:-123.1758087, count: 1},
{lat: 49.2693278, lng:-123.1758087, count: 1},
{lat: 49.2693278, lng:-123.1758087, count: 1},
{lat: 49.2684492, lng:-123.1770966, count: 1},
{lat: 49.267568, lng:-123.1763457, count: 1},
{lat: 49.2650332, lng:-123.1759967, count: 1},
{lat: 49.2498943, lng:-123.1773477, count: 1},
{lat: 49.2740938, lng:-123.035926, count: 1},
{lat: 49.2741739, lng:-123.0347186, count: 1},
{lat: 49.2568862, lng:-123.1219731, count: 1},
{lat: 49.2562533, lng:-123.0743542, count: 1},
{lat: 49.2567631, lng:-123.1124263, count: 1},
{lat: 49.2774043, lng:-123.0335212, count: 1},
{lat: 49.2774012, lng:-123.0330738, count: 1},
{lat: 49.2773988, lng:-123.0327382, count: 1},
{lat: 49.2523561, lng:-123.0315395, count: 1},
{lat: 49.2380644, lng:-123.0352326, count: 1},
{lat: 49.2378681, lng:-123.0347348, count: 1},
{lat: 49.2544911, lng:-123.0238635, count: 1},
{lat: 49.234724, lng:-123.0329544, count: 1},
{lat: 49.2346928, lng:-123.035073, count: 1},
{lat: 49.2345824, lng:-123.0348079, count: 1},
{lat: 49.2345966, lng:-123.034608, count: 1},
{lat: 49.2341132, lng:-123.0336817, count: 1},
{lat: 49.2074384, lng:-123.0352168, count: 1},
{lat: 49.2548077, lng:-123.0729604, count: 1},
{lat: 49.2571349, lng:-123.1851895, count: 1},
{lat: 49.2479155, lng:-123.0332326, count: 1},
{lat: 49.2471197, lng:-123.0316447, count: 1},
{lat: 49.2453965, lng:-123.0327536, count: 1},
{lat: 49.2444709, lng:-123.0339619, count: 1},
{lat: 49.2445443, lng:-123.0327621, count: 1},
{lat: 49.2445405, lng:-123.0322484, count: 1},
{lat: 49.2684247, lng:-123.0331799, count: 1},
{lat: 49.2308994, lng:-123.0340769, count: 1},
{lat: 49.2301043, lng:-123.0342254, count: 1},
{lat: 49.230003, lng:-123.032823, count: 1},
{lat: 49.2292159, lng:-123.0341358, count: 1},
{lat: 49.2292101, lng:-123.0335978, count: 1},
{lat: 49.2284615, lng:-123.0340057, count: 1},
{lat: 49.2666714, lng:-123.0316652, count: 1},
{lat: 49.2171602, lng:-123.0362731, count: 1},
{lat: 49.2646596, lng:-123.031293, count: 1},
{lat: 49.2628601, lng:-123.0328989, count: 1},
{lat: 49.281195, lng:-123.0338355, count: 1},
{lat: 49.2801574, lng:-123.0335229, count: 1},
{lat: 49.2375309, lng:-123.0364612, count: 1},
{lat: 49.2372221, lng:-123.0354531, count: 1},
{lat: 49.2547386, lng:-123.0679091, count: 1},
{lat: 49.2537428, lng:-123.0582268, count: 1},
{lat: 49.2547422, lng:-123.0582226, count: 1},
{lat: 49.2550068, lng:-123.0582216, count: 1},
{lat: 49.2550068, lng:-123.0582216, count: 1},
{lat: 49.2581726, lng:-123.03228, count: 1},
{lat: 49.2560272, lng:-123.1202094, count: 1}]















  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2015', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2016()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2849272, lng:-123.1244387, count: 1},
{lat: 49.2530971, lng:-123.0899194, count: 1},
{lat: 49.2761752, lng:-123.1162217, count: 1},
{lat: 49.2826441, lng:-123.1055721, count: 1},
{lat: 49.2826441, lng:-123.1055721, count: 1},
{lat: 49.2827231, lng:-123.1055368, count: 1},
{lat: 49.2259523, lng:-123.1563269, count: 1},
{lat: 49.2827231, lng:-123.1055368, count: 1},
{lat: 49.2258571, lng:-123.1614016, count: 1},
{lat: 49.2820148, lng:-123.0265569, count: 1},
{lat: 49.2873664, lng:-123.127914, count: 1},
{lat: 49.2848443, lng:-123.0604348, count: 1},
{lat: 49.2795724, lng:-123.1224597, count: 1},
{lat: 49.2850655, lng:-123.1242284, count: 1},
{lat: 49.2847616, lng:-123.0605744, count: 1},
{lat: 49.2136833, lng:-123.0713782, count: 1},
{lat: 49.2136833, lng:-123.0713782, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2834128, lng:-123.1109376, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2658444, lng:-123.168508, count: 1},
{lat: 49.2790823, lng:-123.0895551, count: 1},
{lat: 49.2801732, lng:-123.1274502, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2762072, lng:-123.1159944, count: 1},
{lat: 49.2714847, lng:-123.1400617, count: 1},
{lat: 49.2836739, lng:-123.1198804, count: 1},
{lat: 49.2764599, lng:-123.1156062, count: 1},
{lat: 49.2764599, lng:-123.1156062, count: 1},
{lat: 49.2641453, lng:-123.170438, count: 1},
{lat: 49.2488464, lng:-123.1074646, count: 1},
{lat: 49.2488464, lng:-123.1074646, count: 1},
{lat: 49.2488464, lng:-123.1074646, count: 1},
{lat: 49.2493074, lng:-123.1391103, count: 1},
{lat: 49.2493074, lng:-123.1391103, count: 1},
{lat: 49.2489198, lng:-123.1153106, count: 1},
{lat: 49.2501031, lng:-123.1756908, count: 1},
{lat: 49.2516196, lng:-123.1530368, count: 1},
{lat: 49.2822605, lng:-123.0960069, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.281994, lng:-123.1072066, count: 1},
{lat: 49.281994, lng:-123.1072066, count: 1},
{lat: 49.281994, lng:-123.1072066, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.2500761, lng:-123.0846205, count: 1},
{lat: 49.2500761, lng:-123.0846205, count: 1},
{lat: 49.2818224, lng:-123.1171473, count: 1},
{lat: 49.2818224, lng:-123.1171473, count: 1},
{lat: 49.2897791, lng:-123.1294053, count: 1},
{lat: 49.2827637, lng:-123.1119225, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.2348004, lng:-123.0285079, count: 1},
{lat: 49.2763035, lng:-123.1273689, count: 1},
{lat: 49.2848425, lng:-123.0609606, count: 1},
{lat: 49.2881358, lng:-123.1268845, count: 1},
{lat: 49.2432915, lng:-123.0853628, count: 1},
{lat: 49.2837534, lng:-123.1200944, count: 1},
{lat: 49.2627547, lng:-123.0963759, count: 1},
{lat: 49.2197691, lng:-123.1261865, count: 1},
{lat: 49.2789855, lng:-123.1128083, count: 1},
{lat: 49.2824454, lng:-123.1069372, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2253898, lng:-123.125131, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2234055, lng:-123.0426132, count: 1},
{lat: 49.2245048, lng:-123.0856011, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2252243, lng:-123.1509114, count: 1},
{lat: 49.2627464, lng:-123.0970799, count: 1},
{lat: 49.223499, lng:-123.0773352, count: 1},
{lat: 49.2827739, lng:-123.1069259, count: 1},
{lat: 49.2793166, lng:-123.1132779, count: 1},
{lat: 49.2793166, lng:-123.1132779, count: 1},
{lat: 49.286223, lng:-123.1265405, count: 1},
{lat: 49.2846404, lng:-123.1103346, count: 1},
{lat: 49.2814977, lng:-123.1254759, count: 1},
{lat: 49.2450272, lng:-123.0648088, count: 1},
{lat: 49.2195412, lng:-123.1221861, count: 1},
{lat: 49.2234673, lng:-123.0862305, count: 1},
{lat: 49.2828759, lng:-123.1068818, count: 1},
{lat: 49.225446, lng:-123.1399362, count: 1},
{lat: 49.2814977, lng:-123.1254759, count: 1},
{lat: 49.2828759, lng:-123.1068818, count: 1},
{lat: 49.2238538, lng:-123.0623344, count: 1},
{lat: 49.2828759, lng:-123.1068818, count: 1},
{lat: 49.2220345, lng:-123.0367363, count: 1},
{lat: 49.2347481, lng:-123.0289616, count: 1},
{lat: 49.2237001, lng:-123.0525072, count: 1},
{lat: 49.2827228, lng:-123.1055358, count: 1},
{lat: 49.2827228, lng:-123.1055358, count: 1},
{lat: 49.2827228, lng:-123.1055358, count: 1},
{lat: 49.2827228, lng:-123.1055358, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2828706, lng:-123.1067535, count: 1},
{lat: 49.2818023, lng:-123.1058751, count: 1},
{lat: 49.2818023, lng:-123.1058751, count: 1},
{lat: 49.2818023, lng:-123.1058751, count: 1},
{lat: 49.224548, lng:-123.0815421, count: 1},
{lat: 49.2799579, lng:-123.124201, count: 1},
{lat: 49.2547867, lng:-123.1090425, count: 1},
{lat: 49.2817829, lng:-123.1057699, count: 1},
{lat: 49.2666953, lng:-123.1479651, count: 1},
{lat: 49.2450272, lng:-123.0648088, count: 1},
{lat: 49.2789855, lng:-123.1128083, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2827637, lng:-123.1119223, count: 1},
{lat: 49.2791594, lng:-123.1130996, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2335857, lng:-123.1201479, count: 1},
{lat: 49.2628558, lng:-123.0978713, count: 1},
{lat: 49.2791594, lng:-123.1130996, count: 1},
{lat: 49.2635838, lng:-123.0969368, count: 1},
{lat: 49.278706, lng:-123.1122591, count: 1},
{lat: 49.2200034, lng:-123.150892, count: 1},
{lat: 49.2197664, lng:-123.1467371, count: 1},
{lat: 49.2636184, lng:-123.0988453, count: 1},
{lat: 49.2645507, lng:-123.0961779, count: 1},
{lat: 49.2347729, lng:-123.0292197, count: 1},
{lat: 49.2347729, lng:-123.0292197, count: 1},
{lat: 49.2764122, lng:-123.1273828, count: 1},
{lat: 49.2249669, lng:-123.1267323, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2248724, lng:-123.1267356, count: 1},
{lat: 49.2866022, lng:-123.1138721, count: 1},
{lat: 49.2791594, lng:-123.1130996, count: 1},
{lat: 49.216243, lng:-123.0718696, count: 1},
{lat: 49.224496, lng:-123.04729, count: 1},
{lat: 49.2252956, lng:-123.0974606, count: 1},
{lat: 49.2165204, lng:-123.0858052, count: 1},
{lat: 49.2237404, lng:-123.0547042, count: 1},
{lat: 49.2237404, lng:-123.0547042, count: 1},
{lat: 49.2666027, lng:-123.1688577, count: 1},
{lat: 49.2892152, lng:-123.1221766, count: 1},
{lat: 49.2812318, lng:-123.0953093, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2822577, lng:-123.1327288, count: 1},
{lat: 49.2247667, lng:-123.0592254, count: 1},
{lat: 49.2247667, lng:-123.0592254, count: 1},
{lat: 49.2892152, lng:-123.1221766, count: 1},
{lat: 49.2795724, lng:-123.1224597, count: 1},
{lat: 49.2876735, lng:-123.0259438, count: 1},
{lat: 49.2808615, lng:-123.1062043, count: 1},
{lat: 49.2808615, lng:-123.1062043, count: 1},
{lat: 49.2808586, lng:-123.106188, count: 1},
{lat: 49.2892152, lng:-123.1221766, count: 1},
{lat: 49.2799579, lng:-123.124201, count: 1},
{lat: 49.2805362, lng:-123.1249834, count: 1},
{lat: 49.2805362, lng:-123.1249834, count: 1},
{lat: 49.2810703, lng:-123.1158806, count: 1},
{lat: 49.232571, lng:-123.101801, count: 1},
{lat: 49.2892152, lng:-123.1221766, count: 1},
{lat: 49.2642642, lng:-123.179837, count: 1},
{lat: 49.2926236, lng:-123.1337187, count: 1},
{lat: 49.2255058, lng:-123.1494718, count: 1},
{lat: 49.2526971, lng:-123.0856109, count: 1},
{lat: 49.2926236, lng:-123.1337187, count: 1},
{lat: 49.2926236, lng:-123.1337187, count: 1},
{lat: 49.2926236, lng:-123.1337187, count: 1},
{lat: 49.264515, lng:-123.0980584, count: 1},
{lat: 49.2640618, lng:-123.1703972, count: 1},
{lat: 49.211641, lng:-123.0984151, count: 1},
{lat: 49.2807414, lng:-123.1060095, count: 1},
{lat: 49.2637754, lng:-123.1505453, count: 1},
{lat: 49.2637754, lng:-123.1505453, count: 1},
{lat: 49.2538714, lng:-123.1525188, count: 1},
{lat: 49.2802489, lng:-123.0260541, count: 1},
{lat: 49.2791594, lng:-123.1130996, count: 1},
{lat: 49.2844644, lng:-123.1311604, count: 1},
{lat: 49.2628852, lng:-123.0987312, count: 1},
{lat: 49.2837418, lng:-123.1053139, count: 1},
{lat: 49.2833731, lng:-123.1392203, count: 1},
{lat: 49.2270484, lng:-123.1508502, count: 1},
{lat: 49.2627996, lng:-123.0986367, count: 1},
{lat: 49.2807003, lng:-123.1076589, count: 1},
{lat: 49.2807003, lng:-123.1076589, count: 1}]
















  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2016', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2017()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2332799, lng:-123.0247691, count: 1},
{lat: 49.2332799, lng:-123.0247691, count: 1},
{lat: 49.2828255, lng:-123.1235922, count: 1},
{lat: 49.2517408, lng:-123.0791143, count: 1},
{lat: 49.2832861, lng:-123.102377, count: 1},
{lat: 49.2324539, lng:-123.0249039, count: 1},
{lat: 49.2521414, lng:-123.0838413, count: 1},
{lat: 49.2834368, lng:-123.1065656, count: 1},
{lat: 49.2723135, lng:-123.1209511, count: 1},
{lat: 49.2356025, lng:-123.1895397, count: 1},
{lat: 49.2827062, lng:-123.123597, count: 1},
{lat: 49.2661632, lng:-123.1397752, count: 1},
{lat: 49.2664649, lng:-123.1575105, count: 1},
{lat: 49.2728695, lng:-123.1200311, count: 1},
{lat: 49.2728695, lng:-123.1200311, count: 1},
{lat: 49.2814367, lng:-123.1196236, count: 1},
{lat: 49.2104959, lng:-123.1417772, count: 1},
{lat: 49.2829238, lng:-123.1065547, count: 1},
{lat: 49.2810948, lng:-123.1075073, count: 1},
{lat: 49.2341793, lng:-123.1280052, count: 1},
{lat: 49.2804445, lng:-123.1040749, count: 1},
{lat: 49.2338618, lng:-123.0587464, count: 1},
{lat: 49.283812, lng:-123.1061979, count: 1},
{lat: 49.2114199, lng:-123.1408227, count: 1},
{lat: 49.2329897, lng:-123.0293246, count: 1},
{lat: 49.2754117, lng:-123.132929, count: 1},
{lat: 49.2754117, lng:-123.132929, count: 1},
{lat: 49.2753504, lng:-123.1328334, count: 1},
{lat: 49.2122988, lng:-123.1404803, count: 1},
{lat: 49.2841795, lng:-123.1305505, count: 1},
{lat: 49.2628885, lng:-123.1575122, count: 1},
{lat: 49.2676855, lng:-123.1842882, count: 1},
{lat: 49.2835961, lng:-123.1388764, count: 1},
{lat: 49.2336679, lng:-123.0387062, count: 1},
{lat: 49.2332552, lng:-123.0388447, count: 1},
{lat: 49.2761796, lng:-123.1162149, count: 1},
{lat: 49.2739319, lng:-123.1213524, count: 1},
{lat: 49.2331566, lng:-123.0258633, count: 1},
{lat: 49.2131448, lng:-123.1426162, count: 1},
{lat: 49.2139573, lng:-123.1403701, count: 1},
{lat: 49.23273, lng:-123.0259912, count: 1},
{lat: 49.2149018, lng:-123.1403247, count: 1},
{lat: 49.2339225, lng:-123.041642, count: 1},
{lat: 49.2749288, lng:-123.125767, count: 1},
{lat: 49.2749288, lng:-123.125767, count: 1},
{lat: 49.2826043, lng:-123.1237531, count: 1},
{lat: 49.2339225, lng:-123.041642, count: 1},
{lat: 49.2815791, lng:-123.1255286, count: 1},
{lat: 49.234032, lng:-123.0458431, count: 1},
{lat: 49.234032, lng:-123.0458431, count: 1},
{lat: 49.2628775, lng:-123.1567504, count: 1},
{lat: 49.2816335, lng:-123.1252642, count: 1},
{lat: 49.2679871, lng:-123.1391809, count: 1},
{lat: 49.2704285, lng:-123.1844648, count: 1},
{lat: 49.2817959, lng:-123.1250109, count: 1},
{lat: 49.2337708, lng:-123.0797101, count: 1},
{lat: 49.2337708, lng:-123.0797101, count: 1},
{lat: 49.2331681, lng:-123.0798555, count: 1},
{lat: 49.2462081, lng:-123.1861195, count: 1},
{lat: 49.2821764, lng:-123.1245906, count: 1},
{lat: 49.2345564, lng:-123.120809, count: 1},
{lat: 49.2547307, lng:-123.1862837, count: 1},
{lat: 49.2712494, lng:-123.1839155, count: 1},
{lat: 49.2712518, lng:-123.1840752, count: 1},
{lat: 49.2821855, lng:-123.1243951, count: 1},
{lat: 49.2821855, lng:-123.1243951, count: 1},
{lat: 49.2821855, lng:-123.1243951, count: 1},
{lat: 49.2329903, lng:-123.035587, count: 1},
{lat: 49.2713453, lng:-123.1848314, count: 1},
{lat: 49.2712631, lng:-123.1848342, count: 1},
{lat: 49.2821855, lng:-123.1243951, count: 1},
{lat: 49.2821855, lng:-123.1243951, count: 1},
{lat: 49.2688508, lng:-123.1400949, count: 1},
{lat: 49.2844767, lng:-123.1294227, count: 1},
{lat: 49.234998, lng:-123.1549162, count: 1},
{lat: 49.2840199, lng:-123.1138301, count: 1},
{lat: 49.2840199, lng:-123.1138301, count: 1},
{lat: 49.2338522, lng:-123.048845, count: 1},
{lat: 49.2846, lng:-123.1290677, count: 1},
{lat: 49.2766477, lng:-123.1171984, count: 1},
{lat: 49.2766477, lng:-123.1171984, count: 1},
{lat: 49.2616987, lng:-123.1852812, count: 1},
{lat: 49.2768287, lng:-123.1169411, count: 1},
{lat: 49.2634212, lng:-123.1845986, count: 1},
{lat: 49.2418613, lng:-123.140879, count: 1},
{lat: 49.2354944, lng:-123.1853701, count: 1},
{lat: 49.277116, lng:-123.1165532, count: 1},
{lat: 49.277116, lng:-123.1165532, count: 1},
{lat: 49.2694413, lng:-123.1379702, count: 1},
{lat: 49.2881265, lng:-123.1153843, count: 1},
{lat: 49.2881265, lng:-123.1153843, count: 1},
{lat: 49.2881265, lng:-123.1153843, count: 1},
{lat: 49.2881265, lng:-123.1153843, count: 1},
{lat: 49.2354242, lng:-123.0246499, count: 1},
{lat: 49.2881265, lng:-123.1153843, count: 1},
{lat: 49.2335344, lng:-123.0741963, count: 1},
{lat: 49.2350677, lng:-123.1491448, count: 1},
{lat: 49.2877169, lng:-123.1143001, count: 1},
{lat: 49.2355932, lng:-123.0261875, count: 1},
{lat: 49.2355932, lng:-123.0261875, count: 1},
{lat: 49.2751521, lng:-123.0376619, count: 1},
{lat: 49.2877237, lng:-123.1142897, count: 1},
{lat: 49.2877237, lng:-123.1142897, count: 1},
{lat: 49.2877237, lng:-123.1142897, count: 1},
{lat: 49.2878797, lng:-123.1299188, count: 1},
{lat: 49.2878797, lng:-123.1299188, count: 1},
{lat: 49.2877237, lng:-123.1142897, count: 1},
{lat: 49.2877237, lng:-123.1142897, count: 1},
{lat: 49.2878797, lng:-123.1299188, count: 1},
{lat: 49.2838302, lng:-123.0251603, count: 1},
{lat: 49.265282, lng:-123.1319, count: 1},
{lat: 49.2878797, lng:-123.1299188, count: 1},
{lat: 49.2347122, lng:-123.1107578, count: 1},
{lat: 49.2878797, lng:-123.1299188, count: 1},
{lat: 49.2643673, lng:-123.1322074, count: 1},
{lat: 49.2338487, lng:-123.0444437, count: 1},
{lat: 49.2765496, lng:-123.0306648, count: 1},
{lat: 49.2335831, lng:-123.0445714, count: 1},
{lat: 49.26631, lng:-123.1266147, count: 1},
{lat: 49.26631, lng:-123.1266147, count: 1},
{lat: 49.26631, lng:-123.1266147, count: 1},
{lat: 49.26631, lng:-123.1266147, count: 1},
{lat: 49.233669, lng:-123.0700239, count: 1},
{lat: 49.263464, lng:-123.1327485, count: 1},
{lat: 49.263464, lng:-123.1327485, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.2899386, lng:-123.1237718, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.2520287, lng:-123.0339289, count: 1},
{lat: 49.232645, lng:-123.0236651, count: 1},
{lat: 49.2332927, lng:-123.0236686, count: 1},
{lat: 49.2818258, lng:-123.1171386, count: 1},
{lat: 49.2762674, lng:-123.0694347, count: 1},
{lat: 49.2742761, lng:-123.1129286, count: 1},
{lat: 49.2742761, lng:-123.1129286, count: 1},
{lat: 49.2708061, lng:-123.1566179, count: 1},
{lat: 49.2789731, lng:-123.1291089, count: 1},
{lat: 49.2353982, lng:-123.1867352, count: 1},
{lat: 49.2785718, lng:-123.1284829, count: 1},
{lat: 49.2355729, lng:-123.1868553, count: 1},
{lat: 49.2875597, lng:-123.1258947, count: 1},
{lat: 49.2321106, lng:-123.0280805, count: 1},
{lat: 49.2898599, lng:-123.1379646, count: 1},
{lat: 49.2900443, lng:-123.1376796, count: 1},
{lat: 49.235105, lng:-123.1238807, count: 1},
{lat: 49.2871367, lng:-123.1254207, count: 1},
{lat: 49.2871951, lng:-123.1253322, count: 1},
{lat: 49.2528893, lng:-123.0966755, count: 1},
{lat: 49.290342, lng:-123.1370707, count: 1},
{lat: 49.290342, lng:-123.1370707, count: 1},
{lat: 49.2889582, lng:-123.1251846, count: 1},
{lat: 49.2331673, lng:-123.0303667, count: 1},
{lat: 49.2331673, lng:-123.0303667, count: 1},
{lat: 49.2342981, lng:-123.0305545, count: 1},
{lat: 49.2739016, lng:-123.0734687, count: 1},
{lat: 49.2739016, lng:-123.0734687, count: 1},
{lat: 49.2776231, lng:-123.0768303, count: 1},
{lat: 49.2804016, lng:-123.1022145, count: 1},
{lat: 49.2337395, lng:-123.0311025, count: 1},
{lat: 49.2856347, lng:-123.0254349, count: 1},
{lat: 49.2804016, lng:-123.1022145, count: 1},
{lat: 49.2521587, lng:-123.1047862, count: 1},
{lat: 49.2348821, lng:-123.0541988, count: 1},
{lat: 49.2814367, lng:-123.1196236, count: 1},
{lat: 49.2342421, lng:-123.0430281, count: 1},
{lat: 49.250007, lng:-123.0857394, count: 1},
{lat: 49.2346529, lng:-123.0824647, count: 1},
{lat: 49.2340508, lng:-123.0824807, count: 1},
{lat: 49.2184833, lng:-123.1040076, count: 1},
{lat: 49.2342816, lng:-123.0247579, count: 1},
{lat: 49.2364642, lng:-123.0856184, count: 1},
{lat: 49.2333003, lng:-123.0247689, count: 1},
{lat: 49.2396214, lng:-123.0241016, count: 1},
{lat: 49.2396214, lng:-123.0241016, count: 1},
{lat: 49.2346694, lng:-123.0854813, count: 1},
{lat: 49.2329045, lng:-123.0867735, count: 1},
{lat: 49.2359192, lng:-123.1896556, count: 1},
{lat: 49.2767976, lng:-123.1210046, count: 1},
{lat: 49.2767976, lng:-123.1210046, count: 1},
{lat: 49.223463, lng:-123.0858961, count: 1},
{lat: 49.2184833, lng:-123.1040076, count: 1},
{lat: 49.2714847, lng:-123.1400617, count: 1},
{lat: 49.2535224, lng:-123.1577105, count: 1},
{lat: 49.2784562, lng:-123.120281, count: 1},
{lat: 49.2710851, lng:-123.1409402, count: 1},
{lat: 49.2571112, lng:-123.1396824, count: 1},
{lat: 49.2571243, lng:-123.1404017, count: 1},
{lat: 49.2873015, lng:-123.1307804, count: 1},
{lat: 49.2184833, lng:-123.1040076, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1},
{lat: 49.2744373, lng:-123.1525906, count: 1}]

















  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2017', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}
///////////////////////////////////////////////////////////////////////////////////
function heatMap2018()
{
  var testData = {
    max: 8,
   data:[{lat: 49.2063109, lng:-123.1332982, count: 1},
{lat: 49.241521, lng:-123.0574318, count: 1},
{lat: 49.2257724, lng:-123.108467, count: 1},
{lat: 49.2759976, lng:-123.0991132, count: 1},
{lat: 49.2747834, lng:-123.0645043, count: 1},
{lat: 49.2747834, lng:-123.0645043, count: 1},
{lat: 49.2500433, lng:-123.120416, count: 1},
{lat: 49.2500433, lng:-123.120416, count: 1},
{lat: 49.2165751, lng:-123.0958259, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2661798, lng:-123.0956338, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2375488, lng:-123.0704795, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2653768, lng:-123.14336, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2804016, lng:-123.1022145, count: 1},
{lat: 49.2170714, lng:-123.1290624, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2630024, lng:-123.100822, count: 1},
{lat: 49.2661365, lng:-123.0945597, count: 1},
{lat: 49.2684059, lng:-123.1078334, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.241521, lng:-123.0574318, count: 1},
{lat: 49.2684059, lng:-123.1078334, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.241521, lng:-123.0574318, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2810924, lng:-123.0267903, count: 1},
{lat: 49.2824775, lng:-123.1181357, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2634956, lng:-123.1010945, count: 1},
{lat: 49.2693297, lng:-123.1074119, count: 1},
{lat: 49.2693297, lng:-123.1074119, count: 1},
{lat: 49.2693297, lng:-123.1074119, count: 1},
{lat: 49.2693417, lng:-123.1082753, count: 1},
{lat: 49.269344, lng:-123.1084373, count: 1},
{lat: 49.2062092, lng:-123.0472981, count: 1},
{lat: 49.2745084, lng:-123.1000793, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.2722588, lng:-123.0553051, count: 1},
{lat: 49.2622698, lng:-123.068199, count: 1},
{lat: 49.240805, lng:-123.0556707, count: 1},
{lat: 49.2837977, lng:-123.1236938, count: 1},
{lat: 49.2730221, lng:-123.0722062, count: 1},
{lat: 49.2409284, lng:-123.0561627, count: 1},
{lat: 49.2643171, lng:-123.1384734, count: 1},
{lat: 49.2114333, lng:-123.1466298, count: 1},
{lat: 49.2967435, lng:-123.1275182, count: 1},
{lat: 49.2635898, lng:-123.1385625, count: 1},
{lat: 49.2149637, lng:-123.1455349, count: 1},
{lat: 49.2783422, lng:-123.0885443, count: 1},
{lat: 49.2701657, lng:-123.1077328, count: 1},
{lat: 49.2133006, lng:-123.095151, count: 1},
{lat: 49.2122151, lng:-123.0979218, count: 1},
{lat: 49.241521, lng:-123.0574318, count: 1},
{lat: 49.2703689, lng:-123.108045, count: 1},
{lat: 49.2033387, lng:-123.1301091, count: 1},
{lat: 49.2661831, lng:-123.1384685, count: 1},
{lat: 49.281553, lng:-123.1234302, count: 1},
{lat: 49.2121994, lng:-123.0966854, count: 1},
{lat: 49.2277158, lng:-123.0705971, count: 1},
{lat: 49.2122564, lng:-123.1404009, count: 1},
{lat: 49.2694283, lng:-123.102773, count: 1},
{lat: 49.219989, lng:-123.0703933, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2786453, lng:-123.1076411, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2652465, lng:-123.0957388, count: 1},
{lat: 49.2797105, lng:-123.1076296, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2747081, lng:-123.1217652, count: 1},
{lat: 49.2794382, lng:-123.0995606, count: 1},
{lat: 49.2670792, lng:-123.1433467, count: 1},
{lat: 49.2694283, lng:-123.102773, count: 1},
{lat: 49.2131454, lng:-123.1403695, count: 1},
{lat: 49.2450843, lng:-123.1626466, count: 1},
{lat: 49.2557429, lng:-123.1073767, count: 1},
{lat: 49.2631797, lng:-123.1157022, count: 1},
{lat: 49.2632667, lng:-123.1159977, count: 1},
{lat: 49.2653055, lng:-123.0942266, count: 1},
{lat: 49.2775966, lng:-123.125611, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2694418, lng:-123.1027728, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2584779, lng:-123.108462, count: 1},
{lat: 49.2269667, lng:-123.1398107, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2611877, lng:-123.1083833, count: 1},
{lat: 49.277491, lng:-123.0636356, count: 1},
{lat: 49.2652215, lng:-123.0939077, count: 1},
{lat: 49.2621583, lng:-123.1075523, count: 1},
{lat: 49.2621802, lng:-123.1088081, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2640828, lng:-123.1151634, count: 1},
{lat: 49.2856489, lng:-123.0530957, count: 1},
{lat: 49.2775966, lng:-123.125611, count: 1},
{lat: 49.2308473, lng:-123.027936, count: 1},
{lat: 49.2566234, lng:-123.1014592, count: 1},
{lat: 49.2777122, lng:-123.1010331, count: 1},
{lat: 49.2729679, lng:-123.1003649, count: 1},
{lat: 49.2652174, lng:-123.0931763, count: 1},
{lat: 49.281126, lng:-123.0550925, count: 1},
{lat: 49.2728898, lng:-123.1015736, count: 1},
{lat: 49.2626389, lng:-123.1385415, count: 1},
{lat: 49.2566234, lng:-123.1014592, count: 1},
{lat: 49.2804016, lng:-123.1022145, count: 1},
{lat: 49.2566234, lng:-123.1014592, count: 1},
{lat: 49.2770439, lng:-123.1224201, count: 1},
{lat: 49.2440734, lng:-123.0592414, count: 1},
{lat: 49.2611602, lng:-123.1013397, count: 1},
{lat: 49.2236934, lng:-123.0289307, count: 1},
{lat: 49.2258288, lng:-123.0906529, count: 1},
{lat: 49.2798994, lng:-123.1241127, count: 1},
{lat: 49.221037, lng:-123.0506835, count: 1},
{lat: 49.2353892, lng:-123.0279843, count: 1},
{lat: 49.2612739, lng:-123.1110991, count: 1},
{lat: 49.2818197, lng:-123.1236773, count: 1},
{lat: 49.2657622, lng:-123.0275427, count: 1},
{lat: 49.2353892, lng:-123.0279843, count: 1},
{lat: 49.2822183, lng:-123.0979898, count: 1},
{lat: 49.2738248, lng:-123.0598245, count: 1},
{lat: 49.2671697, lng:-123.1439352, count: 1},
{lat: 49.2802836, lng:-123.1274607, count: 1},
{lat: 49.2756559, lng:-123.1000331, count: 1},
{lat: 49.2811276, lng:-123.0564854, count: 1},
{lat: 49.2813685, lng:-123.1198153, count: 1},
{lat: 49.2787417, lng:-123.1103863, count: 1},
{lat: 49.286749, lng:-123.1259204, count: 1},
{lat: 49.2799152, lng:-123.1105661, count: 1},
{lat: 49.2171137, lng:-123.0620634, count: 1},
{lat: 49.2817988, lng:-123.1238264, count: 1},
{lat: 49.2661235, lng:-123.1359995, count: 1},
{lat: 49.2838891, lng:-123.1066393, count: 1},
{lat: 49.2657385, lng:-123.0692113, count: 1},
{lat: 49.2657374, lng:-123.0691263, count: 1},
{lat: 49.215377, lng:-123.0713146, count: 1},
{lat: 49.28017, lng:-123.028253, count: 1},
{lat: 49.2837879, lng:-123.09524, count: 1},
{lat: 49.244661, lng:-123.0549348, count: 1},
{lat: 49.2817988, lng:-123.1238264, count: 1},
{lat: 49.2136849, lng:-123.0716569, count: 1},
{lat: 49.2128881, lng:-123.0695918, count: 1},
{lat: 49.2777607, lng:-123.1335669, count: 1},
{lat: 49.2612404, lng:-123.0280991, count: 1},
{lat: 49.2583559, lng:-123.1587177, count: 1},
{lat: 49.2865394, lng:-123.1180062, count: 1}]


















  };

  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );

  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.007,
    "maxOpacity":0.7 ,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


  var heatmapLayer = new HeatmapOverlay(cfg);

  var map = new L.Map('map2018', {
    center: new L.LatLng(49.244667, -123.125028),
    zoom: 12,
    layers: [baseLayer, heatmapLayer]
  });

  heatmapLayer.setData(testData);

  // make accessible for debugging
  layer = heatmapLayer;

}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
