// Your JS goes here
/*Each tile should be a div
Each tile's width is 11.1%
Set each tile's float property to left
Each tile's paddingBottom is 11.1%
*/
var checkboard = function(){
   
    for (var i = 0; i < 63; i++ ) {
        if (i % 2 == 0){
        	var color = "red"
        }
        else{
        	var color = "black"
        }
      
		

	var div = document.createElement("div");
	div.style.width = "11.1%";
	div.style.paddingBottom = "11.1%";
	div.style.background = color;
	div.style.float = "left";
	document.body.appendChild(div);

}

};
checkboard();









