(function(angular) {
  'use strict';

angular.module('chart-data',[])

.component('chartData', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
      {path: '/demo', name: 'Demo', component: 'chartDemo', useAsDefault: true},
      {path: '/html', name: 'HTML', component: 'chartHTML'},
      {path: '/scss', name: 'SCSS', component: 'chartSCSS'},
      {path: '/js', name: 'JS', component: 'chartJS'},
      {path: '/data', name: 'Data', component: 'chartJSON'}
  ],
  controller: TutorialComponent
})

.component('chartDemo', {
  templateUrl: 'templates/components/charts.html',
  controller: DemoComponent
})

.component('chartHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('chartSCSS', {
    templateUrl: 'templates/tabs/scss-tab.html',
    controller: SCSSComponent
})

.component('chartJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('chartJSON', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
})

.factory('chartFactory', function($http) {
    return $http({method: 'GET', url: 'data/charts.json'});
});

function TutorialComponent() {
  this.title = 'Charts';
  this.titleDescription = "This would be a small description";
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

function DemoComponent($scope,chartFactory,$timeout) {

    $timeout(chartFactory.then(function(response) {
        $scope.loadData = response.data;
    }));

    $scope.$watch('loadData', function(loadData) {
        if(loadData != undefined){
            angular.forEach(loadData,function (value, key) {
                if(value.chart.type == "area"){
                    Highcharts.chart('area-chart', value);
                }
                else if(value.chart.type == "pie"){
                    Highcharts.chart('pie-chart', value);
                }
                else if(value.chart.type == "column"){
                    Highcharts.chart('column-chart', value);
                }
            });
        }
    });
}

function HTMLComponent() {
  this.data = [
    {
      title: "charts.html",
      desc: "A Small Description",
      code: {
        src: "templates/components/charts.html",
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
            title: "Add charts-styles.scss",
            desc: "This is the place that the only custom SCSS lives",
            code: {
                id: "charts-styles",
                src: "sass/charts-styles.scss",
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
      title: "charts.js",
      desc: "A Small Description",
      code: {
        src: "js/components/charts.js",
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
      title: "chart.json",
      desc: "A Small Description",
      code: {
        src: "data/charts.json",
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