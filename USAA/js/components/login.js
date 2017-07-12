(function(angular) {
  'use strict';

//rule of thumb, if you're not using any directive/components - always leave the array empty
angular.module('login_page',[])

//define template to use to show forms
.component('login', {
  templateUrl: 'templates/login.html',
  controller: LoginComponent
});

function LoginComponent() {
    this.title = 'Log on to USAA';
    this.buttons = [{
        text: "Log In",
        name: "Guide"
    }];

    this.form = function(){
        this.data = [
          {
            type: "text",
            name: 'username',
            placeholder: 'Username',
            id: 'username',
            label: '',
            value: '',
            required: {
                message:"This is a required field",
                value: true
            }
          },
          {
            type: "text",
            name: 'password',
            placeholder: 'Password',
            id: 'password',
            label: '',
            value: '',
            required: {
                message:"This is a required field",
                value: true
            }
          }
        ];
    };
}

})(window.angular);