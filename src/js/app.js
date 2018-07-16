import './../styles/scss/base.scss';
import './../styles/css/base.css';
import { parseWebDriverCommand } from '../../node_modules/blocking-proxy/built/lib/webdriver_commands';

const Microbot = require("./microbot-ops.js");
const app = new Microbot();
document.write('<h1>' + app.createRepository() + '</h1>');

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

// window.onload = function() {
//     var code = getUrlParameter('code');
//     console.log(code)
//     if(code !== undefined) {
//         var result = $.ajax({
//             type: "POST",
//             url: 'https://github.com/login/oauth/access_token',
//             data: {
//                 client_id: app.clientId,
//                 client_secret: app.clientSecret,
//                 code: code
//             }
//         });
//        // alert(JSON.stringify(result));
//     }
//     //access_token = JSON.parse(result)['access_token']
//     return code;
// };
