console.log("Profile");

var DurationTime = 800;
var MenueButtonClickJudge = 0;

var ProfilePartHeight = null;
var ProfileParWidth = null;
ProfilePartHeight = document.getElementById("ProfeilePart").offsetHeight;
ProfileParWidth = document.getElementById("ProfeilePart").offsetWidth;

// Margin-top of each button-------------------------------------------------------------------------
d3.select("#First_Button")
.style("margin-top",function(){
	return ProfilePartHeight*0.01 + "px";
})

d3.select("#Menue_Button")
.style("margin-top",function(){
	return ProfilePartHeight*0.55 + "px";
})

d3.select("#Menue1")
.attr("width",function(){
	return ProfileParWidth*1
})
.attr("height",function(){
	return ProfileParWidth*1
})
.style("margin-top",function(){
	return ProfilePartHeight*0.55 + "px";
})
.style("margin-left",function(){
	return 0 + "px";
})
.style("opacity",0)

d3.select("#Menue2")
.attr("width",function(){
	return ProfileParWidth*1
})
.attr("height",function(){
	return ProfileParWidth*1
})
.style("margin-top",function(){
	return ProfilePartHeight*0.55 + "px";
})
.style("margin-left",function(){
	return 0 + "px";
})
.style("opacity",0)

d3.select("#Menue3")
.attr("width",function(){
	return ProfileParWidth*1
})
.attr("height",function(){
	return ProfileParWidth*1
})
.style("margin-top",function(){
	return ProfilePartHeight*0.55 + "px";
})
.style("margin-left",function(){
	return 0 + "px";
})
.style("opacity",0)

d3.select("#Announce_Button")
.style("margin-top",function(){
	return ProfilePartHeight*0.90 + "px";
})
//Menue Click response part------------------------------------------------------------------------

d3.select("#Menue_Button")
.on("click",function(){
	console.log("MenueWork");
	console.log(MenueButtonClickJudge);
	if(MenueButtonClickJudge == 0)
		{
			ShowMenueDetail();
			MenueButtonClickJudge = 1;
		}
	else if(MenueButtonClickJudge == 1)
		{
			HideMenueDetail();
			MenueButtonClickJudge = 0;
		}
})


//Hide and show funcation of Menue-----------------------------------------------------------------
function ShowMenueDetail()
{
	d3.select("#Menue1")
	.style("z-index",90)	
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return ProfileParWidth*1 + "px";
	})
	.style("opacity",1)

	d3.select("#Menue2")
	.style("z-index",90)	
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return ProfileParWidth*2 + "px";
	})
	.style("opacity",1)

	d3.select("#Menue3")
	.style("z-index",90)	
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return ProfileParWidth*3 + "px";
	})
	.style("opacity",1)
}

function HideMenueDetail()
{
	d3.select("#Menue1")
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return 0 + "px";
	})
	.style("opacity",0)
	.style("z-index",0)		

	d3.select("#Menue2")	
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return 0 + "px";
	})
	.style("opacity",0)
	.style("z-index",0)	

	d3.select("#Menue3")	
	.transition()
	.duration(DurationTime)
	.style("margin-left",function(){
		return 0 + "px";
	})
	.style("opacity",0)
	.style("z-index",0)	
}