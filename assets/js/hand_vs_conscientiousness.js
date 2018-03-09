$(function () {
    $('#chart3').highcharts({
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
            type: 'column'
        },
        title: {
            style: {
                color: '#2B8CBE',
                fontSize: '24px'
            },
            text: '<b>Hand vs Conscientiousness</b>'
        },
        xAxis: {
            categories: ['Both','Left','Right'],
            lineColor: '#A0A0A0',
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Hand'
            },
            labels: {
                enabled: true,
            },
            tickAmount: 1,
            startOnTick: false,
            endOnTick: false,
            showLastLabel: true,
            min: 0,
            max: 2
        },
        yAxis: {
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Conscientiousness Score'
            },
            min: 3.3,
            max: 3.45,
            tickInterval: 0.01,
            tickWidth: 1,
            tickLength: 10,
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        credits: {enabled: false},
        legend: {enabled: false},
        plotOptions: {
            column: {
                colorByPoint: true,
                colors: ['#058DC7', '#FF9655', '#ED561B',  '#FFF263', '#50B432'],
                pointPadding: 0,
                pointWidth: 100,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            }
        },
        series: [{
            name: 'Average',
            data: [['Both', 3.42], ['Left', 3.33], ['Right', 3.34]]

        }],
        tooltip: {
            formatter: function () {
                return this.y;
            }
        }
    });
})
