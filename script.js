google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(BarChart1);

function BarChart1() {
          var data = new google.visualization.arrayToDataTable([
          ['Year', 'Billion Btu'],
          ['2015', 234192],
          ['2014', 234192],
          ['2013', 234192],
          ['2012', 234192],
          ['2011', 234192],
          ['2010', 234192],
          ['2009', 234192],
          ['2008', 234192],
          ['2007', 234192],
          ['2006', 234192],
          ['2005', 234192],
          ['2004', 234192],
          ['2003', 234192],
          ['2002', 234192],
          ['2001', 234192],
          ['2000', 234192],
          ['1999', 234192],
          ['1998', 234192],
          ['1997', 234192],
          ['1996', 234192],
          ['1995', 234192],
          ['1994', 234192],
          ['1993', 234192],
          ['1992', 234192]
        ]);

        var options = {
          title: 'Renewable Energy Production',
          width: 500,
          height: 500,
          legend: 'top',
          fontSize: 14,
          chart: { title: 'Renewable Energy Production',
                   subtitle: 'Energy in Billion BTUs per Year' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('BarChart1'));
        chart.draw(data, options);
      }

var app = new Vue({
  el: '#app',
  data: {
    message: 'people!',
    example: ['one', 'two', 'three']
  }
})

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(getData);

      function drawBasic(freshData) {
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
          title: 'Energy Production in Florida',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'BTUs',
            minValue: 0
          }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }

	
      let testData
      function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key= f8003b16bf5d7ca0b79a81f17ec74cfe&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
 	let theActualData = JSON.parse(request.response).series[0].data

	drawBasic(theActualData)

        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }
