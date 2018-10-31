# library
import matplotlib.pyplot as plt
import pandas as pd
import xlrd

# create data
names='groupA', 'groupB', 'groupC', 'groupD',
size=[12,11,3,30]

# Create a circle for the center of the plot
my_circle=plt.Circle( (0,0), 0.7, color='white')

# Give color names
plt.pie(size, labels=names, colors=['red','green','blue','skyblue'])
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.show()
