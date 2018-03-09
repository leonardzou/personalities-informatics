$(function () {
    $('#chart5').highcharts({
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
            type: 'column',
            plotBorderWidth: 1
        },
        title: {
            style: {
                color: '#2B8CBE',
                fontSize: '24px'
            },
            text: 'Race vs Openness'
        },
        xAxis: {
            categories: ['Arctic (Siberian, Eskimo)','Caucasian (European)','Caucasian (Indian)','Caucasian (Middle East)','Caucasian (North African, Other)','Indigenous Australian','Mixed Race','Native American','North East Asian (Mongol, Tibetan, Korean Japanese, etc.)','Other','Pacific (Polynesian, Micronesian, etc.)','South East Asian (Chinese, Thai, Malay, Filipino, etc.)','West African, Bushmen, Ethiopian'],
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Race'
            },
            labels: {
                enabled: true,
            },
            tickAmount: 13,
            startOnTick: false,
            endOnTick: false,
            showLastLabel: true,
            min: 0,
            max: 12
        },
        yAxis: {
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Opennness Score'
            },
            min: 3.6,
            max: 4.1,
            tickInterval: 0.1,
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
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            }
        },
        series: [{
            name: 'Average',
            data: [['Arctic (Siberian, Eskimo)', 4.05], ['Caucasian (European)', 4.03], ['Caucasian (Indian)', 3.71], ['Caucasian (Middle East)', 3.8], ['Caucasian (North African, Other)', 3.85], ['Indigenous Australian', 3.94], ['Mixed Race', 3.96], ['Native American', 3.69], ['North East Asian (Mongol, Tibetan, Korean Japanese, etc.)', 3.74], ['Other', 3.72], ['Pacific (Polynesian, Micronesian, etc.)', 3.8], ['South East Asian (Chinese, Thai, Malay, Filipino, etc.)', 3.7], ['West African, Bushmen, Ethiopian', 3.92]]
        }],
        tooltip: {
            formatter: function () {
                return this.x + '<br></br>' + this.y;
            }
        }
    });
})
