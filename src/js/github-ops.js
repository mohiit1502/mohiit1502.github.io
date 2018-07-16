module.exports = class Github {

    getToken() {

    }

    createRepository(newRepoJson) {
        $.ajax({
            type: "POST",
            headers: {'Authorization' : 'token bcce9020b0604acc8a535d6d0e026b04b4996432'},
            url: "https://api.github.com/user/repos",
            contentType: "application/json",
            dataType: "jsonp",
            data: newRepoJson
        })
    }

    updateRepository(updateRepoJson) {

    }

    deleteRepositoy(repoId) {

    }

    createIssue(newIssueJson) {

    }

    updateIssue(updateIssueJson) {

    }

    deleteIssue(issueId) {
        
    }

    closeIssue(issueId) {

    }

    createUser(newuserJson) {

    }

    updateUser(updateUserJson) {

    }

    deleteUser(userId) {
        
    }

    addCollaborator(userId, collaboratorId) {

    }

    removeCollaborator(userId, collaboratorId) {

    }
}