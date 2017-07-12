(function(angular) {
  'use strict';

angular.module('data-binding',['colorpicker.module'])

.component('binding', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
      {path: '/demo', name: 'Demo', component: 'bindingDemo', useAsDefault: true},
      {path: '/html', name: 'HTML', component: 'bindingHTML'},
      {path: '/scss', name: 'SCSS', component: 'bindingSCSS'},
      {path: '/js', name: 'JS', component: 'bindingJS'},
      {path: '/data', name: 'Data', component: 'bindingJSON'}
  ],
  controller: TutorialComponent
})

.component('bindingDemo', {
  templateUrl: 'templates/components/data-binding.html',
  controller: DemoComponent
})

.component('bindingHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('bindingSCSS', {
    templateUrl: 'templates/tabs/scss-tab.html',
    controller: SCSSComponent
})

.component('bindingJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('bindingJSON', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
})

.factory('bindingFactory', function($http) {
    return $http({method: 'GET', url: 'data/databinding.json'});
});

function TutorialComponent() {
  this.title = 'Data Binding';
  this.titleDescription = "We're building this to show you how data binding works";
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

function DemoComponent($scope,bindingFactory,$timeout) {
    var $this = this;

    $timeout(bindingFactory.then(function(response) {
        $scope.loadData = response.data;
    }));

    $scope.$watch('loadData', function(loadData) {
        if(loadData != undefined){
            $this.form = loadData.form;
            $this.buttonForm = loadData.buttonForm;
        }
    });

    this.$guide = $scope.$parent.$parent.$parent.$ctrl;
    this.$primaryColor = this.$guide['primaryColor'].background;
    this.$secondaryColor = this.$guide['secondaryColor'].background;

    this.setColor = function(color,style){
        var hexMin = 2, newColor = '';
        //new color
        if(style === 'primaryColor')
            newColor = color.length > hexMin ? color : this.$primaryColor;
        else
            newColor = color.length > hexMin ? color : this.$secondaryColor;

        //change color
        this.$guide[style] = {
          background: newColor,
          color: newColor
        };
    };

    this.addLink = function(link,prop){
        //add link to side menu
        this.$guide[prop].push({
          text: link
        });
        link = "";
    };
}

function HTMLComponent() {
  this.data = [
    {
      title: "data-binding.html",
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
            title: "Add dataBinding-styles.scss",
            desc: "This is the place that the only custom SCSS lives",
            code: {
                id: "data-binding-style",
                src: "sass/databinding-styles.scss",
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
      title: "databinding.js",
      desc: "A Small Description",
      code: {
        src: "js/components/databinding.js",
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
      title: "data-binding.json",
      desc: "A Small Description",
      code: {
        src: "data/databinding.json",
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