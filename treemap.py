#libraries
import matplotlib.pyplot as plt
import squarify # pip install squarify (algorithm for treemap)

import pandas as pd
import xlrd

df = pd.read_excel('/Users/panos/Desktop/WS1819_VISU/dataset/crime_xlsx_all_years.xlsx')
#print the column names
#print df.columns
#get the values for a given column
x = df['X'].values
y =  df['Y'].values
#print x[1],y[1]
ye = df['YEAR'].values
nh = df['NEIGHBOURHOOD'].values
h = df['HOUR'].values
#get a data frame with selected columns
FORMAT = ['X', 'Y', 'YEAR','NEIGHBOURHOOD','HOUR']
df_selected = df[FORMAT]

# Change color
squarify.plot(sizes=ye, label=nh, color=["red","green","blue", "grey"], alpha=.4 )
plt.axis('off')
plt.show()
