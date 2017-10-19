var app = angular.module("CINQapp", []);

app.controller("crudControl", function($scope){
	
	
	//just an initial set of data
	$scope.listAllData = [
	                      {id:'01',name:'Nome01', email:'email05@email.com', province:'DD'},
	                      {id:'02',name:'Nome02', email:'email07@email.com', province:'CC'},
	                      {id:'03',name:'Nome03', email:'email06@email.com', province:'BB'},
	                      {id:'04',name:'Nome04', email:'email04@email.com', province:'AA'}
	                      ];
	
	
	$scope.del = function(id){
		var confirmPopup = confirm('Are you sure you want to delete this register?');
		if(confirmPopup == true){
			var index = getSelectedIndex(id);
			$scope.listAllData.splice(index, 1);
		}
	};
	
	function getSelectedIndex(id){
		for(var i=0; i<$scope.listAllData.length; i++)
			if($scope.listAllData[i].id==id)
				return i;
			return -1;
	};
	
	$scope.selectEdit = function(id){
		var index = getSelectedIndex(id);
		var register = $scope.listAllData[index];
		$scope.id = register.id;
		$scope.name = register.name;
		$scope.email = register.email;
		$scope.province = register.province;
	};
	
	$scope.add = function(){
		$scope.listAllData.push({
			id:$scope.id,
			name:$scope.name, 
			email:$scope.email, 
			province:$scope.province
		});
		$scope.id = '';
		$scope.name = '';
		$scope.email = '';
		$scope.province = '';
	};
	
	$scope.edit = function(){
		var index = getSelectedIndex($scope.id);
		$scope.listAllData[index].name = $scope.name;
		$scope.listAllData[index].email = $scope.email;
		$scope.listAllData[index].province = $scope.province;
	};
	
	//in a real app I should separate this part, because most of system tables need sorting
	
	$scope.sortColumn = "name";
	
});