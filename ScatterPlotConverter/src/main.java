import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

public class main {

    public static void main(final String[] args) {

        try {
            final FileInputStream inputStream =
                new FileInputStream("/Users/imkewagner/Git/WS1819_VISU/dataset/converted_data.csv");
            final Scanner fileScanner = new Scanner(inputStream, "UTF-8");
            final List<Integer> years = new ArrayList<>();

            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                line = line.substring(line.indexOf(";") + 1, line.length());
                line = line.substring(0, line.indexOf(";"));

                if (!line.equals("")) {
                    years.add(Integer.valueOf(line));
                }
            }
            fileScanner.close();
            final List<String> occurencies = new ArrayList<>();
            final List<Integer> yearsWithoutDuplicates = new ArrayList<>(new HashSet<>(years));
            int controller = 0;
            
            /*
             type: "scatter",
			toolTipContent: "<b>Year: </b>{x} <br/><b>Number of crimes: </b>{y}",
			dataPoints: [
				{ x: 2003, y: 49931 },
				{ x: 2018, y: 28236}
			]
             */
            
            occurencies.add(" type: \"scatter\",\n toolTipContent: \"<b>Year: </b>{x} <br/><b>"+
            		"Number of crimes: </b>{y}\",\n dataPoints: [\n");
            for (int i = 0; i < yearsWithoutDuplicates.size(); i++) {
                int counter = 0;
                final int currentYear = yearsWithoutDuplicates.get(i);
                for (int b = 0; b < years.size(); b++) {
                    if (years.get(b).equals(currentYear)) {
                        counter++;
                    }
                }
                controller += counter;
                if (i != (yearsWithoutDuplicates.size()-1)) {
                	occurencies.add("\t {x: " + currentYear + ", y:" + counter + "},\n");
                } else {
                	occurencies.add("\t {x: " + currentYear + ", y:" + counter + "}\n ]");
                }
                
            }
            
            
StringBuilder builder = new StringBuilder();
            
            for(int i = 0; i < occurencies.size(); i ++) {
            	builder.append(occurencies.get(i));
            }
            
            PrintWriter out = null;
            
            try {
            	  out = new PrintWriter("dataScatterPlot.txt");
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
