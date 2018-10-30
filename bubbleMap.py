# import the library
import folium
import pandas as pd
#from pyproj import Proj, transform
#import xlrd

###df = pandas.read_excel('/Users/panos/Desktop/WS1819_VISU/dataset/crime_xlsx_all_years.xlsx')
#print the column names
#print df.columns
#get the values for a given column
###x = df['X'].values
###y =  df['Y'].values
#get a data frame with selected columns
###FORMAT = ['X', 'Y']
###df_selected = df[FORMAT]

#CONVERT TO LAT/LONG
###for i in range(0,len(x)):
###    inProj = Proj(init='epsg:3857')
###    outProj = Proj(init='epsg:4326')
###    x1,y1 = x[i],y[i]
###    x2,y2 = transform(inProj,outProj,x1,y1)
    #print x2,y2


# Make a data frame with dots to show on the map
data = pd.DataFrame({
   'lat':[-123.067031, -54.3, -54.06, -54.06, -54.94, -54.7], #Y is latitude
   'lon':[49.224093, -49.88, -49.29, -49.29, -49.84, -48.01], #X is longitude
   'name':['Dunbar-Southlands', 'Central Business District', 'West End', 'West End', 'Fairview', 'Dunbar-Southlands'],
   'value':[10,23,11,19,17,17]
})
data

# Make an empty map
m = folium.Map(location=[20,0], tiles="Mapbox Bright", zoom_start=2)

# I can add marker one by one on the map
for i in range(0,len(data)):
   folium.Circle(
      location=[data.iloc[i]['lon'], data.iloc[i]['lat']],
      popup=data.iloc[i]['name'],
      radius=data.iloc[i]['value']*10000.0,
      color='crimson',
      fill=True,
      fill_color='crimson'
   ).add_to(m)

# Save it as html
m.save('mymap.html')
