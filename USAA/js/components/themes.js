(function(angular) {
  'use strict';

//rule of thumb, if you're not using any directive/components - always leave the array empty
angular.module('theme_page',[])

//define template to use to show forms
.component('themes', {
  templateUrl: 'templates/themes.html',
  controller: ThemeComponent
});

function ThemeComponent() {
  this.title = 'Theme Page';
  this.titleDescription = "Here you will be able to change the colors, fonts, and background";
}

})(window.angular);