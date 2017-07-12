$scope.msg = 'Hello! This is a sample message!';
$scope.template = '';

$scope.positions = ['center', 'left', 'right'];
$scope.position = $scope.positions[2];

$scope.duration = 10000;

var messageTemplate = '<span>This is an example using a dynamically rendered template for the message text. '+
    'You can have <a href="" ng-click="clickedLink()">hyperlinks</a> with ng-click or any valid enhanced html.</span>';
