describe('Controllers', function() {

  beforeEach(module('qAnMp'));

  var ctrl, scope, $httpBackend, apiUrl;

  beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
    scope = $rootScope.$new();
    ctrl = $controller('getCandidatesByPC', {$scope: scope});
    $httpBackend = _$httpBackend_;
  }));

  describe('getCandidatesByPC', function(){
  	it('is a controller', function(){
  		expect(ctrl).toBeDefined();
  		expect(scope).toBeDefined();
  	});

  	it('has a candidate', function(){

  	});

		it('needs an url', function(){
			apiUrl = "http://www.theyworkforyou.com/api/getMP?&id=&constituency=&postcode=SE1+0XP&key=CCa95kDVHTT2Dj2zmPDdYN4f&callback=JSON_CALLBACK"
			$httpBackend.expectGET(apiUrl).respond(200)
			 // $httpBackend.verifyNoOutstandingExpectation();
		});


  })
});