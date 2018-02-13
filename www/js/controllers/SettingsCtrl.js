connector.controller('SettingsCtrl', function ($scope, Chats, $state, $rootScope) {
  $scope.jstorage = {}
  $scope.pollKwack = {}
  $scope.allInterest = []
  $scope.jstorage = $.jStorage.get('user');
  $scope.pollKwack._id = $scope.jstorage._id
  $scope.addInterest = {}
  $scope.addInterest.userId = $scope.jstorage._id
  $scope.addInterest.interest = []
  $scope.interestarr = []
  $scope.viewmore = false;
  $scope.view3 = true;

  $scope.goBackHandler = function () {
    window.history.back(); //This works
  };

  $scope.viewall = function () {
    $scope.viewmore = true;
    $scope.view3 = false;
  }
  $scope.viewLess3 = function () {
    $scope.viewmore = false;
    $scope.view3 = true;
  }
  //  logout
  $scope.logout = function () {
    $.jStorage.flush();
    $state.go("login");
  }
  //profile
  $scope.user = {}
  $scope.user._id = $scope.jstorage._id
  Chats.apiCallWithData("User/getOne", $scope.user, function (data) {
    if (data.value == true) {
      $scope.userInfo = data.data
    } else {

    }
  })

  $scope.test = 'small'
  //change font size
  $scope.font = '';
  $scope.changesize = function (data) {
    $scope.$emit("SendUp", {
      message: data
    });
  }
  // $scope.changesize = function (data) {
  //   $rootScope.font = data;
  // }

  // interest
  // Chats.apiCallWithoutData("Interests/getAllInterests", function (data) {
  //   $scope.allInterest = data.data
  //   $scope.interestdup = _.chunk($scope.allInterest, 2);
  // })

  //search interest

  Chats.apiCallWithData("User/getOne", $scope.pollKwack, function (data) {
    $scope.getInterest = data.data.interests
    $scope.interestdup = _.chunk($scope.getInterest, 2);
    $scope.interestarr = data.data.interests
    // _.forEach($scope.allInterest, function(allInterest){
    //   _.forEach($scope.interestarr, function(value){
    //     if(value.name==allInterest.name){
    //       allInterest.value=true
    //     }else{
    //     }
    //   })

    // })
  })

  // $scope.select = function (interest) {
  //   _.forEach($scope.allInterest, function (value) {
  //     if (value.name == interest) {
  //       value.value = !value.value
  //     }
  //   });
  //   var interestEdit = _.find($scope.interestarr, function (o) {
  //     if (interest == o.name) {
  //       return o;

  //     }

  //   });
  //     if (interestEdit === undefined) {
  //       if(_.isEmpty($scope.interestarr)){
  //         $scope.interestarr =[];
  //       }
  //    $scope.interestarr.push({name:interest})

  //     $scope.addInterest.interest = $scope.interestarr
  //   // $scope.colorchange = interestEdit
  //   }else {
  //     _.pull($scope.interestarr, interestEdit)
  //     $scope.addInterest.interest = $scope.interestarr
  //     $scope.colorchange = interestEdit
  //   }
  //   Chats.noLoaderApi("User/addInterests", $scope.addInterest, function (data) {
  //   })
  // }
})