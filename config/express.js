// varieveis globais para não ser criadas o tempo todo quando for carregado a funcao do module.export
var express = require('express');
var load = require("express-load");
var loadParser = require("body-parser");

module.exports = function () {
    var app = express();
 
  
    app.use(express.static('./public'));
    app.use(loadParser.urlencoded({ extended: true }));
    app.use(loadParser.json());

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);
    return app;
}
