(function(angular) {
    'use strict';
    angular.module('data-maps-page',['datamaps'])

        .component('mapper', {
            templateUrl: 'templates/tutorial.html',
            $routeConfig: [
                {path: '/demo', name: 'Demo', component: 'datamapDemo', useAsDefault: true},
                {path: '/html', name: 'HTML', component: 'datamapHTML'},
                {path: '/scss', name: 'SCSS', component: 'datamapSCSS'},
                {path: '/js', name: 'JS', component: 'datamapJS'},
                {path: '/data', name: 'Data', component: 'datamapData'}
            ],
            controller: TutorialComponent
        })

        .component('datamapDemo', {
            templateUrl: 'templates/components/data-maps.html',
            controller: DemoComponent
        })

        .component('datamapHTML', {
            templateUrl: 'templates/tabs/html-tab.html',
            controller: HTMLComponent
        })

        .component('datamapSCSS', {
            templateUrl: 'templates/tabs/scss-tab.html',
            controller: SCSSComponent
        })

        .component('datamapJS', {
            templateUrl: 'templates/tabs/js-tab.html',
            controller: JSComponent
        })

        .component('datamapData', {
            templateUrl: 'templates/tabs/data-tab.html',
            controller: DataComponent
        })

        .factory('datamapFactory', function($http) {
            return $http({method: 'GET', url: 'data/mapsdata.json'});
        });

    function TutorialComponent() {
        this.title = 'Data Maps';
        this.titleDescription = "This description would be about data maps";
        this.tabs = [
            {
                name: "Demo",
                text: "Demo"
            },
            {
                name: "HTML",
                text: "HTML"
            },
            {
                name: "SCSS",
                text: "SCSS"
            },
            {
                name: "JS",
                text: "JS"
            },
            {
                name: "Data",
                text: "Example Data"
            }
        ];
        this.activeTab = "Demo";
    }

    function DemoComponent($scope,datamapFactory,$timeout) {
        $scope.mapData = {};

        $timeout(datamapFactory.then(function(response) {
            $scope.loadData = response.data;
        }));

        $scope.$watch('loadData', function(loadData) {
            if(loadData != undefined){
                $scope.mapData = loadData;

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
                    data: $scope.mapData,
                    fills: {
                        "HIGH": '#666666',
                        "LOW": '#b9b9b9',
                        "MEDIUM": '#abdda4',
                        "defaultFill": "orange"
                    }
                };
            }
        },true);

    }

    function HTMLComponent() {
        this.data = [
            {
                title: "data-maps.html",
                desc: "A Small Description",
                code: {
                    src: "templates/components/data-maps.html",
                    lines: "",
                    links: [{
                        "name": "<html element>",
                        "desc": "This is where the description will go."
                    },
                        {
                            "name": "<html element>",
                            "desc": "This is where the description will go."
                        },
                        {
                            "name": "<html element>",
                            "desc": "This is where the description will go."
                        }
                    ]
                }
            }
        ];
    }

    function SCSSComponent(){
        this.data = [
            {
                title: "Add data-maps-styles.scss",
                desc: "This is the place that the only custom SCSS lives as well",
                code: {
                    id: "data-maps-style",
                    src: "sass/datamaps-styles.scss",
                    lines: "",
                    links: [
                        {
                            "name": "ng-app",
                            "desc": "This is where we define our main module, thus initiating AngularJS."
                        },
                        {
                            "name": "<base>",
                            "desc": "We use HTML5 AngularJS Routing. Here we define where our file is relative to our servers root directory."
                        },
                        {
                            "name": "<app>",
                            "desc": "This is where all of our code will be appended to."
                        }
                    ]
                }
            }
        ];
    }

    function JSComponent() {
        this.data = [
            {
                title: "data-maps.js",
                desc: "A Small Description",
                code: {
                    src: "js/components/data-maps.js",
                    lines: "",
                    links: [{
                        "name": "<js element>",
                        "desc": "This is where the description will go."
                    },
                        {
                            "name": "<js element>",
                            "desc": "This is where the description will go."
                        },
                        {
                            "name": "<js element>",
                            "desc": "This is where the description will go."
                        }
                    ]
                }
            }
        ];
    }

    function DataComponent() {
        this.data = [
            {
                title: "mapsdata.json",
                desc: "A Small Description",
                code: {
                    src: "data/mapsdata.json",
                    lines: "",
                    links: [{
                        "name": "<data element>",
                        "desc": "This is where the description will go."
                    },
                        {
                            "name": "<data element>",
                            "desc": "This is where the description will go."
                        },
                        {
                            "name": "<data element>",
                            "desc": "This is where the description will go."
                        }
                    ]
                }
            }
        ];
    }


})(window.angular);