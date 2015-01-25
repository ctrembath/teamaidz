angular.module('qAnMp').controller('getQuestions', function($scope, $http){
    $scope.display = 3
    $scope.myDate = new Date()
    $scope.getQuestions = function(){
        var question;
        var urlTrial = "https://stopaidz-rails1.herokuapp.com/candidates/1/questions?callback=JSON_CALLBACK"
        $http.jsonp(urlTrial)
        .success(function(response){
        $scope.questions = []
        response.questions.forEach(function(singleQuestion,index,array){
            question = {}
            question.wording = singleQuestion.ask_text
            question.locked = false
            question.imgSrc = "/images/unlock.png"
            question.priority = new Date
            question.total = array.length
            $scope.questions.push(question)
        })
    })
    $scope.lockQuestion = function(question) {
        if (question.locked) {
            question.imgSrc = "/images/unlock.png";
            question.locked = false
            question.priority = new Date
        } else {
            question.imgSrc = "/images/lock.png";
            question.locked = true
            question.priority = 0
        } 
    }
    $scope.newQuestion = function(question) {
        if (!question.locked) {
            for(var i = 0; i < $scope.questions.length; i++) {
                if ($scope.questions[i] == question) $scope.questions[i].priority = new Date
            }
        }
    }
    $scope.countOfLockedItem = function(){
        $scope.countOfLocked = []
        $scope.questions.forEach(function(element){
            if(element.imgSrc === "/images/lock.png"){
                $scope.countOfLocked.push(element)
            }
        })
            return $scope.countOfLocked
    }

    $scope.isReadyToSubmit = function(){
        $scope.countOfLockedItem()
        if($scope.countOfLocked.length === 3){
            return true
        }
    }    
}
$scope.getQuestions()
$scope.postQuestion = function(){
      console.log("postQuestion")
      var url = "https://stopaidz-rails1.herokuapp.com/users/1/candidates/1/asks?callback=JSON_CALLBACK"
      // var url = "http://localhost:3500"
        $http.post(url, { question : $scope.FirstMockQuestion })
        .success(function(response){
            console.log(response, 'success')
        })
        .error(function(error){
            console.log(error)
        })
   }
})
