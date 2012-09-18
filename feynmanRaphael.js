// Needs raphael.js and jQuery 

function initializeRaphael(posX, posY, size){
	var paper = Raphael(posX, posY, size, size);
	var set = paper.set();
	
	$('svg').attr("cursor","crosshair");
	
	halfSize = size/2;
	
	set.push(
	    paper.path("M0 "+halfSize+"H"+size).attr("stroke","red"),
	    paper.path("M"+halfSize+" 0V"+size).attr("stroke","red")
	);
	
	 $('svg').mousemove(function(e){   
	      set.remove()
	
	      var LineXPos = (e.clientX-posX);
	      var LineYPos = (e.clientY-posY);
	      
	      set.push(
	      paper.path("M0 "+LineYPos+"H"+size).attr("stroke","red"),
	      paper.path("M"+LineXPos+" 0V"+size).attr("stroke","red")
	      );
	      
	    });
	
	 $('svg').click(function(e){
	   	alert((e.clientX-posX)+","+(e.clientY-posY));
	   	$('svg').unbind('mousemove');
	  });
}