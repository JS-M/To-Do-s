var enterbutton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function length(){
	return input.value.length;
} 
function listLength(){
	return item.length;
}
function createList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li);
	input.value = ""; 
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteList);
	function deleteList(){
		li.classList.toggle("delete")
	}	
}
function addList(){
	if (length() > 0)
     {
         		createList();
	 }
}
function AfterKeypress(event) {
	if (length() > 0 && event.which ===13) 
    {
				createList();
	} 
}
enterbutton.addEventListener("click",addList);
input.addEventListener("keypress", AfterKeypress);
function show(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var ss = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        ss = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + ss;
   document.getElementById("display").innerHTML = time;
    setTimeout(show, 1000);
}
show();

