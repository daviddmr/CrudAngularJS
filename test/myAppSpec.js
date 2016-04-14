

describe('My cadastroCtrl', function() {
    var $controller;

    beforeEach(module('myapp'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('greets', function() {
        var $scope = {};
        var controller = $controller('MyCtrl', {
            $scope: $scope
        });
        expect($scope.greeting).toEqual('hello');
    })

});

