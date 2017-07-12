  this.title = "Basic Setup";
  this.desc = "Some description about data tables would go here";
  this.demo = function($resource){
    var $this = this;
    $resource('data.json').query().$promise.then(function(people) {
      $this.people = people;
    });
  };