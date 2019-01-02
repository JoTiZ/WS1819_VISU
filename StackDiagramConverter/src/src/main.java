package src;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;




public class main {

    public static void main(final String[] args) {

        try {
            final FileInputStream inputStream =
                new FileInputStream("/Users/imkewagner/Git/WS1819_VISU/dataset/converted_data.csv");
            final Scanner fileScanner = new Scanner(inputStream, "UTF-8");
            final List<String> data = new ArrayList<>();
            final List<String> crimes = new ArrayList<>();
            final List<Integer> years = new ArrayList<>();

            while (fileScanner.hasNextLine()) {
                String year = "";
                String crime = "";
                String line = fileScanner.nextLine();
                crime = line.substring(0, line.indexOf(";"));
                line = line.substring(line.indexOf(";") + 1, line.length());
                year = line.substring(0, line.indexOf(";"));

                if (!line.equals("")) {
                    crimes.add(crime);
                    years.add(Integer.valueOf(year));
                }

            }
            fileScanner.close();

            final List<Integer> yearsWithoutDuplicates = new ArrayList<>(new HashSet<>(years));
            final List<String> typesOfCrimes = new ArrayList<>(new HashSet<>(crimes));

            /*
            type: "stackedArea",
			showInLegend: "true",
  			name: "Other Theft",
			dataPoints:[
				{y: 2582, label: "2003"},
				{y: 496, label: "2018"}
			]
             */

            for (int i = 0; i < typesOfCrimes.size(); i++) {
                final String currentCrime = typesOfCrimes.get(i);
                String dataString = "{\n type: \"stackedArea\", \n showInLegend: \"true\", \n name: \"" +
                		currentCrime + "\",\n dataPoints:[ \n";
                for (int b = 0; b < yearsWithoutDuplicates.size(); b++) {
                    int counterOfYears = 0;
                    final int currentYear = yearsWithoutDuplicates.get(b);
                    for (int c = 0; c < years.size(); c++) {
                        if (years.get(c).equals(currentYear)) {
                            counterOfYears++;
                        }
                    }
                    int counterOfCrimes = 0;
                    for (int k = 0; k < counterOfYears; k++) {
                        if (crimes.get(k).equals(currentCrime)) {
                            counterOfCrimes++;
                        }
                    }
                    if (b != (yearsWithoutDuplicates.size()-1)) {
                    	dataString += "\t {y: " + counterOfCrimes + ", label: \"" + 
                    			currentYear + "\"},\n";
                    } else {
                    	dataString += "\t {y: " + counterOfCrimes + ", label: \"" + 
                    			currentYear + "\"}";
                    }
                    
                }
                if (i != (typesOfCrimes.size()-1)) {
                	dataString += "]\n},\n \n";
                }else {
                	dataString += "]\n}";
                }
                

                data.add(dataString);
            }

            StringBuilder builder = new StringBuilder();
            
            for(int i = 0; i < data.size(); i ++) {
            	builder.append(data.get(i));
            }
            
            PrintWriter out = null;
            
            try {
            	  out = new PrintWriter("dataStackDiagram.txt");
            	  out.println(builder); 
            } catch (IOException ioe) {
            	ioe.printStackTrace();
            } finally {
            	if (out != null) {
            		out.flush();
            		out.close();
            	}
            }
          
            
            System.out.println("finished");
        } catch (final FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

}
