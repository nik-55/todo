import { pcount, mcount, dcount } from "./create.js";



setTimeout(() => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task Status', 'Number of Tasks'],
            ['Todo', pcount],
            ['Missed', mcount],
            ['Completed', dcount],
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': 'My Todo Profile', 'width': 900, 'height': 500 };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}, 2900);
