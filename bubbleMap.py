# import the library
import folium
import pandas as pd
from pyproj import Proj, transform
import xlrd

df = pd.read_excel('/Users/panos/Desktop/WS1819_VISU/dataset/crime_xlsx_all_years.xlsx')
#print the column names
#print df.columns
#get the values for a given column
x = df['X'].values
y =  df['Y'].values
#print x[1],y[1]
nh = df['NEIGHBOURHOOD'].values
h = df['HOUR'].values
#get a data frame with selected columns
FORMAT = ['X', 'Y', 'NEIGHBOURHOOD','HOUR']
df_selected = df[FORMAT]

#CONVERT TO LAT/LONG
for i in range(0,len(x)):
    inProj = Proj(init='epsg:3857')
    outProj = Proj(init='epsg:4326')
    x1,y1 = x[i],y[i]
    x2,y2 = transform(inProj,outProj,x1,y1)
    #print x2,y2


# Make a data frame with dots to show on the map
data = pd.DataFrame({
   'lat':x2, #Y is latitude
   'lon':y2, #X is longitude
   'name':nh,
   'value':h
})
data

# Make an empty map
m = folium.Map(location=[50,0], tiles="Mapbox Bright", zoom_start=2)

# I can add marker one by one on the map
for i in range(0,len(data)):
   folium.Circle(
      location=[data.iloc[i]['lon'], data.iloc[i]['lat']],
      popup=str(data.iloc[i]['name']),
      radius=data.iloc[i]['value']*10000.0,
      color='crimson',
      fill=True,
      fill_color='crimson'
   ).add_to(m)

# Save it as html
m.save('mymap.html')
