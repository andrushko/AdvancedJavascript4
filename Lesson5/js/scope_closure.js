/* f.go(5, 2000, () => console.log("asdahyuvd")); */
var f = function(arg){
    for(var i = 0; i < 4000; i++){
        for(var j = 0; j < 1000; j++){
            for(var k = 0; k < 1000; k++){
                var ers = i * j * k;
            }
        }
    }
	console.log(arg);
}
Function.prototype.go = function(times, millis, callback){
    var self = this;
    for(var i = 0; i < times; i++){
        (function(i){
            var f = function(){ 
                self(i);  
            }
            setTimeout(f, millis * (i+1));
        }(i));
    }
    setTimeout(callback, millis);
};
