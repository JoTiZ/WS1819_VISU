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
			inputStream = new FileInputStream("/Users/panos/Desktop/WS1819_VISU/Visualization_HTML/converted_data.csv");
		    sc = new Scanner(inputStream, "UTF-8");
		    while (sc.hasNextLine()) {
		    	
		        String line = sc.nextLine();
		        //allData.add(line);
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        
		        
		        
		        if(!line.equals("") && !line.equals("0;0"))
		        {  	allData.add(line);
		        	latLon.add(line);
		        	//longitude.add(lon);
			        //System.out.println(line);
		        }   
		    }
		    
		    List<String> sortedlatLon = latLon.stream().distinct().collect(Collectors.toList());
		    //List<String> sortedLon = longitude.stream().distinct().collect(Collectors.toList());
		    
		    int counterNeighborhood=0;
		    int loopCounter=0;
		    int indexCounter =0;
		    	        
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
		    
		    String data = "data: [";
		    
		    StringBuilder builder = new StringBuilder();
            builder.append(data);
		    
		    for (int i =0; i<200; i++) 
	    	{
		    	String temp = sortedlatLon.get(i);
		    	String lati = temp.substring(0,temp.indexOf(";"));
		    	String longi = temp.substring(temp.indexOf(";")+1,temp.length());
		    	data = "{lat: "+lati+", lng:"+longi+", count: 1}";
		    	if(i < 199)
		    	{
		    		data = data+",\n";
		    	}
		    	builder.append(data);
	    	}
		    
		    data = "]";
		    builder.append(data);
		    
		    try (PrintWriter out = new PrintWriter("filename.txt")) {
		        out.println(builder);     
		    }
	    	
		    
	    } catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		    

	}

}
