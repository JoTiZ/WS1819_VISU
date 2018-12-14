window.onload = function () {
  slider();
  heatMap();


  //var myVar = setInterval(loadlink, 1000);




}

//function loadlink(){
//location.reload();
//}

function heatMap()
{
  var testData = {
    max: 8,
   data: [{lat: 49.2510882, lng:-123.1804479, count: 1},
{lat: 49.2823675, lng:-123.1144553, count: 1},
{lat: 49.2850809, lng:-123.1242051, count: 1},
{lat: 49.2719256, lng:-123.135107, count: 1},
{lat: 49.2364312, lng:-123.1958769, count: 1},
{lat: 49.2364132, lng:-123.1938683, count: 1},
{lat: 49.2406114, lng:-123.0344415, count: 1},
{lat: 49.2789896, lng:-123.1213297, count: 1},
{lat: 49.2833353, lng:-123.1128993, count: 1},
{lat: 49.2487968, lng:-123.1068367, count: 1},
{lat: 49.2375074, lng:-123.0683263, count: 1},
{lat: 49.2375868, lng:-123.0680934, count: 1},
{lat: 49.284715, lng:-123.1228242, count: 1},
{lat: 49.2549079, lng:-123.0898779, count: 1},
{lat: 49.2662022, lng:-123.0918792, count: 1},
{lat: 49.2583562, lng:-123.1011036, count: 1},
{lat: 49.2815611, lng:-123.1100663, count: 1},
{lat: 49.2790856, lng:-123.121183, count: 1},
{lat: 49.2365265, lng:-123.0350986, count: 1},
{lat: 49.2661192, lng:-123.092833, count: 1},
{lat: 49.2526511, lng:-123.0825432, count: 1},
{lat: 49.2539049, lng:-123.1144215, count: 1},
{lat: 49.2366775, lng:-123.0679439, count: 1},
{lat: 49.2639851, lng:-123.160219, count: 1},
{lat: 49.2322995, lng:-123.1614927, count: 1},
{lat: 49.2172222, lng:-123.0942284, count: 1},
{lat: 49.2527454, lng:-123.0833952, count: 1},
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
{lat: 49.2678114, lng:-123.0670888, count: 1},
{lat: 49.2366613, lng:-123.0713282, count: 1},
{lat: 49.2355823, lng:-123.1938739, count: 1},
{lat: 49.2199826, lng:-123.0948033, count: 1},
{lat: 49.2583236, lng:-123.0987356, count: 1},
{lat: 49.2793351, lng:-123.0940302, count: 1},
{lat: 49.2217573, lng:-123.0940257, count: 1},
{lat: 49.2818199, lng:-123.1064357, count: 1},
{lat: 49.28241, lng:-123.1258353, count: 1},
{lat: 49.2562876, lng:-123.0835071, count: 1},
{lat: 49.226993, lng:-123.1108371, count: 1},
{lat: 49.2744555, lng:-123.1202996, count: 1},
{lat: 49.2693424, lng:-123.0251762, count: 1},
{lat: 49.2765719, lng:-123.1343584, count: 1},
{lat: 49.2157048, lng:-123.0362499, count: 1},
{lat: 49.2846656, lng:-123.1128553, count: 1},
{lat: 49.2539516, lng:-123.1127989, count: 1},
{lat: 49.2578091, lng:-123.0822316, count: 1},
{lat: 49.2581726, lng:-123.03228, count: 1},
{lat: 49.257816, lng:-123.0832756, count: 1},
{lat: 49.2530245, lng:-123.114687, count: 1},
{lat: 49.2218747, lng:-123.0684485, count: 1},
{lat: 49.2833161, lng:-123.1131054, count: 1},
{lat: 49.2716414, lng:-123.1003818, count: 1},
{lat: 49.218133, lng:-123.0770536, count: 1},
{lat: 49.2564033, lng:-123.1908622, count: 1},
{lat: 49.2844316, lng:-123.1246776, count: 1},
{lat: 49.2300979, lng:-123.0938046, count: 1},
{lat: 49.2761436, lng:-123.1340113, count: 1},
{lat: 49.2793165, lng:-123.1210078, count: 1},
{lat: 49.2492147, lng:-123.1603315, count: 1},
{lat: 49.2596389, lng:-123.0821697, count: 1},
{lat: 49.2156318, lng:-123.1099041, count: 1},
{lat: 49.264998, lng:-123.1186521, count: 1},
{lat: 49.2451717, lng:-123.1174793, count: 1},
{lat: 49.2531086, lng:-123.0327957, count: 1},
{lat: 49.231, lng:-123.0937883, count: 1},
{lat: 49.259626, lng:-123.0962431, count: 1},
{lat: 49.2760729, lng:-123.1339282, count: 1},
{lat: 49.2426102, lng:-123.0940489, count: 1},
{lat: 49.2435406, lng:-123.0940233, count: 1},
{lat: 49.2597319, lng:-123.0831488, count: 1},
{lat: 49.249303, lng:-123.0698366, count: 1},
{lat: 49.2205613, lng:-123.0337581, count: 1},
{lat: 49.2783803, lng:-123.0656128, count: 1},
{lat: 49.2493825, lng:-123.1599001, count: 1},
{lat: 49.2650955, lng:-123.0666109, count: 1},
{lat: 49.2451647, lng:-123.1172269, count: 1},
{lat: 49.2642007, lng:-123.067759, count: 1},
{lat: 49.2869536, lng:-123.1133922, count: 1},
{lat: 49.2570034, lng:-123.1229715, count: 1},
{lat: 49.2455748, lng:-123.0939497, count: 1},
{lat: 49.2466736, lng:-123.0922778, count: 1},
{lat: 49.2641995, lng:-123.0675115, count: 1},
{lat: 49.2574492, lng:-123.0998956, count: 1},
{lat: 49.2605272, lng:-123.0832457, count: 1},
{lat: 49.2466024, lng:-123.093918, count: 1},
{lat: 49.2614114, lng:-123.0828817, count: 1},
{lat: 49.2816602, lng:-123.1156072, count: 1},
{lat: 49.2641955, lng:-123.0666625, count: 1},
{lat: 49.2641953, lng:-123.0666271, count: 1},
{lat: 49.2574417, lng:-123.0993352, count: 1},
{lat: 49.2500712, lng:-123.1222294, count: 1},
{lat: 49.277766, lng:-123.1157443, count: 1},
{lat: 49.2476378, lng:-123.0938833, count: 1},
{lat: 49.2614135, lng:-123.0832348, count: 1},
{lat: 49.2293824, lng:-123.1041214, count: 1},
{lat: 49.209031, lng:-123.1405789, count: 1},
{lat: 49.2201222, lng:-123.0323906, count: 1},
{lat: 49.2432981, lng:-123.1039082, count: 1},
{lat: 49.2546283, lng:-123.0928245, count: 1},
{lat: 49.2813131, lng:-123.0974655, count: 1},
{lat: 49.26321, lng:-123.0669885, count: 1},
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
{lat: 49.2632017, lng:-123.0660432, count: 1},
{lat: 49.2218186, lng:-123.1016926, count: 1},
{lat: 49.2784124, lng:-123.067962, count: 1},
{lat: 49.2614731, lng:-123.0929197, count: 1},
{lat: 49.2802854, lng:-123.1274579, count: 1},
{lat: 49.283181, lng:-123.113133, count: 1},
{lat: 49.2151168, lng:-123.101956, count: 1},
{lat: 49.2893158, lng:-123.1386258, count: 1},
{lat: 49.2784888, lng:-123.0676562, count: 1},
{lat: 49.2706532, lng:-123.0270458, count: 1},
{lat: 49.2889181, lng:-123.139234, count: 1},
{lat: 49.2784851, lng:-123.0674548, count: 1},
{lat: 49.2721978, lng:-123.0725124, count: 1},
{lat: 49.2556348, lng:-123.1005555, count: 1},
{lat: 49.2392803, lng:-123.0344079, count: 1},
{lat: 49.2872987, lng:-123.1129964, count: 1},
{lat: 49.2823693, lng:-123.1145467, count: 1},
{lat: 49.2556983, lng:-123.0990421, count: 1},
{lat: 49.2784, lng:-123.0673073, count: 1},
{lat: 49.2783087, lng:-123.1323995, count: 1},
{lat: 49.2339144, lng:-123.1242343, count: 1},
{lat: 49.275002, lng:-123.1261812, count: 1},
{lat: 49.2482162, lng:-123.0718259, count: 1},
{lat: 49.2547457, lng:-123.1009939, count: 1},
{lat: 49.2627477, lng:-123.0971192, count: 1},
{lat: 49.2716181, lng:-123.1347047, count: 1},
{lat: 49.2165376, lng:-123.0940355, count: 1},
{lat: 49.2783904, lng:-123.0668037, count: 1},
{lat: 49.2592953, lng:-123.1034183, count: 1},
{lat: 49.2362584, lng:-123.0352121, count: 1},
{lat: 49.2906936, lng:-123.0549581, count: 1},
{lat: 49.2188841, lng:-123.0815279, count: 1},
{lat: 49.2812929, lng:-123.0941787, count: 1},
{lat: 49.2932759, lng:-123.1326738, count: 1},
{lat: 49.2392507, lng:-123.0340994, count: 1},
{lat: 49.2547397, lng:-123.1002268, count: 1},
{lat: 49.2835466, lng:-123.1164299, count: 1},
{lat: 49.279114, lng:-123.1293285, count: 1},
{lat: 49.2261564, lng:-123.0683326, count: 1},
{lat: 49.2578681, lng:-123.1278514, count: 1},
{lat: 49.2704169, lng:-123.034151, count: 1},
{lat: 49.2202676, lng:-123.0658703, count: 1},
{lat: 49.2802387, lng:-123.070367, count: 1},
{lat: 49.2579996, lng:-123.0935979, count: 1},
{lat: 49.2811966, lng:-123.0680057, count: 1},
{lat: 49.2803831, lng:-123.1022122, count: 1},
{lat: 49.2212729, lng:-123.0658685, count: 1},
{lat: 49.2801004, lng:-123.077109, count: 1},
{lat: 49.2830279, lng:-123.0932853, count: 1},
{lat: 49.2866103, lng:-123.1159223, count: 1},
{lat: 49.2802166, lng:-123.0676751, count: 1},
{lat: 49.2802986, lng:-123.0676237, count: 1},
{lat: 49.2753298, lng:-123.1189112, count: 1},
{lat: 49.2754238, lng:-123.1188373, count: 1},
{lat: 49.2804755, lng:-123.1043171, count: 1},
{lat: 49.2756117, lng:-123.1186893, count: 1},
{lat: 49.2718599, lng:-123.1614829, count: 1},
{lat: 49.2560272, lng:-123.1202094, count: 1},
{lat: 49.2210286, lng:-123.0789016, count: 1},
{lat: 49.2747002, lng:-123.1318182, count: 1},
{lat: 49.2210784, lng:-123.0788997, count: 1},
{lat: 49.221128, lng:-123.0788979, count: 1},
{lat: 49.2747583, lng:-123.1319073, count: 1},
{lat: 49.275763, lng:-123.118219, count: 1},
{lat: 49.2831618, lng:-123.1131623, count: 1},
{lat: 49.2802153, lng:-123.0674749, count: 1},
{lat: 49.2538308, lng:-123.1007504, count: 1},
{lat: 49.2753013, lng:-123.1327599, count: 1},
{lat: 49.2714334, lng:-123.1270164, count: 1},
{lat: 49.2802128, lng:-123.0671247, count: 1},
{lat: 49.2911745, lng:-123.1295807, count: 1},
{lat: 49.2830575, lng:-123.1397309, count: 1},
{lat: 49.2800609, lng:-123.084779, count: 1},
{lat: 49.2799614, lng:-123.0847834, count: 1}]
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
    "maxOpacity":document.getElementById("myRange").value/100 ,
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
