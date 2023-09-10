// Function --> dahi ashiglah bolomjtoi codnii tsugluulga
/*function restart(){
	console.log("game restarted");
}
restart();
function hello(name,age){
	console.log("snu minii neriig "+ name +" gedeg");
	console.log("bi "+age+" nastai");
}
hello("huslen",14);
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);

function s(c,d){
	if(c > d){
		console.log(c)
	}else{
		console.log(d)
	}
}
s(56,10);
s(80,90);*/

var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['#F2E1FF','#E1F3FF','#E1FFFB','#FCF7B3','#FDBEBE'];
var btn = document.getElementsByTagName('button')[0];
console.log(btn);
var i = -1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random];
	btn.innerText=colors[random];
	if(i >= colors.length-1){
		i=-1;
	}
}
