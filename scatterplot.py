# library & dataset
import seaborn as sns
import pandas as pd
import xlrd
import matplotlib.pyplot as plt

df = pd.read_excel('./dataset/crime_xlsx_all_years.xlsx')
#print the column names
#print df.columns
#get the values for a given column
x = df['X'].values
y =  df['Y'].values
#print x[1],y[1]
nh = df['HOUR'].values
h = df['MINUTE'].values
#get a data frame with selected columns
FORMAT = ['X', 'Y', 'NEIGHBOURHOOD','HOUR']
df_selected = df[FORMAT]


#df = sns.load_dataset('iris')

# use the function regplot to make a scatterplot
sns.regplot(x=df['HOUR'], y=df['MINUTE'])
plt.show()

# Without regression fit:
#sns.regplot(x=touple(df['HOUR']), y=touple(df['MINUTE']), fit_reg=False)
#sns.plt.show()
