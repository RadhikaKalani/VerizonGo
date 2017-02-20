var app = angular.module('starter.controllers', [])
var locSeleted = '001';
var pLocation = "139 8th ave, New York, NY, 10011";

app.controller('DashCtrl', function($scope, $http, $state) {
  $scope.flagDisable = true;
  $scope.goToMain = function(){
    $state.go('tab.main');
  };

  $scope.passwordType = function (text){
    console.log("I am typing");
    if (text.length > 5){
      console.log("Greater than 5");
      $scope.flagDisable = false;

    }
  };
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3000/' + 'getTest'
  }).
  success(function (data, status, headers, config) {
    $scope.devicesArray = [];
    angular.forEach(data, function (item) {
      $scope.devicesArray.push(item);


    });


  }).
  error(function (data, status, headers, config) {
    console.log("Error trying to get data");
  });

})


app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('AccountCtrl', function($scope, $state) {

  $scope.goToPayBill = function (){
    $state.go('tab.bill');
  }
});

app.controller('MainCtrl', function($scope, $state) {
  $scope.goToMyAccount = function(){
    console.log("Go To My Account");
    $state.go('tab.account')

  };

  $scope.goToLocations = function(){
    $state.go('tab.locations');
    console.log("Locations OK");
  };


  $scope.goToEmployees = function(){
    $state.go('tab.employees');
  };

  $scope.goToAppointment = function(){
    $state.go('tab.appointment');
  };
	
  
});

app.controller('employeesCtrl', function($scope) {
  $scope.testing = "hello";
  $scope.oldJson = [{ "storeNum": '001',
  "imgLoc":"img/image6.jpg",
  "name": "Natakki",
  "degree": "Computer science",
  "specialty": "IOS specialist", 
  "likes": "100", 
  "comments":[{"text":"Very good!"},{"text":"Outstanding experience"}]         
},
{ "storeNum":'001',
"imgLoc":"img/image4.jpg",
"name": "Briana",
"degree": "Computer science",
"specialty": "Samsung specialist",
"likes": "75",
"comments":[{"text":"The best customer service ever"},{"text":"Service was so good"}]                          
},
{"storeNum": '002',
"imgLoc":"img/image3.jpg",
"name": "Radhika",
"degree": "Math",
"specialty": "General Solutions Specialist",
"likes": "750",
"comments":[{"text":"Best customer service ever"},{"text":"Very good. Super happy with the service"}]        
},
{"storeNum": '002',
"imgLoc":"img/image1.jpg",
"name": "Rehmat",
"degree": "Math",
"specialty": "General Solutions Specialist",
"likes": "750",
"comments":[{"text":"Best expert ever"},{"text":"Extremely pleased with the experience"}]        
},
{"storeNum": '003',
"imgLoc":"img/image2.jpg",
"name": "Annmarie",
"degree": "Computer Science and International Business",
"specialty": "Samsung specialist",
"likes": "75",
"comments":[{"text":"Great customer service"},{"text":"The best"}]      
}];
$scope.cLocation = pLocation;
$scope.newJson = [];
for(var i = 0; i < $scope.oldJson.length; i++) 
{
  var obj = $scope.oldJson[i];
  console.log("outside if:" + locSeleted);
  if (obj.storeNum == locSeleted)
  { 
    console.log("ACTUAL SELECTED:" + locSeleted);
    console.log(obj.name);
    $scope.newJson.push(obj);
  }
  console.log("Store Number" + obj.storeNum);
}
$scope.Employees = $scope.newJson;
});


app.controller('locationsCtrl', function($scope, $state, $ionicLoading) {
  $scope.listLocations = [{"id": "001",
  "address": "139 8th ave",
  "city": "New York",
  "state": "NY",
  "zipcode": "10011",
  selected: false
},
{"id": "002",
"address": "154 W 14th st",
"city": "New York",
"state": "NY",
"zipcode": "10011",
selected: true
},
{"id": "003",
"address": "263 W 23rd st",
"city": "New York",
"state": "NY",
"zipcode": "10011",
selected: false
}];

$scope.data = {
  clientSide: "001"
};

$scope.locChange = function(item) {
 locSeleted = item.id;
 pLocation = item.address + ", " + item.city + " ," + item.state + " ," + item.zipcode;
 console.log("SELECTED:" + locSeleted);
 $scope.pLocation = locSeleted;
};

$scope.createVariable = function($scope) {
  $state.go('tab.main');
};


});
