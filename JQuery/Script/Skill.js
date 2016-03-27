console.log("Skill");
var FontMargintop = null;
var FontMarginLeft = null;

var RightlineNumber = null;
RightlineNumber = 1;

var RightCirclenumberRecord = null;
RightCirclenumberRecord = 0;

var RightCircleMax = null;
RightCircleMax = 12;

var CircleMaxNumberforR = null;
CircleMaxNumberforR = 12;

//Skill part describe the element in Skill part-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Skillinformation()
{
	FontMargintop = null;
	FontMarginLeft = null;
//	var SkillRow = null;
//	SkillRow = CourseObject;
	
	if(document.getElementById('Infosvg'))
		{
			DeleteSvg();
		}
	
	if(document.getElementById('Graphicsvg'))
		{
			DeleteGraphicSvg();
		}
	
	CreateSvg();
	CreateModuleSvg();
	CreateGraphicSvg();
	FontMarginTopAndLeft();
	WriteTitle();
	return null;
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

//Create the Skill graphic part---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create the svg for this part----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CreateGraphicSvg()
{
	var InforSvg = d3.select('#SkillPart')
		.append("svg")
		.attr("id","Graphicsvg")
		.attr("width",function(){
			var InforWidth = document.getElementById("SkillPart").offsetWidth*0.96;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.555;
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
			var TopBlank = windowHeight*0.435;
			return TopBlank + "px";
		})
		.style("overflow","scroll");
	
	DrawLines();
}

//Delete the graphic svg----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteGraphicSvg()
{
	d3.select('#Graphicsvg').remove();
	return null;
}

//DrawLines for GraphicSvgPart----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DrawLines()
{
	var Lines1 = d3.select('#Graphicsvg')
	.append('rect')
	.attr('x',0)
	.attr('y',0)
	.attr('width',function()
	{
		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*1;
		return RectWidth + 'px';
	})
	.attr('height',function()
	{
		var RectHeigh = document.getElementById('Graphicsvg').offsetHeight*0.005;
		return RectHeigh + 'px';
	})
	.attr('fill','black');
	
	var Lines2 = d3.select('#Graphicsvg')
	.append('rect')
	.attr('x',function()
	{
		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*0.5;
		return RectWidth + 'px';
	})
	.attr('y',0)
	.attr('width',function()
	{
		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*0.005;
		return RectWidth + 'px';
	})
	.attr('height',function()
	{
		var RectHeigh = document.getElementById('Graphicsvg').offsetHeight*1;
		return RectHeigh + 'px';
	})
	.attr('fill','black');	
	
}

//Draw the graphic circle part----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Skill Object-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CreateSkillObject(CourseObject)
{
	var SkillArrary = null;
	SkillArrary = [{id:null,relevantModuleName:[null],name:null,SkillDetail:null,Learned:false}];
	for(var i=0;i<CourseObject.length;i++)
		{
			for(var j=0;j<CourseObject[i].moduleInfo[0].learningOutcomes.length;j++)
				{
					for(var z=0;z<SkillArrary.length;z++)
						{
							if(SkillArrary[z].id == CourseObject[i].moduleInfo[0].learningOutcomes[j][0]._id)
								{
									SkillArrary[z].relevantModuleName.push(CourseObject[i].moduleObjectId);
									break;
								}
							else if(z==(SkillArrary.length-1))
								{
									SkillArrary[z].id = CourseObject[i].moduleInfo[0].learningOutcomes[j][0]._id;
									SkillArrary[z].relevantModuleName[0] = CourseObject[i].moduleObjectId;
									SkillArrary[z].name = CourseObject[i].moduleInfo[0].learningOutcomes[j][0].name;
									SkillArrary[z].SkillDetail = CourseObject[i].moduleInfo[0].learningOutcomes[j][0].skillDetails;
									SkillArrary.push({id:null,relevantModuleName:[null],name:null,SkillDetail:null,Learned:false});
									break;
								}
						}
				}
		}
//	console.log(SkillArrary);
	return SkillArrary;
}

//Draw Circles--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DrawCircles(SkillArrary)
{
//	console.log(SkillArrary);
	var NewSkillArrary = null;
	NewSkillArrary = SkillArrary;
	NewSkillArrary.pop();
//	console.log(NewSkillArrary);
	
	var circleR = null;
	var topBlank = null;
	
	var circleYMaxnumber = null;
	var circleXMaxnumber = null;
	
	var LeftYlineNumber = null;
	var LeftXlineNumber = null;

	var Yblank = null;
	var CirclenumberYRecord = null;
	var CirclenumberXRecord = null;
	
	circleYMaxnumber = 12;
	circleXMaxnumber = 12;
	
	topBlank = document.getElementById("Graphicsvg").offsetHeight*0.01;
	circleR = (document.getElementById("Graphicsvg").offsetHeight-2*topBlank)/(4*circleYMaxnumber-2);
	LeftYlineNumber = 1;
	LeftXlineNumber = 1;
	RightlineNumber = 1;
	CirclenumberYRecord = 0;
	CirclenumberXRecord = 0;
	Yblank = document.getElementById("Graphicsvg").offsetWidth*0.5;
	
	var DrawcirclesbyData = null;
	DrawcirclesbyData = d3.select('#Graphicsvg')
	.selectAll('circle')
	.data(NewSkillArrary)
	.enter();
	
	var Circles = null;
	Circles = DrawcirclesbyData
	.append('circle')
	.attr('class','circle')
	.attr('r',circleR)
	.attr('cx',function(d){
		var Cxposition = Yblank - circleR - LeftXlineNumber*circleR - (LeftXlineNumber-1)*2*circleR;
		CirclenumberXRecord = CirclenumberXRecord + 1;
		if(CirclenumberXRecord >= circleXMaxnumber)
			{
				LeftXlineNumber = LeftXlineNumber + 1;
//				if(LeftXlineNumber%2==0)
//					{
						circleXMaxnumber = circleXMaxnumber - 1;
//					}
				CirclenumberXRecord = 0;
			}
		return Cxposition;
	})
	.attr('cy',function(d){
		var Cyposition = topBlank + circleR + CirclenumberYRecord*4*circleR + (LeftYlineNumber-1)*2*circleR
		CirclenumberYRecord = CirclenumberYRecord + 1;
		if(CirclenumberYRecord >= circleYMaxnumber)
			{
				LeftYlineNumber = LeftYlineNumber + 1;
//				if(LeftYlineNumber%2==0)
//					{
						circleYMaxnumber = circleYMaxnumber - 1;
//					}
				CirclenumberYRecord = 0;
			}
		return Cyposition;
	})
	.attr('fill','black')
	.style('opacity',0.4)
	.attr('id',function(d){
		return 'circle' + d.id;
	})
	.on('click',function(d)
	{
//		console.log(d)
		var RelvantData = null;
		RelvantData = d.relevantModuleName;
		d3.select('#Graphicsvg')
		.selectAll('circle')
		.transition()
		.duration(durationTime)
		.style('fill','black');
		
		d3.select(this)
		.transition()
		.duration(durationTime)
		.style('fill','rgb'+'('+'135,135,135'+')');
		ChangeModuleBtnColor(RelvantData);
	})
	
//	console.log(Circles);
	return null;
}

//Delete All circles--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteAllcircles()
{
	d3.select('#Graphicsvg')
	.selectAll('circle')
	.remove();
	return null;
}

//Change Circle Color-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ChangeCircleColor(ModuleInfo,ChangeColor)
{
	console.log(ModuleInfo);
	d3.select('#Graphicsvg')
	.selectAll('circle')
	.attr('fill','black');
	
	for(var i=0;i<ModuleInfo.length;i++)
		{
			var selectCircle = ModuleInfo[i][0]._id;
			d3.select(('#circle'+selectCircle))
			.transition()
			.duration(durationTime)
			.attr('fill',ChangeColor);
		}
	
	return null;
}

//Check and Change the position of the Circle-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CheckAndChangeCircle(SkillArrary)
{
	for(var i=0;i<SkillArrary.length;i++)
		{
			for(var j=0;j<SkillArrary[i].relevantModuleName.length;j++)
				{
					console.log(document.getElementById("Module"+SkillArrary[i].relevantModuleName[j]).getAttribute("submitted"));
					if(document.getElementById("Module"+SkillArrary[i].relevantModuleName[j]).getAttribute("submitted")=="true")
						{
							if(SkillArrary[i].Learned == false)
								{
									ChangeCirclePosition(SkillArrary[i].id);									
								}
							SkillArrary[i].Learned = true;
							break;
						}
				}
		}
}

function ChangeCirclePosition(ID)
{
	var topBlank = null;
	topBlank = document.getElementById("Graphicsvg").offsetHeight*0.01;
	
	var Yblank = null;
	Yblank = document.getElementById("Graphicsvg").offsetWidth*0.5;
	
	var circleR = null;
	circleR = (document.getElementById("Graphicsvg").offsetHeight-2*topBlank)/(4*CircleMaxNumberforR-2);
	
	d3.select(('#circle'+ ID))
	.transition()
	.duration(durationTime)
	.attr('cx',function()
	{
		var Cxposition = Yblank + circleR + RightlineNumber*circleR + (RightlineNumber-1)*2*circleR;
		return Cxposition;
	})
	.attr('cy',function()
	{
		var Cyposition = topBlank + circleR + RightCirclenumberRecord*4*circleR + (RightlineNumber-1)*2*circleR

		return Cyposition;	
	})
	.style("opacity",1);
	
	RightCirclenumberRecord = RightCirclenumberRecord + 1;
	if(RightCirclenumberRecord>=RightCircleMax)
		{
			RightlineNumber = RightlineNumber + 1;
			RightCirclenumberRecord = 0;
			RightCircleMax = RightCircleMax - 1;
		}
	
	return null;
}

//Reset the situation of Skillarrary----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ResetSkillarrary(SkillArrary)
{
	console.log(SkillArrary);
	for(var i=0;i<SkillArrary.length;i++)
		{
			SkillArrary[i].Learned = false;
		}
	return null;
}