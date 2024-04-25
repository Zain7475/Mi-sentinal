//   sidebar
$('.open-btn').on('click',function(){
    $('.sidebar').addClass('active');
  });
  $('.close-btn').on('click',function(){
    $('.sidebar').removeClass('active');
  })
  // highchart
  document.addEventListener('DOMContentLoaded', function () {
    // Initial data for the donut chart
    var initialData = [{
        name: 'Slice 1',
        y: 30
    }, {
        name: 'Slice 2',
        y: 70
    }];
    var colors = ['#3cc33c', '#0f335d']; 
    // Initialize the donut chart
    var chart = Highcharts.chart('donutChart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            },
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        credits:{
            enabled:false
        },
        plotOptions: {
            pie: {
                innerSize: 0,
                borderWidth:0,
                depth: 45,
                dataLabels: {
                    enabled: false // Disable data labels
                },
                borderRadius: 0
            }
        },
        series: [{
            // name: 'Slices',
            data: initialData,
            colors: colors
        }]
    });

    // Function to decrease Slice 1 value
    window.decreaseSlice1 = function () {
        var data = chart.series[0].data;

        // Decrease the value of Slice 1 by 1%
        data[0].y *= 0.99;

        // Increase the value of Slice 2 by the same percentage
        data[1].y /= 0.99;
        data[1].y *= 1.01;

        // Update the chart data
        chart.series[0].setData(data);

        // Redraw the chart to reflect the changes
        chart.redraw();
    };

    // Function to increase Slice 1 value
    window.increaseSlice1 = function () {
        var data = chart.series[0].data;

        // Increase the value of Slice 1 by 1%
        data[0].y /= 0.99;
        data[0].y *= 1.01;

        // Decrease the value of Slice 2 by the same percentage
        data[1].y *= 0.99;

        // Update the chart data
        chart.series[0].setData(data);

        // Redraw the chart to reflect the changes
        chart.redraw();
    };
});
