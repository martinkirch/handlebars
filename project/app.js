var kanso = require('kanso');


exports.rewrites = [
    {from: '/', to: '_show/welcome'}
];

exports.shows = {
    welcome: function (doc, req, client) {
        return kanso.template('welcome.html');
    }
};
