function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}
document.getElementById("domo").addEventListener("click", function(){
    toggleClass(document.getElementById("domo"), ' action');    
});

document.getElementsByTagName('body')[0].onkeydown = function(e) { 
   var ev = e || window.event;

	var moveDelta = 5;
	var currentPositionXdata = $("#domo").css("left");
	var currentPositionXarr = currentPositionXdata.split('px');
	var currentPositionX = parseInt(currentPositionXarr[0]);
	
   var currentPositionYdata = $("#domo").css("top");
	var currentPositionYarr = currentPositionYdata.split('px');
   var currentPositionY = parseInt(currentPositionYarr[0]);

   //body/stomach
    if (ev.keyCode===83){
		// Create a new style tag
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: 0px; }', 0);
			
			sheet.insertRule('.andy:before {box-shadow: 285px 0 0 rgba(100, 200, 10, 1), 190px 110px 0 rgba(100, 200, 10, 1), 95px 110px 0 rgba(100, 200, 10, 1);;}', 0);
			sheet.insertRule('.andy:after {background-size: 50% 140%;}', 0);		
		}        
    }
    //left arm
    else if(ev.keyCode===65){
		// Create a new style tag
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: -110px; }', 0);
			
			sheet.insertRule('.andy:before {box-shadow: 285px 110px 0 rgba(100, 200, 10, 1), 190px 220px 0 rgba(100, 200, 10, 1), 95px 220px 0 rgba(100, 200, 10, 1);;}', 0);
			sheet.insertRule('.andy:after {background-size: 50% 100%;}', 0);		
		}
	 }
	 //brain/eyes
	 else if(ev.keyCode===87){
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: 0px; }', 0);
			sheet.insertRule('.andy:before {box-shadow: 285px 0 0 rgba(100, 200, 10, 1), 190px 110px 0 rgba(100, 200, 10, 1), 95px 110px 0 rgba(100, 200, 10, 1);}', 0);
			
			sheet.insertRule('.andy:after {background-size: 50% 75%;}', 0);		
		}
	 }
	//right arm
	 else if(ev.keyCode===68){
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: 0px; }', 0);
			sheet.insertRule('.andy:after {background-size: 50% 100%;}', 0);		
			sheet.insertRule('.andy:before {box-shadow: 285px -110px 0 rgba(100, 200, 10, 1), 190px 110px 0 rgba(100, 200, 10, 1), 95px 110px 0 rgba(100, 200, 10, 1);;}', 0);
		}
	 }
	 //right leg
 	 else if(ev.keyCode===88){
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: 0px; }', 0);
			sheet.insertRule('.andy:after {background-size: 50% 100%;}', 0);		
			
			sheet.insertRule('.andy:before {box-shadow: 285px 0 0 rgba(100, 200, 10, 1), 190px 130px 0 rgba(100, 200, 10, 1), 95px 110px 0 rgba(100, 200, 10, 1);}', 0);
		}
	 }	 
	 //left leg
 	 else if(ev.keyCode===90){
		var style = document.createElement("style");

		// Append the style tag to head
		document.head.appendChild(style);
		
		// Grab the stylesheet object
		sheet = style.sheet

		// Use addRule or insertRule to inject styles
		if("insertRule" in sheet) {
			sheet.insertRule('.andy:before { top: 0px; }', 0);
			sheet.insertRule('.andy:after {background-size: 50% 100%;}', 0);		
			
			sheet.insertRule('.andy:before {box-shadow: 285px 0 0 rgba(100, 200, 10, 1), 190px 110px 0 rgba(100, 200, 10, 1), 95px 130px 0 rgba(100, 200, 10, 1);}', 0);
		}
	 }	 
	 //move control
		//arrow up 38
		else if (ev.keyCode==38){
			var newPositionY = (currentPositionY - moveDelta)+"px";
			document.getElementById('domo').style.top=newPositionY;
		}
		//arrow down 40
		else if (ev.keyCode==40){
			var newPositionY = (currentPositionY + moveDelta)+"px";
			document.getElementById('domo').style.top=newPositionY;
		}
	
		//arrow left 37
		else if (ev.keyCode==37){
			var newPositionX = (currentPositionX - moveDelta)+"px";
			document.getElementById('domo').style.left=newPositionX;
		}

		//arrow right 39
		else if (ev.keyCode==39){
			var newPositionX = (currentPositionX + moveDelta)+"px";
			document.getElementById('domo').style.left=newPositionX;
		}		 
	}