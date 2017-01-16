angular.module('shopList', ['ngMaterial'])
	.controller('budgetControl', function($scope){
		$scope.setBudget = function(){
			$scope.shopBudget = $scope.budget;
			$scope.budget = null;
		}
		console.log($scope.shopBudget);
	})