(function(angular) {
    'use strict';
    angular.module('msg-notify',['cgNotify'])

        .component('notifications', {
            templateUrl: 'templates/tutorial.html',
            $routeConfig: [
                {path: '/demo', name: 'Demo', component: 'notifyDemo', useAsDefault: true},
                {path: '/html', name: 'HTML', component: 'notifyHTML'},
                {path: '/scss', name: 'SCSS', component: 'notifySCSS'},
                {path: '/js', name: 'JS', component: 'notifyJS'},
                {path: '/data', name: 'Data', component: 'notifyData'}
            ],
            controller: TutorialComponent
        })

        .component('notifyDemo', {
            templateUrl: 'templates/components/notify/notify.html',
            controller: DemoComponent
        })

        .component('notifyHTML', {
            templateUrl: 'templates/tabs/html-tab.html',
            controller: HTMLComponent
        })

        .component('notifySCSS', {
            templateUrl: 'templates/tabs/scss-tab.html',
            controller: SCSSComponent
        })

        .component('notifyJS', {
            templateUrl: 'templates/tabs/js-tab.html',
            controller: JSComponent
        })

        .component('notifyData', {
            templateUrl: 'templates/tabs/data-tab.html',
            controller: DataComponent
        })

        .factory('notifyFactory', function($http) {
            return $http({method: 'GET', url: 'data/notify.json'});
        });


    function TutorialComponent() {
        this.title = 'Notifications';
        this.titleDescription = "This description would be about notifications";
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

    function DemoComponent($scope,notify,$timeout,notifyFactory) {
        this.title = "Notifications Setup";
        this.desc = "Some description about notifications would go here";

        $timeout(notifyFactory.then(function(response) {
            $scope.loadData = response.data;
        }));

        $scope.$watch('loadData', function(loadData) {
            if(loadData != undefined){
                $scope.msg = loadData.msg;
                $scope.template = '';
                $scope.positions = loadData.positions;
                $scope.position = $scope.positions[2];
                $scope.duration = loadData.duration;
                $scope.messageTemplate = loadData.messageTemplate;
            }
        },true);

        $scope.demoNotification = function(){
            notify({
                message: $scope.msg,
                templateUrl: $scope.template,
                position: $scope.position,
                duration: $scope.duration
            });
        };

        $scope.closeAll = function(){
            notify.closeAll();
        };

        $scope.demoMessageTemplate = function(){
            notify({
                messageTemplate: $scope.messageTemplate,
                scope:$scope,
                templateUrl: $scope.template,
                position: $scope.position
            });

        };

        $scope.clickedLink = function(){
            notify('You clicked a link!');
        };
    }

    function HTMLComponent() {
        this.data = [
            {
                title: "notify.html",
                desc: "A Small Description",
                code: {
                    src: "templates/components/notify/notify.html",
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
            },
            {
                title: "custom-notify-template.html",
                desc: "A Small Description",
                code: {
                    src: "templates/components/notify/custom-notify-template.html",
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
                title: "Add notifications-styles.scss",
                desc: "This is the place that the only custom SCSS lives",
                code: {
                    id: "notifications-style",
                    src: "sass/notifications-styles.scss",
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
                title: "notify.js",
                desc: "A Small Description",
                code: {
                    src: "js/components/notify.js",
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
                title: "notification.json",
                desc: "A Small Description",
                code: {
                    src: "data/notify.json",
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