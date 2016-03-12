console.log("Skill");
var FontMargintop = null;
var FontMarginLeft = null;
//Skill part describe the element in Skill part-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Skillinformation(CourseObject)
{
	FontMargintop = null;
	FontMarginLeft = null;
//	var SkillRow = null;
//	SkillRow = CourseObject;
	
	if(document.getElementById('Infosvg'))
		{
			DeleteSvg();
		}
	
	CreateSvg();
	CreateModuleSvg();
	FontMarginTopAndLeft();
	WriteTitle();
}

//Create some Svg for Skill part--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CreateSvg()
{
	var InforSvg = d3.select('#SkillPart')
		.append("svg")
		.attr("id","Infosvg")
		.attr("width",function(){
			var InforWidth = document.getElementById("SkillPart").offsetWidth*1;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.18;
			return InforHeight + "px";
		})
		.style("background-color",null)
		.style("position","absolute")
		.style("margin-left",function()
		{
			var LeftBlank = document.getElementById("SkillPart").offsetWidth*0.00;
			return LeftBlank + "px";
		})
		.style("margin-top",function()
		{
			var TopBlank = windowHeight*0.25;
			return TopBlank + "px";
		})
		.style("overflow","scroll");
}

//Create some Svg for Module detail in Skill part--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CreateModuleSvg()
{
	var InforSvg = d3.select('#SkillPart')
		.append("svg")
		.attr("id","ModuleInfosvg")
		.attr("width",function(){
			var InforWidth = document.getElementById("SkillPart").offsetWidth*1;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.18;
			return InforHeight + "px";
		})
		.style("background-color",null)
		.style("position","absolute")
		.style("margin-left",function()
		{
			var LeftBlank = document.getElementById("SkillPart").offsetWidth*0.00;
			return LeftBlank + "px";
		})
		.style("margin-top",function()
		{
			var TopBlank = windowHeight*0.05;
			return TopBlank + "px";
		})
		.style("overflow","scroll");
}
//Set the Font Margin-Top and the Margin-Left for Skill Part---------------------------------------------------------------------------------------------------------------------------------------------------------------
function FontMarginTopAndLeft()
{
	FontMargintop = document.getElementById("Infosvg").offsetHeight*0.20;
	FontMarginLeft = document.getElementById("Infosvg").offsetWidth*0.02;
}

//Delete the elder Svg when we draw the new Svg for Skill part--------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteSvg()
{
	d3.select('#Infosvg').remove();
	return null;
}

//Skill Describe Title------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function WriteTitle()
{
	var TitleInfo = null;
	TitleInfo = d3.select('#Infosvg')
	.append('text')
	.attr("x",FontMarginLeft)
	.attr("y",FontMargintop)
	.text("Skill development")
	.style("font-size",function(){
		var FontSize = document.getElementById("Infosvg").offsetWidth*0.05;
		return FontSize + "px";
	})
}

//Detail of Skill and its module--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function SkillDetail(ModuleName,SkillDetail)
{
	//Skill describtion detail part-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//	console.log(SkillDetail)
	var SkillModuleDes = null;
	SkillModuleDes = d3.select('#Infosvg')
	.append('text')
	.attr("id","SelectModuleName")
	.attr("x",FontMarginLeft)
	.attr("y",2*FontMargintop)
	.text(function(){
		if(ModuleName!=null)
			{
				return "Skills in " + ModuleName + ":";
			}
		else
			{
				return "";
			}
	})
	.style("font-size",function(){
		var FontSize = document.getElementById("Infosvg").offsetWidth*0.04;
		return FontSize + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	var SkillDes = null;
	SkillDes = d3.select('#Infosvg')
	.append('text')
	.attr("id","SelectModuleSkill")
	.attr("x",FontMarginLeft)
	.attr("y",2.5*FontMargintop)
	.style("font-size",function(){
		var FontSize = document.getElementById("Infosvg").offsetWidth*0.02;
		return FontSize + "px";
	});
	
	var SkillDesString = null;
	SkillDesString = "";
	for(var i=0;i<SkillDetail.length;i++)
		{
			SkillDesString = SkillDesString + SkillDetail[i][0].name + ",";
		}
	
//	console.log(SkillDesString);
	
	var NewSkillDesString = null;
	NewSkillDesString = SkillDesString.split(",");
	
	SkillDes.selectAll("tspan")
	.data(NewSkillDesString)
	.enter()
	.append("tspan")
	.attr("x",FontMarginLeft)
	.attr("dy","1.5em")
	.text(function(d){
		return d;
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);	
}

//Module Detail Information------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ModuleInformationDetail(ModuleName,ModuleDetail)
{
	//Module describtion detail part----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//	console.log(ModuleName)
	var ModuleDes = null;
	ModuleDes = d3.select('#ModuleInfosvg')
	.append('text')
	.attr("id","RelevantModuleName")
	.attr("x",FontMarginLeft)
	.attr("y",2*FontMargintop)
	.text(function(){
		if(ModuleName!=null)
			{
				return ModuleName + " Course Outcome:";
			}
		else
			{
				return "";
			}
	})
	.style("font-size",function(){
		var FontSize = document.getElementById("ModuleInfosvg").offsetWidth*0.04;
		return FontSize + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	var ModuleDetailDes = null;
	ModuleDetailDes = d3.select('#ModuleInfosvg')
	.append('text')
	.attr("id","SelectModuleDetail")
	.attr("x",FontMarginLeft)
	.attr("y",2.5*FontMargintop)
	.style("font-size",function(){
		var FontSize = document.getElementById("ModuleInfosvg").offsetWidth*0.02;
		return FontSize + "px";
	});
	
	var ModuleDesString = null;
	ModuleDesString = "";
	for(var i=0;i<ModuleDetail.length;i++)
		{
			ModuleDesString = ModuleDesString + ModuleDetail[i][0].outcome + ",";
		}
	
	var NewModuleDesString = null;
	NewModuleDesString = ModuleDesString.split(",");
	
	ModuleDetailDes.selectAll("tspan")
	.data(NewModuleDesString)
	.enter()
	.append("tspan")
	.attr("x",FontMarginLeft)
	.attr("dy","1.5em")
	.text(function(d){
		return d;
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
}