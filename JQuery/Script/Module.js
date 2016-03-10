console.log("Module");

var CourseObject = null;

//Help put the module into the right place
var LevelReNumberCount = 0;
var LevelNoreNumberCount = 0;

// Help Draw the SquareBox;
var PreviousLevel = 0;
var LevelNumber = 1;

//Load the data about Module;
function ModuleDataLoad()
{
//	queue()
//	.defer(d3.csv,'data/CSV File/LevelInfo.csv',parseLevle)
//	.await(dataLoaded);
	dataLoaded();
}

//Controling the data-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dataLoaded()
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
	var PreviousSelectLevel = 0;
	var PreviousName = null;
	
	
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
	var Leftpercentage = 0.3;
	
	//buttonWidth and Height
	buttonHeight = document.getElementById('ModulePart').offsetWidth*0.02;
	buttonWidth = buttonHeight;
	SubmitButtonWidth = document.getElementById('ModulePart').offsetWidth*0.04;
	SubmitButtonHeight = document.getElementById('ModulePart').offsetWidth*0.02;
	
	//The blank for each button;
	WidthBlank = buttonWidth*0.035;
	HeightBlank = WidthBlank;
	
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
			return "Module"+d.rank;
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
		.style("width",buttonWidth + "px")
		.style("height",buttonHeight + "px")
		.style("position","absolute")
		.style("margin-top",function(d){
			if(d.Required==true)//Required is the attribution which will discribe if this module is elective or obligatory, obligatory means the true, and elective means the faluse
				{
					if(PreviousLevel!=d.Level)//Obligatory and the elective will draw in totally different way
						{
							LevelNoreNumberCount = 0;
							LevelReNumberCount = 0;
							PreviousLevel = d.Level;
							var WidthBlankValue = (h*lowpercentage - LevelReNumberCount*buttonHeight)
							LevelReNumberCount = LevelReNumberCount + 1;
							return WidthBlankValue + "px";
						}
					else
						{
							var WidthBlankValue = (h*lowpercentage - LevelReNumberCount*buttonHeight - HeightBlank );
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
							var HeightBlankValue = (h*lowpercentage + (LevelNoreNumberCount+1)*buttonHeight)
							LevelNoreNumberCount = LevelNoreNumberCount + 1;
							return HeightBlankValue + "px";
						}
					else
						{
							var HeightBlankValue = (h*lowpercentage + (LevelNoreNumberCount+1)*buttonHeight + HeightBlank * (LevelNoreNumberCount+1));
							LevelNoreNumberCount = LevelNoreNumberCount + 1;
							return  HeightBlankValue + "px";							
						}
				}
		})
		.style("margin-left",function(d){
			return ((d.Level-1)*buttonWidth+WidthBlank*(d.Level-1)+Leftpercentage*w)+"px";
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
//			for(var i=0;i<LevelInfo.length;i++)
//				{
//					if(d.Level==LevelInfo[i].Level)
//						{
//							if(d.Required==true)
//								{
//									if(LevelInfo[i].ReBlueNumber <= KeyBluePass)
//										{
//											return null;
//										}
//									else
//										{
//											return "disabled";//If the module can not be select at first, like need some pre request module or skills, or something other, than, that module will be disabled
//										}	
//								}
//							else
//								{
//									if(LevelInfo[i].ReGreenNumber <= KeyGreenPass)
//										{
//											return null;
//										}
//									else
//										{
//											return "disabled";//If the module can not be select at first, like need some pre request module or skills, or something other, than, that module will be disabled
//										}	
//								}							
//						}
//				}
//			return null;
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
			if(PreviousSelectLevel < d.Level)
				{
					PreviousSelectLevel = d.Level;
				}
			d3.select('#' + "Module"+d.rank)
			.transition()
			.duration(500)			
			.style("background-color",function(d){
				if(PreviousName!=d.rank)
					{
						if(PreviousName!=null)
							{
								d3.select('#'+"Module"+PreviousName)
								.transition()
								.duration(500)
								.style("background-color",null);
							}
//						return "rgb" + "(" +"255,106,106"+ ")"
						return "white";
					}
			});
			PreviousName = d.rank;			
		})
		.on("mouseover",function(){
			
//			console.log(document.getElementById(this.id).getAttribute('required'));
			
// Describe the Tooltip part------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			var ToolTip = d3.select("#Tooltip")
//			console.log(this);
			var LeftPosition = this.style.marginLeft.toString();
			var TopPosition = this.style.marginTop.toString();
			var pattern = "px";
			
			LeftPosition = LeftPosition.replace(new RegExp(pattern),"");
			TopPosition = TopPosition.replace(new RegExp(pattern),"");
			
			ToolTip = d3.select("#Tooltip")
			.transition()
			.duration(500)			
			.style("margin-left",function(){
//				var coordinates = [0, 0];
//				coordinates = d3.mouse(this);
//				var x = coordinates[0];				
//				return x+buttonWidth/2 + "px";
				var RightLeftPosition = +LeftPosition;
//				console.log(RightLeftPosition);
				return  RightLeftPosition + buttonWidth + "px" ;
			})
			.style("margin-top",function(){
//				var coordinates = [0, 0];
//				coordinates = d3.mouse(this);
//				var y = coordinates[1];				
//				return y - buttonHeight/2 + "px";
				var RightTopPosition = +TopPosition;
				return RightTopPosition  + "px" ;				
			})
			.style("opacity",0.8)
			
			var HideText = d3.selectAll("text")
			.text("");
			
			var TipString;
			if(document.getElementById(this.id).getAttribute('required')=="true")
				{
//					if(LevelInfo[this.value-1].ReBlueNumber==0)
//						{
//							BlueNumber = (LevelInfo[this.value-1].ReBlueNumber+1 - KeyBluePass);
//							if(BlueNumber<=0)
//								{
//									BlueNumber = 0;
//								}
//							TipString = "Need submit " +  BlueNumber + ",more Blue module,in Level " + (LevelNumber) + ",to unlock,the next Level";
//						}
//					else
//						{
							BlueNumber = (LevelPassInfo[this.value-1]-KeyBluePass);
							if(BlueNumber<=0)
								{
									BlueNumber = 0;
								}
							TipString = "Need submit " + BlueNumber + ",more Blue module,in Level " + (LevelNumber) + ",to unlock,the Level " + (LevelNumber+1);
//						}					
				}
			else
				{
//					if(LevelInfo[this.value-1].ReGreenNumber==0)
//						{
//							GreenNumber = (LevelInfo[this.value-1].ReGreenNumber+1 - KeyGreenPass);
//							if(GreenNumber<=0)
//								{
//									GreenNumber = 0;
//								}
//							TipString = "Need submit " + GreenNumber + ",more Green module,in Level " + (LevelNumber) + ",to unlock,the next Level";
//						}
//					else
//						{
//							GreenNumber = (LevelInfo[this.value-1].ReGreenNumber-KeyGreenPass);
//							if(GreenNumber<=0)
//								{
//									GreenNumber = 0;
//								}							
							TipString = "This is an" + ",optional module";
//						}	
				}
			
			var text = d3.select("#Tooltip")
			.append("text")
			.attr("x",15)
			.attr("y",25)
			.style("font-size",18+"px")
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
			var TipStringII = "Need submit " +  BlueNumber + ",more Blue module" + ",and need submit " + GreenNumber + ",more Green module,in Level "+ (LevelNumber) + ",to unlock,the next Level";
			var NewString = TipStringII.split(",");
			
//			var Hide = d3.select("#Tooltip")
//			.transition()
//			.duration(500)
//			.style("opacity",0)
			
			var HideText = d3.selectAll("text")
			.text("");
			
			var Showagain = d3.select('#Tooltip')
			.append("text")
			.attr("x",15)
			.attr("y",25)
			.style("font-size",18+"px")
			
			Showagain.selectAll("tspan")
			.data(NewString)
			.enter()
			.append("tspan")
			.attr("x",15)
			.attr("dy","1em")
			.text(function(d){
				return d;
			});
			
			var ChangePosition = d3.select('#Tooltip')
			.transition()
			.duration(500)
			.style("opacity",0.8)
			.style("margin-left",0+"px")
			.style("margin-top",0+"px")			
		})
	
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
		.style("padding-left",SubmitButtonWidth*0.02+"px")
		.style("padding-top",SubmitButtonHeight*0.2+"px")
		.style("position","absolute")
		.text("Submit")
		.style("font-size",SubmitButtonHeight * 0.1 + "px")
		.on("click",function(){
			
			console.log(document.getElementById("Module"+PreviousName).getAttribute("submitted"));
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
								console.log(document.getElementById("Module"+PreviousName));
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

											d3.selectAll('.btn')
											.style("opacity",function(d){
//												console.log(this.getAttribute("Submitted"));
													if(this.getAttribute("submitted")==1)
														{
															return 1;
														}
													else if(this.getAttribute("submitted")=="true")
														{
															console.log(this);
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
		.style("padding-left",SubmitButtonWidth*0.02+"px")
		.style("padding-top",SubmitButtonHeight*0.2+"px")
		.style("position","absolute")
		.text("Restart")
		.style("font-size", SubmitButtonHeight * 0.1 + "px")
		.on("click",function(){
			window.location.reload();
		});
//  console.log(LevelPassInfo);	
//	console.log(DrawButton[0][0].__data__);
//	console.log(DrawButton);	
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

function parseLevle(d)
{
	var ModuleLevel = {}			

	ModuleLevel.Level = +d.Level;
	ModuleLevel.ReBlueNumber = +d.BlueRequiredNo;
	ModuleLevel.ReGreenNumber = +d.GreenRequiredNo;
	ModuleLevel.Des = d.Description;
			
	return ModuleLevel;

}

function DeleteAllbtn()
{
	d3.selectAll('.btn')
	.remove();
}



