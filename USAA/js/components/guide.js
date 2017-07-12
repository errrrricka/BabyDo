(function(angular) {
  'use strict';

var component_routes = [
      {path: '/dataTables/...', name: 'Tables', component: 'tablesData'},
      {path: '/charts/...', name: 'Charts', component: 'chartData'},
      {path: '/data-binding/...', name: 'Binding', component: 'binding'},
      {path: '/forms/...', name: 'Forms', component: 'forms'},
      {path: '/drag-and-drop/...', name: 'Drag', component: 'dragAndDropData'},
      {path: '/notifications/...', name: 'Notify', component: 'notifications'},
      {path: '/wysiwyg-editor/...', name: 'Editor', component: 'editor'},
      {path: '/data-maps/...', name: 'Datamaps', component: 'mapper'},
      {path: '/setup/...', name: 'Intro', component: 'gettingStarted', useAsDefault: true},
      {path: '/themes', name: 'Themes', component: 'themes'},
      {path: '/contact', name: 'Contact', component: 'contact'}
];

//this function loops through array of object to compare its properties to a value
var $map = function(array,prop,value){
      //define variables
      var matched_value,
      current_obj,
      index = 0;

      for(index; index < array.length; index++){
        current_obj = array[index];
        if(current_obj[prop].toLowerCase() === value.toLowerCase()){
          matched_value = current_obj;
        }
      }
      //return the matched value
      return matched_value;
};

//list app name and the different modules we built that will be used in the main router
    angular.module('guide_page', ['ngRoute', 'theme_page', 'contact_page', 'getting-started', 'data-table', 'chart-data', 'data-binding',
        'drag-and-drop', 'forms-mod', 'msg-notify', 'editor', 'data-maps-page'])
//main router
.component('guide', {
  templateUrl: 'templates/guide.html',
  controller: GuideComponent,
  $routeConfig: component_routes
});

//the menu section
function GuideComponent($scope) {
  var $this = this;
  this.logoSrc = "images/usaa-logo.png";
  this.username = "John Doe";

  this.primaryColor = {
    "background" : "#1e91c0",
    "color" : "#1e91c0"
  };

  this.secondaryColor = {
    "background" : "#086a94",
    "color" : "#086a94"
  };

  this.highlightCode = function(id,link){
    jQuery(link).closest('.data-area').find('#line-'+id).show().siblings('.line-highlight').css('opacity',0);
  };

  this.unhighlightCode = function(link){
    jQuery(link).closest('.data-area').find('.line-highlight').css('opacity',1);
  };

  this.toggleMenu = function(){
    this.menuClosed = this.menuClosed ? false : true;
  };

  //main menu
  this.side_menu = [
    {
        name: "Tables", //Name of the link (converts to path on front end)
        text: "Data Tables", // Link text
        icon: 'glyphicon glyphicon-list' // Link Icon (bootstrap)
    },
    {
        name: "Charts",
        text: "Charts",
        icon: 'glyphicon glyphicon-signal'
    },
    {
        name: "Binding",
        text: "Data Binding",
        icon: 'glyphicon glyphicon-random'
    },
    {
        name: "Forms",
        text: "Forms",
        icon: 'glyphicon glyphicon-list-alt'
    },
    {
        name: "Drag",
        text: "Drag and Drop",
        icon: 'glyphicon glyphicon-move'
    },
    {
        name: "Notify",
        text: "Notifications",
        icon: 'glyphicon glyphicon-alert'
    },
    {
        name: 'Editor',
        text: "WYSIWYG Editor",
        icon: 'glyphicon glyphicon-pencil'
    },
    {
        name: 'Datamaps',
        text: "Data Maps",
        icon: 'glyphicon glyphicon-random'
    }
  ];
  //side menu
  this.top_menu = [
    {
      name: "Intro", // Name of the link (converts to path on front end)
      text: "Setup" // Link text
    },
    {
      name: "Themes",
      text: "Themes"
    },
    {
      name: "Contact",
      text: "Contact"
    },
    {
      name: "Login",
      text: "Logout"
    }
  ];

  //this highlights the right links and tabs on hover
  $scope.$on('$routeChangeSuccess', function (scope) {
      var timeout,
      //get current component name
      currentComponent = $scope.$$ngOutlet.$$componentName,
      //get current tabs
      currentTab = $scope.$$ngOutlet.$$router._outlet.currentInstruction,
      //get all tabs
      childComponent = $scope.$$ngOutlet.$$outlet.currentController;
      //set active link
      $this.activeLink = $map(component_routes,'component',currentComponent).name;
      //set active tab
      if(currentTab) childComponent.activeTab = $map(childComponent.tabs,'name',currentTab.urlPath).name;
      //lastly highlight syntax
      timeout = setTimeout(function(){Prism.highlightAll();},0);
  });

}

})(window.angular);
