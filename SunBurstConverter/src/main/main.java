package main;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.stream.Collectors;

public class main {

	@SuppressWarnings("null")
	public static void main(String[] args) throws FileNotFoundException, IOException {
			
		ArrayList<String> neighborhood = new ArrayList<>();
		ArrayList<String> crimes = new ArrayList<>();
		ArrayList<String> theFile = new ArrayList<>();

		FileInputStream inputStream = null;
		Scanner sc = null;
		try {
			
		    inputStream = new FileInputStream("/Users/panos/Desktop/WS1819_VISU/Visualization_HTML/converted_data.csv");
		    sc = new Scanner(inputStream, "UTF-8");
		    while (sc.hasNextLine()) {
		    	
		        String line = sc.nextLine();
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(line.indexOf(";")+1, line.length());
		        line = line.substring(0, line.indexOf(";"));
		        
		        if(!line.equals(""))
		        {
			        neighborhood.add(line);	  
			        //System.out.println(line);
		        }    
		    }  
		    List<String> sortedNh = neighborhood.stream().distinct().collect(Collectors.toList());
		    
		    String nh ="";
		    String cr ="";
		    String date ="";

		    

		    
		    
		    	
	    	inputStream = new FileInputStream("/Users/panos/Desktop/WS1819_VISU/Visualization_HTML/converted_data.csv");
		    sc = new Scanner(inputStream, "UTF-8");
		    while (sc.hasNextLine()) {
		    	
		    	String line = sc.nextLine();

		    		line = line.substring(0, line.indexOf(";"));
		    		if(!line.equals("Offence Against a Person") && !line.equals("Homicide"))
		    		{
		    			crimes.add(line);
		    		}

		    	
		    	
		    }
		    List<String> sortedCr = crimes.stream().distinct().collect(Collectors.toList());
		    
		    
		    
		    inputStream = new FileInputStream("/Users/panos/Desktop/WS1819_VISU/Visualization_HTML/converted_data.csv");
		    sc = new Scanner(inputStream, "UTF-8");
		    while (sc.hasNextLine()) {
		    	
		    	String line = sc.nextLine();

		    		theFile.add(line);

		    	
		    	
		    }
		    
		    

	        Random random = new Random();
	        int nextInt = random.nextInt(0xffffff + 1);
	        String colorCode = String.format("#%06x", nextInt);        	        
		    
		    String data = "{name: 'Vancouver',\n" + 
		    		"      color: 'lightblue',\n" + 
		    		"      children: [";
		    
		    StringBuilder builder = new StringBuilder();
            builder.append(data);
		    
		    int i=0;
		    int j=0;
		    int k=0;
		    for (String temp : sortedNh) {
		    i++;
		    nextInt = random.nextInt(0xffffff + 1);
			data="{\n" + 
					"	name: '"+temp+"',\n" + 
					"	color: '"+String.format("#%06x", nextInt)+"',\n" + 
					"	children: [";
			builder.append(data);
		    	
		    	for (String temp2 : sortedCr) {
			    	j++;
			    	
			    	data="{\n" + 
							"		name: '"+temp2+"',\n" + 
							"		color: '"+String.format("#%06x", nextInt)+"',\n" + 
							"		children: [";
			    	builder.append(data);
							//"        size: 1";
			    	
			    	
			    	////////////////////////////////////
			    	boolean found =false;
			    	k=0;
			    	for (String temp3 : theFile) 
			    	    {
			    				
			    			
			    			
			    	    	String line = temp3;
			    	    	if(line.contains(temp) && line.contains(temp2) && k<20)
			    	    	{
			    	    		k++;
			    	    		if (found)
				    			{
				    				data = "},";
						    		builder.append(data);
						    		found=false;
				    			}
			    	    		
			    	    		String year = line;
			    		    	year = year.substring(year.indexOf(";")+1, year.length());
			    		    	year = year.substring(0, year.indexOf(";"));
			    		    	
			    		    	String month = line;
			    		    	month = month.substring(month.indexOf(";")+1, month.length());
			    		    	month = month.substring(month.indexOf(";")+1, month.length());
			    		    	month = month.substring(0, month.indexOf(";"));
			    		    	
			    		    	String day = line;
			    		    	day = day.substring(day.indexOf(";")+1, day.length());
			    		    	day = day.substring(day.indexOf(";")+1, day.length());
			    		    	day = day.substring(day.indexOf(";")+1, day.length());
			    		    	day = day.substring(0, day.indexOf(";"));
			    		    	
			    		    	String hour = line;
			    		    	hour = hour.substring(hour.indexOf(";")+1, hour.length());
			    		    	hour = hour.substring(hour.indexOf(";")+1, hour.length());
			    		    	hour = hour.substring(hour.indexOf(";")+1, hour.length());
			    		    	hour = hour.substring(hour.indexOf(";")+1, hour.length());
			    		    	hour = hour.substring(0, hour.indexOf(";"));
			    		    	
			    		    	String minute = line;
			    		    	minute = minute.substring(minute.indexOf(";")+1, minute.length());
			    		    	minute = minute.substring(minute.indexOf(";")+1, minute.length());
			    		    	minute = minute.substring(minute.indexOf(";")+1, minute.length());
			    		    	minute = minute.substring(minute.indexOf(";")+1, minute.length());
			    		    	minute = minute.substring(minute.indexOf(";")+1, minute.length());
			    		    	minute = minute.substring(0, minute.indexOf(";"));
			    		    	
			    		    	String dateC = year+"_"+month+"_"+day;
			    		    	String time = hour+":"+minute;
			    	    		
			    	    		
			    		    	data="{\n" + 
									"			name: '"+dateC+"/"+time+"',\n" + 
									"			color: '"+String.format("#%06x", nextInt)+"',\n" + 
									"			size: 1";
			    		    	builder.append(data);
			    		    	found = true;
			    		    	//break;
			    		    	
			    	    	} 
			    	    	
			    	    }
			    	data = "}";
		    		builder.append(data);
			    	////////////////////////////////////
			    	
				    
				    if(j == sortedCr.size())
			    	{
			    		//data += "}";
				    	data = "]}";
				    	builder.append(data);
			    	}
			    	else
			    	{
			    		//data += "},";
			    		data = "]},";
			    		builder.append(data);
			    	}
				    
			    }
		    	
		    	j=0;
		    	if(i== sortedNh.size())
		    	{
		    		data = "]}";
		    		builder.append(data);
		    	}
		    	else
		    	{
		    		data = "]},";
		    		builder.append(data);
		    	}
		    }
		    
		    data = "]};";
		    builder.append(data);
		    
		    
		    
		    
		    try (PrintWriter out = new PrintWriter("filename.txt")) {
		        out.println(builder);     
		    }
		    
		    //System.out.println("{'id': '0.0','parent': '','name': 'Vancouver'}");
		    
		    
		    // note that Scanner suppresses exceptions
		    if (sc.ioException() != null) {
		        throw sc.ioException();
		    }
		} finally {
		    if (inputStream != null) {
		        inputStream.close();
		    }
		    if (sc != null) {
		        sc.close();
		    }
		}

	}

}
