function Person(firstName, lastName, age, gender) {
    // var this = {__proto__: Person.prototype}

    var MAX_AGE = 150, 
        MIN_AGE = 0;
    var GENDERS = ["Male", "Female"];
    var _age, _gender;

    this.firstName = firstName;
    this.lastName = lastName;

    this.setAge = function(age){
        if(age < 0 || age > 150){
            throw new Error('Age is not valid, should be between:' + MIN_AGE + " and " + MAX_AGE);
        }
        _age = age;
    }
    this.getAge = function(){
        return _age
    }
    this.setAge(age);

    
    this.setGender = function(gender){
        if(GENDERS.indexOf(gender) === -1){
            throw new Error('Gender is not valid, should be: ' + GENDERS)
        }
        _gender = gender;
    }
    this.getGender = function(){
        return _gender;
    }
    this.setGender(gender);
    // return this;
}


function Employee(firstName, lastName, age, gender, email, id){
    // var this = {__proto__: Employee.prototype}

    
    var obj = Object.create(new Person(firstName, lastName, age, gender))
    obj.email = email;
    obj.id = id;

    return obj;
}

var oleh = new Employee('Oleh', 'Andrushko', 24, 'Male', 'lalal@mail.co', '#sajdqw12e11dbosa');