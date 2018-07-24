const Recast = require('./bot/recast-ops.js');

const recastclient = new Recast();
const DomManipulator = require('./dom-ops.js');

const dom = new DomManipulator();
const Microbot = require('./microbot-ops.js');

const app = new Microbot();
const $config = require('./config.js');


module.exports = $(document).ready(() => {
  // console.log('test');
  app.setToken();
  $('#sidebarCollapse').on('click', () => {
    $('#sidebar').toggleClass('active');
    $('.hideable').toggleClass('hide');
  });
  $('#content nav div.collapse li a.nav-link i.far.fa-star').hover(() => {
    $('#content nav div.collapse li a.nav-link i.far.fa-star').toggleClass('fas');
  });
  $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').hover(() => {
    $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').toggleClass('fas');
  });
  $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').hover(() => {
    $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').toggleClass('fas');
  });
  $('#command').keyup((e) => {
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('#widgets').children().addClass('hide');
      $('#successAlert').addClass('hide');
      $('#dangetAlert').addClass('hide');
      $('#intentBox').addClass('hide');
      const command = document.getElementById('command').value;
      if (command) {
        const text = { text: command };
        recastclient.getAndCallProcessIntent(command, text);
      } else {
        dom.showEmptyCommandMessage();
      }
    }
  });
  $('#btnSubmitConfirm').on('click', () => {
    $('#submitConfirm').removeClass('hide');
  });
  $('#submitGitData').on('click', () => {
    const data = dom.getDataFromFormAsJSON();
    const intent = $(`#${$config.costants.hiddenIntentFieldId}`).val();
    if (intent) {
      const operation = $config.intentSlugToOperations[intent].githubOperation;
      app[operation](data);
    }
  });
  $('#hideInfoAlert').on('click', () => {
    $('#intentBox').addClass('hide');
  });
  $('#hideSuccessAlert').on('click', () => {
    $('#successAlert').addClass('hide');
  });
  $('#conversations').on('click', '.close', function () {
    const $target = $(this).closest('.card');
    const line = $target.next();
    $target.hide('slow', () => { $target.remove(); });
    line.hide('slow', () => { line.remove(); });
  });
  $('#hideDangerAlert').on('click', () => {
    $('#dangerAlert').addClass('hide');
  });
  $('#git_bridge').on('click', () => {
    window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
    // var user = app.getCurrentUser();
    // if(user) {
    //     window.location.href = './../continue.html'
    // } else {
    //     window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
    // }
  });
  if (window.location.href.match(/\?code=(.*)/)) {
    const code = window.location.href.match(/\?code=(.*)/)[1];
    app.getToken(code);
  }
});
