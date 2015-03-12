var text="Hello this is Robert, can you find Robert in this sentence?"
var myName="Robert"
var hits=[]
	for(var i=0;i<text.length; i++){
		if(text[i]==="R"){
			for(var j=i; j<myName.length+i, j++){
				hits.push('Robert')
			}
		}
	}
	if(myName=0){
		console.log("Your name did not show up")
	}
	else{
		console.log("Your name did appear!")
	}