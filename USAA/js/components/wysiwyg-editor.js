(function(angular) {
    'use strict';
    angular.module('editor',['summernote'])

        .component('editor', {
            templateUrl: 'templates/tutorial.html',
            $routeConfig: [
                {path: '/demo', name: 'Demo', component: 'wysiwygDemo', useAsDefault: true},
                {path: '/html', name: 'HTML', component: 'wysiwygHTML'},
                {path: '/scss', name: 'SCSS', component: 'wysiwygSCSS'},
                {path: '/js', name: 'JS', component: 'wysiwygJS'},
                {path: '/data', name: 'Data', component: 'wysiwygData'}
            ],
            controller: TutorialComponent
        })

        .component('wysiwygDemo', {
            templateUrl: 'templates/components/wysiwyg-editor.html',
            controller: DemoComponent
        })

        .component('wysiwygHTML', {
            templateUrl: 'templates/tabs/html-tab.html',
            controller: HTMLComponent
        })

        .component('wysiwygSCSS', {
            templateUrl: 'templates/tabs/scss-tab.html',
            controller: SCSSComponent
        })

        .component('wysiwygJS', {
            templateUrl: 'templates/tabs/js-tab.html',
            controller: JSComponent
        })

        .component('wysiwygData', {
            templateUrl: 'templates/tabs/data-tab.html',
            controller: DataComponent
        })

        .factory('wysiwygFactory', function($http) {
            return $http({method: 'GET', url: 'data/wysiwyg.json'});
        });

    function TutorialComponent() {
        this.title = 'WYSIWYG Editor';
        this.titleDescription = "This description would be about wysiwyg editor";
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

    function DemoComponent($scope,wysiwygFactory,$timeout) {

        $timeout(wysiwygFactory.then(function(response) {
            $scope.loadData = response.data;
        }));

        $scope.$watch('loadData', function(loadData) {
            if(loadData != undefined){
                $scope.sampleText = loadData.sampleText;
            }
        },true);

        $scope.options = {
            height: 300,
            toolbar: [
                ['edit',['undo','redo']],
                ['headline', ['style']],
                ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                ['fontface', ['fontname']],
                ['textsize', ['fontsize']],
                ['fontclr', ['color']],
                ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
                ['height', ['height']],
                ['table', ['table']],
                ['insert', ['link','picture','video','hr']],
                ['view', ['fullscreen', 'codeview']],
                ['help', ['help']]
            ]
        };
    }

    function HTMLComponent() {
        this.data = [
            {
                title: "wysiwyg-editor.html",
                desc: "A Small Description",
                code: {
                    src: "templates/components/wysiwyg-editor.html",
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
                title: "Add wysiwyg-styles.scss",
                desc: "This is the place that the only custom SCSS lives as well",
                code: {
                    id: "wysiwyg-style",
                    src: "sass/wysiwyg-styles.scss",
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
                title: "wysiwyg-editor.js",
                desc: "A Small Description",
                code: {
                    src: "js/components/wysiwyg-editor.js",
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
                title: "wysiwyg-editor.json",
                desc: "A Small Description",
                code: {
                    src: "data/wysiwyg.json",
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