console.log("Module");

//Help put the module into the right place
var LevelReNumberCount = 0;
var LevelNoreNumberCount = 0;

// Help Draw the SquareBox;
var PreviousLevel = 0;
var LevelNumber = 1;

//Remember the Level now 
var PreviousSelectLevel = null;
var PreviousName = null;

//Time for changing
var durationTime = null;
durationTime = 500;

//Load the data about Module;
function ModuleDataLoad(CourseObject)
{
//	queue()
//	.defer(d3.csv,'data/CSV File/LevelInfo.csv',parseLevle)
//	.await(dataLoaded);
	dataLoaded(CourseObject);
	return null;
}

//Controling the data-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dataLoaded(CourseObject)
{
	//Deletethe the exist btn;
	DeleteAllbtn();
	
	console.log(CourseObject);
	
	// initial
	LevelPassInfo = FindtheMaxLevel(CourseObject);
	
//	var LevelInfo = Levelinfo;
	
	//Set the Key to record how many module has already been submit and if it match the requirement
	var KeyBluePass = 0;
	var KeyGreenPass = 0;
	
	//Remember the Level now 
	PreviousSelectLevel = null;
	PreviousName = null;
	
	
	//Require Module number record
	var BlueNumber = 0;
	var GreenNumber = 0;
	var Button = d3.select('#ModulePart')
		.selectAll('btn')
		.data(CourseObject)
		.enter();
	
	// Set and describe some data for element, may be used in the latter, like the value of width and height of button, margin-left margin-top and so on make sure every value changing and setting is in this part---------
	//Get the width and the height of the target area;
	var h = document.getElementById('ModulePart').offsetHeight;
	var w = document.getElementById('ModulePart').offsetWidth;
	
	//The inital distance for each button from the top to its position
	//var heighpercentage = 0.33;
	var lowpercentage = 0.30;
	
	//The inital distance for each button from the left to its position
	var Leftpercentage = 0.45;
	
	//buttonWidth and Height
	buttonWidth = document.getElementById('ModulePart').offsetWidth*0.02;
//	buttonWidth = buttonHeight;
	SubmitButtonWidth = document.getElementById('ModulePart').offsetWidth*0.04;
	SubmitButtonHeight = document.getElementById('ModulePart').offsetWidth*0.02;
	
	//The blank for each button;
	WidthBlank = buttonWidth*0.05;
//	console.log(WidthBlank);
//	if(WidthBlank<2)
//		{
//			WidthBlank = 2;
//		}
	HeightBlank = buttonWidth*0.1;
//	WidthBlank = 0;
//	HeightBlank = 0;
	
	//Draw the button with data and describe the click function each button means a module---------------------------------------------------------------------------------------------------------------------------------
	var DrawButton = Button
		.append("button")
		.attr("class",function(d){
			if(d.Required == true)
				{
					LevelPassInfo[d.Level-1] = LevelPassInfo[d.Level-1] + 1;
					return "btn btn-info "+d.Level;//I use the level to discribe the different columns of modules, level 1 is the most left column, and the highest level will be the most right column
				}
			else
				{
					return "btn btn-success "+d.Level;
				}
		})
		.attr("id",function(d){
//			console.log(d.rank);
			return "Module"+d.moduleObjectId;
		})
		.attr("name",function(d){
			return d.moduleInfo[0].name;
		})
		.attr("submitted",function(d){
			return d.Submitted;
		})
		.attr("required",function(d){
			return d.Required;
		})
		.attr("type","button")
		.attr("value",function(d){
			return +d.Level;
		})
		.style("width",(buttonWidth) + "px")
		.style("height",(buttonWidth) + "px")
		.style("position","absolute")
		.style("margin-top",function(d){
			if(d.Required==true)//Required is the attribution which will discribe if this module is elective or obligatory, obligatory means the true, and elective means the faluse
				{
					if(PreviousLevel!=d.Level)//Obligatory and the elective will draw in totally different way
						{
							LevelNoreNumberCount = 0;
							LevelReNumberCount = 0;
							PreviousLevel = d.Level;
							var WidthBlankValue = (h*lowpercentage - LevelReNumberCount*(buttonWidth))
							LevelReNumberCount = LevelReNumberCount + 1;
							return WidthBlankValue + "px";
						}
					else
						{
							var WidthBlankValue = (h*lowpercentage - LevelReNumberCount*(buttonWidth) - HeightBlank );
							LevelReNumberCount = LevelReNumberCount + 1;
							return WidthBlankValue + "px";							
						}
				}
			else
				{
					if(PreviousLevel!=d.Level)
						{
							LevelReNumberCount = 0;
							LevelNoreNumberCount = 0;
							PreviousLevel = d.Level
							var HeightBlankValue = (h*lowpercentage + (LevelNoreNumberCount+1)*(buttonWidth) + HeightBlank * (LevelNoreNumberCount+1));
							LevelNoreNumberCount = LevelNoreNumberCount + 1;
							return HeightBlankValue + "px";
						}
					else
						{
							var HeightBlankValue = (h*lowpercentage + (LevelNoreNumberCount+1)*(buttonWidth) + HeightBlank * (LevelNoreNumberCount+1));
							LevelNoreNumberCount = LevelNoreNumberCount + 1;
							return  HeightBlankValue + "px";							
						}
				}
		})
		.style("margin-left",function(d){
			return ((d.Level-1)*(buttonWidth)+(d.Level-1)*WidthBlank+Leftpercentage*w)+"px";
		})
		.attr("disabled",function(d){
			
			//Only the module in level 1 could be selected at first.
			if(d.Level==1)
				{
					return null
				}
			else
				{
					return "disabled";
				}
		})
		.style("opacity",function(d){
			if(this.disabled)
				{
					return 0.3;
				}
			else
				{
					return 0.7;
				}
		})	
		.on("click",function(d){
			changeModule(d.moduleInfo[0].link);
			d3.select('#ModulePart')
			.selectAll('.btn')
			.transition()
			.duration(durationTime)
			.style("background-color",null);			
			if(PreviousSelectLevel < d.Level)
				{
					PreviousSelectLevel = d.Level;
				}
			d3.select('#' + "Module"+d.moduleObjectId)
			.transition()
			.duration(durationTime)			
			.style("background-color",function(d){
				if(PreviousName!=d.moduleObjectId)
					{
						if(PreviousName!=null)
							{
//								d3.select('#'+"Module"+PreviousName)
							}
//						return "rgb" + "(" +"255,106,106"+ ")"
						return "white";
					}
				else
					{
						return "white";
					}
			});
			PreviousName = d.moduleObjectId;
			
			var SelectName = null;
			SelectName = d.moduleInfo[0].name;
			
			var SelectSkill = null;
			SelectSkill = d.moduleInfo[0].learningOutcomes;
			
			var SelectCourseOutcome = null;
			SelectCourseOutcome = d.moduleInfo[0].courseOutcome;
			
			DeleteText();
			
			ModuleInformationDetail(SelectName,SelectCourseOutcome);
			
			SkillDetail(SelectName,SelectSkill);
			
			var ModuleInfo = null;
			ModuleInfo = d.moduleInfo[0].learningOutcomes;
			
			var ChangeColor = null;
			if(d.Required == true)
				{
					ChangeColor = "rgb" + '(' + "64,168,245" + ')';
				}
			else
				{
					ChangeColor = "rgb" + '(' + "122,201,66" + ')';
				}
			
			ChangeCircleColor(ModuleInfo,ChangeColor);
		})
		.on("mouseover",function(){
			
//			console.log(document.getElementById(this.id).getAttribute('required'));
			
// Describe the Tooltip part------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			var ToolTip = d3.select("#ModulePart")
			.append("svg")
			.attr("id","Tooltip1")
			.attr("width",function(){
				var ToolTipWidth = document.getElementById("ModulePart").offsetWidth*0.25 + "px";
				return ToolTipWidth;
			})
			.attr("height",function(){
				var ToolTipWidth = document.getElementById("ModulePart").offsetWidth*0.12 + "px";
				return ToolTipWidth;
			})
//			.style("background-color","#EFEFEF")
			.style("background-color","White")
			.style("opacity",0)
			.style("position","absolute")
			.style("z-index","99");
//			console.log(this);
			var LeftPosition = this.style.marginLeft.toString();
			var TopPosition = this.style.marginTop.toString();
			var pattern = "px";
			
			LeftPosition = LeftPosition.replace(new RegExp(pattern),"");
			TopPosition = TopPosition.replace(new RegExp(pattern),"");
			
			var ToolTipChanging = d3.select("#Tooltip1")
			.style("margin-left",function(){
				var RightLeftPosition = +LeftPosition;
//				console.log(RightLeftPosition);
				return  RightLeftPosition + buttonWidth + "px" ;
			})
			.style("margin-top",function(){
				var RightTopPosition = +TopPosition;
				return RightTopPosition  + "px" ;				
			})			
			.transition()
			.duration(durationTime)			
			.style("opacity",0.8)
			
			var HideText = d3.select("#Tooltip1")
			.text("");
			
			var TipString;
			if(document.getElementById(this.id).getAttribute('required')=="true")
				{
					BlueNumber = (LevelPassInfo[this.value-1]-KeyBluePass);
					if(BlueNumber<=0)
						{
							BlueNumber = 0;
						}
					TipString = "Need submit " + BlueNumber + ",more Blue module,in Level " + (LevelNumber) + ",to unlock,the Level " + (LevelNumber+1);					
				}
			else
				{							
					TipString = "This is an" + ",optional module";
				}
			
			var text = d3.select("#Tooltip1")
			.append("text")
			.attr("x",15)
			.attr("y",25)
			.style("font-size",function(){
				var FontSize = document.getElementById("ModulePart").offsetWidth*0.014 + "px";
				console.log(FontSize);
				return FontSize;
			})
//			.text(TipString);
			
			var NewString = TipString.split(",");
			
			text.selectAll("tspan")
			.data(NewString)
			.enter()
			.append("tspan")
			.attr("x",15)
			.attr("dy","1em")
			.text(function(d){
				return d;
			});
			
//			console.log(ToolTip);			
		})
		.on("mouseout",function(){
			var TipStringII = "Need submit " +  BlueNumber + ",more Blue module" + ",and need submit " + GreenNumber + ",more Green module,in Level "+ (LevelNumber) + ",to unlock,the Level " + (LevelNumber+1);
			var NewString = TipStringII.split(",");
			
//			var Hide = d3.select("#Tooltip")
//			.transition()
//			.duration(500)
//			.style("opacity",0)
			
			var ChangePosition = d3.select('#Tooltip1')
			.transition()
			.duration(durationTime)
			.style("opacity",0)
			.remove();
		})
	
			var ToolTip2 = d3.select("#ModulePart")
			.append("svg")
			.attr("id","Tooltip2")
			.attr("width",function(){
				var ToolTipWidth = document.getElementById("ModulePart").offsetWidth*0.20 + "px";
				return ToolTipWidth;
			})
			.attr("height",function(){
				var ToolTipWidth = document.getElementById("ModulePart").offsetWidth*0.15 + "px";
				return ToolTipWidth;
			})
//			.style("background-color","#EFEFEF")
			.style("background-color","White")			
			.style("opacity",0)
			.style("position","absolute")
			.style("z-index","99");	
	
			var TipStringII = "Need submit " +  BlueNumber + ",more Blue module" + ",and need submit " + GreenNumber + ",more Green module,in Level "+ (LevelNumber) + ",to unlock,the Level " + (LevelNumber+1);
			var NewString = TipStringII.split(",");
			
//			var Hide = d3.select("#Tooltip")
//			.transition()
//			.duration(500)
//			.style("opacity",0)
			
			var HideText = d3.select("#Tooltip2")
			.text("");
			
			var Showagain = d3.select('#Tooltip2')
			.append("text")
			.attr("x",15)
			.attr("y",25)
			.style("font-size",function(){
				var FontSize = document.getElementById("ModulePart").offsetWidth*0.014 + "px";
//				console.log(FontSize);
				return FontSize;				
			})
			
			Showagain.selectAll("tspan")
			.data(NewString)
			.enter()
			.append("tspan")
			.attr("x",15)
			.attr("dy","1em")
			.text(function(d){
				return d;
			});
			
			var ChangePosition = d3.select('#Tooltip2')
			.transition()
			.duration(durationTime)
			.style("opacity",0.8)
			.style("margin-left",0+"px")
			.style("margin-top",0+"px")		
	
// Describe the Submit button part and the Restart button part-------------------------------------------------------------------------------------------------------------------------------------------------------------	
		var SubmitButton = d3.select('#ModulePart')
		.append("button")
		.attr("class","btn btn-warning")
		.attr("type","button")
		.attr("value","Change Source")
		.attr("submitted",1)	
		.style("width",SubmitButtonWidth + "px")
		.style("height",SubmitButtonHeight + "px")
		.style("margin-left",93 + "%")
//		.style("padding-left",SubmitButtonWidth*0.02+"px")
//		.style("padding-top",SubmitButtonHeight*0.2+"px")
		.style("position","absolute")
		.append('text')
		.attr("text-anchor","middle")
		.text("Submit")
		.style("font-size",SubmitButtonHeight * 0.05 + "px")
		.on("click",function(){
			
//			console.log(document.getElementById("Module"+PreviousName).getAttribute("submitted"));
			d3.select("#"+"Module"+PreviousName)
			.attr("Submitted",function(){
				if(document.getElementById("Module"+PreviousName).getAttribute("submitted")=="false")
					{
						if(document.getElementById("Module"+PreviousName).getAttribute("required")=="true")
							{
								KeyBluePass = KeyBluePass + 1;
								return true;	
							}
						else
							{
//								console.log(document.getElementById("Module"+PreviousName));
								KeyGreenPass = KeyGreenPass + 1;
								return true;	
							}
					}
				else
					{
						return true;
					}
			})
			.style("opacity",1)
			
//			console.log(document.getElementById("Module"+PreviousName).getAttribute("submitted"));
//			console.log(PreviousName);
			
			CheckAndChangeCircle(SkillArrary);
			
			if(PreviousSelectLevel>0)
				{			
					if(LevelPassInfo[PreviousSelectLevel-1] <= KeyBluePass)
						{
//							if(LevelInfo[PreviousSelectLevel-1].ReGreenNumber <= KeyGreenPass)
//								{
										var NameString = ".btn.btn-info"+'.'+(PreviousSelectLevel+1).toString();
											$(NameString)
											.attr("disabled",null);

											var NameAString = ".btn.btn-success"+'.'+(PreviousSelectLevel+1).toString();
											$(NameAString)
											.attr("disabled",null);

											d3.select('#ModulePart')
											.selectAll('.btn')
											.style("opacity",function(d){
//												console.log(this.getAttribute("Submitted"));
													if(this.getAttribute("submitted")==1)
														{
															return 1;
														}
													else if(this.getAttribute("submitted")=="true")
														{
//															console.log(this);
															return 1;
														}
													else if(this.disabled)
														{
															return 0.2;
														}
													else if(!this.disabled)
														{
															return 0.5;
														}
														})
											
											LevelNumber = LevelNumber + 1;

											KeyBluePass = 0;
											KeyGreenPass = 0;
//								}
						}
				}
		});
	
	var ReloadButton = d3.select('#ModulePart')
		.append("button")
		.attr("class","btn btn-warning")
		.attr("type","button")
		.attr("value","Change Source")
		.attr("submitted",1)
		.style("width",SubmitButtonWidth + "px")
		.style("height",SubmitButtonHeight + "px")
		.style("margin-left",88 + "%")
//		.style("padding-left",SubmitButtonWidth*0.02+"px")
//		.style("padding-top",SubmitButtonHeight*0.2+"px")
		.style("position","absolute")
		.append('text')
		.text("Restart")
		.attr("text-anchor","middle")
		.style("font-size", SubmitButtonHeight * 0.05 + "px")
		.on("click",function(){
			window.location.reload();
		});
//  console.log(LevelPassInfo);	
//	console.log(DrawButton[0][0].__data__);
//	console.log(DrawButton);
//	console.log(Button);
}
// End of the Main function------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Web link page jump part-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function changeModule(ModuleAddress)
{
	document.getElementById("moduleDetail").src = ModuleAddress;
}

