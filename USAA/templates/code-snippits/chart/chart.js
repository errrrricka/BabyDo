//Line Chart

  $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.lineSeries = ['Series A', 'Series B'];
  $scope.lineData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.lineOptions = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };


  //Bar Chart

  $scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.barSeries = ['Series A', 'Series B'];

  $scope.barData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  //Circle Chart

  $scope.circleLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.circleData = [300, 500, 100];

  //Pie Chart

  $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.pieData = [300, 500, 100];