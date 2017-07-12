(function(angular) {
  'use strict';

angular.module('getting-started',[])

.component('gettingStarted', {
  templateUrl: 'templates/tutorial.html',
  $routeConfig: [
    {path: '/html', name: 'HTML', component: 'introHTML', useAsDefault: true},
    {path: '/scss', name: 'SCSS', component: 'introSCSS'},
    {path: '/js', name: 'JS', component: 'introJS'},
    {path: '/data', name: 'Data', component: 'introData'}
  ],
  controller: TutorialComponent
})

.component('introHTML', {
  templateUrl: 'templates/tabs/html-tab.html',
  controller: HTMLComponent
})

.component('introSCSS', {
  templateUrl: 'templates/tabs/scss-tab.html',
  controller: SCSSComponent
})

.component('introJS', {
  templateUrl: 'templates/tabs/js-tab.html',
  controller: JSComponent
})

.component('introData', {
  templateUrl: 'templates/tabs/data-tab.html',
  controller: DataComponent
});

function TutorialComponent() {
  this.title = 'Getting Started';
  this.titleDescription = "This is an in depth description on how this guide was built";
  this.tabs = [
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
  this.activeTab = "HTML";
}

function HTMLComponent($scope) {

  this.highlight = function(line,$event){
    $scope.$parent.$parent.$parent.$parent.$ctrl.highlightCode(line,$event.currentTarget);
  };

  this.unhighlight = function($event){
    $scope.$parent.$parent.$parent.$parent.$ctrl.unhighlightCode($event.currentTarget);
  };

  this.data = [
    {
      title: "Create index.html",
      desc: "We start by creating the index.html file. In this file we give Angular control over this project by doing the following:",
      code: {
        id: "index-head",
        src: "templates/code-snippits/getting-started/index-head.html",
        lines: "2,7,10",
        links: [{
          "name": "ng-app",
          "desc": "This is where we define our main module, thus initiating AngularJS.",
          "highlight": "2"
        },
        {
          "name": "<base>",
          "desc": "We use HTML5 AngularJS Routing. Here we define where our file is relative to our servers root directory.",
          "highlight": "7"
        },
        {
          "name": "<app>",
          "desc": "This is where all of our code will be appended to.",
          "highlight": "10"
        }]
      }
    },
    {
      title: "Add CSS Dependencies",
      desc: "Next we define our CSS dependencies",
      code: {
        src: "templates/code-snippits/getting-started/index-css.html",
        lines: "9,11-13,15",
        links: [{
          "name": "Framework CSS",
          "desc": "This is where we define framework dependent CSS such as Bootstrap",
          "highlight": "9"
        },
        {
          "name": "Plugin CSS",
          "desc": "This is where we define our plugin's CSS dependencies such as Prism and DataTables"
        },
        {
          "name": "Custom CSS",
          "desc": "This is where we load our css"
        }]
      }
    },
    {
      title: "Add JavaScript Dependencies",
      desc: "Lastly, we define our JS files in the body section of index.html",
      code: {
        src: "templates/code-snippits/getting-started/index-js.html",
        lines: "4-5,8-9,12-15,18,21-23,26-32,34-36",
        links: [{
          "name": "Framework ",
          "desc": "This is where we define framework dependent JavaScript such as Jquery, Angular, and Prism"
        },
        {
          "name": "Angular Directives",
          "desc": "This is where we define our plugin's that are Angular specific. The proper term used for these type of files are called Directives"
        },
        {
          "name": "Parent Component",
          "desc": "This is where our main component that controls everything is defined"
        },
        {
          "name": "Child Components",
          "desc": "Once you land on the index.html page you can be taken to three places: The 404 Page, The Guide, or the Login Page. We define the JavaScript files needed for each of those pages here."
        },
        {
          "name": "Grand-Child Components",
          "desc": "Within the Guide component, we have 9 child compoents: Getting Started, Data Tables, Charts, Data Binding, Forms, Themes, Contacts, etc"
        },
        {
          "name": "Angular Routing",
          "desc": "This is where we define Angular Routing. We list these dependencies last so that they can easily map to each component."
        }]
      }
    },
    {
      title: "Create 404.html",
      desc: "Here is our 404 page. This page just has a title, description, and button to redirect users.",
      code: {
        src: "templates/404.html",
        lines: "5,7,10",
        links: [{
          "name": "{{$ctrl}}",
          "desc": "This returns the constructor of the controller"
        },
        {
          "name": "{{$ctrl.title}}",
          "desc": "This returns the title property of our controller"
        },
        {
          "name": "{{$ctrl.disclaimer}}",
          "desc": "This returns the disclaimer property of our controller"
        },
        {
          "name": "{{$ctrl.buttons}}",
          "desc": "This returns the button object of our controller"
        }]
      }
    },
    {
      title: "Create guide.html",
      desc: "Here is where we hold the shell for the guide. This page just has a title, description, and button to redirect users.",
      code: {
        src: "templates/guide.html",
        lines: "4,5,6,8,9,10,24,30",
        links: [{
          "name": "{{$ctrl}}",
          "desc": "This retrieves the constructor of the controller"
        },
        {
          "name": "{{$ctrl.secondaryColor}}",
          "desc": "This retrieves the secondaryColor property from the Guide controller"
        },
        {
          "name": "{{$ctrl.logoSrc}}",
          "desc": "This retrieves the secondaryColor property from the Guide controller"
        },
        {
          "name": "{{$ctrl.username}}",
          "desc": "This retrieves the username property from the Guide controller"
        },
        {
          "name": "side_link in $ctrl.side_menu",
          "desc": "Here we use ng-repeat to loop through the side_menu property of the Guide's controller. Using ng-repeat assigns each object inside of the side_menu array to side_link. From there we're able to access {{side_link.icon}}, {{side_link.name}}, and {{side_link.text}}."
        },{
          "name": "top_link in $ctrl.top_menu",
          "desc": "Here we use ng-repeat to loop through the top_menu property of the Guide's controller. Using ng-repeat assigns each object inside of the top_menu array to top_link. From there we're able to access {{top_link.icon}}, {{top_link.name}}, and {{top_link.text}}. Lastly, we use ng-class to dynamically toggle the class by comparing the activeLink name to each links name. If the activeLink name is equal to the top_link name, that element gets the active class name."
        },{
          "name": "<ng-outlet></ng-outlet>",
          "desc": "Ng-outlet defines where the view for each route defined in the Guides's controller should render. For example, when I click on Data Tables, the view/HTML will render in place of <ng-outlet></ng-outlet>"
        }]
      }
    }
  ];
}

function SCSSComponent(){
 this.data = [
     {
         title: "Add Varibles.scss",
         desc: "This is where the main variables are. This is also the place that the only reusable values lives as well",
         code: {
             id: "varibles-scss",
             src: "sass/_variables.scss",
             lines: "",
             links: [{
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
                 }]
         }
     },
     {
         title: "Add Styles.scss",
         desc: "This is where the main CSS is. This is also the place that the only custom CSS lives as well",
         code: {
             id: "styles-scss",
             src: "sass/_customstylesheet.scss",
             lines: "",
             links: [{
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
                 }]
         }
     }
  ];
}

function JSComponent() {
    this.data = [
    {
      title: "Create app.js",
      desc: "Here we defined our main routes.",
      code: {
        lines: "4,5-7,8,9,10,11-15",
        links: [{
          "name": "angular.module('usaaApp')",
          "desc": "This is where we declare index.html as an angular app. Refer to ng-app='usaaApp' in index.html. Lastly, we define all of the modules we want to link to, in this case - we're depedent on the component router, the guide page, the login, or 404 page."
        },
        {
          "name": "angular.module('usaaApp').config()",
          "desc": "This defines the configuration of the routing. We use html5Mode to allow hashing #Hello/hello."
        },
        {
          "name": "angular.module('usaaApp').value()",
          "desc": "This defines the value of the routing. In our case, we use this to define app.js as the root router components. This tells angular that - when looking up a path..start here."
        },
        {
          "name": "angular.module('usaaApp').component()",
          "desc": "This is where we defined key properties for the usaaApp module. Here we define where the templateUrl and routeConfig. The templateUrl is where the view will be rendered while the routeConfig defines the path, the name of the link, and component name. Within the routeConfig, we set 'useAsDefault' to the default link."
        }],
        src: "js/components/app.js"
      }
    },
    {
      title: "Create 404.js",
      desc: "A short description would go here about JavaScript",
      code: {
        src: "js/components/404.js",
        lines: "5,8-11,13-20",
        links: [{
          "name": "angular.module('nopage')",
          "desc": "This is where we declare the module no-page which is used for the 404 page"
        },
        {
          "name": "angular.module('nopage').component()",
          "desc": "This is where we defined key properties for the nopage module. Here we define where the templateUrl and routeConfig. The templateUrl is where the view will be rendered while the routeConfig defines the path, the name of the link, and component name. Within the routeConfig, we set 'useAsDefault' to the default link."
        },
        {
          "name": "MainComponent()",
          "desc": "This function servers as the controller for the 404.html view. Here we define the title, description, and button properties."
        }],
      }
    },
    {
      title: "Create guide.js",
      desc: "A short description would go here about JavaScript",
      code: {
        src: "js/components/guide.js",
        lines: "4-12,15-29,32,35-40,43-114,117-131",
        links: [{
          "name": "component_routes",
          "desc": "This is where we defined key properties for the guide module. Here we define where the templateUrl and routeConfig. The templateUrl is where the view will be rendered while the routeConfig defines the path, the name of the link, and component name. Within the routeConfig, we set 'useAsDefault' to the default link."
        },
        {
          "name": "$map()",
          "desc": "This function looks for specific valus in array of objects. If the value matches, the array is returned"
        },
        {
          "name": "angular.module('guide_page')",
          "desc": "This is where we declare the module guide_page which is where we can access all of the components"
        },
        {
          "name": "angular.module('guide_page').component()",
          "desc": "This is where we defined key properties for the guide_page module. Here we define where the templateUrl and routeConfig. The templateUrl is where the view will be rendered while the routeConfig defines the path, the name of the link, and component name. Within the routeConfig, we set 'useAsDefault' to the default link."
        },
        {
          "name": "GuideComponent()",
          "desc": "This function servers as the controller for the Guide.html view. Here we define the logoSrc, username, primary color, secondary color, side menu, and top menu."
        },
        {
          "name": "$scope.$on('$routeChangeSuccess',fn)",
          "desc": "This function is used to run function when a link is entered or altered. We use this to highlight the correct links and reinitize the code plugin."
        }]
      }
    },
    {
      title: "Create login.js",
      desc: "A short description would go here about JavaScript",
      code: {
        src: "js/components/login.js",
        lines: "5,8-11,13-48",
        links: [
        {
          "name": "angular.module('login_page')",
          "desc": "This is where we declare the module login_page which is where we can access all of the components"
        },
        {
          "name": "angular.module('login_page').component()",
          "desc": "This is where we defined key properties for the login_page module. Here we define where the templateUrl and routeConfig. The templateUrl is where the view will be rendered while the routeConfig defines the path, the name of the link, and component name. Within the routeConfig, we set 'useAsDefault' to the default link."
        },
        {
          "name": "LoginComponent()",
          "desc": "This function servers as the controller for the Guide.html view. Here we define the title, buttons, form, and form data."
        }]
      }
    }
  ];
}

function DataComponent() {
  this.data = [
    {
      title: "The Guide's Data Source",
      desc: "Below we define the services/data used to create the Guide",
      code: {
        src: "templates/code-snippits/getting-started/intro-json.js",
        lines: "2,5,8-10,14-17,20-57,60-77",
        links: [{
          "name": "this.logoSrc",
          "desc": "This the path to the source of the logo image"
        },
        {
          "name": "this.username",
          "desc": "This is where the username is stored"
        },
        {
          "name": "this.primaryColor",
          "desc": "This is where the CSS for the primary-color of the website is defined"
        },
        {
          "name": "this.secondaryColor",
          "desc": "This is where the CSS for the secondary-color of the website is defined"
        },
        {
          "name": "this.side_menu",
          "desc": "This is where the side menu is defined. The name property is what we refer to access the link."
        },{
          "name": "this.top_menu",
          "desc": "This is where the top menu is defined. The name property is what we refer to access the link."
        }]
      }
    }
  ];
}

})(window.angular);
