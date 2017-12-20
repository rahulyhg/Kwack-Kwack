connector.controller('DiscoverCtrl', function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/modal/filter1.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    }
  
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
        Chats.apiCallWithData("Interests/getAllInterests", function (data) {
        console.log("data is", data)
       
      })
  })