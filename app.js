// e dessa maneira teremos importado o express que estara dentro do nossa pasta config, invocando o funcao do exporte dentro da var app
var app = require('./config/express')();

//  criada var para referenciasr as rota de lista de protudos, passado o a var app que sera carregada no seu module.exports
var routes = require('./app/routes/crud')(app);

app.listen(3000,function() {
    console.log("servidor rodando com sucesso!");
});