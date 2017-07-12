(function(angular) {
  'use strict';

angular.module('data-table',['datatables','ngResource'])

.component('tablesData', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
    {path: '/demo', name: 'Demo', component: 'tableDemo', useAsDefault: true},
    {path: '/html', name: 'HTML', component: 'tableHTML'},
    {path: '/scss', name: 'SCSS', component: 'tableSCSS'},
    {path: '/js', name: 'JS', component: 'tableJS'},
    {path: '/data', name: 'Data', component: 'tableData'}
  ],
  controller: TutorialComponent
})

.component('tableDemo', {
  templateUrl: 'templates/components/data-table.html',
  controller: DemoComponent
})

.component('tableHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('tableSCSS', {
    templateUrl: 'templates/tabs/scss-tab.html',
    controller: SCSSComponent
})

.component('tableJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('tableData', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
})

.factory('tableFactory', function($http) {
    return $http({method: 'GET', url: 'data/datatable.json'});
});

function TutorialComponent() {
  this.title = 'Data Tables';
  this.titleDescription = "This description would be about data tables";
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

function DemoComponent($scope,tableFactory,$timeout) {
    $scope.title = "Basic Setup";
    $scope.desc = "Some description about data tables would go here";

    $scope.demo = function(){
        $timeout(tableFactory.then(function(response) {
            $scope.loadData = response.data;
        }));

        $scope.$watch('loadData', function(loadData) {
            if(loadData != undefined){
                $scope.people = loadData;
            }
        });
    };
}

function HTMLComponent() {
  this.data = [
    {
      title: "data-table.html",
      desc: "A Small Description",
      code: {
        src: "templates/components/data-table.html",
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
            title: "datatables-styles.scss",
            desc: "This is the place that the only custom SCSS lives",
            code: {
                id: "data-tables-style",
                src: "sass/datatables-styles.scss",
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
      title: "data-table.js",
      desc: "A Small Description",
      code: {
        src: "js/components/data-table.js",
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
      title: "data-table.json",
      desc: "A Small Description",
      code: {
        src: "data/datatable.json",
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