console.log("Main");

//Get the Height of the window
var windowHeight = window.innerHeight;

//Set the percentage heigh of the Mid part.
var marginTopForMidPart = 0.25

//Judge if the ResourceScreen need to change with the screen;
var ChangeJudging = 0;

//The height and the width for button
//var buttonHeight = null;
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

//Set the blank heiht between each col-md;
var BlankHieght = WidthBlank;

//Get the initall size of some elements
var OldWidth = document.getElementById('ResourceScreen').offsetWidth;

//Set the inital height of the Mid top part;
d3.select('#ModulePart')
.style("height",ScreenUnitHeight*25 + "px");

d3.select('#Both_arrow')
.on("click",function(){
	
	if(ChangeJudging == 0)
		{
			d3.select('#ResourceScreen')
			.style("height",ScreenUnitHeight*100 + "px")
			.style("width",function()
			{
				var newWidth = ScreenUnitWith*100;
				return newWidth + "px";
			})
			.style("margin-top",0+"px")
			.style("margin-left",0+"%");
			ChangeJudging = 1;
		}
	else if(ChangeJudging == 1)
		{
			d3.select('#ResourceScreen')
			.style("height", ScreenUnitHeight * 75 + "px")
			.style("width",function()
			{
				return OldWidth + "px";
			})
			.style("margin-top",ScreenUnitHeight * 25 + "px")
			.style("margin-left",3.6+"%");
			ChangeJudging = 0;			
		}
})

//Set the inital height of the Mid bottom part;
d3.select('#ResourceScreen')
.style("margin-top",ScreenUnitHeight * 25 + "px")
.style("height", ScreenUnitHeight * 75 + "px");

//Change the size for each part when the Size of window changed.
window.onresize = function(){
//	window.location.reload()
    }