(function(angular) {
  'use strict';
//list app name and the different modules we built that will be used in the main router
angular.module('usaaApp', ['ngComponentRouter','guide_page','login_page','no_page'])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'app')
.component('app', {
  templateUrl: 'templates/app.html',
  $routeConfig: [
    {path: '/', name: 'Login', component: 'login', useAsDefault: true},
    {path: '/Guide/...', name: 'Guide', component: 'guide'},
    {path: '**', component: 'default'}
  ]
});

})(window.angular);