const $config = require('./config.js');
const GithubHelper = require('./helper.js');

const githubHelper = new GithubHelper();

module.exports = class DomManipulator {
  constructor() {
    this.createRepoWidgetCreated = false;
    this.commandCardCounter = 1;
  }

  showWidget(intent) {
    // var intent = $('#' + $config.costants.hiddenIntentFieldId).val();
    const widget = this.createRepoWidget(intent);
    if (!this.isVisible(widget)) {
      widget.classList.remove('hide');
      $('#underWidgetLine').removeClass('hide');
    }
  }

  displayIntentBox(intent) {
    const intentBox = document.getElementById('intentBox');
    if (!this.isVisible(intentBox)) {
      intentBox.classList.remove('hide');
    }
    $('#intentName').text(`${$config.intentSlugToOperations[intent].intentMessage} [slug: ${intent}].`);
  }

  createRepoWidget(intent) {
    const existingWidget = document.getElementById(intent);
    if (existingWidget) {
      return existingWidget;
    }

    // Create Elements
    const widgets = document.getElementById('widgets');
    const createRepoWidget = document.createElement('div');
    const cardBody = document.createElement('div');
    const header = document.createElement('div');
    const form = document.createElement('form');

    const formRow1 = document.createElement('div');
    const formGroup1_1 = document.createElement('div');
    const repoNamelabel = document.createElement('label');
    const repoNameTextField = document.createElement('input');
    const formGroup1_2 = document.createElement('div');
    const homePageURLLabel = document.createElement('label');
    const homePageURLTextField = document.createElement('input');

    const formRow2 = document.createElement('div');
    const formGroup2_1 = document.createElement('div');
    const formCheck1 = document.createElement('div');
    const privateLabel = document.createElement('label');
    const privateCB = document.createElement('input');
    const formGroup2_2 = document.createElement('div');
    const formCheck2 = document.createElement('div');
    const addIssueLabel = document.createElement('label');
    const addIssueCB = document.createElement('input');
    const formGroup2_3 = document.createElement('div');
    const formCheck3 = document.createElement('div');
    const addWikiLabel = document.createElement('label');
    const addWikiCB = document.createElement('input');

    const formGroup3_1 = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    const descriptionTextArea = document.createElement('textarea');

    const submitRepoCreate = document.createElement('button');

    // Add Attributes
    widgets.classList.add('card-group');
    createRepoWidget.setAttribute('id', 'createrepo');
    createRepoWidget.classList.add('card', 'hide', 'widget', 'good');
    cardBody.classList.add('card-body');
    header.classList.add('card-title');

    formRow1.classList.add('form-row');
    formGroup1_1.classList.add('form-group', 'col-md-6', 'col-sm-6', 'col-lg-6', 'col-xs-6', 'mb-3');
    repoNamelabel.setAttribute('for', 'repositoryName');
    repoNameTextField.setAttribute('type', 'text');
    repoNameTextField.setAttribute('id', 'repositoryName');
    repoNameTextField.setAttribute('placeholder', 'Repository Name... ');
    repoNameTextField.required = true;
    repoNameTextField.classList.add('form-control');
    formGroup1_2.classList.add('form-group', 'col-md-6', 'col-sm-6', 'col-lg-6', 'col-xs-6', 'mb-3');
    homePageURLLabel.setAttribute('for', 'homePageURL');
    homePageURLTextField.setAttribute('type', 'text');
    homePageURLTextField.setAttribute('id', 'homePageURL');
    homePageURLTextField.setAttribute('placeholder', 'Home Page URL... ');
    homePageURLTextField.classList.add('form-control');

    formRow2.classList.add('form-row');
    formGroup2_1.classList.add('form-group', 'col-md-3', 'col-sm-3', 'col-lg-3', 'col-xs-3', 'mb-3');
    formCheck1.classList.add('form-check', 'form-check-inline');
    privateLabel.setAttribute('for', 'privateRepoChk');
    privateLabel.classList.add('form-check-label');
    privateCB.setAttribute('type', 'checkbox');
    privateCB.setAttribute('id', 'privateRepoChk');
    privateCB.setAttribute('value', 'Option 1');
    privateCB.classList.add('form-check-input');

    formGroup2_2.classList.add('form-group', 'col-md-4', 'col-sm-4', 'col-lg-4', 'col-xs-4', 'mb-3');
    formCheck2.classList.add('form-check', 'form-check-inline');
    addIssueLabel.setAttribute('for', 'issuesChk');
    addIssueLabel.classList.add('form-check-label');
    addIssueCB.setAttribute('type', 'checkbox');
    addIssueCB.setAttribute('id', 'issuesChk');
    addIssueCB.setAttribute('value', 'Option 2');
    addIssueCB.classList.add('form-check-input');

    formGroup2_3.classList.add('form-group', 'col-md-4', 'col-sm-4', 'col-lg-4', 'col-xs-4', 'mb-3');
    formCheck3.classList.add('form-check', 'form-check-inline');
    addWikiLabel.setAttribute('for', 'wikiChk');
    addWikiLabel.classList.add('form-check-label');
    addWikiCB.setAttribute('type', 'checkbox');
    addWikiCB.setAttribute('id', 'wikiChk');
    addWikiCB.setAttribute('value', 'Option 3');
    addWikiCB.classList.add('form-check-input');

    formGroup3_1.classList.add('form-group');
    descriptionLabel.setAttribute('for', 'description');
    descriptionTextArea.setAttribute('rows', '3');
    descriptionTextArea.classList.add('form-control');
    descriptionTextArea.setAttribute('id', 'description');

    submitRepoCreate.setAttribute('type', 'button');
    submitRepoCreate.setAttribute('data-toggle', 'modal');
    submitRepoCreate.setAttribute('data-target', '#submitConfirm');
    submitRepoCreate.setAttribute('id', 'submitForm');
    submitRepoCreate.classList.add('btn', 'btn-primary');

    // Add inner HTML
    header.innerHTML = 'Create Repository';
    repoNamelabel.innerHTML = 'Repository Name';
    homePageURLLabel.innerHTML = 'Home Page URL';
    privateLabel.innerHTML = 'Private';
    addIssueLabel.innerHTML = 'Allow Adding Issues?';
    addWikiLabel.innerHTML = 'Add Wiki?';
    descriptionLabel.innerHTML = 'Add some Description for this repository:';
    submitRepoCreate.innerHTML = 'Submit';

    // Associations
    formCheck1.appendChild(privateCB);
    formCheck1.appendChild(privateLabel);

    formCheck2.appendChild(addIssueCB);
    formCheck2.appendChild(addIssueLabel);

    formCheck3.appendChild(addWikiCB);
    formCheck3.appendChild(addWikiLabel);

    formGroup1_1.appendChild(repoNamelabel);
    formGroup1_1.appendChild(repoNameTextField);

    formGroup1_2.appendChild(homePageURLLabel);
    formGroup1_2.appendChild(homePageURLTextField);

    formGroup2_1.appendChild(formCheck1);
    formGroup2_2.appendChild(formCheck2);
    formGroup2_3.appendChild(formCheck3);

    formGroup3_1.appendChild(descriptionLabel);
    formGroup3_1.appendChild(descriptionTextArea);

    formRow1.appendChild(formGroup1_1);
    formRow1.appendChild(formGroup1_2);

    formRow2.appendChild(formGroup2_1);
    formRow2.appendChild(formGroup2_2);
    formRow2.appendChild(formGroup2_3);

    form.appendChild(formRow1);
    form.appendChild(formRow2);
    form.appendChild(formGroup3_1);
    form.appendChild(submitRepoCreate);

    cardBody.appendChild(header);
    cardBody.appendChild(form);

    createRepoWidget.appendChild(cardBody);
    widgets.appendChild(createRepoWidget);
    $('#createrepo').insertBefore($('#underWidgetLine'));

    this.createRepoWidgetCreated = true;

    return createRepoWidget;
  }

  showEmptyCommandMessage() {
    $('#emptyCommandMsgDisplayer').click();
  }

  populateWidgetWithGithubResponse() {

  }

  populateRecastData(widgetName, recastResponse) {
    // var requestMethod = $config.intentSlugToOperations[widgetName]['requestMethod'];
    const operation = $config.intentSlugToOperations[widgetName].populateDataOperation;
    if (typeof this[operation] === 'function') {
      this[operation](recastResponse);
    }
  }

  populateCreateRepoData(recastResponse) {
    const repoNameTextField = document.getElementById('repositoryName');
    if (repoNameTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoName = recastResponse.entities['git-repository']['0'].value;
      repoNameTextField.value = repoName;
    }
  }

  populateCreateIssueData(recastResponse) {
    const issueTitleTextField = document.getElementById('issueTitle');
    const issueRepositoryTextField = document.getElementById('issueRepository');
    if (issueTitleTextField && recastResponse && recastResponse.entities.issue_title && recastResponse.entities.issue_title.length > 0
                && recastResponse.entities.issue_title['0'].value) {
      const issueTitle = recastResponse.entities.issue_title['0'].value;
      issueTitleTextField.value = issueTitle;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoName = recastResponse.entities['git-repository']['0'].value;
      issueRepositoryTextField.value = repoName;
    }
  }

  populateCloseIssueData(recastResponse) {
    const issueNumberTextField = document.getElementById('issueNumerToClose');
    const issueRepositoryTextField = document.getElementById('repoForIssueClose');
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
                && recastResponse.entities.issue_id['0'].value) {
      const issueNumber = recastResponse.entities.issue_id['0'].value;
      issueNumberTextField.value = issueNumber;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoName = recastResponse.entities['git-repository']['0'].value;
      issueRepositoryTextField.value = repoName;
    }
  }

  populateAddCollaboratorData(recastResponse) {
    const collaboratorNameTextField = document.getElementById('collaboratorName');
    const repoForCollabTextField = document.getElementById('repoForCollab');
    if (collaboratorNameTextField && recastResponse && recastResponse.entities.git_collaborator && recastResponse.entities.git_collaborator.length > 0
                && recastResponse.entities.git_collaborator['0'].value) {
      const collaboratorName = recastResponse.entities.git_collaborator['0'].value;
      collaboratorNameTextField.value = collaboratorName;
    }
    if (repoForCollabTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoName = recastResponse.entities['git-repository']['0'].value;
      repoForCollabTextField.value = repoName;
    }
  }

  populateAddCommentData(recastResponse) {
    const repoForIssueCommentTextField = document.getElementById('repoForIssueComment');
    const issueNumberTextField = document.getElementById('issueNumber');
    const issueCommentTextArea = document.getElementById('issueComment');
    if (repoForIssueCommentTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoForIssueComment = recastResponse.entities['git-repository']['0'].value;
      repoForIssueCommentTextField.value = repoForIssueComment;
    }
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
                && recastResponse.entities.issue_id['0'].value) {
      const issueNumber = recastResponse.entities.issue_id['0'].value;
      issueNumberTextField.value = issueNumber;
    }
    if (issueCommentTextArea && recastResponse && recastResponse.entities.issue_comment && recastResponse.entities.issue_comment.length > 0
                && recastResponse.entities.issue_comment['0'].value) {
      const issueComment = recastResponse.entities.issue_comment['0'].value;
      issueCommentTextArea.value = issueComment;
    }
  }

  populateDisplayCommentData(recastResponse) {
    const issueNumberTextField = document.getElementById('issueNumberForCommentView');
    const issueRepositoryTextField = document.getElementById('repoForCommentView');
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
                && recastResponse.entities.issue_id['0'].value) {
      const issueNumber = recastResponse.entities.issue_id['0'].value;
      issueNumberTextField.value = issueNumber;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0
                && recastResponse.entities['git-repository']['0'].value) {
      const repoName = recastResponse.entities['git-repository']['0'].value;
      issueRepositoryTextField.value = repoName;
    }
  }

  isVisible(element) {
    return element ? !element.classList.contains('hide') : false;
  }

  getDataFromFormAsJSON() {
    let data = {};
    const intent = $(`#${$config.costants.hiddenIntentFieldId}`).val();
    const requestMethod = $config.intentSlugToOperations[intent].requestMethod;
    if (intent) {
      const operation = $config.intentSlugToOperations[intent].getDataOperation;
      if (typeof this[operation] === 'function') {
        data = this[operation]();
      }
    }
    return data;
  }

  getCreateRepoJson() {
    const data = {};
    const request = {};
    if (this.isVisible(document.getElementById('createrepo'))) {
      request.name = document.getElementById('repositoryName').value;
      request.description = document.getElementById('description').value;
      request.homepage = document.getElementById('homePageURL').value;
      request.private = document.getElementById('privateRepoChk').checked;
      request.has_issues = document.getElementById('issuesChk').checked;
      request.has_wiki = document.getElementById('wikiChk').checked;
    }
    data.request = request;
    return data;
  }

  getCreateIssueJson() {
    const data = {};
    data.urlParams = {};
    const request = {};
    if (this.isVisible(document.getElementById('createissue'))) {
      request.title = document.getElementById('issueTitle').value;
      request.body = document.getElementById('description').value;
      request.assignees = document.getElementById('assignees').value ? document.getElementById('assignees').value.split(',') : [];
      request.labels = document.getElementById('labels').value ? document.getElementById('labels').value.split(',') : [];
      data.urlParams.repoName = document.getElementById('issueRepository').value;
    }
    data.request = request;
    return data;
  }

  getCloseIssueJson() {
    const data = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById('closeissue'))) {
      data.urlParams.issueId = document.getElementById('issueNumerToClose').value;
      data.urlParams.repoName = document.getElementById('repoForIssueClose').value;
    }
    return data;
  }

  getAddCollaboratorJson() {
    const data = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById('addcollab'))) {
      data.urlParams.collaborator = document.getElementById('collaboratorName').value;
      data.urlParams.repoName = document.getElementById('repoForCollab').value;
    }
    return data;
  }

  getAddCommentJson() {
    const data = {};
    data.urlParams = {};
    const request = {};
    if (this.isVisible(document.getElementById('addissuecomment'))) {
      request.body = document.getElementById('issueComment').value;
      data.urlParams.issueId = document.getElementById('issueNumber').value;
      data.urlParams.repoName = document.getElementById('repoForIssueComment').value;
    }
    data.request = request;
    return data;
  }

  getDisplayCommentJson() {
    const data = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById('displaylastcomment'))) {
      data.urlParams.issueId = document.getElementById('issueNumberForCommentView').value;
      data.urlParams.repoName = document.getElementById('repoForCommentView').value;
    }
    return data;
  }

  addGitOperationHistory(data, type) {
    const intent = $(`#${$config.costants.hiddenIntentFieldId}`).val();
    const requestMethod = $config.intentSlugToOperations[intent].requestMethod;
    const conversations = document.getElementById('conversations');
    let table;
    let comment;
    // Create Elements
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const closeAnchor = document.createElement('a');
    const closeHeader = document.createElement('h6');
    const cardText = document.createElement('p');
    const cardFooter = document.createElement('div');
    const textMuted = document.createElement('small');
    const underCardLine = document.createElement('div');


    // Add Attributes
    card.classList.add('card', type);
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    closeAnchor.classList.add('close');
    // closeAnchor.setAttribute('href', '#');
    cardText.classList.add('card-text');
    cardFooter.classList.add('card-footer');
    textMuted.classList.add('text-muted');
    underCardLine.classList.add('line');

    // Add content
    closeHeader.innerHTML = 'x';

    const x = this.display_ct(0, textMuted);
    if (type === 'command') {
      // Add content
      cardTitle.innerHTML = 'You Said';
      cardText.innerHTML = data;
      const repeat = document.createElement('a');
      repeat.classList.add('btn', 'btn-info', 'float-right');
      repeat.setAttribute('role', 'button');
      repeat.setAttribute('href', '#');
      repeat.setAttribute('id', `btnRepeatCommand${this.commandCardCounter++}`);
      repeat.innerHTML = 'Repeat';
      cardText.appendChild(repeat);
    } else if (type === 'response') {
      // Add content
      cardTitle.innerHTML = 'Server Responded As..';
      if (requestMethod == 'post') {
        cardText.innerHTML = `${$config.intentSlugToOperations[intent].cardMsg}<a class='repoLink' href='${data[$config.intentSlugToOperations[intent].cardDataUrl]}'>${this.getVariable(data, $config.intentSlugToOperations[intent].cardDataName)}</a>`;
      } else if (requestMethod == 'get') {
        cardText.innerHTML = $config.intentSlugToOperations[intent].cardMsg;
        if (data && data.length && data.length > 0) {
          if (intent === 'viewrepos') {
            table = this.createRepoTable(data);
          } else if (intent === 'displaylastcomment') {
            comment = this.createCommentBody(data);
          }
        }
      }
    } else {
      cardTitle.innerHTML = 'Server Responded As..';
      cardText.innerHTML = `Operation failed with status: ${type}`;
    }

    // Associations
    closeAnchor.appendChild(closeHeader);
    cardTitle.appendChild(closeAnchor);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    if (comment) { cardBody.appendChild(comment); }
    cardFooter.appendChild(textMuted);
    card.appendChild(cardBody);
    if (table) { card.appendChild(table); }
    card.appendChild(cardFooter);

    conversations.insertBefore(underCardLine, conversations.firstChild);
    conversations.insertBefore(card, conversations.firstChild);
  }

  getVariable(data, commaSeparatedValue) {
    const arr = commaSeparatedValue.split(',');
    for (let i = 0; i < arr.length; i++) {
      data = data[arr[i]];
    }
    return data;
  }

  createRepoTable(data) {
    // Create Elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr_head = document.createElement('tr');
    const th_1 = document.createElement('th');
    const th_2 = document.createElement('th');
    const th_3 = document.createElement('th');
    const th_4 = document.createElement('th');
    const th_5 = document.createElement('th');
    const th_6 = document.createElement('th');
    const th_7 = document.createElement('th');

    // Add Attributes
    table.classList.add('table', 'tabled-bordered', 'table-striped', 'table-hover');
    thead.classList.add('thead-dark');
    th_1.setAttribute('scope', 'col');
    th_2.setAttribute('scope', 'col');
    th_3.setAttribute('scope', 'col');
    th_4.setAttribute('scope', 'col');
    th_5.setAttribute('scope', 'col');
    th_6.setAttribute('scope', 'col');
    th_7.setAttribute('scope', 'col');

    // Add Inner HTML
    th_1.innerHTML = '#';
    th_2.innerHTML = 'Repository Name';
    th_3.innerHTML = 'Repository ID';
    th_4.innerHTML = 'Created On';
    th_5.innerHTML = 'Created By';
    th_6.innerHTML = 'View Raw';
    th_7.innerHTML = 'Delete Repository';

    // Associations
    tr_head.appendChild(th_1);
    tr_head.appendChild(th_2);
    tr_head.appendChild(th_3);
    tr_head.appendChild(th_4);
    tr_head.appendChild(th_5);
    tr_head.appendChild(th_6);
    tr_head.appendChild(th_7);
    thead.appendChild(tr_head);
    table.appendChild(thead);


    for (let i = 0; i < data.length; i++) {
      const currentRepo = data[i];
      // Create Elements
      const tbody = document.createElement('tbody');
      const tr_body = document.createElement('tr');
      const th_vertical = document.createElement('th');
      const td_1 = document.createElement('td');
      const td_2 = document.createElement('td');
      const td_3 = document.createElement('td');
      const td_4 = document.createElement('td');
      const td_5 = document.createElement('td');
      const td_6 = document.createElement('td');

      // Add Attributes
      th_vertical.setAttribute('scope', 'row');
      tr_body.setAttribute('id', `repoRow${i}`);

      // Add Inner HTML
      th_vertical.innerHTML = i + 1;
      td_1.innerHTML = currentRepo.name;
      td_2.innerHTML = `<a href='${currentRepo.html_url}' class='repoLink'>${currentRepo.id}</a>`;
      td_3.innerHTML = currentRepo.created_at;
      td_4.innerHTML = `<a href='${currentRepo.owner.html_url}' class='btn btn-info'>${currentRepo.owner.login}</a>`;
      td_5.innerHTML = `<a href='${currentRepo.url}' class='btn btn-info'>View</a>`;
      td_6.innerHTML = `<a href='${currentRepo.owner.html_url}' class='btn btn-danger'>Delete</a>`;

      // Associations
      tr_body.appendChild(th_vertical);
      tr_body.appendChild(td_1);
      tr_body.appendChild(td_2);
      tr_body.appendChild(td_3);
      tr_body.appendChild(td_4);
      tr_body.appendChild(td_5);
      tr_body.appendChild(td_6);
      tbody.appendChild(tr_body);
      table.appendChild(tbody);
    }

    return table;
  }

  createCommentBody(data) {
    const commentPara = document.createElement('p');
    const lastComment = githubHelper.getLatestComment(data);
    commentPara.classList.add('card-text');
    commentPara.innerHTML = `<strong style='color:black'>COMMENT:</strong> <i>${lastComment}</i>`;
    return commentPara;
  }

  concealCodeInUrl() {
    window.location = 'http://localhost:8080';
  }

  toggleModals(response) {
    const self = this;
    const promise = response.json();
    const intent = $(`#${$config.costants.hiddenIntentFieldId}`).val();
    $('#submitConfirm').addClass('hide');
    $('#btnCancelConfirm').click();
    $('.modal-backdrop').removeClass('modal-backdrop');
    $('#underWidgetLine').addClass('hide');
    $('#intentBox').addClass('hide');
    if (response && response.status && (response.status === 201 || response.status === 200 || response.status === 204)) {
      $('#successAlert').removeClass('hide');
      $('#widgets').children().addClass('hide');
      promise.then((body) => {
        $('#op-msg').text($config.intentSlugToOperations[intent].successMessage);
        $('#successAlert').removeClass('hide');
        self.addGitOperationHistory(body, 'response');
        // clear intent
        $(`#${$config.costants.hiddenIntentFieldId}`).val('');
      });
    } else {
      $('#widgets').children().addClass('hide');
      $('#dangerAlert').removeClass('hide');
      self.addGitOperationHistory(response.status);
      // clear intent
      $(`#${$config.costants.hiddenIntentFieldId}`).val('');
    }
  }

  display_ct(start, element) {
    this.start = start;
    this.element = element;
    const days = Math.floor(this.start / 86400);
    const hours = Math.floor((this.start - (days * 86400)) / 3600);
    const minutes = Math.floor((this.start - (days * 86400) - (hours * 3600)) / 60);
    const secs = Math.floor((this.start - (days * 86400) - (hours * 3600) - (minutes * 60)));
    let x = '';
    if (days != 0) {
      x = `${x + days} days`;
    }
    if (hours != 0) {
      x = `${x + hours} hours`;
    }
    if (minutes != 0) {
      x = `${x + minutes} minutes`;
    }
    x = `${x + secs} seconds ago`;
    element.innerHTML = x;
    this.start = this.start + 1;
    // setTimeout(this['display_ct](this.start, this.element)', 1000 )
  }
};
