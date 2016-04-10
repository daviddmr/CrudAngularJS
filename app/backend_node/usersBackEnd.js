var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var users = [
    {"id": "1", "firstName":"David","lastName":"Melo","birthday":"1988-04-11T03:00:00.000Z","address":"Rua Ministro", "addressComplement":"Apt 601","district":"Guararapes","telephone":"8531236431","mobilePhone":"85991728463", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "2", "firstName":"Brunno","lastName":"Conrado","birthday":"1987-09-09T03:00:00.000Z","address":"Rua Eduardo", "addressComplement":"","district":"Meireles","telephone":"853264214","mobilePhone":"85995317654", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "3", "firstName":"Mário","lastName":"Soares","birthday":"1987-12-13T03:00:00.000Z","address":"Rua Ellery", "addressComplement":"Apt 1302","district":"Aerolandia","telephone":"8532134421","mobilePhone":"85991236875", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "4", "firstName":"Sérgio","lastName":"Teófilo","birthday":"1987-12-13T03:00:00.000Z","address":"Rua Ministro Ellery", "addressComplement":"","district":"Jardim Secreto","telephone":"8532735216","mobilePhone":"85991236864", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "5", "firstName":"Bruno","lastName":"Pinheiro","birthday":"1987-04-11T03:00:00.000Z","address":"Rua Eduardo Ellery", "addressComplement":"","district":"Vila Sátiro","telephone":"8532841246","mobilePhone":"85991357367", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "6", "firstName":"Priscila","lastName":"Almeida","birthday":"1989-09-28T03:00:00.000Z","address":"Rua Ministro Eduard", "addressComplement":"","district":"Bom Jardim","telephone":"8532135753","mobilePhone":"85998741235", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "7", "firstName":"Wania","lastName":"Melo","birthday":"1960-04-11T03:00:00.000Z","address":"Avenida Bezerra de Menezes", "addressComplement":"Apt 01","district":"Parquelândia","telephone":"85321234843","mobilePhone":"85991236975", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "8", "firstName":"Carlos","lastName":"Augusto","birthday":"1955-04-11T03:00:00.000Z","address":"Avenida Washington Soares", "addressComplement":"","district":"Água Fria","telephone":"8532123155","mobilePhone":"85991235775", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "9", "firstName":"Michelle","lastName":"Melo","birthday":"1983-08-24T03:00:00.000Z","address":"Avenida Meireles", "addressComplement":"","district":"Messejana","telephone":"8532174246","mobilePhone":"85991376423", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"},
    {"id": "10", "firstName":"Tiago","lastName":"Chaves","birthday":"1986-12-10T03:00:00.000Z","address":"Rua Suécia", "addressComplement":"Apt 1301","district":"Meireles","telephone":"8532864123","mobilePhone":"85996532986", "rg":"62341674412312","cpf":"52214641231","state":"CE","city":"Fortaleza","postCode":"60810010"}
];

app.listen(process.env.PORT || 3412, function() {
    console.log("The server is online");
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/users', function(req, res) {
    res.json(users);
});

app.post('/contatos', function(req, res) {
    users.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});
