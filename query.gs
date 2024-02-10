function importData() {
  
  var sheetName = "Data";
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var currentDate = new Date().toISOString().split('T')[0];
  
  //get data
  var csvUrl = 'https://www.ncei.noaa.gov/access/services/data/v1?dataset=daily-summaries&stations=USW00094846&startDate=2000-01-01T00:00:00Z&endDate=' + currentDate; //station USW00094846 is O'Hare Airport
  var csvContent = UrlFetchApp.fetch(csvUrl).getContentText();
  
  // Parse the CSV data
  var csvData = Utilities.parseCsv(csvContent);

  // Clear existing sheet content
  sheet.clearContents();
  
  // Paste data into the sheet
  var numRows = csvData.length;
  var numColumns = csvData[0].length;
  sheet.getRange(1, 1, numRows, numColumns).setValues(csvData);

}
