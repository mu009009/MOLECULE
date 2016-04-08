console.log("app");

var CourseObject = null;
var SkillArrary = null;

var ScreenUnitWith = null;
var ScreenUnitHeight = null;

ScreenUnitWith = window.innerWidth*0.01;
ScreenUnitHeight = window.innerHeight*0.01;

(function(){
    $(init);
//Lymda.com;	
// http://molecule-neucourse.rhcloud.com/rest/course
    var WEBSERVICE_URL = "http://molecule-neucourse.rhcloud.com/api/project/courseExtendedInfo/56cf02d55ae56c248a00000f";
	var apiResponse = null;

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
//		apiResponse = response;
		CourseObject = response;
//		console.log(apiResponse);
//		console.log(CourseObject);
		ModuleDataLoad(CourseObject);
		Skillinformation();
		SkillArrary = CreateSkillObject(CourseObject);
		DrawCircles(SkillArrary);
    }
    
})();