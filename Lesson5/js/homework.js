String.prototype.encrypt = function(intArg){
    var result = '';
    var inputString = this;

    for(var i = 0; i < inputString.length; i++){
        var ch = inputString[i];
        result += String.fromCharCode(ch.charCodeAt(0) + intArg);
    }
    return result;
}

String.prototype.decrypt = function(intArg){
    return this.encrypt((-1) * intArg);
}