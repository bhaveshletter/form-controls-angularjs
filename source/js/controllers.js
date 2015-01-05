'use strict';

/* Controllers */

var app = angular.module('App', []);

app.controller('ModalDemoCtrl', function ($scope, $modal) {

	$scope.people = [
	{ name: 'Ajg Smart', email: 'abc@email.com', age: 12, country: 'United States' },
	{ name: 'LeanTaas', email: 'def@email.com', age: 12, country: 'Argentina' },
	{ name: 'Castlight', email: 'ghi@email.com', age: 21, country: 'India' },
	{ name: 'Wavemaker', email: 'jkl@email.com', age: 21, country: 'Bhutan' },
	{ name: 'SocialTwist', email: 'mno@email.com', age: 30, country: 'Pakostan' },
	{ name: 'Pramati WebServer', email: 'pqe@email.com', age: 30, country: 'Nepal' },
	{ name: 'Cario', email: 'stu@email.com', age: 43, country: 'Mynanmar' },
	{ name: 'AppDynamics', email: 'vwx@email.com', age: 54, country: 'Bangladesh' },
	{ name: 'RPX', email: 'yz1@email.com', age: 15, country: 'Sri Lanka' },
	{ name: 'HR', email: 'hr@email.com', age: 43, country: 'China' }
	];

	$scope.open = function (size) {

		var modalInstance = $modal.open({
			templateUrl: 'views/myModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function () {
					return $scope.people;
				}
			}
		});

		modalInstance.result.then(function (data) {
			console.info('Modal dismissed at-1: ' + new Date());
		}, function () {
			console.info('Modal dismissed at-2: ' + new Date());
		});
	};
	
});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

	$scope.user = {items: items, modal1: {}, fName: null, uEmail: null, uNote: null, dt: null, dt1: null, uColor: null};
	$scope.format = 'dd-MM-yyyy';

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.open1 = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened1 = true;
	};

	$scope.dateOptions = {
		showWeeks: false
	};

	$scope.ok = function () {
		$modalInstance.close($scope.user.items);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.etc = function(){
		$scope.alerts = [
		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
		{ type: 'warning', msg: 'Well done! You successfully read this important alert message.' },
		{ type: 'info', msg: 'Well done! You successfully read this important alert message.' },
		{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		];
	}

	$scope.addAlert = function(msg, type) {
		$scope.alerts.push({msg: msg, type: type});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

/*	$scope.reset = function(){
		$scope.user.modal1 = {};
		$scope.myForm.$setPristine(true);
	};*/

/*	//For theme="selectize" of ui-select
	$scope.clear = function($event) {
		$event.stopPropagation(); 
		$scope.modal1.selected = undefined;
	};*/
	
});

// Works except ui-select
app.directive('myFocus', function ($timeout) {
	return function (scope, element, attrs) {
		attrs.$observe('myFocus', function (value) {
			$timeout(function() {
				value && element[0].focus();
			});
		});
	}
});

// Only for ui-select
app.directive("uiselectAutoFocus", function ($timeout) {
	return {
		restrict: 'A',
		//require: 'uiSelect',
		link: function (scope, element, attrs) {
			attrs.$observe('uiselectAutoFocus', function (value) {
				$timeout(function() {
					value && element.find("input.ui-select-focusser").focus();
				});
			});
		}
	}
});