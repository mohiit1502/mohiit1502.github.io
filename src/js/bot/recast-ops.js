const config = require('./config.js');
const Microbot = require("./../microbot-ops.js");
const app = new Microbot();
const DomManipulator = require('./../dom-ops.js');
const domManipulator = new DomManipulator();

module.exports = class Recast {
    constructor() {
        this.recastToken = config.recasttoken;
        this.requestUrl = "https://api.recast.ai/v2/request";
    }

    getAndCallProcessIntent(command, text) {
        self = this;
        var url = this.requestUrl + "?text=" + command;
        var bodyRelevant = '';
        var intent = '';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Token " + this.recastToken
            },
            data: text
        })
        .then(function(response) { 
            response.json().then(function(body) {
                bodyRelevant = body.results;
                intent = bodyRelevant.intents[0]["slug"];
                if(intent !== undefined) {
                    domManipulator.showWidget(intent);
                    domManipulator.populateRecastData(intent, bodyRelevant);
                  //  self.processIntent(intent);
                }
                return intent;
            });
        })
        .catch(function(error) { 
            console.error('Fetch Error =\n', error);
        });
    };

    processIntent(intent) {
        switch(intent) {
            case "createrepo":
                app.createRepository();
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
}