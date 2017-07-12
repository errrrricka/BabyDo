(function(angular) {
  'use strict';

//rule of thumb, if you're not using any directive/components - always leave the array empty
angular.module('no_page',[])

//define template to use to show forms
.component('default', {
  templateUrl: 'templates/404.html',
  controller: MainComponent
});

function MainComponent() {
    this.title = 'Page Not Found';
    this.disclaimer = 'Sorry, but the page you are looking for has not been found. Try checking the URL for error, then hit the refresh button on your browser or try to find something else in our Portal.';
    this.buttons = [{
        text: "Back to Home",
        name: "Guide"
    }];
}

})(window.angular);