var userChoice=prompt("What would you like to pick, Rock Scissors or Paper?");
var computerChoice=Math.random();
	if(computerChoice<=.33){
		computerChoice="rock";
	}
	else if(computerChoice<=.66){
		computerChoice ="Scissors";
	}
	else{
		computerChoice="paper";
	}
console.log("computer:"+ computerChoice);
var compare=function(choice1,choice2){
	if (choice1===choice2){
		return("It's a tie!")
	}
	else if(choice1=== "paper"){
		if(choice2==="scissors"){
			return "scissors wins!";
		}
		else{
			return"paper wins!";
		}
	}
	else if(choice1==="scissors"){
		if(choice2==="rock"){
			return"rock wins!";
		}
		else{
			return "scissors wins"
		}
	}
	else if(choice1==="rock"){
		if(choice2==="paper"){
			return "paper wins!"
		}
		else{
			return "rock wins!"
		}
	}
};
compare(userChoice,computerChoice)