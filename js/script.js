// Basic, but working solution - if else condition

function calculateInsurance () { 
	name = document.getElementById('name').value;
	age = parseInt(document.getElementById('age').value);
	var country = document.getElementById('country').value;
	var horse_power = parseInt(document.getElementById('horse_power').value);

if (country == "Austria" || country == "austria") {
	var insurance = (horse_power*100)/age + 50;
	document.write( name + ", your insurance is " + insurance + " € "); 
	}
else if (country == "Germany" || country == "germany") {
	var insurance = (horse_power)*120/age + 100;
	document.write( name + ", your insurance is " + insurance + " € "); 
	}
else if (country == "Italy" || country == "italy") {
	var insurance = (horse_power)*150/(age+2) + 150;
	document.write( name + ", your insurance is " + insurance + " € "); 
	}	
else {
	document.write("Please insert only Austria, Germany or Italy!");
}
}