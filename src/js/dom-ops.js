module.exports = class DomManipulator {

    constructor() {
        this.createRepoWidgetCreated = false;
    }
    showWidget(widgetName) {
        self = this;
        switch(widgetName) {
            case "createrepo":
                self.showCreateRepoWidget();
                break;
            case "updaterepo":
                app.updateRepository();
                break;
            case "viewrepos":
                app.viewRepositories();
                break;
            case "deleterepo":
                app.deleteRepository();
                break;
            case "createissue":
                self.showCreateIssueWidget();
                break;  
            case "updateissue":
                app.updateIssue();
                break;
            case "closeissue":
                app.closeIssue();
                break;
            case "reopenissue":
                app.reopenIssue();
                break;
            case "displayissue":
                app.displayIssue();
                break;
            case "addissuecomment":
                app.addIssueComment();
                break;
            case "displaylastcomment":
                app.displayLastComment();
                break;
            case "addcollab":
                app.addCollaborator();
                break;
            case "removecollab":
                app.removeCollaborator();
                break;
            default:
                console.log("default");
        }
    }

    showCreateRepoWidget() {
        var createRepoWidget = self.createRepoWidget();
        if(!this.isVisible(createRepoWidget)) {
            createRepoWidget.classList.remove('hide');
        }    
    }

    showCreateIssueWidget() {
        var createIssueWidget = document.getElementById('createissue');
        if(!this.isVisible(createIssueWidget)) {
            createIssueWidget.classList.remove('hide');
        }    
    }

    createRepoWidget() {
        var existingWidget = document.getElementById('createrepo')
        if(existingWidget) {
            return existingWidget;
        }

        // Create Elements
        var widgets = document.getElementById("widgets");
        var createRepoWidget = document.createElement('div');
        var cardBody = document.createElement('div');
        var header = document.createElement('div');
        var form = document.createElement('form');

        var formRow1 = document.createElement('div');
        var formGroup1_1 = document.createElement('div');
        var repoNamelabel = document.createElement('label');
        var repoNameTextField = document.createElement('input');
        var formGroup1_2 = document.createElement('div');
        var homePageURLLabel = document.createElement('label');
        var homePageURLTextField = document.createElement('input');

        var formRow2 = document.createElement('div');
        var formGroup2_1 = document.createElement('div');
        var formCheck1 = document.createElement('div');
        var privateLabel = document.createElement('label');
        var privateCB = document.createElement('input');
        var formGroup2_2 = document.createElement('div');
        var formCheck2 = document.createElement('div');
        var addIssueLabel = document.createElement('label');
        var addIssueCB = document.createElement('input');
        var formGroup2_3 = document.createElement('div');
        var formCheck3 = document.createElement('div');
        var addWikiLabel = document.createElement('label');
        var addWikiCB = document.createElement('input');

        var formGroup3_1 = document.createElement('div');
        var descriptionLabel = document.createElement('label');
        var descriptionTextArea = document.createElement('textarea');

        var submitRepoCreate = document.createElement('button')

        var line = document.createElement('div');

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
        formCheck1.classList.add('form-check', 'form-check-inline')
        privateLabel.setAttribute('for', 'privateRepoChk');
        privateLabel.classList.add('form-check-label');
        privateCB.setAttribute('type', 'checkbox');
        privateCB.setAttribute('id', 'privateRepoChk');
        privateCB.setAttribute('value', 'Option 1');
        privateCB.classList.add('form-check-input');
        
        formGroup2_2.classList.add('form-group', 'col-md-4', 'col-sm-4', 'col-lg-4', 'col-xs-4', 'mb-3');
        formCheck2.classList.add('form-check', 'form-check-inline')
        addIssueLabel.setAttribute('for', 'issuesChk');
        addIssueLabel.classList.add('form-check-label');
        addIssueCB.setAttribute('type', 'checkbox');
        addIssueCB.setAttribute('id', 'issuesChk');
        addIssueCB.setAttribute('value', 'Option 2');
        addIssueCB.classList.add('form-check-input');
        
        formGroup2_3.classList.add('form-group', 'col-md-4', 'col-sm-4', 'col-lg-4', 'col-xs-4', 'mb-3');
        formCheck3.classList.add('form-check', 'form-check-inline')
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

        line.classList.add('line');
        line.setAttribute('id', 'underWidgetLine');

        // Add inner HTML
        header.innerHTML = "Create Repository";
        repoNamelabel.innerHTML = "Repository Name";
        homePageURLLabel.innerHTML = "Home Page URL";
        privateLabel.innerHTML = "Private";
        addIssueLabel.innerHTML = "Allow Adding Issues?";
        addWikiLabel.innerHTML = "Add Wiki?";
        descriptionLabel.innerHTML = "Add some Description for this repository:";
        submitRepoCreate.innerHTML = "Submit";

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
        
        widgets.appendChild(createRepoWidget);
        createRepoWidget.appendChild(cardBody);

        widgets.appendChild(line);

        this.createRepoWidgetCreated = true;

        return createRepoWidget;
    }

    showEmptyCommandMessage() {
        $('#emptyCommandMsgDisplayer').click();
    }

    populateWidgetWithRecastResponse() {

    }

    populateWidgetWithGithubResponse() {

    }

    populateRecastData(widgetName, recastResponse) {
        switch(widgetName) {
            case "createrepo":
                self.populateCreateRepoData(recastResponse);
                break;
            case "updaterepo":
                app.updateRepository();
                break;
            case "viewrepos":
                app.viewRepositories();
                break;
            case "deleterepo":
                app.deleteRepository();
                break;
            case "createissue":
                app.createIssue();
                break;
            case "updateissue":
                app.updateIssue();
                break;
            case "closeissue":
                app.closeIssue();
                break;
            case "reopenissue":
                app.reopenIssue();
                break;
            case "displayissue":
                app.displayIssue();
                break;
            case "addissuecomment":
                app.addIssueComment();
                break;
            case "displaylastcomment":
                app.displayLastComment();
                break;
            case "addcollab":
                app.addCollaborator();
                break;
            case "removecollab":
                app.removeCollaborator();
                break;
            default:
                console.log("default");
        }
    }

    populateCreateRepoData(recastResponse) {
        var repoNameTextField = document.getElementById('repositoryName');
        if(repoNameTextField && recastResponse && recastResponse.entities['git-repository'] && recastResponse.entities['git-repository'].length > 0 
                && recastResponse.entities['git-repository']['0']['value']) {
            var repoName = recastResponse.entities['git-repository']['0']['value'];
            repoNameTextField.value = repoName;
        }
    }

    isVisible(element) {
        return element ? !element.classList.contains('hide') : false;
    }

    getDataFromFormAsJSON() {
        var request = {};
        if(this.isVisible(document.getElementById("createrepo"))) {
            request.name = document.getElementById("repositoryName").value;
            request.description = document.getElementById("description").value;
            request.homepage = document.getElementById("homePageURL").value;
            request.private = document.getElementById("privateRepoChk").checked;
            request.has_issues = document.getElementById("issuesChk").checked;
            request.has_wiki = document.getElementById("wikiChk").checked;
        }
        return request;
    }

    addGitOperationHistory(response) {

    }

    toggleModals(response) {
        var promise = response.json();
        $('#submitConfirm').hide();
        $('.modal-backdrop').removeClass('modal-backdrop');
        $('#underWidgetLine').hide();
        if(response && response.status && response.status === 201) {
            $('#successAlert').show();
            $('#createrepo').hide();
        }
        promise.then(function(body) {
            addGitOperationHistory(body);
        })
    }
}