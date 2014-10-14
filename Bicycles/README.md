Bicycle Data Mapping Project
============================

Contact person: Becka Robbins   beckastar@gmail.com

The MVP goal of this project is to generate a map that will display map San Francisco’s bike paths as well as locations for bicycle parking, bike theft, and cycling crashes.

We’re hoping to ultimately expand the use of Bikesy, an open source project which generates bike routes that allow users to generate bicycle routes, prioritizing either safety or elevation. 

We’ve acquired almost all of the data needed in order to implement this. The most immediate tasks are:

Clean and render the data into a usable format
Display shapefile and  datapoints on a map

The author of Bikesy has written us back, and will be providing some technical support on the expansion of his project.   The long term goal of this project is to display only the data that is relevant to the user’s route within the app.   

Try out Bikesy here:  bikesy.com

Data Sources:

Bicycle theft: (keyword: bicycle)
https://data.sfgov.org/Public-Safety/SFPD-Incidents-Previous-Three-Months/tmnf-yvry

Bicycle Crashes - pretty JSON: 
https://gist.github.com/pranavr/11348749

Bike Crashes:  csv
https://github.com/BayCitizen/dataapps/blob/master/data_apps/bc_data_apps/bike_accidents/files/bike_accidents.csv

Raw data (thefts, possibly injuries, etc) -
http://iswitrs.chp.ca.gov/Reports/jsp/userRegistration.jsp

Repo for their project -
https://github.com/BayCitizen/dataapps/blob/master/data_apps/bc_dataapps_templates/bike_accidents/bike_accidents_methodology.html

Bicycle Parking - 
https://data.sfgov.org/Transportation/Bicycle-Parking-Public-/w969-5mn4

Mapping resources:

Bikesy API:
http://blog.bikesy.com/source/

Open Street Maps GEOJSON bike routes in SF:
https://github.com/enjalot/transit-datathon/tree/master/bike_routes
