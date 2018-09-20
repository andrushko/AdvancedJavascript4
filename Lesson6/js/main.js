(function(){
    
    var e = getDomElements();
    
    e.searchInput.addEventListener('keydown', doSearch);

    function doSearch(event){
    	var keycode = event.keyCode || event.which;
    	if(e.searchInput.value && keycode === 13) {
    		getGithubUser(e.searchInput.value);
    	}
    }

    function getGithubUser(userLogin){
        gitapi.get('users/' + userLogin, function(user){
            e.userSection.style.display = 'block';
            e.userAvatar.src = user.avatar_url;
            e.userName.innerHTML = user.login;
            e.otherUserInfo.innerHTML = `<ul>
            								<b>Location:</b>${user.location} 
        								</ul>`
            e.tableBody.innerHTML = '';


            gitapi.get(user.repos_url, function(res_repos){
                for(var i = 0; i < res_repos.length; i++) {
                    var cr = res_repos[i];
                    var tr = document.createElement('tr');
                    tr.innerHTML = `<td>${cr.full_name}</td>
                                    <td>
                                        <a href=${cr.url}>${cr.url}</a>
                                    </td>`;
                    e.tableBody.appendChild(tr);
                }
            });
        });
    }

    function getDomElements(){
        return {
            userSection: document.getElementById('user'),
            searchInput: document.getElementById('searchtext'),
            userAvatar: document.getElementById('userAvatar'),
            userName: document.getElementById('userName'),
            tableBody: document.getElementById('tableBody'),
            otherUserInfo: document.getElementById('otherUserInfo')
        }
    }
}());