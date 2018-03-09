$(function () {
    $('#chart4').highcharts({
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
            text: 'Country vs Extraversion'
        },
        xAxis: {
            lineColor: '#A0A0A0',
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Country',
                offset: 10
            },
            labels: {
                enabled: false,
            },
            min: 0,
            max: 76,
            tickAmount: 77,
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
        },
        yAxis: {
            title: {
                style: {
                    color: '#2B8CBE'
                },
                text: 'Extraversion Score'
            },
            min: 0,
            tickInterval: 0.5,
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
            data: [['Albania', 2.94], ['Argentina', 2.96], ['Asia/Pacific Region', 3.63], ['Australia', 3.08], ['Austria', 2.84], ['Bangladesh', 2.8], ['Belgium', 3.34], ['Belize', 3.01], ['Brazil', 2.6], ['Bulgaria', 2.74], ['Canada', 3.02], ['Chile', 2.73], ['China', 2.91], ['Colombia', 2.94], ['Croatia', 2.85], ['Czech Republic', 2.85], ['Denmark', 3.33], ['Egypt', 2.89], ['Estonia', 2.58], ['Europe', 2.81], ['Finland', 2.95], ['France', 2.94], ['Germany', 2.96], ['Ghana', 3.24], ['Greece', 2.92], ['Hong Kong', 3.0], ['Hungary', 2.83], ['Iceland', 3.05], ['India', 3.03], ['Indonesia', 2.9], ['Iran, Islamic Republic of', 2.92], ['Ireland', 3.2], ['Israel', 2.84], ['Italy', 2.93], ['Jamaica', 2.91], ['Japan', 2.84], ['Jordan', 2.97], ['Kenya', 2.83], ['Korea, Republic of', 3.21], ['Latvia', 2.93], ['Lebanon', 3.2], ['Lithuania', 2.96], ['Malaysia', 2.88], ['Malta', 2.82], ['Mexico', 2.84], ['Netherlands', 3.14], ['New Zealand', 3.05], ['Nigeria', 3.22], ['Norway', 3.19], ['Pakistan', 3.01], ['Philippines', 2.8], ['Poland', 2.88], ['Portugal', 3.01], ['Puerto Rico', 3.03], ['Romania', 2.87], ['Russian Federation', 2.96], ['Saudi Arabia', 2.87], ['Serbia', 3.19], ['Singapore', 2.7], ['Slovakia', 2.49], ['Slovenia', 2.59], ['South Africa', 3.05], ['Spain', 2.87], ['Sri Lanka', 3.19], ['Sweden', 3.07], ['Switzerland', 3.15], ['Taiwan', 2.93], ['Thailand', 2.78], ['Trinidad and Tobago', 2.95], ['Turkey', 3.23], ['Uganda', 2.82], ['Ukraine', 3.41], ['United Arab Emirates', 3.02], ['United Kingdom', 3.04], ['United States', 3.04], ['Venezuela', 2.48], ['Vietnam', 2.67]]


        }]
    });
})
