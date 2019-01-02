import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		FileInputStream inputStream = null;
		Scanner sc = null;
		
		ArrayList<String> latLon = new ArrayList<>();
		//ArrayList<String> longitude = new ArrayList<>();
		ArrayList<String> neighCounter = new ArrayList<>();
		ArrayList<String> allData = new ArrayList<>();
		
		String lat ="";
		String lon ="";
	    try {
			inputStream = new FileInputStream("/Users/panos/Desktop/WS1819_VISU/dataset/converted_data.csv");
		    sc = new Scanner(inputStream, "UTF-8");
		    while (sc.hasNextLine()) {
		    	
		        String line = sc.nextLine();
		        //allData.add(line);
		        
		        
		        
		        
		        if(!line.equals("") && !line.equals("0;0"))
		        {  	allData.add(line);
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
			        line = line.substring(line.indexOf(";")+1, line.length());
		        	latLon.add(line);
		        	//longitude.add(lon);
			        //System.out.println(line);
		        }   
		    }
		    
		    List<String> sortedlatLon = latLon.stream().distinct().collect(Collectors.toList());
		    List<String> sortedAllData = allData.stream().distinct().collect(Collectors.toList());
		    
		    int counterNeighborhood=0;
		    int loopCounter=0;
		    int indexCounter =0;
		    	
		    //Later for all Data but takes too long 
	    	/*for (String temp : sortedlatLon) 
	    	{
	    		
	    		for (String temp2 : allData) 
		    	{
			    	
	    		
		    		if(temp2.contains(temp))
			        {  
		    			counterNeighborhood++;
		    			allData.set(indexCounter, null);
			        }
		    		indexCounter++;
			        
			    }  
	    		indexCounter=0;
	    		allData.removeAll(Collections.singleton(null));
	    		//allData.removeAll(Arrays.asList("", null));
			    neighCounter.add(""+counterNeighborhood);
			    counterNeighborhood=0;
			    loopCounter++;
		    }*/
		    
		    for( int f = 2002; f<=2018 ;f++)
		    {
		    	if(f==2002) // 2002 = All Data Selected
		    	{
	    			String data = "[";
				    
				    StringBuilder builder = new StringBuilder();
		            builder.append(data);
		            
		            int dataLimit = 200;
				    
				    for (int i =0; i<dataLimit; i++) 
			    	{
				    	String temp = sortedlatLon.get(i);
				    	String lati = temp.substring(0,temp.indexOf(";"));
				    	String longi = temp.substring(temp.indexOf(";")+1,temp.length());
				    	data = "{lat: "+lati+", lng:"+longi+", count: 1}";
				    	if(!lati.equals("0") && !longi.equals("0")) 
				    	{
					    	if(i < dataLimit-1)
					    	{
					    		data = data+",\n";
					    	}
					    	builder.append(data);
				    	}
			    	}
				    
				    data = "]";
				    builder.append(data);
				    
				    try (PrintWriter out = new PrintWriter("/Users/panos/Desktop/HeatMapConvertedData/ALL_DATA.txt")) {
				        out.println(builder);     
				    }
				    
			    }
		    	else
		    	{
		    		for(int t=0;t<9;t++)
		    		{
		    			String tmpCrime="";
		    			if(t==0)
		    			{tmpCrime="Break and Enter Commercial";}
		    			else if(t==1)
		    			{tmpCrime="Break and Enter Residential/Other";}
		    			else if(t==2)
		    			{tmpCrime="Mischief";}
		    			else if(t==3)
		    			{tmpCrime="Other Theft";}
		    			else if(t==4)
		    			{tmpCrime="Theft from Vehicle";}
		    			else if(t==5)
		    			{tmpCrime="Theft of Bicycle";}
		    			else if(t==6)
		    			{tmpCrime="Theft of Vehicle";}
		    			else if(t==7)
		    			{tmpCrime="Vehicle Collision or Pedestrian Struck (with Fatality)";}
		    			else if(t==8)
		    			{tmpCrime="Vehicle Collision or Pedestrian Struck (with Injury)";}
		    			
			    		String data = "[";
					    
					    StringBuilder builder = new StringBuilder();
			            builder.append(data);
			            
			            int dataLimit = 200;
					    int counter =0;
					    for (int i =0; i<dataLimit;) 
				    	{
					    	String temp = sortedAllData.get(counter);
					    	if(temp.contains(";"+f+";"))
					    	{
					    		if(temp.contains(""+tmpCrime+";"))
						    	{
						    		String line = temp.substring(temp.indexOf(";")+1, temp.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        line = line.substring(line.indexOf(";")+1, line.length());
							        
							    	String lati = line.substring(0,line.indexOf(";"));
							    	String longi = line.substring(line.indexOf(";")+1,line.length());
							    	if(!lati.equals("0") && !longi.equals("0")) 
							    	{
								    	data = "{lat: "+lati+", lng:"+longi+", count: 1}";
								    	if(i < dataLimit-1)
								    	{
								    		data = data+",\n";
								    	}
								    	builder.append(data);
								    	i++;
							    	}
						    	}
					    	}
					    	counter++;
					    	if(counter >= sortedAllData.size())
					    	{break;}
				    	}
					    
					    
					    data = "]";
					    builder.append(data);
					    
					    int a = builder.lastIndexOf(",");
					    int b = builder.length();
					    if((b-a)<=3 && a !=-1)
					    {
					    builder.deleteCharAt(a);}
					    
					    tmpCrime = tmpCrime.replace(" ", "_");
					    tmpCrime = tmpCrime.replace("/", "_");
					    try (PrintWriter out = new PrintWriter("/Users/panos/Desktop/HeatMapConvertedData/"+f+""+tmpCrime+".txt")) {
					        out.println(builder);     
					    }
			    		
			    	}
		    	}		
		    }
	    	
		    
	    } catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		    

	}

}
