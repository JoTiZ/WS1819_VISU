import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

public class main {

    public static void main(final String[] args) {

        try {
            final FileInputStream inputStream =
                new FileInputStream("C:/Users/iwa/Documents/Uni/Visualisierung/WS1819_VISU/dataset/converted_data.csv");
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
            for (int i = 0; i < yearsWithoutDuplicates.size(); i++) {
                int counter = 0;
                final int currentYear = yearsWithoutDuplicates.get(i);
                for (int b = 0; b < years.size(); b++) {
                    if (years.get(b).equals(currentYear)) {
                        counter++;
                    }
                }
                controller += counter;
                occurencies.add("" + currentYear + "=" + counter);
            }
            // System.out.println(yearsWithoutDuplicates);
            System.out.println(
                "Eintraege: " + years.size() + " Kontrolle: " + controller + " Groesse: " + occurencies.size());
            System.out.println(Arrays.asList(occurencies));
        } catch (final FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

}
