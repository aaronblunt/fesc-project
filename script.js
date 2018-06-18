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