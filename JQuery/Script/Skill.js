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
			var InforWidth = document.getElementById("SkillPart").getBoundingClientRect().width*1;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.25;
			return InforHeight + "px";
		})
		.style("background-color",null)
		.style("position","absolute")
		.style("margin-left",function()
		{
			var LeftBlank = document.getElementById("SkillPart").getBoundingClientRect().width*0.00;
			return LeftBlank + "px";
		})
		.style("margin-top",function()
		{
			var TopBlank = windowHeight*0.01;
			return 0.35*TopBlank + "px";
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
			var InforWidth = document.getElementById("SkillPart").getBoundingClientRect().width*1;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.20;
			return InforHeight + "px";
		})
		.style("background-color",null)
		.style("position","absolute")
		.style("margin-left",function()
		{
			var LeftBlank = document.getElementById("SkillPart").getBoundingClientRect().width*0.00;
			return LeftBlank + "px";
		})
		.style("margin-top",function()
		{
			var TopBlank = windowHeight*0.03;
			return TopBlank + "px";
		})
		.style("overflow","scroll");
}
//Set the Font Margin-Top and the Margin-Left for Skill Part---------------------------------------------------------------------------------------------------------------------------------------------------------------
function FontMarginTopAndLeft()
{
	FontMargintop = document.getElementById("Infosvg").getBoundingClientRect().height*0.20;
	FontMarginLeft = document.getElementById("Infosvg").getBoundingClientRect().width*0.02;
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
	.attr("y",0.5*FontMargintop)
	.text("Skill Description")
	.style("font-size",function(){
		var FontSize = document.getElementById("Infosvg").getBoundingClientRect().width*0.05;
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
	.attr("y",1.0*FontMargintop)
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
		var FontSize = document.getElementById("Infosvg").getBoundingClientRect().width*0.04;
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
	.attr("y",1.0*FontMargintop)
	.style("font-size",function(){
		var FontSize = document.getElementById("Infosvg").getBoundingClientRect().width*0.035;
		return FontSize + "px";
	});
	
	console.log(SkillDetail);
	
	var SkillDesString = null;
	SkillDesString = "";
	for(var i=0;i<SkillDetail.length;i++)
		{
			for(var j=0;j<SkillDetail[i][0].skillDetails.length;j++)
				{
					SkillDesString = SkillDesString + SkillDetail[i][0].skillDetails[j].skill + ",";
				}
		}
	
	var NewSkillsDesString = null;
	var EachFontSize = document.getElementById("Infosvg").getBoundingClientRect().width*0.035;
	var MaxWidth = document.getElementById("Infosvg").getBoundingClientRect().width;
	var TemporarySaveString = null;
	TemporarySaveString = "";
	var JudgeChangeStringLine = null;
	JudgeChangeStringLine = "";
	var SaveNewString = null;
	SaveNewString = "";
	TemporarySaveString = SkillDesString.split(" ");
	for(var i=0;i<TemporarySaveString.length-1;i++)
		{
			JudgeChangeStringLine = JudgeChangeStringLine + TemporarySaveString[i] + " ";
			if(((JudgeChangeStringLine.length+TemporarySaveString[i+1].length)*EachFontSize)>(2*MaxWidth))
				{
					console.log(JudgeChangeStringLine);
					SaveNewString = SaveNewString + JudgeChangeStringLine + ",";
					JudgeChangeStringLine = "";
				}
		}
	SaveNewString = SaveNewString + TemporarySaveString[TemporarySaveString.length];
	console.log(SaveNewString);	
	
//	console.log(SkillDesString);
	
	var NewSkillDesString = null;
	NewSkillDesString = SaveNewString.split(",");
	
	SkillDes.selectAll("tspan")
	.data(NewSkillDesString)
	.enter()
	.append("tspan")
	.attr("x",FontMarginLeft)
	.attr("dy","1.2em")
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
	console.log(ModuleName);
	console.log(ModuleDetail);
	//Module describtion detail part----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//	console.log(ModuleName)
	var ModuleDes = null;
	
	d3.select('#Tooltip2')
	.text(function()
	{
		if(ModuleName!=null)
			{
				return "Course Outcome of: " + ModuleName;
			}
		else
			{
				return "";
			}
	})
	
	ModuleDes = d3.select('#Tooltip2')
	.append('text')
	.attr("id","RelevantModuleName")
	.attr("x",FontMarginLeft)
	.attr("y",50)
	.text(function(){
		if(ModuleName!=null)
			{
				return "Course Outcome of: " + ModuleName;
			}
		else
			{
				return "";
			}
	})
	.style("font-size",function(){
		var FontSize = document.getElementById("Tooltip2").getBoundingClientRect().width*0.05;
		return FontSize + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	var ModuleDetailDes = null;
	ModuleDetailDes = d3.select('#Tooltip2')
	.append('text')
	.attr("id","SelectModuleDetail")
	.attr("x",FontMarginLeft)
	.attr("y",60)
	.style("font-size",function(){
		var FontSize = document.getElementById("Tooltip2").getBoundingClientRect().width*0.05;
		return FontSize + "px";
	});
	
	var ModuleDesString = null;
	ModuleDesString = "";
	for(var i=0;i<ModuleDetail.length;i++)
		{
			ModuleDesString = ModuleDesString + ModuleDetail[i][0].outcome + ". ";
		}
	
	var NewModuleDesString = null;
	var EachFontSize = document.getElementById("Tooltip2").getBoundingClientRect().width*0.05;
	var MaxWidth = document.getElementById("Tooltip2").getBoundingClientRect().width;
	var TemporarySaveString = null;
	TemporarySaveString = "";
	var JudgeChangeStringLine = null;
	JudgeChangeStringLine = "";
	var SaveNewString = null;
	SaveNewString = "";
	TemporarySaveString = ModuleDesString.split(" ");
	for(var i=0;i<TemporarySaveString.length-1;i++)
		{
			JudgeChangeStringLine = JudgeChangeStringLine + TemporarySaveString[i] + " ";
			if(((JudgeChangeStringLine.length+TemporarySaveString[i+1].length)*EachFontSize)>(2*MaxWidth))
				{
					console.log(JudgeChangeStringLine);
					SaveNewString = SaveNewString + JudgeChangeStringLine + ",";
					JudgeChangeStringLine = "";
				}
		}
	SaveNewString = SaveNewString + TemporarySaveString[TemporarySaveString.length];
	console.log(SaveNewString);
	
	NewModuleDesString = SaveNewString.split(",");
//	NewModuleDesString = splitByLine(ModuleDesString,MaxWidth,EachFontSize);
	console.log(NewModuleDesString[0].length);
	
	ModuleDetailDes.selectAll("tspan")
	.data(NewModuleDesString)
	.enter()
	.append("tspan")
	.attr("x",FontMarginLeft)
	.attr("dy","1.2em")
	.text(function(d){
		return d;
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
}

//Skill information Detail--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function SkillInformationDetail(Skill)
{
//	console.log(Skill);
//	var SkillDes = null;
//	SkillDes = d3.select('#ModuleInfosvg')
//	.append('text')
//	.attr("id","RelevantModuleName")
//	.attr("x",FontMarginLeft)
//	.attr("y",0.5 *FontMargintop)
////	.text(function(){
////		if(Skill.name!=null)
////			{
////				return Skill.name ;
////			}
////		else
////			{
////				return "";
////			}
////	})
//	.style("font-size",function(){
//		var FontSize = document.getElementById("ModuleInfosvg").offsetWidth*0.035;
//		return FontSize + "px";
//	})
//	.style("opacity",0)
//	.transition()
//	.duration(durationTime)
//	.style("opacity",1);
//	
//	var SkillNameString = null;
//	
//	if(Skill.name!=null)
//		{
//			SkillNameString = Skill.name;
//		}
//	else
//		{
//			return "";
//		}
//	
//	var SkillNameSplit = SkillNameString.split(" ");
//	var NewSkillNameString = null;
//	var SkillNameFontSize = document.getElementById("ModuleInfosvg").offsetWidth*0.035;
//	var SkillNameMaxWidth = document.getElementById("ModuleInfosvg").offsetWidth;
//	var SkillTemporarySaveString = null;
//	SkillTemporarySaveString = "";
//	var SkillJudgeChangeStringLine = null;
//	SkillJudgeChangeStringLine = "";
//	var SkillNameSaveNewString = null;
//	SkillNameSaveNewString = "";
//	SkillTemporarySaveString = SkillNameSplit;
//	for(var i=0;i<SkillTemporarySaveString.length-1;i++)
//		{
//			SkillJudgeChangeStringLine = SkillJudgeChangeStringLine + SkillTemporarySaveString[i] + " ";
//			if(((SkillJudgeChangeStringLine.length+SkillTemporarySaveString[i+1].length)*SkillNameFontSize)>(2*SkillNameMaxWidth))
//				{
//					console.log(SkillJudgeChangeStringLine);
//					SkillNameSaveNewString = SkillNameSaveNewString + SkillJudgeChangeStringLine + ",";
//					SkillJudgeChangeStringLine = "";
//				}
//		}
//	SkillNameSaveNewString = SkillNameSaveNewString + SkillTemporarySaveString[SkillTemporarySaveString.length];
//	console.log(SkillNameSaveNewString);	
//	
//	var SkillNameNewSkillDesString = null;
//	SkillNameNewSkillDesString = SkillNameSaveNewString.split(",");	
//	
//	SkillDes.selectAll("tspan")
//	.data(SkillNameNewSkillDesString)
//	.enter()
//	.append("tspan")
//	.attr("x",FontMarginLeft)
//	.attr("dy","1.2em")
//	.text(function(d){
//		return d;
//	})
//	.style("opacity",0)
//	.transition()
//	.duration(durationTime)
//	.style("opacity",1);
	
	
	var SkillDetailDes = null;
	SkillDetailDes = d3.select('#ModuleInfosvg')
	.append('text')
	.attr("id","SelectModuleDetail")
	.attr("x",FontMarginLeft)
	.attr("y",0.2*FontMargintop)
	.style("font-size",function(){
//		var FontSize = document.getElementById("ModuleInfosvg").offsetWidth*0.04;
		var FontSize = document.getElementById("ModuleInfosvg").getBoundingClientRect().width*0.04;
		return FontSize + "px";
	});
	
	var SkillDesString = null;
	SkillDesString = "";
	for(var i=0;i<Skill.SkillDetail.length;i++)
		{
			SkillDesString = SkillDesString + Skill.SkillDetail[i].skill + ",";
		}
	
	var NewSkillsDesString = null;
	var EachFontSize = document.getElementById("ModuleInfosvg").getBoundingClientRect().width*0.04;
	var MaxWidth = document.getElementById("ModuleInfosvg").getBoundingClientRect().width;
	var TemporarySaveString = null;
	TemporarySaveString = "";
	var JudgeChangeStringLine = null;
	JudgeChangeStringLine = "";
	var SaveNewString = null;
	SaveNewString = "";
	TemporarySaveString = SkillDesString.split(" ");
	console.log(TemporarySaveString);
	for(var i=0;i<TemporarySaveString.length-1;i++)
		{
			JudgeChangeStringLine = JudgeChangeStringLine + TemporarySaveString[i] + " ";
			if(((JudgeChangeStringLine.length+TemporarySaveString[i+1].length)*EachFontSize)>(2*MaxWidth))
				{
					console.log(JudgeChangeStringLine);
					SaveNewString = SaveNewString + JudgeChangeStringLine + ",";
					JudgeChangeStringLine = "";
				}
		}
	SaveNewString = SaveNewString + TemporarySaveString[TemporarySaveString.length];
	console.log(SaveNewString);	
	
	var NewSkillDesString = null;
	NewSkillDesString = SaveNewString.split(",");
	
	SkillDetailDes.selectAll("tspan")
	.data(NewSkillDesString)
	.enter()
	.append("tspan")
	.attr("x",FontMarginLeft)
	.attr("dy","1.2em")
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
//			var InforWidth = document.getElementById("SkillPart").offsetWidth*0.96;
			var InforWidth = document.getElementById("SkillPart").getBoundingClientRect().width*0.96;
			return InforWidth + "px";
		})
		.attr("height",function(){
			var InforHeight = windowHeight*0.740;
			return InforHeight + "px";
		})
		.style("background-color",null)
		.style("position","absolute")
		.style("margin-left",function()
		{
//			var LeftBlank = document.getElementById("SkillPart").offsetWidth*0.00;
			var LeftBlank = document.getElementById("SkillPart").getBoundingClientRect().width*0.00;
			return LeftBlank + "px";
		})
		.style("margin-top",function()
		{
			var TopBlank = windowHeight*0.250;
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
//		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*1;
		var RectWidth = document.getElementById('Graphicsvg').getBoundingClientRect().width*1;
		return RectWidth + 'px';
	})
	.attr('height',function()
	{
//		var RectHeigh = document.getElementById('Graphicsvg').offsetHeight*0.005;
		var RectHeigh = document.getElementById('Graphicsvg').getBoundingClientRect().height*0.005;
		return RectHeigh + 'px';
	})
	.attr('fill','black');
	
	var Lines2 = d3.select('#Graphicsvg')
	.append('rect')
	.attr('x',function()
	{
//		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*0.5;
		var RectWidth = document.getElementById('Graphicsvg').getBoundingClientRect().width*0.5;
		return RectWidth + 'px';
	})
	.attr('y',0)
	.attr('width',function()
	{
//		var RectWidth = document.getElementById('Graphicsvg').offsetWidth*0.005;
		var RectWidth = document.getElementById('Graphicsvg').getBoundingClientRect().width*0.005;
		return RectWidth + 'px';
	})
	.attr('height',function()
	{
//		var RectHeigh = document.getElementById('Graphicsvg').offsetHeight*1;
		var RectHeigh = document.getElementById('Graphicsvg').getBoundingClientRect().height*1;
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
	
//	topBlank = document.getElementById("Graphicsvg").offsetHeight*0.01;	
	topBlank = document.getElementById("Graphicsvg").getBoundingClientRect().height*0.01;
//	circleR = (document.getElementById("Graphicsvg").offsetHeight-2*topBlank)/(4*circleYMaxnumber-2);	
	circleR = (document.getElementById("Graphicsvg").getBoundingClientRect().height-2*topBlank)/(4*circleYMaxnumber-2);
	LeftYlineNumber = 1;
	LeftXlineNumber = 1;
	RightlineNumber = 1;
	CirclenumberYRecord = 0;
	CirclenumberXRecord = 0;
//	Yblank = document.getElementById("Graphicsvg").offsetWidth*0.5;
	Yblank = document.getElementById("Graphicsvg").getBoundingClientRect().width*0.5;
	
	console.log(Yblank);
	
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
		var RelvantData = null;
		RelvantData = d.relevantModuleName;
		ChangeModuleBtnColor(RelvantData);
		
		console.log(d3.select(this).style.fill)
		
		ChangeCircleColorBack();
		
		d3.select(this)
		.transition()
		.duration(durationTime)
		.style('fill','rgb'+'('+'135,135,135'+')');
		
		DeleteText();
		
		SkillInformationDetail(d);

	})
	
//	console.log(Circles);
	return null;
}

//Delete All circles--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteAllcircles()
{
	d3.select('#Graphicsvg')
	.selectAll('.circle')
	.remove();
	return null;
}

//Change circle data to default---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ChangeCircleColorBack()
{
//	d3.select('#Graphicsvg')
//	.selectAll('circle')
//	.style('fill','black');
	
	var Circles = document.getElementsByTagName('circle');
	console.log(Circles);
	for(var i=0;i<Circles.length;i++)
		{
			Circles[i].style.fill = 'black';
		}
	
	return null;
}

//Change Circle Color-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ChangeCircleColor(ModuleInfo,ChangeColor)
{
	ChangeCircleColorBack();
	
	for(var i=0;i<ModuleInfo.length;i++)
		{
			var selectCircle = ModuleInfo[i][0]._id;
//			console.log('#circle'+selectCircle)
			document.getElementById('circle'+selectCircle).style.fill = ChangeColor;
//			d3.select(('#circle'+selectCircle))
//			.transition()
//			.duration(durationTime)
//			.attr('fill',ChangeColor);
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
	topBlank = document.getElementById("Graphicsvg").getBoundingClientRect().height*0.01;
	
	var Yblank = null;
	Yblank = document.getElementById("Graphicsvg").getBoundingClientRect().width*0.5;
	
	var circleR = null;
	circleR = (document.getElementById("Graphicsvg").getBoundingClientRect().height-2*topBlank)/(4*CircleMaxNumberforR-2);
	
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

//SplitFontbyWidth----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function splitByLine(str,max,fontsize)
{
	var curLen = 0;
	var result = [];
	var start = 0, end = 0;
	for(var i=0;i<str.length;i++)
	{
		var code = str.charCodeAt(i);
		var pixelLen = code > 255 ? fontsize : fontsize/2;
		curLen += pixelLen;
		if(curLen > max)
			{
				end = i;
				result.push(str.substring(start,end));
				start = i;
				curLen = pixelLen;
			}
		if( i === str.length - 1 )
			{
				end = i;
				result.push(str.substring(start,end+1));
			}
				
	}
	
	return result;
}