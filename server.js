let http = require('http');
let url = require('url');
let static = require('node-static');
let file = new static.Server('.', {
    cache: 0
});

function accept(req, res) {
    if (req.url == './books.json') {
        setTimeout(function() {
            file.serve(req, res);
        }, 2000);
    } else {
        file.serve(req, res);
    }
}

if (!module.parent) {
    http.createServer(accept).listen(8080);
    console.log("Server running at http://localhost:8080");

} else {
    exports.accept = accept;
}