var express = require('express');
var router = express.Router();
var Contrato = require("../controllers/contrato");

router.get('/contratos', function(req, res, next) {
  if(req.query.entidade){
    const ent = req.query.entidade;
    Contrato.findByEntidade(ent)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
    return;
  } else if (req.query.tipo){
    const tip = req.query.tipo;
    Contrato.findByTipo(tip)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
    return;
  } else {
    Contrato.list()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  }
});

router.get('/contratos/entidades', function(req, res, next) {
    Contrato.entidades()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipos', function(req, res, next) {
    Contrato.tipos()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});


router.get('/contratos/:id', function(req, res, next) {
    Contrato.findById(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.post('/contratos', function(req, res, next) {
    Contrato.inserir(req.body)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.delete('/contratos/:id', function(req, res, next) {
    Contrato.remove(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.put('/contratos/:id', function(req, res, next) {
    Contrato.update(req.params.id, req.body)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

module.exports = router;
