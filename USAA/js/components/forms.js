(function(angular) {
  'use strict';

angular.module('forms-mod',[])

//define template to use to show forms
.component('forms', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
      {path: '/demo', name: 'Demo', component: 'formsDemo', useAsDefault: true},
      {path: '/html', name: 'HTML', component: 'formsHTML'},
      {path: '/scss', name: 'SCSS', component: 'formsSCSS'},
      {path: '/js', name: 'JS', component: 'formsJS'},
      {path: '/data', name: 'Data', component: 'formsJSON'}
  ],
  controller: TutorialComponent
})

.component('formsDemo', {
  templateUrl: 'templates/components/form.html',
  controller: DemoComponent
})

.component('formsHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('formsSCSS', {
    templateUrl: 'templates/tabs/scss-tab.html',
    controller: SCSSComponent
})

.component('formsJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('formsJSON', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
})

.factory('formsFactory', function($http) {
    return $http({method: 'GET', url: 'data/forms.json'});
});

function TutorialComponent() {
  this.title = 'Forms';
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

function DemoComponent(formsFactory) {
    this.title = "Demo";
    this.desc = "Some description right here";

    this.demo = function(){
        var $this = this;
        formsFactory.then(function(response) {
            $this.form = response.data;
        });
    };
}

function HTMLComponent() {
  this.data = [
    {
      title: "form.html",
      desc: "A Small Description",
      code: {
        src: "templates/components/form.html",
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
            title: "Add form-styles.scss",
            desc: "This is the place that the only custom SCSS lives",
            code: {
                id: "form-style",
                src: "sass/forms-styles.scss",
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
      title: "forms.js",
      desc: "A Small Description",
      code: {
        src: "js/components/forms.js",
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
      title: "forms.json",
      desc: "A Small Description",
      code: {
        src: "data/forms.json",
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