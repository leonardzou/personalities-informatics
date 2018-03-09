$(function () {
    $('#chart2').highcharts({
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
            text: '<b>Non-native English Speakers in USA vs Neuroticism</b>'
        },
        xAxis: {
            categories: ['No', 'Yes'],
            lineColor: '#A0A0A0',
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: ''
            },
            labels: {
                enabled: true,
            },
            tickAmount: 1,
            startOnTick: false,
            endOnTick: false,
            showLastLabel: true,
            min: 0,
            max: 1
        },
        yAxis: {
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Neuroticism Score'
            },
            min: 3,
            max: 3.15,
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
            data: [['No', 3.1], ['Yes', 3.03]]

        }],
        tooltip: {
            formatter: function () {
                return this.y;
            }
        }
    });
})
