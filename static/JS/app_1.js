// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear the table
    tbody.html("")
    // loop through objects and append a row and cells for each value in row
    data.forEach((dataRow) => {
        // add the row to table
        let row = tbody.append("tr")
        //loop again and add the values as table cells
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val)
        });
    });
};

//button click
function handleClick() {
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value")
    let filteredData = tableData;
    //check to see if date was entered and filter the data using specified date
    if (date) {
        //apply filter to data, and keep rows where datetime === filter value
        filteredData = filteredData.filter(row => row.datetime === date)};
    //rebuild table using filtered data
    buildTable(filteredData)
};
//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);