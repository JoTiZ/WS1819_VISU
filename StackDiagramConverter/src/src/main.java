package src;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

public class main {

    public static void main(final String[] args) {

        try {
            final FileInputStream inputStream =
                new FileInputStream("C:/Users/iwa/Documents/Uni/Visualisierung/WS1819_VISU/dataset/converted_data.csv");
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

            // name: "murder", datapoints:[{ y: 12345, label: "2003"}, { y: 6789, label: "2004"},...]

            for (int i = 0; i < typesOfCrimes.size(); i++) {
                final String currentCrime = typesOfCrimes.get(i);
                String dataString = "name: \"" + currentCrime + "\", datapoints:[ ";
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
                    dataString += "{y: " + counterOfCrimes + ", label: \"" + currentYear + "\"},";
                }
                dataString += "]\n";

                data.add(dataString);
            }

            System.out.println(data);
        } catch (final FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

}
