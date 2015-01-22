angular.module('QanMP').controller('getQuestions', function($scope, $http){


$scope.getQuestions = function(){
    var urlTrial = "https://stopaidz-rails1.herokuapp.com/candidates/1/questions?callback=JSON_CALLBACK"
    $http.jsonp(urlTrial)
    .success(function(response){
        $scope.questions = []
        $scope.allQuestions = response.questions
        $scope.allQuestions.forEach(function(singleQuestion){
     	$scope.questions.push(singleQuestion.ask_text)            
        })
    })
}

$scope.getQuestions()

// $scope.lockQuestion = function(){
//     console.log('ciao clare I am a blocked lock')
// }











})
