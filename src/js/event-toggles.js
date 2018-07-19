const Recast = require('./bot/recast-ops.js');
const recastclient = new Recast();
const DomManipulator = require('./dom-ops.js');
const dom = new DomManipulator();
const Microbot = require('./microbot-ops.js');
const app = new Microbot();


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
    $('#command').keyup(function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code == 13) {
            $('widgets').children().hide();
            var command = document.getElementById('command').value;
            if(command) {
                var text = { "text": command};
                recastclient.getAndCallProcessIntent(command, text);
            } else {
                dom.showEmptyCommandMessage();
            }
        }
    });
    $('#submitGitData').on('click', function() {
        var requestJSON = dom.getDataFromFormAsJSON();
        app.createRepository(requestJSON);
    })

    $('#submitForm').click(function(e) {
        e.preventDefault();
    });
});