var student= [
miki={
	"name":"miki",
	"height":176
},

nir={
	"name":"nir",
	"height":174
}
];


for( var i in student){
	console.log(student[i].name + "'s height" + "" + " is " +""+  student[i].height);
}






for( var i in student){
	student[i].height=175;

	console.log(student[i].name + "'s height" + "" + " is " +""+  student[i].height);
}
