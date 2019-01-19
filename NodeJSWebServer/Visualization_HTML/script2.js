var url = "/scatterPlotAllData.txt";

var allDataStart = '[';
var allDataEnd=']';
var allDataMiddle;
var allConvertedData;
var fullData='';

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
      var lines = allData.split('\n');

      var counter2003a = 0,counter2003b= 0,counter2003c= 0,counter2003d= 0,counter2003e= 0,counter2003f= 0,counter2003g= 0,counter2003h= 0,counter2003i = 0;
      var counter2004a= 0,counter2004b= 0,counter2004c= 0,counter2004d= 0,counter2004e= 0,counter2004f= 0,counter2004g= 0,counter2004h= 0,counter2004i = 0;
      var counter2005a= 0,counter2005b= 0,counter2005c= 0,counter2005d= 0,counter2005e= 0,counter2005f= 0,counter2005g= 0,counter2005h= 0,counter2005i = 0;
      var counter2006a= 0,counter2006b= 0,counter2006c= 0,counter2006d= 0,counter2006e= 0,counter2006f= 0,counter2006g= 0,counter2006h= 0,counter2006i = 0;
      var counter2007a= 0,counter2007b= 0,counter2007c= 0,counter2007d= 0,counter2007e= 0,counter2007f= 0,counter2007g= 0,counter2007h= 0,counter2007i = 0;
      var counter2008a= 0,counter2008b= 0,counter2008c= 0,counter2008d= 0,counter2008e= 0,counter2008f= 0,counter2008g= 0,counter2008h= 0,counter2008i = 0;
      var counter2009a= 0,counter2009b= 0,counter2009c= 0,counter2009d= 0,counter2009e= 0,counter2009f= 0,counter2009g= 0,counter2009h= 0,counter2009i = 0;
      var counter2010a= 0,counter2010b= 0,counter2010c= 0,counter2010d= 0,counter2010e= 0,counter2010f= 0,counter2010g= 0,counter2010h= 0,counter2010i = 0;
      var counter2011a= 0,counter2011b= 0,counter2011c= 0,counter2011d= 0,counter2011e= 0,counter2011f= 0,counter2011g= 0,counter2011h= 0,counter2011i = 0;
      var counter2012a= 0,counter2012b= 0,counter2012c= 0,counter2012d= 0,counter2012e= 0,counter2012f= 0,counter2012g= 0,counter2012h= 0,counter2012i = 0;
      var counter2013a= 0,counter2013b= 0,counter2013c= 0,counter2013d= 0,counter2013e= 0,counter2013f= 0,counter2013g= 0,counter2013h= 0,counter2013i = 0;
      var counter2014a= 0,counter2014b= 0,counter2014c= 0,counter2014d= 0,counter2014e= 0,counter2014f= 0,counter2014g= 0,counter2014h= 0,counter2014i = 0;
      var counter2015a= 0,counter2015b= 0,counter2015c= 0,counter2015d= 0,counter2015e= 0,counter2015f= 0,counter2015g= 0,counter2015h= 0,counter2015i = 0;
      var counter2016a= 0,counter2016b= 0,counter2016c= 0,counter2016d= 0,counter2016e= 0,counter2016f= 0,counter2016g= 0,counter2016h= 0,counter2016i = 0;
      var counter2017a= 0,counter2017b= 0,counter2017c= 0,counter2017d= 0,counter2017e= 0,counter2017f= 0,counter2017g= 0,counter2017h= 0,counter2017i = 0;
      var counter2018a= 0,counter2018b= 0,counter2018c= 0,counter2018d= 0,counter2018e= 0,counter2018f= 0,counter2018g= 0,counter2018h= 0,counter2018i = 0;

      for(var i = 0;i < lines.length;i++)
      {
        if(lines[i].includes("2003") && lines[i].includes("Other Theft"))
        {counter2003a++;}
        else if(lines[i].includes("2003") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2003b++;}
        else if(lines[i].includes("2003") && lines[i].includes("Theft from Vehicle"))
        {counter2003c++;}
        else if(lines[i].includes("2003") && lines[i].includes("Theft of Vehicle"))
        {counter2003d++;}
        else if(lines[i].includes("2003") && lines[i].includes("Mischief"))
        {counter2003e++;}
        else if(lines[i].includes("2003") && lines[i].includes("Break and Enter Commercial"))
        {counter2003f++;}
        else if(lines[i].includes("2003") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2003g++;}
        else if(lines[i].includes("2003") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2003h++;}
        else if(lines[i].includes("2003") && lines[i].includes("Theft of Bicycle"))
        {counter2003i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2004") && lines[i].includes("Other Theft"))
        {counter2004a++;}
        else if(lines[i].includes("2004") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2004b++;}
        else if(lines[i].includes("2004") && lines[i].includes("Theft from Vehicle"))
        {counter2004c++;}
        else if(lines[i].includes("2004") && lines[i].includes("Theft of Vehicle"))
        {counter2004d++;}
        else if(lines[i].includes("2004") && lines[i].includes("Mischief"))
        {counter2004e++;}
        else if(lines[i].includes("2004") && lines[i].includes("Break and Enter Commercial"))
        {counter2004f++;}
        else if(lines[i].includes("2004") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2004g++;}
        else if(lines[i].includes("2004") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2004h++;}
        else if(lines[i].includes("2004") && lines[i].includes("Theft of Bicycle"))
        {counter2004i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2005") && lines[i].includes("Other Theft"))
        {counter2005a++;}
        else if(lines[i].includes("2005") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2005b++;}
        else if(lines[i].includes("2005") && lines[i].includes("Theft from Vehicle"))
        {counter2005c++;}
        else if(lines[i].includes("2005") && lines[i].includes("Theft of Vehicle"))
        {counter2005d++;}
        else if(lines[i].includes("2005") && lines[i].includes("Mischief"))
        {counter2005e++;}
        else if(lines[i].includes("2005") && lines[i].includes("Break and Enter Commercial"))
        {counter2005f++;}
        else if(lines[i].includes("2005") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2005g++;}
        else if(lines[i].includes("2005") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2005h++;}
        else if(lines[i].includes("2005") && lines[i].includes("Theft of Bicycle"))
        {counter2005i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2006") && lines[i].includes("Other Theft"))
        {counter2006a++;}
        else if(lines[i].includes("2006") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2006b++;}
        else if(lines[i].includes("2006") && lines[i].includes("Theft from Vehicle"))
        {counter2006c++;}
        else if(lines[i].includes("2006") && lines[i].includes("Theft of Vehicle"))
        {counter2006d++;}
        else if(lines[i].includes("2006") && lines[i].includes("Mischief"))
        {counter2006e++;}
        else if(lines[i].includes("2006") && lines[i].includes("Break and Enter Commercial"))
        {counter2006f++;}
        else if(lines[i].includes("2006") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2006g++;}
        else if(lines[i].includes("2006") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2006h++;}
        else if(lines[i].includes("2006") && lines[i].includes("Theft of Bicycle"))
        {counter2006i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2007") && lines[i].includes("Other Theft"))
        {counter2007a++;}
        else if(lines[i].includes("2007") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2007b++;}
        else if(lines[i].includes("2007") && lines[i].includes("Theft from Vehicle"))
        {counter2007c++;}
        else if(lines[i].includes("2007") && lines[i].includes("Theft of Vehicle"))
        {counter2007d++;}
        else if(lines[i].includes("2007") && lines[i].includes("Mischief"))
        {counter2007e++;}
        else if(lines[i].includes("2007") && lines[i].includes("Break and Enter Commercial"))
        {counter2007f++;}
        else if(lines[i].includes("2007") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2007g++;}
        else if(lines[i].includes("2007") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2007h++;}
        else if(lines[i].includes("2007") && lines[i].includes("Theft of Bicycle"))
        {counter2007i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2008") && lines[i].includes("Other Theft"))
        {counter2008a++;}
        else if(lines[i].includes("2008") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2008b++;}
        else if(lines[i].includes("2008") && lines[i].includes("Theft from Vehicle"))
        {counter2008c++;}
        else if(lines[i].includes("2008") && lines[i].includes("Theft of Vehicle"))
        {counter2008d++;}
        else if(lines[i].includes("2008") && lines[i].includes("Mischief"))
        {counter2008e++;}
        else if(lines[i].includes("2008") && lines[i].includes("Break and Enter Commercial"))
        {counter2008f++;}
        else if(lines[i].includes("2008") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2008g++;}
        else if(lines[i].includes("2008") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2008h++;}
        else if(lines[i].includes("2008") && lines[i].includes("Theft of Bicycle"))
        {counter2008i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2009") && lines[i].includes("Other Theft"))
        {counter2009a++;}
        else if(lines[i].includes("2009") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2009b++;}
        else if(lines[i].includes("2009") && lines[i].includes("Theft from Vehicle"))
        {counter2009c++;}
        else if(lines[i].includes("2009") && lines[i].includes("Theft of Vehicle"))
        {counter2009d++;}
        else if(lines[i].includes("2009") && lines[i].includes("Mischief"))
        {counter2009e++;}
        else if(lines[i].includes("2009") && lines[i].includes("Break and Enter Commercial"))
        {counter2009f++;}
        else if(lines[i].includes("2009") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2009g++;}
        else if(lines[i].includes("2009") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2009h++;}
        else if(lines[i].includes("2009") && lines[i].includes("Theft of Bicycle"))
        {counter2009i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2010") && lines[i].includes("Other Theft"))
        {counter2010a++;}
        else if(lines[i].includes("2010") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2010b++;}
        else if(lines[i].includes("2010") && lines[i].includes("Theft from Vehicle"))
        {counter2010c++;}
        else if(lines[i].includes("2010") && lines[i].includes("Theft of Vehicle"))
        {counter2010d++;}
        else if(lines[i].includes("2010") && lines[i].includes("Mischief"))
        {counter2010e++;}
        else if(lines[i].includes("2010") && lines[i].includes("Break and Enter Commercial"))
        {counter2010f++;}
        else if(lines[i].includes("2010") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2010g++;}
        else if(lines[i].includes("2010") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2010h++;}
        else if(lines[i].includes("2010") && lines[i].includes("Theft of Bicycle"))
        {counter2010i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2011") && lines[i].includes("Other Theft"))
        {counter2011a++;}
        else if(lines[i].includes("2011") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2011b++;}
        else if(lines[i].includes("2011") && lines[i].includes("Theft from Vehicle"))
        {counter2011c++;}
        else if(lines[i].includes("2011") && lines[i].includes("Theft of Vehicle"))
        {counter2011d++;}
        else if(lines[i].includes("2011") && lines[i].includes("Mischief"))
        {counter2011e++;}
        else if(lines[i].includes("2011") && lines[i].includes("Break and Enter Commercial"))
        {counter2011f++;}
        else if(lines[i].includes("2011") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2011g++;}
        else if(lines[i].includes("2011") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2011h++;}
        else if(lines[i].includes("2011") && lines[i].includes("Theft of Bicycle"))
        {counter2011i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2012") && lines[i].includes("Other Theft"))
        {counter2012a++;}
        else if(lines[i].includes("2012") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2012b++;}
        else if(lines[i].includes("2012") && lines[i].includes("Theft from Vehicle"))
        {counter2012c++;}
        else if(lines[i].includes("2012") && lines[i].includes("Theft of Vehicle"))
        {counter2012d++;}
        else if(lines[i].includes("2012") && lines[i].includes("Mischief"))
        {counter2012e++;}
        else if(lines[i].includes("2012") && lines[i].includes("Break and Enter Commercial"))
        {counter2012f++;}
        else if(lines[i].includes("2012") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2012g++;}
        else if(lines[i].includes("2012") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2012h++;}
        else if(lines[i].includes("2012") && lines[i].includes("Theft of Bicycle"))
        {counter2012i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2013") && lines[i].includes("Other Theft"))
        {counter2013a++;}
        else if(lines[i].includes("2013") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2013b++;}
        else if(lines[i].includes("2013") && lines[i].includes("Theft from Vehicle"))
        {counter2013c++;}
        else if(lines[i].includes("2013") && lines[i].includes("Theft of Vehicle"))
        {counter2013d++;}
        else if(lines[i].includes("2013") && lines[i].includes("Mischief"))
        {counter2013e++;}
        else if(lines[i].includes("2013") && lines[i].includes("Break and Enter Commercial"))
        {counter2013f++;}
        else if(lines[i].includes("2013") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2013g++;}
        else if(lines[i].includes("2013") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2013h++;}
        else if(lines[i].includes("2013") && lines[i].includes("Theft of Bicycle"))
        {counter2013i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2014") && lines[i].includes("Other Theft"))
        {counter2014a++;}
        else if(lines[i].includes("2014") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2014b++;}
        else if(lines[i].includes("2014") && lines[i].includes("Theft from Vehicle"))
        {counter2014c++;}
        else if(lines[i].includes("2014") && lines[i].includes("Theft of Vehicle"))
        {counter2014d++;}
        else if(lines[i].includes("2014") && lines[i].includes("Mischief"))
        {counter2014e++;}
        else if(lines[i].includes("2014") && lines[i].includes("Break and Enter Commercial"))
        {counter2014f++;}
        else if(lines[i].includes("2014") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2014g++;}
        else if(lines[i].includes("2014") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2014h++;}
        else if(lines[i].includes("2014") && lines[i].includes("Theft of Bicycle"))
        {counter2014i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2015") && lines[i].includes("Other Theft"))
        {counter2015a++;}
        else if(lines[i].includes("2015") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2015b++;}
        else if(lines[i].includes("2015") && lines[i].includes("Theft from Vehicle"))
        {counter2015c++;}
        else if(lines[i].includes("2015") && lines[i].includes("Theft of Vehicle"))
        {counter2015d++;}
        else if(lines[i].includes("2015") && lines[i].includes("Mischief"))
        {counter2015e++;}
        else if(lines[i].includes("2015") && lines[i].includes("Break and Enter Commercial"))
        {counter2015f++;}
        else if(lines[i].includes("2015") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2015g++;}
        else if(lines[i].includes("2015") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2015h++;}
        else if(lines[i].includes("2015") && lines[i].includes("Theft of Bicycle"))
        {counter2015i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2016") && lines[i].includes("Other Theft"))
        {counter2016a++;}
        else if(lines[i].includes("2016") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2016b++;}
        else if(lines[i].includes("2016") && lines[i].includes("Theft from Vehicle"))
        {counter2016c++;}
        else if(lines[i].includes("2016") && lines[i].includes("Theft of Vehicle"))
        {counter2016d++;}
        else if(lines[i].includes("2016") && lines[i].includes("Mischief"))
        {counter2016e++;}
        else if(lines[i].includes("2016") && lines[i].includes("Break and Enter Commercial"))
        {counter2016f++;}
        else if(lines[i].includes("2016") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2016g++;}
        else if(lines[i].includes("2016") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2016h++;}
        else if(lines[i].includes("2016") && lines[i].includes("Theft of Bicycle"))
        {counter2016i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2017") && lines[i].includes("Other Theft"))
        {counter2017a++;}
        else if(lines[i].includes("2017") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2017b++;}
        else if(lines[i].includes("2017") && lines[i].includes("Theft from Vehicle"))
        {counter2017c++;}
        else if(lines[i].includes("2017") && lines[i].includes("Theft of Vehicle"))
        {counter2017d++;}
        else if(lines[i].includes("2017") && lines[i].includes("Mischief"))
        {counter2017e++;}
        else if(lines[i].includes("2017") && lines[i].includes("Break and Enter Commercial"))
        {counter2017f++;}
        else if(lines[i].includes("2017") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2017g++;}
        else if(lines[i].includes("2017") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2017h++;}
        else if(lines[i].includes("2017") && lines[i].includes("Theft of Bicycle"))
        {counter2017i++;}
        ////////////////////////////////////////////////////////////////////////////////
        else if(lines[i].includes("2018") && lines[i].includes("Other Theft"))
        {counter2018a++;}
        else if(lines[i].includes("2018") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
        {counter2018b++;}
        else if(lines[i].includes("2018") && lines[i].includes("Theft from Vehicle"))
        {counter2018c++;}
        else if(lines[i].includes("2018") && lines[i].includes("Theft of Vehicle"))
        {counter2018d++;}
        else if(lines[i].includes("2018") && lines[i].includes("Mischief"))
        {counter2018e++;}
        else if(lines[i].includes("2018") && lines[i].includes("Break and Enter Commercial"))
        {counter2018f++;}
        else if(lines[i].includes("2018") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
        {counter2018g++;}
        else if(lines[i].includes("2018") && lines[i].includes("Break and Enter Residential/Other"))
        {counter2018h++;}
        else if(lines[i].includes("2018") && lines[i].includes("Theft of Bicycle"))
        {counter2018i++;}
        ////////////////////////////////////////////////////////////////////////////////
      }

      fullData = allDataStart;

      var crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Other Theft",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003a+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004a+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005a+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006a+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007a+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008a+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009a+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010a+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011a+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012a+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013a+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014a+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015a+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016a+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017a+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018a+', "label": "2018"}]},\n'
      fullData = fullData +crime + allConvertedData;


      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Vehicle Collision or Pedestrian Struck (with Fatality)",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003b+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004b+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005b+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006b+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007b+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008b+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009b+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010b+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011b+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012b+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013b+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014b+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015b+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016b+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017b+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018b+', "label": "2018"}]},\n'
      fullData = fullData +crime+ allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Theft from Vehicle",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003c+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004c+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005c+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006c+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007c+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008c+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009c+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010c+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011c+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012c+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013c+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014c+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015c+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016c+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017c+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018c+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Theft of Vehicle",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003d+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004d+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005d+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006d+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007d+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008d+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009d+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010d+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011d+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012d+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013d+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014d+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015d+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016d+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017d+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018d+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Mischief",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003e+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004e+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005e+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006e+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007e+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008e+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009e+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010e+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011e+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012e+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013e+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014e+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015e+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016e+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017e+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018e+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Break and Enter Commercial",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003f+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004f+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005f+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006f+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007f+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008f+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009f+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010f+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011f+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012f+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013f+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014f+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015f+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016f+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017f+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018f+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Vehicle Collision or Pedestrian Struck (with Injury)",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003g+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004g+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005g+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006g+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007g+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008g+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009g+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010g+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011g+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012g+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013g+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014g+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015g+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016g+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017g+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018g+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Break and Enter Residential/Other",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003h+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004h+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005h+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006h+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007h+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008h+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009h+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010h+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011h+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012h+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013h+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014h+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015h+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016h+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017h+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018h+', "label": "2018"}]},\n'
      fullData = fullData+ crime+allConvertedData;

      crime = '{'+'\n'+
       '"type": "stackedArea",'+'\n'+
       '"showInLegend": "true",'+'\n'+
       '"name": "Theft of Bicycle",'+'\n'+
       '"dataPoints":['+'\n';
      allConvertedData ='{"y": '+counter2003i+', "label": "2003"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2004i+', "label": "2004"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2005i+', "label": "2005"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2006i+', "label": "2006"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2007i+', "label": "2007"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2008i+', "label": "2008"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2009i+', "label": "2009"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2010i+', "label": "2010"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2011i+', "label": "2011"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2012i+', "label": "2012"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2013i+', "label": "2013"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2014i+', "label": "2014"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2015i+', "label": "2015"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2016i+', "label": "2016"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2017i+', "label": "2017"},\n'
      allConvertedData = allConvertedData + '{"y": '+counter2018i+', "label": "2018"}]}\n'
      fullData = fullData+ crime+allConvertedData;
      fullData = fullData+ allDataEnd;

      //console.log(fullData);

      //completeData = allDataStart + allConvertedData + allDataEnd;
      //console.log(completeData);
		  allDataObjects = JSON.parse(fullData);
		  currentData = allDataObjects;
      document.getElementById("loader").style.display = "none";
      chartOne(currentData);
      //maximum = Math. max(counter2003, counter2004, counter2005, counter2006,counter2007,counter2008,counter2009,counter2010,counter2011,counter2012,counter2013,counter2014,counter2015,counter2016,counter2017,counter2018);
      //maximum +=10000;
      //chartThree(currentData,maximum);
      //console.log(currentData);
        }
     }
	 //alert(allData);


window.onload = function () {
  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;
  //chartOne();

}

function uncheckAll(){
  document.getElementById("AllCrimes").checked=true;
  document.getElementById("All Neighborhoods").checked=true;
  radioNeighborhoodFunction();
}

function loadDataAgain(selectedNeighborhood,selectedCrime)
{
  var url = "/scatterPlotAllData.txt";
  var jsonFile = new XMLHttpRequest();
      jsonFile.open("GET",url,true);
  	jsonFile.setRequestHeader("Content-Type", "application/json");
      jsonFile.send();

      jsonFile.onreadystatechange = function() {
          if (jsonFile.readyState== 4 && jsonFile.status == 200) {

        allData = jsonFile.responseText;
        var lines = allData.split('\n');

        var counter2003a = 0,counter2003b= 0,counter2003c= 0,counter2003d= 0,counter2003e= 0,counter2003f= 0,counter2003g= 0,counter2003h= 0,counter2003i = 0;
        var counter2004a= 0,counter2004b= 0,counter2004c= 0,counter2004d= 0,counter2004e= 0,counter2004f= 0,counter2004g= 0,counter2004h= 0,counter2004i = 0;
        var counter2005a= 0,counter2005b= 0,counter2005c= 0,counter2005d= 0,counter2005e= 0,counter2005f= 0,counter2005g= 0,counter2005h= 0,counter2005i = 0;
        var counter2006a= 0,counter2006b= 0,counter2006c= 0,counter2006d= 0,counter2006e= 0,counter2006f= 0,counter2006g= 0,counter2006h= 0,counter2006i = 0;
        var counter2007a= 0,counter2007b= 0,counter2007c= 0,counter2007d= 0,counter2007e= 0,counter2007f= 0,counter2007g= 0,counter2007h= 0,counter2007i = 0;
        var counter2008a= 0,counter2008b= 0,counter2008c= 0,counter2008d= 0,counter2008e= 0,counter2008f= 0,counter2008g= 0,counter2008h= 0,counter2008i = 0;
        var counter2009a= 0,counter2009b= 0,counter2009c= 0,counter2009d= 0,counter2009e= 0,counter2009f= 0,counter2009g= 0,counter2009h= 0,counter2009i = 0;
        var counter2010a= 0,counter2010b= 0,counter2010c= 0,counter2010d= 0,counter2010e= 0,counter2010f= 0,counter2010g= 0,counter2010h= 0,counter2010i = 0;
        var counter2011a= 0,counter2011b= 0,counter2011c= 0,counter2011d= 0,counter2011e= 0,counter2011f= 0,counter2011g= 0,counter2011h= 0,counter2011i = 0;
        var counter2012a= 0,counter2012b= 0,counter2012c= 0,counter2012d= 0,counter2012e= 0,counter2012f= 0,counter2012g= 0,counter2012h= 0,counter2012i = 0;
        var counter2013a= 0,counter2013b= 0,counter2013c= 0,counter2013d= 0,counter2013e= 0,counter2013f= 0,counter2013g= 0,counter2013h= 0,counter2013i = 0;
        var counter2014a= 0,counter2014b= 0,counter2014c= 0,counter2014d= 0,counter2014e= 0,counter2014f= 0,counter2014g= 0,counter2014h= 0,counter2014i = 0;
        var counter2015a= 0,counter2015b= 0,counter2015c= 0,counter2015d= 0,counter2015e= 0,counter2015f= 0,counter2015g= 0,counter2015h= 0,counter2015i = 0;
        var counter2016a= 0,counter2016b= 0,counter2016c= 0,counter2016d= 0,counter2016e= 0,counter2016f= 0,counter2016g= 0,counter2016h= 0,counter2016i = 0;
        var counter2017a= 0,counter2017b= 0,counter2017c= 0,counter2017d= 0,counter2017e= 0,counter2017f= 0,counter2017g= 0,counter2017h= 0,counter2017i = 0;
        var counter2018a= 0,counter2018b= 0,counter2018c= 0,counter2018d= 0,counter2018e= 0,counter2018f= 0,counter2018g= 0,counter2018h= 0,counter2018i = 0;

        for(var i = 0;i < lines.length;i++)
        {
          if(selectedNeighborhood == "All Neighborhoods" && selectedCrime=="All Crimes")
          {
            if(lines[i].includes("2003") && lines[i].includes("Other Theft"))
            {counter2003a++;}
            else if(lines[i].includes("2003") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2003b++;}
            else if(lines[i].includes("2003") && lines[i].includes("Theft from Vehicle"))
            {counter2003c++;}
            else if(lines[i].includes("2003") && lines[i].includes("Theft of Vehicle"))
            {counter2003d++;}
            else if(lines[i].includes("2003") && lines[i].includes("Mischief"))
            {counter2003e++;}
            else if(lines[i].includes("2003") && lines[i].includes("Break and Enter Commercial"))
            {counter2003f++;}
            else if(lines[i].includes("2003") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2003g++;}
            else if(lines[i].includes("2003") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2003h++;}
            else if(lines[i].includes("2003") && lines[i].includes("Theft of Bicycle"))
            {counter2003i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2004") && lines[i].includes("Other Theft"))
            {counter2004a++;}
            else if(lines[i].includes("2004") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2004b++;}
            else if(lines[i].includes("2004") && lines[i].includes("Theft from Vehicle"))
            {counter2004c++;}
            else if(lines[i].includes("2004") && lines[i].includes("Theft of Vehicle"))
            {counter2004d++;}
            else if(lines[i].includes("2004") && lines[i].includes("Mischief"))
            {counter2004e++;}
            else if(lines[i].includes("2004") && lines[i].includes("Break and Enter Commercial"))
            {counter2004f++;}
            else if(lines[i].includes("2004") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2004g++;}
            else if(lines[i].includes("2004") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2004h++;}
            else if(lines[i].includes("2004") && lines[i].includes("Theft of Bicycle"))
            {counter2004i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2005") && lines[i].includes("Other Theft"))
            {counter2005a++;}
            else if(lines[i].includes("2005") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2005b++;}
            else if(lines[i].includes("2005") && lines[i].includes("Theft from Vehicle"))
            {counter2005c++;}
            else if(lines[i].includes("2005") && lines[i].includes("Theft of Vehicle"))
            {counter2005d++;}
            else if(lines[i].includes("2005") && lines[i].includes("Mischief"))
            {counter2005e++;}
            else if(lines[i].includes("2005") && lines[i].includes("Break and Enter Commercial"))
            {counter2005f++;}
            else if(lines[i].includes("2005") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2005g++;}
            else if(lines[i].includes("2005") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2005h++;}
            else if(lines[i].includes("2005") && lines[i].includes("Theft of Bicycle"))
            {counter2005i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2006") && lines[i].includes("Other Theft"))
            {counter2006a++;}
            else if(lines[i].includes("2006") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2006b++;}
            else if(lines[i].includes("2006") && lines[i].includes("Theft from Vehicle"))
            {counter2006c++;}
            else if(lines[i].includes("2006") && lines[i].includes("Theft of Vehicle"))
            {counter2006d++;}
            else if(lines[i].includes("2006") && lines[i].includes("Mischief"))
            {counter2006e++;}
            else if(lines[i].includes("2006") && lines[i].includes("Break and Enter Commercial"))
            {counter2006f++;}
            else if(lines[i].includes("2006") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2006g++;}
            else if(lines[i].includes("2006") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2006h++;}
            else if(lines[i].includes("2006") && lines[i].includes("Theft of Bicycle"))
            {counter2006i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2007") && lines[i].includes("Other Theft"))
            {counter2007a++;}
            else if(lines[i].includes("2007") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2007b++;}
            else if(lines[i].includes("2007") && lines[i].includes("Theft from Vehicle"))
            {counter2007c++;}
            else if(lines[i].includes("2007") && lines[i].includes("Theft of Vehicle"))
            {counter2007d++;}
            else if(lines[i].includes("2007") && lines[i].includes("Mischief"))
            {counter2007e++;}
            else if(lines[i].includes("2007") && lines[i].includes("Break and Enter Commercial"))
            {counter2007f++;}
            else if(lines[i].includes("2007") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2007g++;}
            else if(lines[i].includes("2007") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2007h++;}
            else if(lines[i].includes("2007") && lines[i].includes("Theft of Bicycle"))
            {counter2007i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2008") && lines[i].includes("Other Theft"))
            {counter2008a++;}
            else if(lines[i].includes("2008") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2008b++;}
            else if(lines[i].includes("2008") && lines[i].includes("Theft from Vehicle"))
            {counter2008c++;}
            else if(lines[i].includes("2008") && lines[i].includes("Theft of Vehicle"))
            {counter2008d++;}
            else if(lines[i].includes("2008") && lines[i].includes("Mischief"))
            {counter2008e++;}
            else if(lines[i].includes("2008") && lines[i].includes("Break and Enter Commercial"))
            {counter2008f++;}
            else if(lines[i].includes("2008") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2008g++;}
            else if(lines[i].includes("2008") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2008h++;}
            else if(lines[i].includes("2008") && lines[i].includes("Theft of Bicycle"))
            {counter2008i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2009") && lines[i].includes("Other Theft"))
            {counter2009a++;}
            else if(lines[i].includes("2009") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2009b++;}
            else if(lines[i].includes("2009") && lines[i].includes("Theft from Vehicle"))
            {counter2009c++;}
            else if(lines[i].includes("2009") && lines[i].includes("Theft of Vehicle"))
            {counter2009d++;}
            else if(lines[i].includes("2009") && lines[i].includes("Mischief"))
            {counter2009e++;}
            else if(lines[i].includes("2009") && lines[i].includes("Break and Enter Commercial"))
            {counter2009f++;}
            else if(lines[i].includes("2009") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2009g++;}
            else if(lines[i].includes("2009") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2009h++;}
            else if(lines[i].includes("2009") && lines[i].includes("Theft of Bicycle"))
            {counter2009i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2010") && lines[i].includes("Other Theft"))
            {counter2010a++;}
            else if(lines[i].includes("2010") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2010b++;}
            else if(lines[i].includes("2010") && lines[i].includes("Theft from Vehicle"))
            {counter2010c++;}
            else if(lines[i].includes("2010") && lines[i].includes("Theft of Vehicle"))
            {counter2010d++;}
            else if(lines[i].includes("2010") && lines[i].includes("Mischief"))
            {counter2010e++;}
            else if(lines[i].includes("2010") && lines[i].includes("Break and Enter Commercial"))
            {counter2010f++;}
            else if(lines[i].includes("2010") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2010g++;}
            else if(lines[i].includes("2010") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2010h++;}
            else if(lines[i].includes("2010") && lines[i].includes("Theft of Bicycle"))
            {counter2010i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2011") && lines[i].includes("Other Theft"))
            {counter2011a++;}
            else if(lines[i].includes("2011") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2011b++;}
            else if(lines[i].includes("2011") && lines[i].includes("Theft from Vehicle"))
            {counter2011c++;}
            else if(lines[i].includes("2011") && lines[i].includes("Theft of Vehicle"))
            {counter2011d++;}
            else if(lines[i].includes("2011") && lines[i].includes("Mischief"))
            {counter2011e++;}
            else if(lines[i].includes("2011") && lines[i].includes("Break and Enter Commercial"))
            {counter2011f++;}
            else if(lines[i].includes("2011") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2011g++;}
            else if(lines[i].includes("2011") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2011h++;}
            else if(lines[i].includes("2011") && lines[i].includes("Theft of Bicycle"))
            {counter2011i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2012") && lines[i].includes("Other Theft"))
            {counter2012a++;}
            else if(lines[i].includes("2012") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2012b++;}
            else if(lines[i].includes("2012") && lines[i].includes("Theft from Vehicle"))
            {counter2012c++;}
            else if(lines[i].includes("2012") && lines[i].includes("Theft of Vehicle"))
            {counter2012d++;}
            else if(lines[i].includes("2012") && lines[i].includes("Mischief"))
            {counter2012e++;}
            else if(lines[i].includes("2012") && lines[i].includes("Break and Enter Commercial"))
            {counter2012f++;}
            else if(lines[i].includes("2012") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2012g++;}
            else if(lines[i].includes("2012") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2012h++;}
            else if(lines[i].includes("2012") && lines[i].includes("Theft of Bicycle"))
            {counter2012i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2013") && lines[i].includes("Other Theft"))
            {counter2013a++;}
            else if(lines[i].includes("2013") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2013b++;}
            else if(lines[i].includes("2013") && lines[i].includes("Theft from Vehicle"))
            {counter2013c++;}
            else if(lines[i].includes("2013") && lines[i].includes("Theft of Vehicle"))
            {counter2013d++;}
            else if(lines[i].includes("2013") && lines[i].includes("Mischief"))
            {counter2013e++;}
            else if(lines[i].includes("2013") && lines[i].includes("Break and Enter Commercial"))
            {counter2013f++;}
            else if(lines[i].includes("2013") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2013g++;}
            else if(lines[i].includes("2013") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2013h++;}
            else if(lines[i].includes("2013") && lines[i].includes("Theft of Bicycle"))
            {counter2013i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2014") && lines[i].includes("Other Theft"))
            {counter2014a++;}
            else if(lines[i].includes("2014") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2014b++;}
            else if(lines[i].includes("2014") && lines[i].includes("Theft from Vehicle"))
            {counter2014c++;}
            else if(lines[i].includes("2014") && lines[i].includes("Theft of Vehicle"))
            {counter2014d++;}
            else if(lines[i].includes("2014") && lines[i].includes("Mischief"))
            {counter2014e++;}
            else if(lines[i].includes("2014") && lines[i].includes("Break and Enter Commercial"))
            {counter2014f++;}
            else if(lines[i].includes("2014") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2014g++;}
            else if(lines[i].includes("2014") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2014h++;}
            else if(lines[i].includes("2014") && lines[i].includes("Theft of Bicycle"))
            {counter2014i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2015") && lines[i].includes("Other Theft"))
            {counter2015a++;}
            else if(lines[i].includes("2015") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2015b++;}
            else if(lines[i].includes("2015") && lines[i].includes("Theft from Vehicle"))
            {counter2015c++;}
            else if(lines[i].includes("2015") && lines[i].includes("Theft of Vehicle"))
            {counter2015d++;}
            else if(lines[i].includes("2015") && lines[i].includes("Mischief"))
            {counter2015e++;}
            else if(lines[i].includes("2015") && lines[i].includes("Break and Enter Commercial"))
            {counter2015f++;}
            else if(lines[i].includes("2015") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2015g++;}
            else if(lines[i].includes("2015") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2015h++;}
            else if(lines[i].includes("2015") && lines[i].includes("Theft of Bicycle"))
            {counter2015i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2016") && lines[i].includes("Other Theft"))
            {counter2016a++;}
            else if(lines[i].includes("2016") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2016b++;}
            else if(lines[i].includes("2016") && lines[i].includes("Theft from Vehicle"))
            {counter2016c++;}
            else if(lines[i].includes("2016") && lines[i].includes("Theft of Vehicle"))
            {counter2016d++;}
            else if(lines[i].includes("2016") && lines[i].includes("Mischief"))
            {counter2016e++;}
            else if(lines[i].includes("2016") && lines[i].includes("Break and Enter Commercial"))
            {counter2016f++;}
            else if(lines[i].includes("2016") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2016g++;}
            else if(lines[i].includes("2016") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2016h++;}
            else if(lines[i].includes("2016") && lines[i].includes("Theft of Bicycle"))
            {counter2016i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2017") && lines[i].includes("Other Theft"))
            {counter2017a++;}
            else if(lines[i].includes("2017") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2017b++;}
            else if(lines[i].includes("2017") && lines[i].includes("Theft from Vehicle"))
            {counter2017c++;}
            else if(lines[i].includes("2017") && lines[i].includes("Theft of Vehicle"))
            {counter2017d++;}
            else if(lines[i].includes("2017") && lines[i].includes("Mischief"))
            {counter2017e++;}
            else if(lines[i].includes("2017") && lines[i].includes("Break and Enter Commercial"))
            {counter2017f++;}
            else if(lines[i].includes("2017") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2017g++;}
            else if(lines[i].includes("2017") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2017h++;}
            else if(lines[i].includes("2017") && lines[i].includes("Theft of Bicycle"))
            {counter2017i++;}
            ////////////////////////////////////////////////////////////////////////////////
            else if(lines[i].includes("2018") && lines[i].includes("Other Theft"))
            {counter2018a++;}
            else if(lines[i].includes("2018") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Fatality)"))
            {counter2018b++;}
            else if(lines[i].includes("2018") && lines[i].includes("Theft from Vehicle"))
            {counter2018c++;}
            else if(lines[i].includes("2018") && lines[i].includes("Theft of Vehicle"))
            {counter2018d++;}
            else if(lines[i].includes("2018") && lines[i].includes("Mischief"))
            {counter2018e++;}
            else if(lines[i].includes("2018") && lines[i].includes("Break and Enter Commercial"))
            {counter2018f++;}
            else if(lines[i].includes("2018") && lines[i].includes("Vehicle Collision or Pedestrian Struck (with Injury)"))
            {counter2018g++;}
            else if(lines[i].includes("2018") && lines[i].includes("Break and Enter Residential/Other"))
            {counter2018h++;}
            else if(lines[i].includes("2018") && lines[i].includes("Theft of Bicycle"))
            {counter2018i++;}
            ////////////////////////////////////////////////////////////////////////////////
          }
          else if(selectedNeighborhood == "All Neighborhoods" && selectedCrime!="All Crimes" && lines[i].includes(selectedCrime))
          {
            if(lines[i].includes("2003"))
            {counter2003a++;}
            else if(lines[i].includes("2004"))
            {counter2004a++;}
            else if(lines[i].includes("2005"))
            {counter2005a++;}
            else if(lines[i].includes("2006"))
            {counter2006a++;}
            else if(lines[i].includes("2007"))
            {counter2007a++;}
            else if(lines[i].includes("2008"))
            {counter2008a++;}
            else if(lines[i].includes("2009"))
            {counter2009a++;}
            else if(lines[i].includes("2010"))
            {counter2010a++;}
            else if(lines[i].includes("2011"))
            {counter2011a++;}
            else if(lines[i].includes("2012"))
            {counter2012a++;}
            else if(lines[i].includes("2013"))
            {counter2013a++;}
            else if(lines[i].includes("2014"))
            {counter2014a++;}
            else if(lines[i].includes("2015"))
            {counter2015a++;}
            else if(lines[i].includes("2016"))
            {counter2016a++;}
            else if(lines[i].includes("2017"))
            {counter2017a++;}
            else if(lines[i].includes("2018"))
            {counter2018a++;}
          }
          else if(selectedNeighborhood != "All Neighborhoods" && selectedCrime=="All Crimes" && lines[i].includes(selectedNeighborhood))
          {
            if(lines[i].includes("2003"))
            {counter2003a++;}
            else if(lines[i].includes("2004"))
            {counter2004a++;}
            else if(lines[i].includes("2005"))
            {counter2005a++;}
            else if(lines[i].includes("2006"))
            {counter2006a++;}
            else if(lines[i].includes("2007"))
            {counter2007a++;}
            else if(lines[i].includes("2008"))
            {counter2008a++;}
            else if(lines[i].includes("2009"))
            {counter2009a++;}
            else if(lines[i].includes("2010"))
            {counter2010a++;}
            else if(lines[i].includes("2011"))
            {counter2011a++;}
            else if(lines[i].includes("2012"))
            {counter2012a++;}
            else if(lines[i].includes("2013"))
            {counter2013a++;}
            else if(lines[i].includes("2014"))
            {counter2014a++;}
            else if(lines[i].includes("2015"))
            {counter2015a++;}
            else if(lines[i].includes("2016"))
            {counter2016a++;}
            else if(lines[i].includes("2017"))
            {counter2017a++;}
            else if(lines[i].includes("2018"))
            {counter2018a++;}
          }
          else if(lines[i].includes(selectedNeighborhood) && lines[i].includes(selectedCrime))
          {
            if(lines[i].includes("2003"))
            {counter2003a++;}
            else if(lines[i].includes("2004"))
            {counter2004a++;}
            else if(lines[i].includes("2005"))
            {counter2005a++;}
            else if(lines[i].includes("2006"))
            {counter2006a++;}
            else if(lines[i].includes("2007"))
            {counter2007a++;}
            else if(lines[i].includes("2008"))
            {counter2008a++;}
            else if(lines[i].includes("2009"))
            {counter2009a++;}
            else if(lines[i].includes("2010"))
            {counter2010a++;}
            else if(lines[i].includes("2011"))
            {counter2011a++;}
            else if(lines[i].includes("2012"))
            {counter2012a++;}
            else if(lines[i].includes("2013"))
            {counter2013a++;}
            else if(lines[i].includes("2014"))
            {counter2014a++;}
            else if(lines[i].includes("2015"))
            {counter2015a++;}
            else if(lines[i].includes("2016"))
            {counter2016a++;}
            else if(lines[i].includes("2017"))
            {counter2017a++;}
            else if(lines[i].includes("2018"))
            {counter2018a++;}
          }
        }


        fullData = allDataStart;

        if(selectedNeighborhood == "All Neighborhoods" && selectedCrime=="All Crimes")
        {
          //alert("JUMPEDONE");
          var crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Other Theft",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003a+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004a+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005a+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006a+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007a+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008a+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009a+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010a+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011a+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012a+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013a+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014a+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015a+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016a+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017a+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018a+', "label": "2018"}]},\n'
          fullData = fullData +crime + allConvertedData;


          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Vehicle Collision or Pedestrian Struck (with Fatality)",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003b+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004b+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005b+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006b+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007b+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008b+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009b+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010b+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011b+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012b+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013b+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014b+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015b+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016b+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017b+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018b+', "label": "2018"}]},\n'
          fullData = fullData +crime+ allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Theft from Vehicle",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003c+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004c+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005c+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006c+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007c+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008c+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009c+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010c+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011c+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012c+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013c+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014c+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015c+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016c+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017c+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018c+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Theft of Vehicle",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003d+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004d+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005d+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006d+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007d+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008d+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009d+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010d+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011d+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012d+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013d+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014d+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015d+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016d+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017d+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018d+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Mischief",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003e+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004e+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005e+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006e+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007e+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008e+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009e+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010e+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011e+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012e+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013e+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014e+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015e+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016e+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017e+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018e+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Break and Enter Commercial",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003f+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004f+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005f+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006f+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007f+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008f+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009f+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010f+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011f+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012f+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013f+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014f+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015f+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016f+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017f+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018f+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Vehicle Collision or Pedestrian Struck (with Injury)",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003g+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004g+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005g+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006g+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007g+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008g+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009g+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010g+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011g+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012g+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013g+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014g+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015g+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016g+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017g+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018g+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Break and Enter Residential/Other",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003h+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004h+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005h+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006h+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007h+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008h+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009h+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010h+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011h+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012h+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013h+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014h+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015h+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016h+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017h+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018h+', "label": "2018"}]},\n'
          fullData = fullData+ crime+allConvertedData;

          crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "Theft of Bicycle",'+'\n'+
           '"dataPoints":['+'\n';
          allConvertedData ='{"y": '+counter2003i+', "label": "2003"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2004i+', "label": "2004"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2005i+', "label": "2005"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2006i+', "label": "2006"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2007i+', "label": "2007"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2008i+', "label": "2008"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2009i+', "label": "2009"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2010i+', "label": "2010"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2011i+', "label": "2011"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2012i+', "label": "2012"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2013i+', "label": "2013"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2014i+', "label": "2014"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2015i+', "label": "2015"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2016i+', "label": "2016"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2017i+', "label": "2017"},\n'
          allConvertedData = allConvertedData + '{"y": '+counter2018i+', "label": "2018"}]}\n'
          fullData = fullData+ crime+allConvertedData;
        }
        else
        {
          //alert("JUMPTWO");
          var crime = '{'+'\n'+
           '"type": "stackedArea",'+'\n'+
           '"showInLegend": "true",'+'\n'+
           '"name": "'+selectedCrime+'",'+'\n'+
           '"dataPoints":['+'\n';
           allConvertedData ='{"y": '+counter2003a+', "label": "2003"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2004a+', "label": "2004"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2005a+', "label": "2005"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2006a+', "label": "2006"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2007a+', "label": "2007"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2008a+', "label": "2008"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2009a+', "label": "2009"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2010a+', "label": "2010"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2011a+', "label": "2011"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2012a+', "label": "2012"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2013a+', "label": "2013"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2014a+', "label": "2014"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2015a+', "label": "2015"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2016a+', "label": "2016"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2017a+', "label": "2017"},\n'
           allConvertedData = allConvertedData + '{"y": '+counter2018a+', "label": "2018"}]}\n'
           fullData = fullData+ crime+allConvertedData;
        }
        fullData = fullData+ allDataEnd;

        //console.log(fullData);

        //completeData = allDataStart + allConvertedData + allDataEnd;
        //console.log(completeData);
  		  allDataObjects = JSON.parse(fullData);
  		  currentData = allDataObjects;
        document.getElementById("loader").style.display = "none";
        chartOne(currentData);
        //maximum = Math. max(counter2003, counter2004, counter2005, counter2006,counter2007,counter2008,counter2009,counter2010,counter2011,counter2012,counter2013,counter2014,counter2015,counter2016,counter2017,counter2018);
        //maximum +=10000;
        //chartThree(currentData,maximum);
        //console.log(currentData);
          }
       }
}


/*function radioCrimeFunction(){
	var radios = document.getElementsByName("crime");
	var selectedCrime;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedCrime = radios[i].value;
		}
	}
	currentData = [];
	if (selectedCrime != "AllCrimes"){
		for (var i = 0; i < allDataObjects.length; i++){
			if (selectedCrime === allDataObjects[i]["name"]){
				currentData.push(allDataObjects[i]);
			}
		}
	}else{
		currentData = allDataObjects;
	}

	//console.log(allDataObjects[0]["name"]);
	//console.log(currentData);
	//chartOne();

}*/

function radioNeighborhoodFunction(){
	var radios = document.getElementsByName("neighborhood");
	var selectedNeighborhood;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedNeighborhood = radios[i].value;

		}
	}

  var radios = document.getElementsByName("crime");
	var selectedCrime;
	for (var i = 0; i < radios.length; i ++){
		if (radios[i].type === "radio" && radios[i].checked){
			selectedCrime = radios[i].value;

		}
	}
//alert(selectedNeighborhood);
//alert(selectedCrime);
if(selectedNeighborhood == "All Neighborhoods" && selectedCrime == "All Crimes")
{
  document.getElementById('chartContainer').style.display="none";
  document.getElementById("loader").style.display = "inline";
}
loadDataAgain(selectedNeighborhood,selectedCrime)

}




function chartOne(currentData)
{
  document.getElementById("chartContainer").style.display = "inline";
  document.getElementById('chartContainer').innerHTML = "<div id='map2' style='width: 100%; height: 100%; left: 0%; top: 0%;'></div>";

	console.log(currentData);
  var chart = new CanvasJS.Chart("map2", {
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
