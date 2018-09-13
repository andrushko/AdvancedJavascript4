(function(){
	
}());

function Person(firstName, lastName, gender, age){
	var _age, _gender;
	var MAX_AGE = 130;
	var MIN_AGE = 0;
	var GENDERS = ['Male', 'Female'];

	// data props
	this.firstName = firstName;
	this.lastName = lastName;
	
	// accessor props
	this.getAge = getAge;
	this.setAge = setAge;
	this.getGender = getGender
	this.setGender = setGender;

	this.setAge(age);
	this.setGender(gender);

	// Private section 
	function getAge() {
		return _age;
	}
	function setAge(newAge) {
		if(newAge < MIN_AGE || newAge > MAX_AGE){
			throw new Error("Age value must be between " + MIN_AGE + " and " + MAX_AGE);
		}
		_age = newAge;
	}
	function setGender(newGender){
		if(!~GENDERS.indexOf(newGender)){
			throw new Error("Gender must be one from list: [" + GENDERS.join(", ") + "]");
		}
		_gender = newGender;
	}
	function getGender(){
		return _gender;
	}
}

function Proffession(id, name) {
	this.id = id;
	this.name = name;
}

function Employee(id, firstName, lastName, gender, age, profId){
	this.id = id;
	this.profId = profId;

	Person.call(this, firstName, lastName, gender, age);
	
	var parentSetAge = this.setAge.bind(this);
	this.setAge = function(newAge) {
		console.log('employee(' + this.id + ') new age is ' + newAge);
		parentSetAge(newAge);
	}
}


