angular.module('QanMP').controller('getCandidatesByPC', function($scope, $http){
$scope.getCandidates = function(){
    $scope.listOfCandidates = []
    var url = 'http://www.theyworkforyou.com/api/getMP?&id=&constituency=&postcode=SE1+0XP&key=CCa95kDVHTT2Dj2zmPDdYN4f&callback=JSON_CALLBACK'
    var searchCandidate = $http.jsonp(url)
                .success(function(candidate) {
                 $scope.candidates = candidate
                 // console.log($scope.candidates)
                 // candidates.forEach(function(singleCandidate){
                 //    $scope.listOfCandidates.push(singleCandidate)
                    
                 // })
                 
                 console.log($scope.candidates, 'llll')
                 console.log($scope.candidates.constituency)
                })
                //  .error(function(error) {
                //   console.log('error in deleteController',error)
                // })
                 
}
$scope.getCandidates()


})