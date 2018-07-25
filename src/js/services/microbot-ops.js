import * as githubOps from './github-ops.js';
const $github = new githubOps.Github();

import * as persistent_Ops from './persistent-ops.js';
const persistentOps = new persistent_Ops.PersistentOps();

export class Microbot {
  constructor(clientId, clientSecret) {
    // TODO move to config or env variables
    this.clientId = 'f6f649a1fe2dfea082ba';
    this.clientSecret = '7e9a33d05ffdb36b4a498140bb9bb06d62de4f0e';
  }

  getToken(code) {
    $github.getToken(code);
  }

  setToken() {
    $github.authorizationToken = `token ${persistentOps.getCookie('gitToken')}`;
  }

  getCurrentUser() {
    $github.getCurrentUser();
  }

  viewRepositories() {
    return $github.viewRepositories();
  }

  createRepository(requestData) {
    const requestJson = requestData.request;
    $github.createRepository(requestJson);
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
      name: 'Hello-World4',
      description: 'This is your test description',
      homepage: 'https://github.com',
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
    });
  }

  deleteRepository() {
    $github.deleteRepository();
  }

  createIssue(requestData) {
    const requestJson = requestData.request;
    const repoName = requestData.urlParams.repoName;
    $github.createIssue(requestJson, repoName);
  }

  updateIssue() {
    $github.updateIssue({
      title: 'Found a bug - title updated',
      body: 'This is the updated problem description.',
      assignees: [
        'mohiit1502',
      ],
      milestone: 1,
      state: 'open',
      labels: [
        'bug', 'issue',
      ],
    });
  }

  closeIssue(requestData) {
    const repoName = requestData.urlParams.repoName;
    const issueId = requestData.urlParams.issueId;
    $github.closeIssue({
      state: 'close',
    }, repoName, issueId);
  }

  displayIssue() {
    return $github.displayIssue();
  }

  reopenIssue() {
    $github.reopenIssue({
      milestone: 1,
      state: 'open',
    });
  }

  addIssueComment(requestData) {
    const requestJson = requestData.request;
    const repoName = requestData.urlParams.repoName;
    const issueId = requestData.urlParams.issueId;
    $github.addIssueComment(requestJson, repoName, issueId);
  }

  displayLastComment(requestData) {
    const repoName = requestData.urlParams.repoName;
    const issueId = requestData.urlParams.issueId;
    return $github.displayLastComment(repoName, issueId);
  }

  addCollaborator(requestData) {
    const repoName = requestData.urlParams.repoName;
    const collaborator = requestData.urlParams.collaborator;
    $github.addCollaborator(repoName, collaborator);
  }

  removeCollaborator() {
    $github.removeCollaborator();
  }

  callAppropriate(intent) {

  }
};
