(function(angular) {
  'use strict';

//rule of thumb, if you're not using any directive/components - always leave the array empty
angular.module('contact_page',[])

//define template to use to show forms
.component('contact', {
  templateUrl: 'templates/contact.html',
  controller: ContactComponent
});

function ContactComponent() {
  this.title = 'Contact Page';
  this.titleDescription = "This is where we will list emails, phone numbers, and source code references";
}

})(window.angular);