console.log("app");

var CourseObject = null;

(function(){
    $(init);
//Lymda.com;	
// http://molecule-neucourse.rhcloud.com/rest/course
    var WEBSERVICE_URL = "http://molecule-neucourse.rhcloud.com/rest/module";
	var apiResponse;

    function init() 
    {
        getData();
    }

    

    function getData() {
        

        $.get({
            url:WEBSERVICE_URL,
            success: renderSearchResults 
        });
    }

    function renderSearchResults(response) 
    {
//		console.log(response);
		apiResponse = response;
		CourseObject = response;
//		console.log(apiResponse);
//		console.log(CourseObject);
		ModuleDataLoad(CourseObject);
		Skillinformation(CourseObject);
    }
    
})();