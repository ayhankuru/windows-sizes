var exec = require('child_process').exec;

function sizes(next){
	exec('wmic desktopmonitor get screenheight, screenwidth', function(error, stdout, stderr) {
	    if(error || stderr){
	    	next(error||stderr);
	    }else{
	    	var sizes = stdout.match(/\d+/g);
	    	var obj=[];
			for(var i=0; i < sizes.length; i+=2){
			   obj.push({width:sizes[i],height:sizes[i+1]});
			}

	    	next(null,obj)
	    }
	});

}


module.exports=exports=sizes;