// Change data to the Object-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function parse(d)
//{
//	var Module = {}
//	
//	Module.Level = +d.Level;
//	Module.Link = d.Resource;
//	Module.Name = d.ModuleName;
//	Module.Id = +d.ModuleID;
//	Module.Required = d.Required;
//	
//	return Module;
//}

//function parseLevle(d)
//{
//	var ModuleLevel = {}			
//
//	ModuleLevel.Level = +d.Level;
//	ModuleLevel.ReBlueNumber = +d.BlueRequiredNo;
//	ModuleLevel.ReGreenNumber = +d.GreenRequiredNo;
//	ModuleLevel.Des = d.Description;
//			
//	return ModuleLevel;
//
//}

//Delete those text may cause text overlap----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteText()
{
	if(document.getElementById('SelectModuleName'))
	{
		d3.select('#SelectModuleName')
		.remove();
	}
			
	if(document.getElementById('SelectModuleSkill'))
	{
		d3.select('#SelectModuleSkill')
		.remove();
	}
			
	if(document.getElementById('RelevantModuleName'))
	{
		d3.select('#RelevantModuleName')
		.remove();
	}
			
	if(document.getElementById('SelectModuleDetail'))
	{
		d3.select('#SelectModuleDetail')
		.remove();
	}
}

//Delete those button may cause button overlap------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DeleteAllbtn()
{
	d3.select('#ModulePart')
	.selectAll('.btn')
	.remove();
}

//Change Module Btn Color---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ChangeModuleBtnColor(RelevantModule)
{
//	console.log(RelevantModule);
	d3.select('#ModulePart')
	.selectAll('.btn')
	.style('background-color',null)
	
	for(var i=0;i<RelevantModule.length;i++)
		{
			d3.select('#Module'+RelevantModule[i])
			.transition()
			.duration(durationTime)
			.style('background-color','White');
		}
	
	return null;
}



