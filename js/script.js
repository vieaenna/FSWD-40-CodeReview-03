// (20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

//For Austria : insurance = horse_power x 100 / age   + 50;

//For Germany: insurance = horse_power x 120 / age  + 100;

// For Italy: insurance = horse_power x 150 / (age+2)  +  150;


// (15) Extract the values from the input fields and use them as calculation values for calculateInsurance() function. (hint: pay attention to type conversion!)

// (15) Use these calculated values to present the insurance price on the screen where "printed calculation goes here" is placed (see image example). e.g. “John, your insurance costs 300 €”

// Note:  to be capable of getting bonus points, a function like  calculateInsurancePerCountry(horse_power, age, country)  that returns a value that can be tested will be needed.

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