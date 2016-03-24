console.log('ModuleLevel');

// Find the max Level in the CourseObject, and inital the array, prepare to record the number of how many required course in each level---------------------------------------------------------------------------------------
function FindtheMaxLevel(CourseObject)
{
	var AllCourseLevel = crossfilter(CourseObject);
	var LevelFilter = AllCourseLevel.dimension(function(d){
		return d.Level;
	})
	var MaxLevelFilter = LevelFilter.filterAll().top(1);
	var MaxLevel = MaxLevelFilter[0].Level;
	
	var LevelPassInfo = null;
	LevelPassInfo = new Array(MaxLevel);
	for(var i=0;i<MaxLevel;i++)
		{
			LevelPassInfo[i] = 0;
		}
	return LevelPassInfo;
}