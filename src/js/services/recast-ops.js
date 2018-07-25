import * as PersistentOps from './persistent-ops';
const store = PersistentOps.store;
const $config = require('../config');
import * as domManipulator from './dom-ops';
const dom = new domManipulator.DomManipulator();

const $actions = $config.actions;

export class Recast {
    constructor() {
        this.recastToken = $config.recasttoken;
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
                $('#' + $config.costants.hiddenIntentFieldId).val(intent)
                if(intent !== undefined) {
                    dom.displayIntentBox(intent);
                    if(intent == 'resethistory') {
                        store.dispatch($actions.action_clear_history);
                        return;
                    }
                    dom.showWidget(intent);
                    dom.populateRecastData(intent, bodyRelevant);
                    store.dispatch($actions.action_add_query);
                }
                return intent;
            });
        })
        .catch(function(error) { 
            console.error('Fetch Error =\n', error);
        });
    };
}