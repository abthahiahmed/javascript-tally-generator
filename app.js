
var number_to_save = 0;

generateTally=(number)=>{
	number_to_save = number;
	var number = number;


	var total_cell = Math.ceil(number/5);	
	console.log(total_cell)


	const f = (() => {
    // create the svg element
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // set width and height
    svg1.setAttribute("style", "background:#14213d;padding:5");
    svg1.setAttribute("width", "1000");
    svg1.setAttribute("height", "1000");

    // create a circle


    for (var i=1;i<=total_cell;i++){

    	var cell = (i-1)*20;


    	var end = 5;

    	if (number > 5) {
	    	if (i*5 > number) {
	    		end = 5 - (i*5) % number;
	    	}
    	}else{
    		end = number
    	}

    	if (cell > 990) {}

    	console.log('End Value:',end)
	    for (var j=0; j < end; j++){
	    	if (j < 4) {
		     	const tally = document.createElementNS(
			      "http://www.w3.org/2000/svg",
			      "rect",
			    );
			    tally.setAttribute("x", cell+2+j*4);
			    tally.setAttribute("y", "0");
			    tally.setAttribute("width", "2");
			    tally.setAttribute("height", "20");
			    tally.setAttribute("fill", "#ced4da");
			    svg1.appendChild(tally);
	    	}else{
		     	const tally = document.createElementNS(
			      "http://www.w3.org/2000/svg",
			      "line",
			    );
			    tally.setAttribute("style", "fill:none;stroke:#e63946;stroke-width:2;");
			    tally.setAttribute("x1", cell);
			    tally.setAttribute("y1", "2");
			    tally.setAttribute("x2", cell+18);
			    tally.setAttribute("y2", "18");
			    svg1.appendChild(tally);
	    	}
	    }
    }






    // attach container to document
    document.getElementById("svg").innerHTML = ''
    document.getElementById("svg").appendChild(svg1);
  });

  f();
}

exportSVG=()=>{

	var svg = document.getElementById("svg");

	//get svg source.
	var serializer = new XMLSerializer();
	var source = serializer.serializeToString(svg);

	//add name spaces.
	if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
	    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
	}
	if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
	    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
	}

	//add xml declaration
	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

	//convert svg source to URI data scheme.
	var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

	//set url value to a element's href attribute.
	// document.getElementById("link").href = url;

	saveAs(url, 'tally-'+number_to_save+'.svg')

}

