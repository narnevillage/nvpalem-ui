var webModuleApp = angular.module('brpalemApp', []);

webModuleApp.controller('HeaderController', function($scope, $http) {
    $http.get('assets/mockjson/header.properties').then(function(response) {
            $scope.headerResp = response.data;
        });
});

webModuleApp.controller('FooterController', function($scope, $http) {
    $http.get('assets/mockjson/footer.properties').then(function(response) {
            $scope.footerResp = response.data;
        });
});

webModuleApp.controller('BodySectionController', function($scope, $rootScope, $http) {
    $http.get('assets/mockjson/body.properties').then(function(response) {
            $rootScope.mainResp = response.data;
            $rootScope.mainResp.bodyContent = response.data.bodyContent_1;
            //$scope.$broadcast('loadBodyContent', response.data);
        });
});

webModuleApp.controller('MainController', function($scope, $http) {
});

webModuleApp.controller('LeftMenuController', function($scope, $rootScope, $http) {
    $http.get('assets/mockjson/leftmenu.properties').then(function(response) {
            $scope.leftMenuResp = response.data;
        });
    $scope.loadBodyContent = function(link){
    if(link == 'link_1') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_1;
    else if(link == 'link_2') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_2;
    else if(link == 'link_3') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_3;
    else if(link == 'link_4') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_4;
    else if(link == 'link_5') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_5;
    else if(link == 'link_6') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_6;
    else if(link == 'link_7') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_7;
    else if(link == 'link_8') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_8;
    else if(link == 'link_9') $scope.mainResp.bodyContent = $rootScope.mainResp.bodyContent_9;

    }
});

webModuleApp.controller('RightMenuController', function($scope, $http) {
    $http.get('assets/mockjson/rightmenu.properties').then(function(response) {
            $scope.rightMenuResp = response.data;
        });
});



