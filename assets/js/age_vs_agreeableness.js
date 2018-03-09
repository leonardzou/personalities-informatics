$(function () {
    $('#chart1').highcharts({
        chart: {
            backgroundColor: '#FFFFFF',
            plotBorderColor: '#A0A0A0',
            plotBorderWidth: 1,
            spacingBottom: 20,
            spacingLeft: 50,
            spacingRight: 50,
            spacingTop: 20,
            style: {
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
            },
            type: 'scatter'
        },
        title: {
            style: {
                color: '#2B8CBE',
                fontSize: "24px"
            },
            text: '<b>Age vs Agreeableness</b>'
        },
        xAxis: {
            lineColor: '#A0A0A0',
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Age'
            },
        tickInterval: 5,
        min: 10,
        startOnTick: false,
        endOnTick: true
        },
        yAxis: {
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Agreeableness Score',
            },
            gridLineWidth: 0,
            min: 2.5,
            minorGridLineWidth: 0,
            tickInterval: 0.5,
            tickWidth: 1,
            tickLength: 10
        },
        credits: {enabled: false},
        legend: {enabled: false},
        plotOptions: {
            scatter: {
                color: '#000066',
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#000066'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.x} years old, {point.y} score'
                }
            }
        },
        series: [{
            name: 'Age',
            data: [[13, 3.62], [14, 3.61], [15, 3.61], [16, 3.67], [17, 3.74], [18, 3.78], [19, 3.82], [20, 3.82], [21, 3.8], [22, 3.8], [23, 3.88], [24, 3.88], [25, 3.88], [26, 3.91], [27, 3.92], [28, 3.82], [29, 3.85], [30, 3.95], [31, 3.88], [32, 3.91], [33, 3.91], [34, 3.95], [35, 3.94], [36, 3.93], [37, 3.97], [38, 3.94], [39, 4.06], [40, 3.93], [41, 4.04], [42, 3.97], [43, 3.9], [44, 3.94], [45, 4.11], [46, 3.99], [47, 4.04], [48, 4.1], [49, 4.14], [50, 4.04], [51, 4.03], [52, 4.09], [53, 4.12], [54, 3.98], [55, 4.26], [56, 4.18], [57, 4.07], [58, 4.08], [59, 4.19], [60, 4.22], [61, 4.09], [62, 4.04], [63, 4.33], [64, 4.06], [65, 4.03], [66, 4.25], [67, 4.19], [68, 3.98], [69, 4.31], [70, 3.92], [71, 3.94], [72, 3.97], [73, 4.5], [74, 4.05], [75, 4.7], [76, 3.2], [77, 4.03], [79, 4.8], [80, 3.9], [97, 3.0], [99, 4.5]]
        }]
    });
})
