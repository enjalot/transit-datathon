transit-datathon
================

notes and resources from the transit datathon 10/11+10/28 in SF


# Data

### One week of nextbus realtime data  
[AC Transit](https://dl.dropboxusercontent.com/u/2682489/actransit.tar.gz)  
[SF MUNI](https://dl.dropboxusercontent.com/u/2682489/sf-muni.tar.gz)  
A collection of xml files for each minute. This data was collected from the [nextbus API](http://api-portal.anypoint.mulesoft.com/nextbus/api/nextbus-api/docs/reference)

### One month of BART entries and exits for all stations 
[Entries](https://transit-data.s3.amazonaws.com/oct-2012-entries-json.zip)  
[Exits](https://transit-data.s3.amazonaws.com/oct-2012-exits-json.zip)  
There is a file for each BART station, the file contains a JSON array of counts of entries or exits with a date and time by the minute.

### In this repo
A collection of files related to SFMTA, including presenatations and data from MUNI

* [RunReport](https://github.com/enjalot/transit-datathon/tree/master/RunReport) - Reports coming from SF MUNI, including data requested that's not usually published.
* [5-1-14 Equity Strategy ppt.pdf](https://github.com/enjalot/transit-datathon/blob/master/5-1-14%20Equity%20Strategy%20ppt.pdf) - Report on service equity, demographics and socioeconomic status
* [NextBusXMLFeed.pdf](https://github.com/enjalot/transit-datathon/blob/master/NextBusXMLFeed.pdf) - Description and specification of the NextBus API
* [RPP_Saturation](https://github.com/enjalot/transit-datathon/blob/master/RPP_Saturation%202-3-10_NN.pdf) - Parking permit program data, collected manually from a public meeting. 
* SFMTA Quarterly Report (Jul-Sep 2013).pdf - Overall report on the SF MTA
* [SFpark_Pilot_Project_Evaluation.pdf](https://github.com/enjalot/transit-datathon/blob/master/SFpark_Pilot_Project_Evaluation.pdf) - SF Park has real-time time meter data, this document explains the project along with thorough analysis. [source](http://sfpark.org/resources/docs_pilotevaluation/)
* [StopInformation.xls](https://github.com/enjalot/transit-datathon/blob/master/StopInformation.xls) - Directory of all bus stops in SF, their location and the lines that serve them
* [Strategic Plan Metrics Report - February 2014 FINAL.pdf](https://github.com/enjalot/transit-datathon/blob/master/Strategic%20Plan%20Metrics%20Report%20-%20February%202014%20FINAL.pdf) - Comprehensive list of metrics on various aspects of the MUNI
* [Strategic Plan Progress Report - February 2014 FINAL.pdf](https://github.com/enjalot/transit-datathon/blob/master/Strategic%20Plan%20Progress%20Report%20-%20February%202014%20FINAL.pdf) - Presentation of how MUNI is progressing against the metrics.
* [TEP-CAC3-18-14_v2.pdf](https://github.com/enjalot/transit-datathon/blob/master/TEP-CAC3-18-14_v2.pdf) - Transit Effectiveness Project, an attempt to optimize service. [more info](http://muniforward.com/)  
* [The Muni historic vehicle collection_060514.pdf](https://github.com/enjalot/transit-datathon/blob/master/The%20Muni%20historic%20vehicle%20collection_060514.pdf) - Index of all the types of subway/cable cars. [more info](http://www.streetcar.org/) 
* [Track Repair Work at Cameron Beach Yard.pdf](https://github.com/enjalot/transit-datathon/blob/master/Track%20Repair%20Work%20at%20Cameron%20Beach%20Yard.pdf) - Example of how complicated rail yards can be. A lot of data of this sort is not digitized, and the railway switches are manual.

### Collecting / Requesting Data from SF MUNI

First course of action should be to call 311 and see if you can find out who in Transit Operations you should talk to about a certain kind of data. People can be helpful. If you are having trouble being friendly, you can resort to a "Sunshine request" (there is law requiring public data to be made available by request), call 3-1-1 and say you want to make a sunshine request.  
 

### Transit Agency APIs
[VTA](http://www.vta.org/getting-around/gtfs-info/dev-links) - [data](https://data.vta.org/)    
[BART](http://www.bart.gov/schedules/developers)  
[Tri-Met](http://developer.trimet.org/)  
[LAMTA](http://developer.metro.net/)  
[wmata](http://developer.wmata.com/)  

### Useful GitHub repositories
[TransitJSON](https://github.com/codeforamerica/transitjson)
[Shapely - Python Geometry](https://github.com/Toblerity/Shapely)

http://www.sfmta.com/about-sfmta/reports/gtfs-transit-data
