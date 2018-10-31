# Import the library
import matplotlib.pyplot as plt
from matplotlib_venn import venn3
import pandas as pd
import squarify # pip install squarify (algorithm for treemap)&lt;/pre&gt;


import pandas as pd
import xlrd

#df = pd.read_excel('/Users/panos/Desktop/WS1819_VISU/dataset/crime_xlsx_all_years.xlsx')
#print the column names
#print df.columns
#get the values for a given column
#x = df['X'].values
#y =  df['Y'].values
#print x[1],y[1]
#ye = df['YEAR'].values
#nh = df['NEIGHBOURHOOD'].values
#h = df['HOUR'].values
#get a data frame with selected columns
#FORMAT = ['X', 'Y', 'YEAR','NEIGHBOURHOOD','HOUR']
#df_selected = df[FORMAT]

# Custom text labels: change the label of group A
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
v.get_label_by_id('A').set_text('My Favourite group!')
plt.show()

# Line style: can be 'dashed' or 'dotted' for example
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
c=venn3_circles(subsets = (10, 8, 22, 6,9,4,2), linestyle='dashed', linewidth=1, color="grey")
plt.show()

# Change one group only
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
c=venn3_circles(subsets = (10, 8, 22, 6,9,4,2), linestyle='dashed', linewidth=1, color="grey")
c[0].set_lw(8.0)
c[0].set_ls('dotted')
c[0].set_color('skyblue')
plt.show()

# Color
v.get_patch_by_id('100').set_alpha(1.0)
v.get_patch_by_id('100').set_color('white')
plt.show()
