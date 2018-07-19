const Github = require('./github-ops.js');
const $github = new Github()

module.exports = class Microbot {

    constructor(clientId, clientSecret) {
        // TODO move to config or env variables
        this.clientId = 'f6f649a1fe2dfea082ba';
        this.clientSecret = '7e9a33d05ffdb36b4a498140bb9bb06d62de4f0e';
    }

    viewRepositories() {
        return $github.viewRepositories();
    }

    createRepository(requestJson) {
        var promise = $github.createRepository(requestJson);
        // $github.createRepository({
        //     "name": "new-test-js-git-api-repo",
        //     "description": "This is your first repository",
        //     "homepage": "https://github.com",
        //     "private": false,
        //     "has_issues": true,
        //     "has_wiki": true
        // })
    }

    updateRepository(repoName, repoType) {
        $github.authenticate();
        $github.updateRepository({
            "name": "Hello-World4",
            "description": "This is your test description",
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": true
        })
    }

    deleteRepository() {
        $github.deleteRepository();
    }

    createIssue() {
        $github.createIssue({
            "title": "Found a bug",
            "body": "I'm having a problem with this.",
            "assignees": [
                "mohiit1502"
            ],
            "labels": [
                "bug"
            ]
        })
    }

    updateIssue() {
        $github.updateIssue({
            "title": "Found a bug - title updated",
            "body": "This is the updated problem description.",
            "assignees": [
                "mohiit1502"
            ],
            "milestone": 1,
            "state": "open",
            "labels": [
                "bug", "issue"
            ]
        });
    }

    closeIssue() {
        $github.closeIssue({
            "milestone": 1,
            "state": "close",
        });
    }

    displayIssue() {
        return $github.displayIssue();
    }

    reopenIssue() {
        $github.reopenIssue({
            "milestone": 1,
            "state": "open",
        })
    }

    addIssueComment() {
        $github.addIssueComment({
            "body": "This is another test issue comment"
        });
    }

    displayLastComment() {
        return $github.displayLastComment();
    }

    addCollaborator() {
        $github.addCollaborator({
            "title": "Found a bug",
            "body": "I'm having a problem with this.",
            "assignees": [
                "mohiit1502"
            ],
            "labels": [
                "bug"
            ]
        });
    }

    removeCollaborator() {
        $github.removeCollaborator();
    }
}