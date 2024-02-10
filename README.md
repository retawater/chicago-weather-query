# chicago-weather-query

This script is used to retrieve data from the National Centers for Environmental Information (NCEI) Access Data Service. The script is meant to be saved as a Google Apps Script file and transfers the data to a Google Sheet for use in Tableau. I use a time-based trigger to run the query once per day.

[API documentation](https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation) can be found here. There are no authentication requirements for accessing the public dataset referenced in this script.

I use this data for my Chicago Winter Weather visualization.
