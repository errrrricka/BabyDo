$scope.plugins = {
    customLegend: function(layer, data, options) {
        var html = ['<ul class="list-inline">'],
            label = '';
        for (var fillKey in this.options.fills) {
            html.push('<li class="key" ',
                'style="border-top: 10px solid ' + this.options.fills[fillKey] + '">',
                (fillKey === 'defaultFill' ? 'N/A' : fillKey),
                '</li>');
        }
        html.push('</ul>');
        d3.select(this.options.element).append('div').attr('class', 'datamaps-legend')
            .style('position', 'absolute').style('bottom', 0).html(html.join(''));
    }
};
$scope.map = {
    scope: "world",
    projection: "mercator",
    data: {
        "USA": {
            "value": 125,
            "fillKey": "HIGH"
        },
        "CAN": {
            "value": 50,
            "fillKey": "MEDIUM"
        },
        "IRL": {
            "value": 70,
            "fillKey": "LOW"
        },
        "RUS": {
            "value": 312,
            "fillKey": "HIGH"
        },
        "JPN": {
            "fillKey": "LOW",
            "value": 75
        },
        "ITA": {
            "fillKey": "LOW",
            "value": 55
        },
        "CRI": {
            "fillKey": "MEDIUM",
            "value": 130
        },
        "KOR": {
            "fillKey": "HIGH",
            "value": 230
        },
        "DEU": {
            "fillKey": "HIGH",
            "value": 300
        }
    },
    fills: {
        "HIGH": '#666666',
        "LOW": '#b9b9b9',
        "MEDIUM": '#abdda4',
        "defaultFill": "orange"
    }
};