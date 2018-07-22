const Recast = require('./bot/recast-ops.js');
const recastclient = new Recast();
const DomManipulator = require('./dom-ops.js');
const dom = new DomManipulator();
const Microbot = require('./microbot-ops.js');
const app = new Microbot();
const $config = require('./config.js');


module.exports = $(document).ready(function () {
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
                dom.addGitOperationHistory(command, 'command');
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
    $('.close').click(function () {
        var $target = $(this).closest('.card');
        $target.hide('slow', function () { $target.remove(); });
    });
    $("#hideDangerAlert").on('click', function () {
        $('#dangerAlert').addClass('hide');
    });

    var urlParam = getUrlParameter('code');
    app.getToken(urlParam);

});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};