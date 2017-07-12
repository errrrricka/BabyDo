(function(angular) {
  'use strict';

angular.module('drag-and-drop', ['dndLists'])

.component('dragAndDropData', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
      {path: '/demo', name: 'Demo', component: 'dragAndDropDemo', useAsDefault: true},
      {path: '/html', name: 'HTML', component: 'dragAndDropHTML'},
      {path: '/scss', name: 'SCSS', component: 'dragAndDropSCSS'},
      {path: '/js', name: 'JS', component: 'dragAndDropJS'},
      {path: '/data', name: 'Data', component: 'dragAndDropJSON'}
  ],
  controller: TutorialComponent
})

.component('dragAndDropDemo', {
  templateUrl: 'templates/components/drag-and-drop.html',
  controller: DemoComponent
})

.component('dragAndDropHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('dragAndDropSCSS', {
    templateUrl: 'templates/tabs/scss-tab.html',
    controller: SCSSComponent
})

.component('dragAndDropJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('dragAndDropJSON', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
})

.factory('dragAndDropFactory', function($http) {
    return $http({method: 'GET', url: 'data/drag-and-drop.json'});
});

function TutorialComponent() {
  this.title = 'Drag & Drop';
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

function DemoComponent($scope,dragAndDropFactory,$timeout) {
    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    $timeout(dragAndDropFactory.then(function(response) {
        $scope.loadData = response.data;
    }));

    $scope.$watch('loadData', function(loadData) {
        if(loadData != undefined){
            $scope.models.lists.A = loadData.lists.A;
            $scope.models.lists.B = loadData.lists.B;

            $scope.modelAsJson = angular.toJson($scope.models, true);

        }
    },true);
}

function HTMLComponent() {
  this.data = [
    {
      title: "drag-and-drop.html",
      desc: "A Small Description",
      code: {
        src: "templates/components/drag-and-drop.html",
        lines: "7,9-10",
          links: [{
            "name": "dnd-list",
            "desc": "The dnd-list directive allows to drop elements into it.  The dropped data will be added to the referenced list."
          },
          {
            "name": "dnd-draggable",
            "desc": "The dnd-draggable directive makes an element draggable and will transfer the object that was assigned to it."
          },
          {
            "name": "dnd-moved",
            "desc": "If an element was dragged away, you have to remove it from the original list yourself using the dnd-moved attribute."
          }
        ]
      }
    }
  ];
}

function SCSSComponent(){
    this.data = [
        {
            title: "Add dragdrop-styles.scss",
            desc: "This is the place that the only custom SCSS",
            code: {
                id: "drag-and-drop-style",
                src: "sass/dragdrop-styles.scss",
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
      title: "drag-and-drop.js",
      desc: "A Small Description",
      code: {
        src: "js/components/drag-and-drop.js",
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
      title: "drag-and-drop.json",
      desc: "A Small Description",
      code: {
        src: "data/drag-and-drop.json",
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
