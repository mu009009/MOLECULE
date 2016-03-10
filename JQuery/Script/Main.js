console.log("Main");

//Get the Height of the window
var windowHeight = window.innerHeight;

//Set the percentage heigh of the Mid part.
var marginTopForMidPart = 0.25

//Judge if the ResourceScreen need to change with the screen;
var ChangeJudging = 0;

//The height and the width for button
var buttonHeight = null;
var buttonWidth = null;
var SubmitButtonWidth = null;
var SubmitButtonHeight = null;

//The blank for each button;
var WidthBlank = null;
var HeightBlank = null;

//Record the Value of the each level, how many require course in each level
var LevelPassInfo = null;

//Get the width blank 
//var WidthBlank = document.getElementById('ProfeilePart').offsetWidth * 0.20;
var WidthBlank = 0;
//console.log("My screen is 15.6 inches, 1920*1080");
//console.log("");
//console.log("The Left Part Width: " + document.getElementById('ProfeilePart').offsetWidth + "px");
//console.log("The Left Part Height: " + document.getElementById('ProfeilePart').offsetHeight + "px");
//console.log("");
//console.log("The Mid Top Part Width: " + document.getElementById('ModulePart').offsetWidth + "px");
//console.log("The Mid Top Part Height: " + document.getElementById('ModulePart').offsetHeight + "px");
//console.log("");
//console.log("The Mid Bottom Part Width: " + document.getElementById('ResourceScreen').offsetWidth + "px");
//console.log("The Mid Bottom Part Height: " + document.getElementById('ResourceScreen').offsetHeight + "px");
//console.log("");
//console.log("The Right Part Width: " + document.getElementById('SkillPart').offsetWidth + "px");
//console.log("The Right Part Height: " + document.getElementById('SkillPart').offsetHeight + "px");
//console.log("");
//console.log("The Blank: " + WidthBlank + "px");

//Set the blank heiht between each col-md;
var BlankHieght = WidthBlank;

//Set the inital height of the Mid top part;
d3.select('#ModulePart')
.style("height",windowHeight * (marginTopForMidPart) + "px");

d3.select('#Both_arrow')
.on("click",function(){
	
	if(ChangeJudging == 0)
		{
			d3.select('#ResourceScreen')
			.style("height",windowHeight + "px")
			.style("width",function()
			{
				var newWidth = window.innerWidth*(1-0.036)-2*WidthBlank;
				return newWidth + "px";
			})
			.style("margin-top",0+"px");
			ChangeJudging = 1;
		}
	else if(ChangeJudging == 1)
		{
			d3.select('#ResourceScreen')
			.style("height", windowHeight * (1-marginTopForMidPart) - BlankHieght + "px")
			.style("width",function()
			{
				var OldWidth = 72.4;
				return OldWidth + "%";
			})
			.style("margin-top",windowHeight * marginTopForMidPart + BlankHieght +"px");
			ChangeJudging = 0;			
		}
})

//Set the inital height of the Mid bottom part;
d3.select('#ResourceScreen')
.style("margin-top",windowHeight * (marginTopForMidPart) + BlankHieght +"px")
.style("height", windowHeight * (1-marginTopForMidPart) - BlankHieght+ "px");

//Change the size for each part when the Size of window changed.
window.onresize = function(){
	
		windowHeight = window.innerHeight;
		
		//The height of the Mid top part, Chnage to fit the change of WindowSize
		d3.select('#ModulePart')
		.style("height",windowHeight * (marginTopForMidPart - BlankHieght) + "px");
		
		//The height of the Mid bottom part, Chnage to fit the change of WindowSize
	if(ChangeJudging == 0)
		{
			d3.select('#ResourceScreen')
			.style("margin-top",windowHeight * marginTopForMidPart - BlankHieght +"px")
			.style("height", windowHeight * (1-marginTopForMidPart) + BlankHieght + "px");			
		}
	else if(ChangeJudging == 1)
		{
			d3.select('#ResourceScreen')
			.style("height",windowHeight + "px")
			.style("width",function()
			{
				var newWidth = window.innerWidth*(1-0.036)-2*WidthBlank;
				return newWidth + "px";
			})
			.style("margin-top",0+"px");			
		}
	
	//Change the size of the profile Part
	d3.select('#ProfeilePart')
	.style("height",windowHeight + "px")
	.style("width",window.innerWidth*0.036 + "px")
	
	//Change the size of button;
	ModuleDataLoad();
	
	ProfilePartDraw();
    }