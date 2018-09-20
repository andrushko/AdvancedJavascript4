var gitapi = (function(){

    return {
        send: sendRequest,
        get: get,
    };

    function get(url, callback){
        if(url.indexOf('://') === -1){
            url = Settings.git.apiUrl + url
                + '?client_id=' + Settings.git.clientId
                + '&client_secret=' + Settings.git.clientSecret;
        }
        sendRequest("GET", url, callback);
    }

    function sendRequest(httpMethod, url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open(httpMethod, url, true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
                callback(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();
    }
}());