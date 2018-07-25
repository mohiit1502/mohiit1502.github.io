const config = require('../config.js');

import * as domManipulator from './dom-ops.js';
const dom = new domManipulator.DomManipulator();

import * as persistent_Ops from './persistent-ops.js';
const persistentOps = new persistent_Ops.PersistentOps();


export class Github {
  constructor() {
    this.authorizationToken = `token ${config.gitToken}`;
  }

  getToken(code) {
    let token = '';
    self = this;
    $.getJSON(`https://micobot.herokuapp.com/authenticate/${code}`, (data) => {
      console.log(data.token);
      token = data.token;
      // set cookie here
      persistentOps.setCookie('gitToken', token, 30);
      // self.authorizationToken = "token " + persistentOps.getCookie('gitToken');
      dom.concealCodeInUrl();
    });
    return token;
  }

  getCurrentUser() {
    let repositories = '';
    const url = 'https://api.github.com/user/';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => {
        response.json().then((body) => {
          repositories = body;
          console.log(repositories);
          return repositories;
        });
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
    return repositories;
  }

  authenticate() {

  }

  viewRepositories() {
    const repositories = '';
    const url = 'https://api.github.com/user/repos';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
    })
      .then((response) => {
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
    const url = 'https://api.github.com/user/repos';
    const responsePromise = '';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(newRepoJson),
    })
      .then((response) => {
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  updateRepository(updateRepoJson, repoName) {
    repoName = 'Hello-World3';
    const url = `https://api.github.com/repos/mohiit1502/${repoName}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(updateRepoJson),
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  deleteRepository(repoName) {
    repoName = 'Hello-World2';
    const url = `https://api.github.com/repos/mohiit1502/${repoName}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  createIssue(newIssueJson, repoName) {
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(newIssueJson),
    })
      .then((response) => {
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  updateIssue(updateIssueJson, repoName, issueNumber) {
    repoName = 'stack_route_prj7';
    issueNumber = 2;
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueNumber}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(updateIssueJson),
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  closeIssue(closeIssueJson, repoName, issueNumber) {
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueNumber}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(closeIssueJson),
    })
      .then((response) => {
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  reopenIssue(reopenIssueJson, repoName, issueNumber) {
    repoName = 'stack_route_prj7';
    issueNumber = 2;
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueNumber}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(reopenIssueJson),
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  displayIssue(repoName, issueNumber) {
    repoName = 'stack_route_prj7';
    issueNumber = 2;
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueNumber}`;
    let issues = '';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
    })
      .then((response) => {
        response.json().then((body) => {
          issues = body;
          console.log(issues);
          return issues;
        });
      })
      .catch(error => console.error('Fetch Error =\n', error));
    return issues;
  }

  addIssueComment(commentBodyJson, repoName, issueId) {
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueId}/comments`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(commentBodyJson),
    })
      .then((response) => {
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  displayLastComment(repoName, issueNumber) {
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/${issueNumber}/comments`;
    const comments = [];
    const latestComment = '';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
    })
      .then((response) => {
        dom.toggleModals(response);
        // response.json().then(function(body){
        //     comments = body;
        //     latestComment = githubHelper.getLatestComment(comments);
        //     console.log(comments);
        //     console.log(latestComment);
        // });
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  displayIssuesForUser() {
    const url = 'https://api.github.com/user/issues';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  displayIssuesOnRepo() {
    repoName = 'stack_route_prj7';
    issueNumber = 2;
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/issues/`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.authorizationToken,
      },
      body: JSON.stringify(updateIssueJson),
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  addCollaborator(repoName, collaborator) {
    repoName = 'stack_route_prj7';
    collaborator = 'swat1508';
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/collaborators/${collaborator}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authorizationToken,
      },
    })
      .then((response) => {
        dom.toggleModals(response);
      })
      .catch(error => console.error('Fetch Error =\n', error));
  }

  removeCollaborator(repoName, collaborator) {
    repoName = 'stack_route_prj7';
    collaborator = 'swat1508';
    const url = `https://api.github.com/repos/mohiit1502/${repoName}/collaborators/${collaborator}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authorizationToken,
      },
    })
      .then(response => response.json())
      .catch(error => console.error('Fetch Error =\n', error));
  }

  createUser(newuserJson) {

  }

  updateUser(updateUserJson) {

  }

  deleteUser(userId) {

  }
};
