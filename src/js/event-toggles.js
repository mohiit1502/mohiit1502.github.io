const Recast = require('./bot/recast-ops.js');
const recastclient = new Recast();
const DomManipulator = require('./dom-ops.js');
const dom = new DomManipulator();
const Microbot = require('./microbot-ops.js');
const app = new Microbot();
const $config = require('./config.js');


module.exports = $(document).ready(function () {
    // console.log('test');
    app.setToken();
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.hideable').toggleClass('hide');
    });
    $('#content nav div.collapse li a.nav-link i.far.fa-star').hover(function () {
        $('#content nav div.collapse li a.nav-link i.far.fa-star').toggleClass('fas');
    });
    $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').hover(function () {
        $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').toggleClass('fas');
    });
    $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').hover(function () {
        $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').toggleClass('fas');
    });
    $('#command').keyup(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            $('#widgets').children().addClass('hide');
            $('#successAlert').addClass('hide');
            $('#dangetAlert').addClass('hide');
            $('#intentBox').addClass('hide');
            var command = document.getElementById('command').value;
            if (command) {
                var text = { "text": command };
                recastclient.getAndCallProcessIntent(command, text);
            } else {
                dom.showEmptyCommandMessage();
            }
        }
    });
    $('#btnSubmitConfirm').on('click', function () {
        $('#submitConfirm').removeClass('hide');
    });
    $('#submitGitData').on('click', function () {
        var data = dom.getDataFromFormAsJSON();
        var intent = $('#' + $config.costants.hiddenIntentFieldId).val();
        if (intent) {
            var operation = $config.intentSlugToOperations[intent]['githubOperation'];
            app[operation](data);
        }
    });
    $("#hideInfoAlert").on('click', function () {
        $('#intentBox').addClass('hide');
    })
    $("#hideSuccessAlert").on('click', function () {
        $('#successAlert').addClass('hide');
    });
    $('#conversations').on('click', '.close', function () {
        var $target = $(this).closest('.card');
        var line = $target.next();
        $target.hide('slow', function () { $target.remove(); });
        line.hide('slow', function () { line.remove(); });
    });
    $("#hideDangerAlert").on('click', function () {
        $('#dangerAlert').addClass('hide');
    });
    $('#git_bridge').on('click', function() {
        window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
        // var user = app.getCurrentUser();
        // if(user) {
        //     window.location.href = './../continue.html'
        // } else {
        //     window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
        // }
    })
    if(window.location.href.match(/\?code=(.*)/) ) {
        var code = window.location.href.match(/\?code=(.*)/)[1];
        app.getToken(code);
    }
});