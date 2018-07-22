const config = require('./config.js');
const GithubHelper = require('./helper.js');
const githubHelper = new GithubHelper();
const DomManipulator = require('./dom-ops.js');
const dom = new DomManipulator();

module.exports = class Github {

    constructor() {
        this.authorizationToken =  "token " + config.gitToken;
    }

    getToken(getTokenRequest) {
        var token = '';
        let url = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token';
        fetch(url, {
                method: "POST",
                body: JSON.stringify(getTokenRequest)
            }
        )
        .then(function(response) {
            console.log("token get success");
            response.json().then(function(body){
                console.log(response);
                token = body.access_token; 
                console.log(body);
                console.log(token); 
                return token;
            });
            // dom.toggleModals(response);
        })
        .catch(error => console.error('Fetch Error =\n', error));
        return token;
    }

    authenticate() {

    }

    viewRepositories() {
        var repositories = '';
        let url = 'https://api.github.com/user/repos';
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(function(response) {
            // response.json().then(function(body){
            //     repositories = body; 
            //     console.log(repositories); 
            //     return repositories;
            // });
            dom.toggleModals(response);
        })
        .catch(error => console.error('Fetch Error =\n', error));
        return repositories;
    }

    createRepository(newRepoJson) {
        let url = 'https://api.github.com/user/repos';
        var responsePromise = '';
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(newRepoJson)
            }
        )
        .then(function(response) {
            dom.toggleModals(response);
        })
        .catch(error => console.error('Fetch Error =\n', error));
    }

    updateRepository(updateRepoJson, repoName) {
        repoName = "Hello-World3";
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName;
        fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(updateRepoJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error));  
    }

    deleteRepository(repoName) {
        repoName = "Hello-World2";
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName;
        fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error));  
    }

    createIssue(newIssueJson, repoName) {
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues';
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(newIssueJson)
            }
        )
        .then(function(response) {
            dom.toggleModals(response);
        })
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    updateIssue(updateIssueJson, repoName, issueNumber) {
        repoName = 'stack_route_prj7';
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber;
        fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(updateIssueJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    closeIssue(closeIssueJson, repoName, issueNumber) {
        repoName = 'stack_route_prj7';
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber;
        fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(closeIssueJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    reopenIssue(reopenIssueJson, repoName, issueNumber) {
        repoName = 'stack_route_prj7';
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber;
        fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(reopenIssueJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    displayIssue(repoName, issueNumber) {
        repoName = 'stack_route_prj7';
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber;
        var issues = '';
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(function(response) {
            response.json().then(function(body){
                issues = body; 
                console.log(issues); 
                return issues;
            });
        })
        .catch(error => console.error('Fetch Error =\n', error));
        return issues;
    }

    addIssueComment(commentBodyJson, repoName, issueNumber) {
        repoName = "stack_route_prj7";
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber + "/comments";
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(commentBodyJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    displayLastComment(repoName, issueNumber) {
        repoName = "stack_route_prj7";
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/' + issueNumber + "/comments";
        var comments = [];
        var latestComment = "";
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(function(response) {
            response.json().then(function(body){
                comments = body;
                latestComment = githubHelper.getLatestComment(comments);
                console.log(comments);
                console.log(latestComment); 
                return latestComment;
            });
        })
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    displayIssuesForUser() {
        let url = 'https://api.github.com/user/issues';
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    displayIssuesOnRepo() {
        repoName = 'stack_route_prj7';
        issueNumber = 2;
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/issues/';
        fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": this.authorizationToken
                },
                body: JSON.stringify(updateIssueJson)
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    addCollaborator(repoName, collaborator) {
        repoName = 'stack_route_prj7';
        collaborator = 'swat1508';
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/collaborators/' + collaborator;
        fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(function(response) {
            dom.toggleModals(response);
        })
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    removeCollaborator(repoName, collaborator) {
        repoName = 'stack_route_prj7';
        collaborator = 'swat1508';
        let url = 'https://api.github.com/repos/mohiit1502/' + repoName + '/collaborators/' + collaborator;
        fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.authorizationToken
                }
            }
        )
        .then(response => response.json())
        .catch(error => console.error('Fetch Error =\n', error)); 
    }

    createUser(newuserJson) {

    }

    updateUser(updateUserJson) {

    }

    deleteUser(userId) {

    }
}