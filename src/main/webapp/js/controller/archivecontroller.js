app.controller('archiveCtrl', function($scope, $controller) {
	console.log("ch ststes ...................");
	$controller('homeCtrl',{$scope:$scope});
		$scope.homecard=false;
		$scope.archievecard=true;
		$scope.trashcard=false;
		$scope.takenotecard=false;
		$scope.pincard=false;
		
		$scope.setmargintop={
				"margin-top" : "60px"
		}
});