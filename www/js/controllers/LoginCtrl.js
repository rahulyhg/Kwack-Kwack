connector.controller('LoginCtrl', function ($scope, Chats, $state, $stateParams, ionicToast) {
  if ($.jStorage.get("user")) {
    if ($.jStorage.get("user").verified) {
      $state.go("tab.explore")
    } else {
      $state.go("mobile")
    }
  }
  $scope.showerrMsg = false
  $scope.verifyUser = function (info) {
    $scope.str = info.email
    info.email = $scope.str.toLowerCase();

    Chats.apiCallWithData("User/VerifyUser", info, function (data) {
      if (data.value == true) {
        $scope.data = data;
        $.jStorage.set("user", $scope.data.data);
        $state.go("tab.explore")
      } else {
        if (data.error == "DeactiveAcc") {
          ionicToast.show('Account is Deleted', 'top', false, 2500);
        } else {
          $scope.showerrMsg = true
          // toastr.error("incorrect");
          ionicToast.show('incorrect credentials', 'top', false, 2500);
        }
      }
    })
  }
  $scope.hideToast = function () {
    ionicToast.hide();
  };

  $scope.facebook = function (link) {
    $scope.navigation = Chats.getNavigation();
    $scope.currentHost = window.location.origin;
    if ($stateParams.id) {
      if ($stateParams.id === "AccessNotAvailable") {
        toastr.error("You do not have access for the Backend.");
      } else {
        Chats.parseAccessToken($stateParams.id, function () {
          Chats.profile(function () {
            $state.go("home");
          }, function () {
            $state.go("login");
          });
        });
      }
    } else {
      Chats.removeAccessToken();
    }
    var options = "location=no,toolbar=yes";
    var target = "_blank";
    $scope.finalURL = link;
    ref = cordova.InAppBrowser.open($scope.finalURL, target, options);
    window.open = cordova.InAppBrowser.open;
  }
})